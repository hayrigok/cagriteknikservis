import ilcelerRaw from '@/data/ilceler.json';
import hizmetlerRaw from '@/data/hizmetler.json';
import firmaRaw from '@/data/firma.json';
import type { Firma, Hizmet, IkonAdi, Ilce } from './types';

export const firma = firmaRaw as Firma;

/**
 * Hizmet slug'ı → ikon. Sayfada fotoğraf olmadığı için her hizmetin görsel
 * kimliği bu silüetten geliyor. Yeni hizmet eklenirse buraya da satır eklenir;
 * eşleşme yoksa genel "arac" ikonuna düşer.
 */
const IKONLAR: Record<string, IkonAdi> = {
  'klima-servisi': 'klima',
  'klima-bakimi': 'klima',
  'klima-gaz-dolumu': 'klima',
  'klima-montaji': 'klima',
  'camasir-makinesi-tamiri': 'camasir',
  'bulasik-makinesi-tamiri': 'bulasik',
  'buzdolabi-tamiri': 'buzdolabi',
  'kurutma-makinesi-tamiri': 'kurutma',
  'firin-ocak-tamiri': 'firin',
  'televizyon-tamiri': 'televizyon',
  'kombi-bakim-onarim': 'kombi',
};

export function hizmetIkonu(slug: string): IkonAdi {
  return IKONLAR[slug] ?? 'arac';
}

const ilceler = ilcelerRaw as Ilce[];
const hizmetler = hizmetlerRaw as Hizmet[];

/** yerelNotlar için asgari uzunluk. Altındaki ilçe sayfa üretmez. */
export const MIN_YEREL_NOT = 200;

/** Doldurulmamış alanları yakalamak için. */
const PLACEHOLDER = /\{PLACEHOLDER/;

// getStaticPaths birden fazla rota tarafından çağrıldığı için aynı uyarıyı
// tekrar basmamak adına bir kez raporlarız.
let raporlandi = false;

function gecerliMi(ilce: Ilce): boolean {
  if (!ilce.aktif) return false;
  const uzunluk = ilce.yerelNotlar.trim().length;
  if (uzunluk < MIN_YEREL_NOT) return false;
  if (PLACEHOLDER.test(ilce.yerelNotlar)) return false;
  return true;
}

function atlamaNedeni(ilce: Ilce): string | null {
  if (!ilce.aktif) return 'aktif:false';
  const uzunluk = ilce.yerelNotlar.trim().length;
  if (uzunluk < MIN_YEREL_NOT) {
    return `yerelNotlar ${uzunluk} karakter, en az ${MIN_YEREL_NOT} olmalı`;
  }
  if (PLACEHOLDER.test(ilce.yerelNotlar)) {
    return 'yerelNotlar hâlâ {PLACEHOLDER} içeriyor';
  }
  return null;
}

function rapor(): void {
  if (raporlandi) return;
  raporlandi = true;
  ilceKapisiRaporu();
  eksikVeriRaporu();
}

function ilceKapisiRaporu(): void {
  const atlanan = ilceler
    .map((i) => ({ ilce: i, neden: atlamaNedeni(i) }))
    .filter((x): x is { ilce: Ilce; neden: string } => x.neden !== null);

  if (atlanan.length === 0) return;

  console.warn(
    `\n[ilce-kapisi] ${atlanan.length}/${ilceler.length} ilçe için sayfa ÜRETİLMEDİ.\n` +
      `  Neden: içi boş şablon sayfalar Google tarafından doorway page sayılır ve\n` +
      `  ceza tek sayfaya değil tüm siteye işler. yerelNotlar doldurulunca açılacaklar.`
  );
  for (const { ilce, neden } of atlanan) {
    console.warn(`  - ${ilce.slug.padEnd(12)} ${neden}`);
  }
  console.warn('');
}

/**
 * Doldurulmamış alanların build raporu.
 *
 * Ziyaretçi hiçbir sayfada "{PLACEHOLDER}" görmediği için eksikler görünmez
 * hale geliyor. Görünmez eksik = unutulan eksik, o yüzden hepsi burada
 * tek listede basılır. Bu rapor kapının yerine geçmez, ona ek gelir.
 */
function eksikVeriRaporu(): void {
  const satirlar: string[] = [];
  const kontrol = (etiket: string, v: string): void => {
    if (!deger(v)) satirlar.push(etiket);
  };

  /*
    KÜNYE YAYIMLANMAYACAK — sahibinin kararı, 29.07.2026.

    unvan / adres / eposta / vergiDairesi / vergiNo bilerek boş. Beş ayrı satır
    olarak raporlanmıyor, çünkü asla dolmayacak alanı her build'de saymak raporu
    gürültüye çevirir ve gürültülü rapor okunmaz olur (aynı gerekçe fiyat
    satırlarında ve ulasimDk'de de uygulandı).

    Ama fiyattan farklı olarak bu bir POLİTİKA DEĞİL, KABUL EDİLMİŞ RİSK: KVKK
    m.10 aydınlatma metninde veri sorumlusunun kimliğini zorunlu tutuyor, Başvuru
    Tebliği m.5 de yazılı bir başvuru kanalı istiyor (telefon geçerli kanal
    değil). İkisi de karşılanmıyor. Bu yüzden satır rapordan tamamen silinmedi,
    tek satıra indirildi — sahibi kararı değiştirirse ne açılacağını görsün.

    Karar geri alınırsa KOD DEĞİŞMEZ: firma.json'a değer girilince footer
    künyesi, KVKK veri sorumlusu kutusu ve şemadaki address/email/vatID
    kendiliğinden açılır. En ucuz çıkış yolu tek bir e-posta adresidir; adres
    veya vergi bilgisi açıklamadan yazılı başvuru kanalını tek başına karşılar.
  */
  const kunye = [firma.unvan, firma.adres, firma.eposta, firma.vergiDairesi, firma.vergiNo];
  if (kunye.every((v) => !deger(v))) {
    satirlar.push('firma künyesi          → KARAR: yayımlanmıyor (29.07.2026). KVKK kimlik + başvuru kanalı eksik, kabul edilmiş risk');
  } else {
    kontrol('firma.unvan            → KVKK ZORUNLU: veri sorumlusu kimliği + footer künyesi', firma.unvan);
    kontrol('firma.adres            → footer künyesi + şema adresi basılmıyor', firma.adres);
    if (!deger(firma.adres) && !deger(firma.eposta)) {
      satirlar.push('firma.eposta           → KVKK ZORUNLU: adres de boş, geçerli başvuru kanalı YOK');
    }
    kontrol('firma.vergiDairesi     → footer künyesi eksik (KVKK için zorunlu değil)', firma.vergiDairesi);
    kontrol('firma.vergiNo          → footer künyesi eksik (KVKK için zorunlu değil)', firma.vergiNo);
  }
  kontrol('firma.googleIsletmeUrl → yorumlar bloğu hiç basılmıyor', firma.googleIsletmeUrl);
  /*
    Yükleyici hazır (B3). İki kimlikten HERHANGİ biri dolunca gtag.js onay
    sonrası yüklenmeye başlar; ikisi de boşken dış istek sıfır kalır. Tek satır
    raporlanıyor çünkü ikisi de aynı işin (A7) parçası.
  */
  if (!deger(firma.gaOlcumKimligi) && !deger(firma.adsKimligi)) {
    satirlar.push('firma.gaOlcumKimligi   → ölçümleme kapalı: gtag.js yüklenmiyor, dış istek sıfır (adsKimligi de boş)');
  } else {
    kontrol('firma.gaOlcumKimligi   → GA4 yok, yalnızca Ads dönüşümü ölçülüyor', firma.gaOlcumKimligi);
    kontrol('firma.adsKimligi       → Ads dönüşümü ölçülmüyor, yalnızca GA4 var', firma.adsKimligi);
  }
  /*
    firma.markalar 12.08.2026'da geri eklendi (A6 kararı sahibinin isteğiyle
    tersine çevrildi). Boşalırsa sessizce kaybolmasın: `{markalar}` taşıyan
    marka SSS'i 11 hizmette birden düşer, yani tek bir boş alan 55 sayfadan
    içerik siler. Raporlanacak kadar pahalı.
  */
  if (degerListesi(firma.markalar).length === 0) {
    satirlar.push('firma.markalar         → marka SSS\'i 11 hizmette birden basılmıyor (FAQPage şeması dahil)');
  }

  /*
    Fiyat YAYIMLAMAMAK bir karardır (28.07.2026), eksik veri değil: amaç aramayı
    başlatmak, tutar telefonda söyleniyor. Bu yüzden hepsi boşken rapora hiç
    girmez — her build'de asla dolmayacak 48 satır saymak raporu gürültüye
    çevirir, gürültülü rapor da okunmaz olur.

    Ama KISMEN dolu hâl gerçekten bozuktur: tablo basılır, kimi satırda rakam
    kimi satırda "—" görünür ve ziyaretçi bunu "fiyatı gizliyorlar" diye okur.
    Rapor yalnızca bu hâli bildirir.
  */
  const fiyatlar = hizmetler.flatMap((h) => h.fiyatAraligi);
  const bosFiyat = fiyatlar.filter((f) => f.altTl === null || f.ustTl === null).length;
  if (bosFiyat > 0 && bosFiyat < fiyatlar.length) {
    satirlar.push(
      `hizmetler.fiyatAraligi → ${bosFiyat}/${fiyatlar.length} satır boş, o satırlarda "—" basılıyor`
    );
  }

  for (const h of hizmetler) {
    for (const s of h.sss) {
      if (!deger(s.cevap)) satirlar.push(`sss gizlendi           → ${h.slug}: ${s.soru}`);
    }
  }

  /*
    MAHALLE ADLARI YAYIMLANMAYACAK — karar, 12.08.2026 (A2).

    Eskiden ilçe başına bir satır basılıyordu ve metni "mahalle kutusu
    basılmıyor" diyordu. İKİSİ DE ARTIK YANLIŞTI: (1) alan asla dolmayacak,
    yani her build'de 4 satır gürültü, (2) kutu artık BASILIYOR —
    `firma.mahalleKapsami` cümlesine düşüyor ("Bütün mahalle ve semtler").

    Yanlış rapor, gürültülü rapordan daha zararlıdır: okuyan kişiyi olmayan
    bir eksiği kovalamaya gönderir. Bu yüzden dört satır tek satıra indirildi
    (A4 künye satırındaki kalıbın aynısı) ve rapordan tamamen silinmedi ki
    karar geri alınırsa nerenin açılacağı görünsün.
  */
  const aktifIlceler = ilceler.filter((x) => x.aktif);
  const adliMahalle = aktifIlceler.filter((i) => degerListesi(i.mahalleler).length > 0).length;
  if (adliMahalle === 0) {
    satirlar.push(
      `ilceler.*.mahalleler   → KARAR: mahalle ADI yayımlanmıyor (12.08.2026). Kutu ${deger(firma.mahalleKapsami) ? 'firma.mahalleKapsami cümlesiyle basılıyor' : 'HİÇ BASILMIYOR — kapsam cümlesi de boş'}`
    );
  } else if (adliMahalle < aktifIlceler.length) {
    satirlar.push(
      `ilceler.*.mahalleler   → ${adliMahalle}/${aktifIlceler.length} ilçede ad listesi var, kalanı kapsam cümlesine düşüyor`
    );
  }
  for (const i of aktifIlceler) {
    if (!(i.ulasimDk > 0)) {
      satirlar.push(`ilceler.${i.slug}.ulasimDk   → ulaşım süresi kutusu basılmıyor`);
    }
  }

  if (satirlar.length === 0) return;

  console.warn(
    `\n[eksik-veri] ${satirlar.length} alan doldurulmadı.\n` +
      `  Bu alanlar sayfaya BASILMIYOR — ziyaretçi iskele metni görmez, ilgili öğe\n` +
      `  tamamen gizlenir. Uydurma değer yazmayın; sahibinden gelince kendiliğinden açılır.`
  );
  for (const s of satirlar) console.warn(`  - ${s}`);
  console.warn('');
}

/*
  ÖLÇÜM KİMLİĞİ KAPISI

  Kimlikler firma.json'a ELLE yapıştırılıyor ve yanlış yapıştırma SESSİZCE
  başarısız olur: gtag.js yine de yüklenir (~90 KB), hiçbir şey ölçmez, sahibi
  de çalıştığını sanır. Reklam parası bu sırada akmaya devam eder — sitedeki en
  pahalı sessiz hata sınıfı bu.

  Bu yüzden biçim doğrulanıyor ve geçersiz kimlik EKRANA BASILMIYOR. Böylece
  bozuk bir kimlik yüzünden boşuna 90 KB indirilmiyor; {PLACEHOLDER}
  sözleşmesinin aynısı: doğrulanmamış değer basılmaz, eksik rapora gider.

  Build KIRILMIYOR, yüksek sesle uyarıyor — bir harf hatası yüzünden yayın
  engellenmesi, uyarıyı görüp düzeltmekten daha zararlı olurdu.

  En sık yapılan üç hata da yakalanıyor: kod parçasının tamamını yapıştırmak,
  GA4 yerine eski UA-… kimliğini vermek, AW- yerine ölçüm etiketini vermek.
*/
const GA_BICIM = /^G-[A-Z0-9]{6,15}$/;
const ADS_BICIM = /^AW-\d{9,12}$/;

let kimlikRaporlandi = false;

export function olcumKimlikleri(): { ga: string | null; ads: string | null } {
  const ham = { ga: deger(firma.gaOlcumKimligi), ads: deger(firma.adsKimligi) };
  const sonuc = {
    ga: ham.ga && GA_BICIM.test(ham.ga) ? ham.ga : null,
    ads: ham.ads && ADS_BICIM.test(ham.ads) ? ham.ads : null,
  };

  if (!kimlikRaporlandi) {
    kimlikRaporlandi = true;
    const hatalar: string[] = [];
    if (ham.ga && !sonuc.ga) {
      hatalar.push(
        `  - gaOlcumKimligi = "${ham.ga}"\n` +
          `    Beklenen biçim: G-XXXXXXXXXX (GA4). Eski "UA-..." kimlikleri artık\n` +
          `    çalışmıyor. Yalnızca kimliği yapıştırın, kod parçasının tamamını değil.`
      );
    }
    if (ham.ads && !sonuc.ads) {
      hatalar.push(
        `  - adsKimligi = "${ham.ads}"\n` +
          `    Beklenen biçim: AW-123456789 (9-12 rakam). Dönüşüm ETİKETİ değil,\n` +
          `    dönüşüm KİMLİĞİ. Etiket "AW-123/AbCd..." biçimindeki eğik çizgiden\n` +
          `    sonraki kısımdır ve buraya değil, C1'de dönüşüm tanımına girer.`
      );
    }
    if (hatalar.length > 0) {
      console.warn(
        `\n[olcum] ${hatalar.length} kimlik BİÇİMSİZ — sayfaya basılmıyor, ölçüm KAPALI.\n` +
          `  Bozuk kimlikle gtag.js yüklenseydi ~90 KB inip hiçbir şey ölçmezdi.`
      );
      for (const h of hatalar) console.warn(h);
      console.warn('');
    }
  }

  return sonuc;
}

/** Sayfa üretmeye uygun ilçeler. Uygun olmayanlar build sırasında raporlanır. */
export function gecerliIlceler(): Ilce[] {
  rapor();
  return ilceler.filter(gecerliMi);
}

/** Doğrulamadan geçmemiş olanlar dahil, tüm kayıtlar. Sadece raporlama için. */
export function tumIlceler(): Ilce[] {
  return ilceler;
}

/**
 * Hizmetin marka listesi: hizmete özgü liste varsa o, yoksa `firma.markalar`.
 * Hizmet verilmezse genel liste (ana sayfa, llms.txt). Bkz. Hizmet.markalar.
 */
export function hizmetMarkalari(h?: Pick<Hizmet, 'markalar'>): string[] {
  const ozel = degerListesi(h?.markalar);
  return ozel.length > 0 ? ozel : degerListesi(firma.markalar);
}

/**
 * SSS cevabına giren en fazla marka adedi. Marka şeridi listenin TAMAMINI
 * basar; cümle ise kısa kalır — 27 televizyon markasını tek cümlede saymak
 * okunmaz ve anahtar kelime doldurma görünümü verir. Genel liste (12) bu
 * sınırın içinde kaldığı için beyaz eşya sayfaları etkilenmez.
 */
const SSS_MARKA_ADEDI = 12;

/**
 * Marka adları, okunacak cümleye hazır: "Arçelik, Beko … ve Miele".
 * Liste boşsa null döner ve `{markalar}` taşıyan SSS hiç basılmaz —
 * {PLACEHOLDER} sözleşmesinin aynısı. `adet` verilirse ilk o kadarı girer.
 */
export function markaMetni(h?: Pick<Hizmet, 'markalar'>, adet?: number): string | null {
  const liste = hizmetMarkalari(h).slice(0, adet);
  if (liste.length === 0) return null;
  if (liste.length === 1) return liste[0] as string;
  return `${liste.slice(0, -1).join(', ')} ve ${liste[liste.length - 1]}`;
}

/*
  SSS BELİRTEÇ ÇÖZÜMÜ — tek noktada.

  `{markalar}` cevabın içine `firma.markalar`dan giriyor. Çözümün BURADA
  yapılmasının sebebi, aynı SSS listesinin iki ayrı yere gitmesi: ekrandaki
  <Sss> bileşenine ve JSON-LD'deki faqPage()'e. Sayfada çözülseydi biri
  atlandığında görünen metin ile yapılandırılmış veri AYRIŞIRDI — Google'a
  ekranda olmayan bir cevap bildirmek yapılandırılmış veri ihlalidir.

  Çözülemeyen belirteç (liste boş) cevabı doldurulmamış sayar: `deger()` null
  döner, soru hem sayfadan hem FAQPage şemasından düşer. Yani yarım cümle
  ("… dahil bütün markalarda") asla basılmaz.
*/
function sssCoz(h: Hizmet): Hizmet {
  if (!h.sss.some((s) => s.cevap.includes('{markalar}'))) return h;
  const m = markaMetni(h, SSS_MARKA_ADEDI);
  return {
    ...h,
    sss: h.sss.map((s) =>
      s.cevap.includes('{markalar}')
        ? { ...s, cevap: m ? s.cevap.replaceAll('{markalar}', m) : '' }
        : s
    ),
  };
}

const cozulmusHizmetler = hizmetler.map(sssCoz);

export function aktifHizmetler(): Hizmet[] {
  return cozulmusHizmetler.filter((h) => h.aktif);
}

export function hizmetBul(slug: string): Hizmet | undefined {
  return aktifHizmetler().find((h) => h.slug === slug);
}

/**
 * Bir ilçenin komşuları. Yetim sayfa bırakmamak için her para sayfası
 * hub'a ve buradan dönen ilçelere link verir.
 */
export function komsuIlceler(slug: string, adet = 3): Ilce[] {
  const gecerli = gecerliIlceler();
  const i = gecerli.findIndex((x) => x.slug === slug);
  if (i === -1) return gecerli.slice(0, adet);
  // Listeyi kendisinden sonra başlatıp döngüsel gezeriz: her ilçe farklı
  // komşulara link verir, tek yönlü yığılma olmaz.
  const sirali = [...gecerli.slice(i + 1), ...gecerli.slice(0, i)];
  return sirali.slice(0, adet);
}

export function h1Uret(hizmet: Hizmet, ilce: Ilce): string {
  return hizmet.h1Sablonu.replace('{ilce}', ilce.ad);
}

/** wa.me linki. Numara doldurulmamışsa boş bırakılır, buton devre dışı görünür. */
export function whatsappLink(mesaj: string): string | null {
  if (PLACEHOLDER.test(firma.whatsapp)) return null;
  const numara = firma.whatsapp.replace(/\D/g, '');
  return `https://wa.me/${numara}?text=${encodeURIComponent(mesaj)}`;
}

export function telLink(): string | null {
  if (PLACEHOLDER.test(firma.telefon)) return null;
  return `tel:${firma.telefon.replace(/\s/g, '')}`;
}

export function doldurulmusMu(v: string): boolean {
  return deger(v) !== null;
}

/**
 * Doldurulmuş değeri döndürür, doldurulmamışsa null.
 *
 * BİLEŞEN SÖZLEŞMESİ: null gelen öğe HİÇ BASILMAZ — ziyaretçiye "{PLACEHOLDER}"
 * gösterilmez, o satır/kutu/blok tamamen kaldırılır. Eksik veri sayfayı yarım
 * göstermek yerine sessizce küçültür. Eksikler ziyaretçiye değil, build
 * çıktısındaki [eksik-veri] raporuna gider.
 *
 * Bu, uydurma değer yazmanın gerekçesi DEĞİLDİR: alan boş kaldığı sürece
 * rapor her build'de basmaya devam eder.
 */
export function deger(v: string | null | undefined): string | null {
  if (typeof v !== 'string') return null;
  const t = v.trim();
  if (t === '' || PLACEHOLDER.test(t)) return null;
  return t;
}

/** Bir listedeki doldurulmuş öğeler. Hepsi boşsa boş dizi döner. */
export function degerListesi(liste: readonly string[] | null | undefined): string[] {
  if (!Array.isArray(liste)) return [];
  return liste.map((x) => deger(x)).filter((x): x is string => x !== null);
}
