import ilcelerRaw from '@/data/ilceler.json';
import hizmetlerRaw from '@/data/hizmetler.json';
import firmaRaw from '@/data/firma.json';
import type { Firma, Hizmet, Ilce } from './types';

export const firma = firmaRaw as Firma;

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

/** Sayfa üretmeye uygun ilçeler. Uygun olmayanlar build sırasında raporlanır. */
export function gecerliIlceler(): Ilce[] {
  rapor();
  return ilceler.filter(gecerliMi);
}

/** Doğrulamadan geçmemiş olanlar dahil, tüm kayıtlar. Sadece raporlama için. */
export function tumIlceler(): Ilce[] {
  return ilceler;
}

export function aktifHizmetler(): Hizmet[] {
  return hizmetler.filter((h) => h.aktif);
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

export function doldurulmusMu(deger: string): boolean {
  return !PLACEHOLDER.test(deger);
}
