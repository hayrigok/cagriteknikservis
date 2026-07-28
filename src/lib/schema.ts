import type { Hizmet, Ilce } from './types';
import { doldurulmusMu, firma, tumIlceler } from './veri';

// NOT: AggregateRating bilerek üretilmiyor. Google kendi sitesine gömülen
// yerel işletme puanlarını göstermiyor; uydurma puan ise ceza riski taşıyor.

function mutlak(site: URL, yol: string): string {
  return new URL(yol, site).href;
}

/** Doldurulmamış {PLACEHOLDER} alanları şemaya sokmayız. */
function temiz<T extends Record<string, unknown>>(nesne: T): T {
  const cikti: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(nesne)) {
    if (typeof v === 'string' && !doldurulmusMu(v)) continue;
    if (v === undefined || v === null) continue;
    cikti[k] = v;
  }
  return cikti as T;
}

/**
 * "Her gün 08:00–20:00" → schema.org OpeningHoursSpecification.
 *
 * `openingHours` özelliği "Mo-Su 08:00-20:00" biçimini bekler; insan için
 * yazılmış Türkçe metni oraya koymak biçimsel olarak GEÇERSİZ veri basmaktı.
 * Kalıp tutmazsa undefined döner ve alan şemaya hiç girmez — yanlış biçimli
 * veri basmaktansa hiç basmamak doğru (aynı ilke {PLACEHOLDER} sözleşmesinde).
 */
function calismaSaatiSemasi(metin: string) {
  if (!doldurulmusMu(metin)) return undefined;
  const kucuk = metin.toLocaleLowerCase('tr-TR');
  const saat = /(\d{1,2}:\d{2})\s*[–—-]\s*(\d{1,2}:\d{2})/.exec(kucuk);
  if (!saat || !kucuk.includes('her gün')) return undefined;
  return {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: saat[1],
    closes: saat[2],
  };
}

export function hvacBusiness(site: URL) {
  const bolgeler = tumIlceler()
    .filter((i) => i.aktif)
    .map((i) => ({
      '@type': 'AdministrativeArea',
      name: i.ad,
      containedInPlace: { '@type': 'City', name: i.sehir },
    }));

  return temiz({
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': mutlak(site, '/#isletme'),
    /*
      name kısaAd'dan gelir, unvan'dan DEĞİL: unvan {PLACEHOLDER} olduğu için
      temiz() onu siliyordu ve işletme şeması ADSIZ çıkıyordu — yerel işletme
      şemasının en temel alanı. Ticari ünvan geldiğinde legalName olarak ayrıca
      basılır; ikisi farklı şeydir.
    */
    name: firma.kisaAd,
    legalName: firma.unvan,
    telephone: firma.telefon,
    url: site.href,
    image: mutlak(site, '/og.png'),
    address: temiz({
      '@type': 'PostalAddress',
      streetAddress: firma.adres,
      addressLocality: firma.sehir,
      addressCountry: 'TR',
    }),
    areaServed: bolgeler.length > 0 ? bolgeler : undefined,
    openingHoursSpecification: calismaSaatiSemasi(firma.calismaSaatleri),
    sameAs: doldurulmusMu(firma.googleIsletmeUrl) ? [firma.googleIsletmeUrl] : undefined,
  });
}

/** Arıza rehberi yazısı. Tarih basmıyoruz — bkz. CLAUDE.md "Arıza rehberi". */
export function blogPosting(
  site: URL,
  yazi: { baslik: string; ozet: string },
  yol: string
) {
  return temiz({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: yazi.baslik,
    description: yazi.ozet,
    url: mutlak(site, yol),
    mainEntityOfPage: mutlak(site, yol),
    image: mutlak(site, '/og.png'),
    inLanguage: 'tr-TR',
    author: { '@type': 'Organization', name: firma.kisaAd },
    publisher: {
      '@type': 'Organization',
      name: firma.kisaAd,
      logo: { '@type': 'ImageObject', url: mutlak(site, '/og.png') },
    },
  });
}

/** Hizmet hub sayfası için şehir düzeyinde Service şeması. */
export function hubServiceSchema(site: URL, hizmet: Hizmet, sehir: string, yol: string) {
  return temiz({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${sehir} ${hizmet.ad}`,
    serviceType: hizmet.ad,
    description: hizmet.ozet,
    url: mutlak(site, yol),
    provider: { '@id': mutlak(site, '/#isletme') },
    areaServed: { '@type': 'City', name: sehir },
  });
}

export function serviceSchema(site: URL, hizmet: Hizmet, ilce: Ilce, yol: string) {
  return temiz({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${ilce.ad} ${hizmet.ad}`,
    serviceType: hizmet.ad,
    url: mutlak(site, yol),
    provider: { '@id': mutlak(site, '/#isletme') },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: ilce.ad,
      containedInPlace: { '@type': 'City', name: ilce.sehir },
    },
  });
}

export interface SssOgesi {
  soru: string;
  cevap: string;
  /** Cevabın altında liste olarak basılır. Şemaya da düz metin olarak girer. */
  maddeler?: { ad: string; detay: string }[];
}

/**
 * Şema tek bir düz metin ister; listeyi cevabın arkasına ekleriz.
 * Doldurulmamış maddeler atılır — Sss.astro da aynı filtreyi uyguluyor, yani
 * şemadaki metin sayfada görünenle birebir aynı kalır.
 */
function cevapMetni(s: SssOgesi): string {
  const maddeler = (s.maddeler ?? []).filter(
    (m) => doldurulmusMu(m.ad) && doldurulmusMu(m.detay)
  );
  if (maddeler.length === 0) return s.cevap;
  return `${s.cevap} ${maddeler.map((m) => `${m.ad}: ${m.detay}`).join(' ')}`;
}

export function faqPage(sorular: SssOgesi[]) {
  // Doldurulmamış cevaplar yapılandırılmış veriye girmemeli.
  const gecerli = sorular.filter((s) => doldurulmusMu(s.cevap));
  if (gecerli.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: gecerli.map((s) => ({
      '@type': 'Question',
      name: s.soru,
      acceptedAnswer: { '@type': 'Answer', text: cevapMetni(s) },
    })),
  };
}

export function breadcrumb(site: URL, ogeler: { ad: string; yol: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: ogeler.map((o, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: o.ad,
      item: mutlak(site, o.yol),
    })),
  };
}
