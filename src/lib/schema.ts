import type { Hizmet, Ilce } from './types';
import { doldurulmusMu, firma } from './veri';

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

export function hvacBusiness(site: URL) {
  return temiz({
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': mutlak(site, '/#isletme'),
    name: firma.unvan,
    telephone: firma.telefon,
    url: site.href,
    address: temiz({
      '@type': 'PostalAddress',
      streetAddress: firma.adres,
      addressLocality: firma.sehir,
      addressCountry: 'TR',
    }),
    openingHours: firma.calismaSaatleri,
    sameAs: doldurulmusMu(firma.googleIsletmeUrl) ? [firma.googleIsletmeUrl] : undefined,
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
