/*
  Arıza rehberi (blog) içerik koleksiyonu.

  Neden markdown + koleksiyon: yazılar uzun düzyazı; JSON içine gömmek hem
  yazmayı hem gözden geçirmeyi zorlaştırır. Astro'nun koleksiyon katmanı çekirdek
  içinde geliyor, ek paket kurulmadı (yasak 5).

  Şema burada zorunlu: alan eksik veya fazlaysa build KIRILIR. Para sayfalarında
  {PLACEHOLDER} sözleşmesi eksik veriyi sessizce gizliyor; blogda o davranış
  yanlış olurdu, çünkü özeti olmayan bir yazı meta açıklamasız yayına çıkar.
  Yazı ya tamdır ya yoktur.
*/
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const yazilar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/yazilar' }),
  schema: z.object({
    /**
     * H1 ve <title>. Aranan ifadeye yakın yazılır, süslenmez.
     * 60 sınırı şemada tutulur: blog başlıkları seo.ts'in title denetiminden
     * geçmiyor (oraya kalıp üzerinden değil doğrudan giriyor), o yüzden tek
     * bekçi burası. Aşarsa build kırılır — Google başlığı ortadan keser.
     */
    baslik: z.string().min(10).max(60),
    /** Meta açıklama + liste kartı özeti. 155 sınırı BaseLayout'ta değil burada tutulur. */
    ozet: z.string().min(40).max(155),
    /**
     * Yazının bağlandığı hizmet slug'ı — ikon ve yazı sonundaki para sayfası
     * linki buradan gelir. Tek cihaza bağlanmayan yazılarda (örn. "ne kadar
     * tutar") boş bırakılır; o zaman hizmet bloğu hiç basılmaz.
     */
    hizmet: z.string().optional(),
    /** Liste sıralaması. Küçük olan üstte; tarih basmıyoruz (bkz. blog/index.astro). */
    sira: z.number().int(),
  }),
});

export const collections = { yazilar };
