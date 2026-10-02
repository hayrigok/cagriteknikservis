# Gece Mavisi Görsel Yenileme — Uygulama Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Sitenin görünümünü onaylanan "A · Gece Mavisi" yönüne taşımak — canlı turuncu CTA, Plus Jakarta Sans, gölgeli kartlar, açık/kapalı çipi, kısalan mobil sayfa — dönüşüm yüzeylerine, metinlere, SEO'ya ve hız bütçesine dokunmadan.

**Architecture:** Astro 5 statik site, Tailwind 4 CSS-first. Renk/yazı/gölge/köşe kararları `src/styles/global.css` `@theme` bloğunda belirteç olarak tanımlanır, bileşenler yalnızca bu belirteçleri kullanır. Eski belirteçler (`turuncu-600`, `lacivert-600`, `plaka`) geçiş boyunca yaşar, son görevde silinir ve araması 0 olmalıdır. Açık/kapalı mantığı saf fonksiyonlar olarak `src/lib/acikDurum.ts`'te, `node --test` ile denetlenir.

**Tech Stack:** Astro 5.18 · Tailwind 4 (`@tailwindcss/vite`) · TypeScript strict · Node 24 (yerleşik test koşucusu ve tür ayıklama) · headless Chrome + CDP (doğrulama) · Python 3.12 (kontrast hesabı).

**Spec:** `docs/superpowers/specs/2026-10-02-gece-mavisi-tasarim-design.md`

## Global Constraints

- Blok sırası değişmez; metinler değişmez — istisnalar yalnızca spec §7'deki üç madde.
- Her sayfada `href="tel:` · `href="https://wa.me/` · `data-olay="tel_click"` · `data-olay="whatsapp_click"` · `id="f-ad"` · `<h1` · JSON-LD içeriği · `<title>` değişiklik öncesiyle **birebir aynı** (Görev 1'deki taban çizgisi).
- Yeni npm paketi yok, üçüncü taraf script yok, Google'a yazı tipi isteği yok (yasak 5, sıfır-dış-istek).
- Fotoğraf yok; slider/carousel/giriş animasyonu yok; hareket yalnızca renk ve gölge geçişi, 150 ms.
- Metin kontrastı ≥ 4.5:1 (büyük metin ≥ 3:1), form alanı kenarı ≥ 3:1 — hesapla doğrulanır.
- Dokunma hedefi ≥ 44 px.
- Turuncu (`turuncu-500`) yalnızca arama eyleminde (CTA dolgusu, "Ara", mobil bar, yan düğme) ve koyu zeminde küçük vurgu (`turuncu-300`); açık zeminde ikon/bağlantı rengi `kobalt-600`.
- Hız: LCP < 2,0 sn, CLS < 0,1, sayfa < 500 KB, JS gzip < 40 KB.
- Türkçe küçük harf: `toLocaleLowerCase('tr-TR')`.
- Push yalnızca sahibinin açık onayıyla; iş `tasarim/gece-mavisi` dalında yürür.

## Review Focus

1. **Gece / sabah sınırında açık/kapalı çipi** — 22:59'da "açığız", 23:00'te "kapalıyız"; ziyaretçinin telefonu başka saat diliminde olsa da Türkiye saati. → Görev 3 birim testleri + Görev 4 tarayıcı testi (sahte saatle dört durum).
2. **320 px telefonda çipin taşması / kayması** — çip sabit genişlikte, metin sonradan yazılınca hiçbir şey kaymamalı, yatay taşma olmamalı. → Görev 4 Adım 6 (genişlik ölçümü) + Görev 9 CLS ölçümü.
3. **Yazı tipi geç gelen yavaş 4G** — metin hemen görünmeli, font gelince sayfa kaymamalı. → Görev 2 metrik eşlemeli yedek + Görev 9 B8 ölçümü (CLS, LCP).
4. **Çerez kararı verilmemiş mobil ziyaretçi** — "Hemen Ara" alt çubuğu bant açıkken de görünmeli. → Görev 4 Adım 7 (bant ile çubuk çakışma ölçümü).
5. **Tailwind'in bilinmeyen sınıfı sessizce yutması** — silinen belirteç adı bir dosyada kalırsa renk sessizce kaybolur. → Görev 8 grep (0 sonuç) + Görev 9 ekran görüntüleri.

---

## Ortak değişkenler ve betikler

Bütün görevlerde kullanılan yol:

```bash
SP="C:/Users/expen/AppData/Local/Temp/claude/d--Projelerim-Cagriservis/83454c3c-ff6e-4d66-971c-7cb9093722fa/scratchpad"
PY="/c/Users/expen/AppData/Local/Programs/Python/Python312/python.exe"
export MSYS_NO_PATHCONV=1   # Git Bash "/" ile başlayan argümanları Windows yoluna çevirmesin
```

Doğrulama betikleri **repoya girmez**, `$SP` içinde durur (projenin teamülü: ölçüm betikleri scratchpad'de kalır). `$SP/shot.mjs` ve `$SP/kontrast.py` zaten var; diğerleri Görev 1'de yazılır.

Önizleme sunucusu: `npx astro preview --port 4400 --host 127.0.0.1` (arka planda). 4399 portunda bu işe ait olmayan başka bir node süreci var — **ona dokunma.** Her build'den sonra önizleme `dist/`'i yeniden okur, sunucuyu yeniden başlatmak gerekmez.

---

### Task 1: Dal, taban çizgisi ve doğrulama betikleri

**Files:**
- Create: `$SP/denetim.mjs`, `$SP/b8.mjs`, `$SP/taban.json`, `$SP/b8-taban.txt`

**Interfaces:**
- Produces: `node $SP/denetim.mjs <dist> <cikti.json> [karsilastir.json]` — karşılaştırmada fark yoksa çıkış kodu 0 ve `FARK YOK` satırı. `node $SP/b8.mjs <url> [tekrar]` — her satır `LCP/CLS/FCP/TTFB/aktarım`, geçersiz ölçüm `GEÇERSİZ` damgalı.

- [ ] **Step 1: Dal aç**

```bash
cd /d/Projelerim/Cagriservis && git switch -c tasarim/gece-mavisi && git status --short | head
```
Expected: `Switched to a new branch 'tasarim/gece-mavisi'`, çalışma ağacı temiz.

- [ ] **Step 2: Dönüşüm yüzeyi sayacı `$SP/denetim.mjs`**

```js
// dist/ altındaki her HTML sayfasında dönüşüm yüzeylerini ve SEO değişmezlerini sayar.
// Kullanım: node denetim.mjs <dist> <cikti.json> [karsilastir.json]
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash } from 'node:crypto';

const [, , dist, cikti, onceki] = process.argv;
const sayfalar = {};

function gez(dizin) {
  for (const ad of readdirSync(dizin)) {
    const yol = join(dizin, ad);
    if (statSync(yol).isDirectory()) gez(yol);
    else if (ad.endsWith('.html')) {
      const h = readFileSync(yol, 'utf8');
      const say = (r) => (h.match(r) || []).length;
      const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
        .map((m) => m[1])
        .join('|');
      sayfalar['/' + relative(dist, yol).replace(/\\/g, '/')] = {
        tel: say(/href="tel:/g),
        wa: say(/href="https:\/\/wa\.me\//g),
        telOlay: say(/data-olay="tel_click"/g),
        waOlay: say(/data-olay="whatsapp_click"/g),
        fAd: say(/id="f-ad"/g),
        h1: say(/<h1[\s>]/g),
        baslik: (h.match(/<title>([^<]*)<\/title>/) || [])[1] ?? null,
        ld: createHash('sha1').update(ld).digest('hex').slice(0, 12),
        // İç bağlantı KÜMESİ (sıra ve tekrar değil): tasarım dizilimi değiştirir,
        // hangi sayfaya bağlanıldığını değiştirmemeli — yetim sayfa riski.
        baglanti: createHash('sha1')
          .update([...new Set([...h.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1]))].sort().join('|'))
          .digest('hex')
          .slice(0, 12),
      };
    }
  }
}

gez(dist);
writeFileSync(cikti, JSON.stringify(sayfalar, null, 1));
console.log(`${Object.keys(sayfalar).length} sayfa sayıldı → ${cikti}`);

if (onceki) {
  const eski = JSON.parse(readFileSync(onceki, 'utf8'));
  let fark = 0;
  for (const s of new Set([...Object.keys(eski), ...Object.keys(sayfalar)])) {
    const a = JSON.stringify(eski[s]);
    const b = JSON.stringify(sayfalar[s]);
    if (a !== b) {
      fark++;
      console.log(`FARK ${s}\n  önce : ${a}\n  sonra: ${b}`);
    }
  }
  console.log(fark === 0 ? 'FARK YOK — dönüşüm yüzeyleri ve SEO değişmezleri birebir aynı' : `${fark} sayfada FARK var`);
  process.exitCode = fark === 0 ? 0 : 1;
}
```

- [ ] **Step 3: B8 hız ölçüm betiği `$SP/b8.mjs`**

CLAUDE.md "Performans bütçesi" bölümündeki Chrome 149 tuzaklarına göre: her ölçümde sıfırdan Chrome, genişlik `--window-size` ile (cihaz taklidi ağ kısıtlamasını sessizce kapatıyor), 4× CPU, 1,6 Mbps / 150 ms, TTFB < 140 ms olan satır `GEÇERSİZ`.

```js
// Kullanım: node b8.mjs <url> [tekrar=3]
import { spawn } from 'node:child_process';
import { rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const [, , url, tekrarStr = '3'] = process.argv;
const bekle = (ms) => new Promise((r) => setTimeout(r, ms));

async function olc() {
  const port = 9600 + Math.floor(Math.random() * 300);
  const profil = join(tmpdir(), `b8_${port}_${Date.now()}`);
  const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
    '--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profil}`,
    '--no-first-run', '--window-size=412,823', 'about:blank',
  ]);
  let ws;
  for (let i = 0; i < 50 && !ws; i++) {
    try {
      const l = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      const p = l.find((t) => t.type === 'page');
      if (p) ws = new WebSocket(p.webSocketDebuggerUrl);
    } catch {}
    if (!ws) await bekle(200);
  }
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));
  let id = 0;
  const bekleyen = new Map();
  const olaylar = [];
  ws.addEventListener('message', (e) => {
    const m = JSON.parse(e.data);
    if (m.id && bekleyen.has(m.id)) { bekleyen.get(m.id)(m); bekleyen.delete(m.id); }
    else if (m.method) olaylar.forEach((f) => f(m));
  });
  const gonder = (method, params = {}) => new Promise((r) => { const i = ++id; bekleyen.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

  await gonder('Page.enable');
  await gonder('Network.enable');
  await gonder('Network.setCacheDisabled', { cacheDisabled: true });
  await gonder('Network.setBlockedURLs', { urls: ['*googletagmanager*', '*google-analytics*', '*googlesyndication*', '*doubleclick*'] });
  await gonder('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: (1.6e6) / 8, uploadThroughput: (750e3) / 8 });
  await gonder('Emulation.setCPUThrottlingRate', { rate: 4 });
  await gonder('Page.addScriptToEvaluateOnNewDocument', { source: `
    window.__o = { lcp: 0, lcpEl: '', cls: 0 };
    new PerformanceObserver((l) => { for (const e of l.getEntries()) { window.__o.lcp = e.startTime; window.__o.lcpEl = (e.element && (e.element.tagName + ':' + (e.element.textContent || '').trim().slice(0, 30))) || ''; } }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__o.cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
  ` });
  const yuklendi = new Promise((r) => { const f = (m) => { if (m.method === 'Page.loadEventFired') r(); }; olaylar.push(f); });
  await gonder('Page.navigate', { url });
  await yuklendi;
  await bekle(3000);
  const s = await gonder('Runtime.evaluate', { returnByValue: true, expression: `(() => {
    const n = performance.getEntriesByType('navigation')[0];
    const fcp = performance.getEntriesByName('first-contentful-paint')[0];
    const kaynak = performance.getEntriesByType('resource');
    const toplam = n.transferSize + kaynak.reduce((t, r) => t + r.transferSize, 0);
    const font = kaynak.filter((r) => r.name.includes('/fonts/')).map((r) => Math.round(r.responseEnd));
    return { ttfb: n.responseStart, fcp: fcp ? fcp.startTime : 0, lcp: __o.lcp, lcpEl: __o.lcpEl, cls: __o.cls, kb: toplam / 1024, font };
  })()` });
  ws.close(); chrome.kill(); await bekle(400);
  try { rmSync(profil, { recursive: true, force: true }); } catch {}
  return s.result.result.value;
}

for (let i = 0; i < Number(tekrarStr); i++) {
  const o = await olc();
  const gecersiz = o.ttfb < 140 ? '  GEÇERSİZ (kısıtlama uygulanmadı)' : '';
  console.log(`LCP ${(o.lcp / 1000).toFixed(2)} sn · CLS ${o.cls.toFixed(3)} · FCP ${(o.fcp / 1000).toFixed(2)} · TTFB ${(o.ttfb / 1000).toFixed(2)} · ${o.kb.toFixed(1)} KB · LCP öğesi ${o.lcpEl} · font bitiş ${JSON.stringify(o.font)}${gecersiz}`);
}
```

- [ ] **Step 4: Taban çizgisini al (değişiklik öncesi)**

```bash
cd /d/Projelerim/Cagriservis && npm run build 2>&1 | grep -E "page\(s\) built|\[seo\]|\[ilce-kapisi\]" ; node "$SP/denetim.mjs" dist "$SP/taban.json"
```
Expected: `74 page(s) built`, `[seo]`/`[ilce-kapisi]` satırı yok, `74 sayfa sayıldı`.

- [ ] **Step 5: Önizlemeyi başlat ve hız taban çizgisini al**

Önizleme arka planda başlatılır (`run_in_background`): `npx astro preview --port 4400 --host 127.0.0.1`. Sonra:

```bash
for u in / /klima-servisi/seyhan/; do echo "== $u"; node "$SP/b8.mjs" "http://127.0.0.1:4400$u" 3; done | tee "$SP/b8-taban.txt"
```
Expected: 6 satır, hiçbirinde `GEÇERSİZ` yok (varsa o satır yok sayılır ve ölçüm tekrarlanır).

- [ ] **Step 6: Mevcut görünümün ekran görüntüleri**

```bash
for w in 390 1280; do node "$SP/shot.mjs" http://127.0.0.1:4400 "$SP/taban-ekran" $w / /klima-servisi/seyhan/; done
```
Expected: `innerWidth` = istenen genişlik, `scrollWidth` = `innerWidth`.

Commit yok (repoya dosya girmedi).

---

### Task 2: Temel — belirteçler, yazı tipi, yardımcı sınıflar

**Files:**
- Create: `public/fonts/plus-jakarta-sans-latin.woff2`, `public/fonts/plus-jakarta-sans-latin-ext.woff2`, `public/fonts/OFL.txt`
- Modify: `src/styles/global.css` (tamamı), `src/layouts/BaseLayout.astro` (head), `public/_headers`

**Interfaces:**
- Produces (Tailwind sınıfları, sonraki bütün görevler kullanır): `bg/text/border-kobalt-{50,600,700}`, `bg/text-turuncu-{300,400,500,700}`, `lacivert-{50,100,200,300,400,700,800,900}`, `yesil-{600,700}`, `durum`, `durum-metin`, `shadow-kart`, `shadow-kart-ust`, `shadow-cta`, `shadow-ust-cubuk`, `rounded-sm` (10 px) / `rounded-md` (16 px) / `rounded-lg` (20 px), `text-etiket` (13 px), yardımcı sınıflar `etiket` ve `isik`.
- Geçiş süresince yaşayan eski adlar (Görev 8'de silinir): `turuncu-600`, `lacivert-600`, `text-plaka`, `font-plaka`, `plaka`.

- [ ] **Step 1: Yazı tipi dosyalarını yerleştir**

Dosyalar `$SP/fontlar/`'a 02.10.2026'da Google Fonts'tan indirildi (latin 27.348 B, latin-ext 21.728 B). Yeniden indirmek gerekirse URL'ler `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400..800&display=swap` yanıtındaki `/* latin */` ve `/* latin-ext */` bloklarında (modern Chrome UA ile istenmeli, yoksa woff2 gelmez).

```bash
mkdir -p public/fonts && cp "$SP/fontlar/plus-jakarta-sans-latin.woff2" "$SP/fontlar/plus-jakarta-sans-latin-ext.woff2" "$SP/fontlar/OFL.txt" public/fonts/ && ls -l public/fonts
```
Expected: üç dosya; woff2'ler 27.348 ve 21.728 bayt.

- [ ] **Step 2: `src/styles/global.css` dosyasını baştan yaz**

```css
@import 'tailwindcss';

/*
  YAZI TİPİ — Plus Jakarta Sans, değişken ağırlık 400–800, SIL OFL 1.1
  (public/fonts/OFL.txt). 02.10.2026, sahibinin onayıyla (D1 tersine döndü).

  KENDİ SUNUCUMUZDAN: Google Fonts CDN'i KULLANMIYORUZ — üçüncü taraf istek,
  KVKK riski ve LCP'ye ek RTT demek. İki dilim var çünkü ğ ı ş İ latin-ext'te;
  Türkçe her sayfa ikisini de ister, BaseLayout ikisini de preload eder.

  font-display: swap — metin yedek yazı tipiyle HEMEN boyanır (LCP beklemez),
  font gelince yer değiştirir. Kaymayı önleyen şey aşağıdaki "Jakarta Yedek":
  Arial'in genişliği ve dikey ölçüleri Plus Jakarta Sans'a eşitlendi. Değerler
  tahmin değil, headless Chrome'da aynı Türkçe paragraf iki yazı tipiyle
  ölçülerek bulundu (02.10.2026): genişlik oranı 400'de 1.0114, 800/700'de
  1.0013; yükselme 1.04 em, alçalma 0.22 em.
*/
@font-face {
  font-family: 'Plus Jakarta Sans';
  src: url('/fonts/plus-jakarta-sans-latin.woff2') format('woff2');
  font-weight: 400 800;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Plus Jakarta Sans';
  src: url('/fonts/plus-jakarta-sans-latin-ext.woff2') format('woff2');
  font-weight: 400 800;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: 'Jakarta Yedek';
  src: local('Arial'), local('ArialMT');
  font-weight: 400 600;
  size-adjust: 101.14%;
  ascent-override: 102.83%;
  descent-override: 21.75%;
  line-gap-override: 0%;
}

@font-face {
  font-family: 'Jakarta Yedek';
  src: local('Arial Bold'), local('Arial-BoldMT');
  font-weight: 700 800;
  size-adjust: 100.13%;
  ascent-override: 103.86%;
  descent-override: 21.97%;
  line-gap-override: 0%;
}

@theme {
  --font-sans:
    'Plus Jakarta Sans', 'Jakarta Yedek', system-ui, -apple-system, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;

  /* GEÇİŞ — Görev 8'de silinir. Bileşenler taşındıkça kullanımı sıfıra iner. */
  --font-plaka:
    ui-monospace, 'Cascadia Mono', 'Segoe UI Mono', 'SF Mono', Menlo, Consolas, monospace;

  /*
    RENK — "Gece Mavisi" (02.10.2026, sahibinin seçimi). Bütün değerler WCAG
    oranı HESAPLANARAK seçildi; oranlar yanlarında. Tek kaynak tablo:
    design-system/MASTER.md.
  */

  /* Lacivert — güven. Koyu bloklar, başlıklar. */
  --color-lacivert-50: #eef3fb; /* açık zeminde hover — metin 15.51, kobalt 6.02 */
  --color-lacivert-100: #dce4f0; /* açık zeminde çizgi */
  --color-lacivert-200: #c9d6ea; /* lacivert-900 üzerinde gövde 11.06:1 */
  --color-lacivert-300: #a9bedf; /* lacivert-900 üzerinde soluk metin 8.60:1 */
  --color-lacivert-400: #7a8ba8; /* form alanı kenarı — beyazda 3.45:1 (sınır için 3:1) */
  --color-lacivert-700: #1b3f86; /* yalnızca hero ışık lekesi */
  --color-lacivert-800: #13306a; /* koyu blokta hover — beyaz metin 12.66:1 */
  --color-lacivert-900: #0a1f44; /* beyaz metinle 16.25:1 */

  /* Kobalt — açık zeminde bağlantı, ikon, odak halkası. */
  --color-kobalt-50: #e8effd; /* ikon kabı — kobalt ikon 5.81:1 */
  --color-kobalt-600: #1d4ed8; /* beyazda 6.70:1, zeminde 6.13:1 */
  --color-kobalt-700: #1e40af; /* hover — beyazda 8.72:1 */

  /* Turuncu — YALNIZCA arama eylemi (CTA dolgusu, lacivert metinle). */
  --color-turuncu-300: #ffb27a; /* lacivert-900 üzerinde vurgu metni 9.21:1 */
  --color-turuncu-400: #ff8f3f; /* CTA hover — lacivert metin 7.16:1 */
  --color-turuncu-500: #ff7a1a; /* CTA dolgusu — lacivert-900 metin 6.23:1 */
  --color-turuncu-700: #b4410f; /* açık zeminde hata metni — beyazda 5.67, zeminde 5.19 */

  /* GEÇİŞ — Görev 8'de silinir. */
  --color-turuncu-600: #9a3412;
  --color-lacivert-600: #0c5c96;

  /* WhatsApp — platform rengi, vurgu değil. */
  --color-yesil-600: #0e7a4f; /* beyaz metinle 5.36:1 */
  --color-yesil-700: #0b6341; /* hover — 7.30:1 */

  /* Açık/kapalı çipi (Hero) — yalnızca orada. */
  --color-durum: #22c55e; /* nokta, lacivert-900'de 7.13:1 */
  --color-durum-metin: #bbf7d0; /* lacivert-900'de 13.41:1 */

  --color-zemin: #f2f5fa;
  --color-metin: #0f1b2d; /* zeminde 15.82:1 */
  --color-metin-soluk: #4b5a70; /* beyazda 7.01:1, zeminde 6.42:1 */

  /* TİPOGRAFİ — başlıklar 800 ağırlıkla, sayfanın gücü tipografiden. */
  --text-etiket: 0.8125rem; /* 13 — bölüm etiketi, küçük açıklama */
  --text-plaka: 0.6875rem; /* GEÇİŞ — Görev 8'de silinir */
  --text-kucuk: 0.875rem; /* 14 */
  --text-govde: 1rem; /* 16 — taban, altına inilmez */
  --text-lead: 1.125rem; /* 18 */
  --text-h3: 1.25rem; /* 20 */
  --text-h2: clamp(1.5rem, 3.4vw, 2.25rem); /* 24 → 36 */
  --text-h1: clamp(2rem, 6vw, 3.5rem); /* 32 → 56 */
  --text-numara: clamp(1.5rem, 4.4vw, 2.5rem); /* 24 → 40 */
  --text-dev: clamp(2.25rem, 5vw, 3rem); /* istatistik rakamı */

  /* Köşe — üç değer: düğme/alan/ikon kabı · kart · büyük panel. */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 20px;

  /* Gölge — ROLÜNE GÖRE: tıklanan kart, form kartı, büyük CTA, üst çubuk.
     Her kutuya basılmaz; sahibi düz kutuları "boş" buldu, gölgesiz
     kural 02.10.2026'da kalktı. */
  --shadow-kart: 0 1px 2px rgb(10 31 68 / 0.05), 0 6px 20px -12px rgb(10 31 68 / 0.18);
  --shadow-kart-ust: 0 2px 4px rgb(10 31 68 / 0.06), 0 14px 32px -14px rgb(10 31 68 / 0.28);
  --shadow-cta: 0 10px 28px -10px rgb(255 122 26 / 0.55);
  --shadow-ust-cubuk: 0 1px 0 rgb(10 31 68 / 0.08), 0 4px 16px -8px rgb(10 31 68 / 0.12);
}

/* Bölüm etiketi, künye alan adı, footer başlığı. Renk ayrıca verilir:
   açık zeminde kobalt-600, koyu zeminde turuncu-300 veya lacivert-300. */
@utility etiket {
  font-size: var(--text-etiket);
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: 0.01em;
}

/* GEÇİŞ — Görev 8'de silinir. */
@utility plaka {
  font-family: var(--font-plaka);
  font-size: var(--text-plaka);
  line-height: 1;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Koyu blokta sağ üstte tek yumuşak ışık lekesi. bg-lacivert-900 ile birlikte
   kullanılır. Saf CSS: sıfır byte, sıfır istek. Yalnızca hero, alt CTA, form
   yan paneli ve yasal sayfaların başlığında. */
@utility isik {
  background-image: radial-gradient(
    120% 70% at 100% 0%,
    var(--color-lacivert-700) 0%,
    rgb(27 63 134 / 0) 62%
  );
}

/* Telefon ve fiyat gibi hizalanması gereken rakamlar */
@utility rakam {
  font-variant-numeric: tabular-nums;
}

/* Sayfa kabı — tek yerde tanımlı, elle max-w yazılmaz */
@utility kap {
  margin-inline: auto;
  max-width: 75rem; /* 1200 px */
  padding-inline: 1.25rem;
}

@media (min-width: 1024px) {
  .kap {
    padding-inline: 2rem;
  }
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem; /* sticky çubuk çapayı örtmesin */
}

body {
  color: var(--color-metin);
  background: #fff;
  padding-bottom: env(safe-area-inset-bottom);
  -webkit-text-size-adjust: 100%;
}

@media (max-width: 767px) {
  body {
    /* mobil sabit alt çubuk sayfa sonunu örtmesin */
    padding-bottom: calc(3.5rem + env(safe-area-inset-bottom));
  }
}

/* Mobilde 300 ms dokunma gecikmesini kaldırır — acil aramada gecikme hissi
   doğrudan dönüşüm kaybı. */
a,
button,
summary,
label,
input,
textarea,
select {
  touch-action: manipulation;
}

a,
button,
summary,
[role='button'] {
  -webkit-tap-highlight-color: rgb(29 78 216 / 0.15);
}

/* Hareket yalnızca renk/gölge geçişi, 150 ms. Konum/boyut animasyonu yok. */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}

/* Klavye erişilebilirliği — hiçbir yerde kaldırılmaz. Açık zeminde kobalt:
   turuncu-500 beyazda 2.61:1, halka için gereken 3:1'in altında kalıyordu. */
:where(a, button, input, textarea, select, summary, [tabindex]):focus-visible {
  outline: 3px solid var(--color-kobalt-600);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Koyu blok içindeki odak halkası zeminde kaybolmasın */
:where(.koyu-blok) :where(a, button, summary):focus-visible {
  outline-color: var(--color-turuncu-300);
}

/*
  Arıza rehberi yazı gövdesi (.yazi) — markdown çıktısını biçimlendirir.

  Neden elle: @tailwindcss/typography onaylı paket listesinde yok (yasak 5) ve
  ihtiyacımız onun kapsadığının küçük bir alt kümesi. Otuz satır CSS bir
  bağımlılıktan ucuz ve tasarım sistemine birebir oturuyor.

  Ölçü 65ch'te tutuluyor: satır uzarsa göz bir sonraki satırın başını kaybeder.
*/
.yazi {
  font-size: var(--text-lead);
  line-height: 1.7;
  color: var(--color-metin);
}

.yazi > * + * {
  margin-top: 1.25em;
}

.yazi p,
.yazi ul,
.yazi ol {
  max-width: 65ch;
}

.yazi h2 {
  margin-top: 2.5em;
  font-size: var(--text-h2);
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.015em;
  text-wrap: balance;
  color: var(--color-lacivert-900);
}

.yazi h3 {
  margin-top: 1.75em;
  font-size: var(--text-h3);
  line-height: 1.3;
  font-weight: 700;
  color: var(--color-lacivert-900);
}

.yazi ul,
.yazi ol {
  padding-left: 1.5em;
}

.yazi ul {
  list-style: disc;
}

.yazi ol {
  list-style: decimal;
}

.yazi li::marker {
  color: var(--color-kobalt-600);
  font-weight: 700;
}

.yazi li + li {
  margin-top: 0.5em;
}

.yazi strong {
  font-weight: 700;
  color: var(--color-lacivert-900);
}

.yazi a {
  color: var(--color-kobalt-600);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.yazi a:hover {
  color: var(--color-kobalt-700);
}

/*
  Uyarı kutusu — markdown'da "> " ile yazılır. Güvenlik notları için:
  elektrik, gaz ve su tesisatına dokunma sınırını burada çiziyoruz.
  Sol turuncu kenar çubuğu bilinçli: bu bir UYARI, çubuk anlam taşıyor.
*/
.yazi blockquote {
  border-left: 4px solid var(--color-turuncu-500);
  background: var(--color-zemin);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 1.25rem 1.5rem;
  font-size: var(--text-govde);
}

.yazi blockquote > * + * {
  margin-top: 0.75em;
}
```

- [ ] **Step 3: `BaseLayout.astro` — preload ve tema rengi**

`<meta name="theme-color" content="#0b2942" />` satırını şununla değiştir:

```astro
    <meta name="theme-color" content="#0a1f44" />
    {/*
      İki yazı tipi dilimi de her Türkçe sayfada gerekiyor (ğ ı ş İ latin-ext'te).
      Preload, CSS ayrıştırılmadan indirmeyi başlatır; swap sayesinde metin
      bunu beklemeden boyanır. crossorigin şart — yoksa dosya iki kez iner.
    */}
    <link rel="preload" href="/fonts/plus-jakarta-sans-latin.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="/fonts/plus-jakarta-sans-latin-ext.woff2" as="font" type="font/woff2" crossorigin />
```

- [ ] **Step 4: `public/_headers` — yazı tipi önbelleği**

Dosyanın sonuna ekle:

```
# Yazı tipi dosyalarının adı sürüm taşımıyor ama içerikleri değişmiyor.
# Bir gün değiştirilirse DOSYA ADI da değiştirilir (önbellek bir yıl).
/fonts/*
  Cache-Control: public, max-age=31536000, immutable
```

- [ ] **Step 5: Build + değişmezler**

```bash
npm run build 2>&1 | grep -E "page\(s\) built|\[seo\]|\[ilce-kapisi\]|error" ; ls dist/fonts ; node "$SP/denetim.mjs" dist "$SP/g2.json" "$SP/taban.json"
```
Expected: `74 page(s) built`; `dist/fonts` içinde üç dosya; `FARK YOK`.

- [ ] **Step 6: Yazı tipinin gerçekten kullanıldığını doğrula**

```bash
cat > "$SP/font-kontrol.mjs" <<'EOF'
// Ana sayfada Plus Jakarta Sans'ın yüklendiğini ve H1'de kullanıldığını CDP ile sorar.
import { spawn } from 'node:child_process';
const port = 9450, bekle = (ms) => new Promise((r) => setTimeout(r, ms));
const c = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${process.env.SP}/_fk`, 'about:blank']);
let ws; for (let i = 0; i < 50 && !ws; i++) { try { const p = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page'); if (p) ws = new WebSocket(p.webSocketDebuggerUrl); } catch {} if (!ws) await bekle(200); }
await new Promise((r) => ws.addEventListener('open', r, { once: true }));
let id = 0; const b = new Map(); ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (b.has(m.id)) { b.get(m.id)(m); b.delete(m.id); } });
const g = (method, params = {}) => new Promise((r) => { const i = ++id; b.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
await g('Page.navigate', { url: process.argv[2] }); await bekle(2500);
const s = await g('Runtime.evaluate', { returnByValue: true, awaitPromise: true, expression: `document.fonts.ready.then(() => ({ yuklu: [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + ' ' + f.weight), h1: getComputedStyle(document.querySelector('h1')).fontFamily, kontrol: document.fonts.check('800 40px "Plus Jakarta Sans"', 'Çağrı Şişli İğne') }))` });
console.log(JSON.stringify(s.result.result.value)); ws.close(); c.kill();
EOF
SP="$SP" node "$SP/font-kontrol.mjs" http://127.0.0.1:4400/ ; rm -rf "$SP/_fk"
```
Expected: `yuklu` içinde `Plus Jakarta Sans 400 800` (iki dilim), `h1` `"Plus Jakarta Sans", "Jakarta Yedek", …` ile başlıyor, `kontrol: true`.

- [ ] **Step 7: Commit**

```bash
git add public/fonts src/styles/global.css src/layouts/BaseLayout.astro public/_headers
git commit -m "$(cat <<'EOF'
Tasarım temeli: Gece Mavisi belirteçleri ve Plus Jakarta Sans

Renk, köşe, gölge belirteçleri hesaplanmış kontrastla yenilendi; yazı
tipi kendi sunucumuzdan (Google'a istek yok), swap + Arial'e ölçülerek
eşlenmiş yedek ile. Eski belirteçler geçiş boyunca yaşıyor.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: Açık/kapalı mantığı (saf fonksiyonlar + testler)

**Files:**
- Create: `src/lib/acikDurum.ts`, `tests/acik-durum.test.ts`
- Modify: `package.json` (`scripts.test`)

**Interfaces:**
- Produces:
  - `calismaAraligi(metin: string): CalismaAraligi | null`
  - `interface CalismaAraligi { acilisDk: number; kapanisDk: number; acilis: string; kapanis: string }`
  - `acikMi(simdiDk: number, a: Pick<CalismaAraligi, 'acilisDk' | 'kapanisDk'>): boolean`
  - `durumMetni(acik: boolean, a: Pick<CalismaAraligi, 'acilis' | 'kapanis'>): string`
  - `istanbulDakikasi(tarih?: Date): number`

- [ ] **Step 1: Testi yaz — `tests/acik-durum.test.ts`**

```ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { acikMi, calismaAraligi, durumMetni, istanbulDakikasi } from '../src/lib/acikDurum.ts';

test('firma.json kalıbı ayrıştırılır', () => {
  assert.deepEqual(calismaAraligi('Her gün 08:00–23:00'), {
    acilisDk: 480,
    kapanisDk: 1380,
    acilis: '08:00',
    kapanis: '23:00',
  });
});

test('kısa çizgi ve boşluk da kabul edilir', () => {
  assert.deepEqual(calismaAraligi(' Her gün 08:00 - 23:00 ')?.kapanisDk, 1380);
});

test('kalıp dışı metin null döner — çip basılmaz', () => {
  for (const m of [
    'Hafta içi 09:00–18:00',
    '{PLACEHOLDER — çalışma saatleri}',
    '',
    'Her gün 8:00–23:00',
    'Her gün 08:00–08:00',
    'Her gün 25:00–23:00',
    'Her gün 08:00–23:75',
  ]) {
    assert.equal(calismaAraligi(m), null, m);
  }
});

test('sınırlar: 07:59 kapalı · 08:00 açık · 22:59 açık · 23:00 kapalı', () => {
  const a = calismaAraligi('Her gün 08:00–23:00')!;
  assert.equal(acikMi(7 * 60 + 59, a), false);
  assert.equal(acikMi(8 * 60, a), true);
  assert.equal(acikMi(22 * 60 + 59, a), true);
  assert.equal(acikMi(23 * 60, a), false);
});

test('gece yarısını aşan aralık', () => {
  const a = calismaAraligi('Her gün 18:00–02:00')!;
  assert.equal(acikMi(23 * 60, a), true);
  assert.equal(acikMi(60, a), true);
  assert.equal(acikMi(2 * 60, a), false);
  assert.equal(acikMi(12 * 60, a), false);
});

test('24:00 kapanış gece yarısı demek', () => {
  const a = calismaAraligi('Her gün 08:00–24:00')!;
  assert.equal(a.kapanisDk, 0);
  assert.equal(acikMi(23 * 60 + 59, a), true);
  assert.equal(acikMi(7 * 60, a), false);
});

test('metinler ek gerektirmiyor', () => {
  const a = calismaAraligi('Her gün 08:00–23:00')!;
  assert.equal(durumMetni(true, a), 'Şu an açığız · kapanış 23:00');
  assert.equal(durumMetni(false, a), 'Şu an kapalıyız · açılış 08:00');
});

test('Türkiye saati ziyaretçinin saat diliminden bağımsız (UTC+3)', () => {
  assert.equal(istanbulDakikasi(new Date('2026-10-02T05:00:00Z')), 8 * 60);
  assert.equal(istanbulDakikasi(new Date('2026-10-02T19:59:00Z')), 22 * 60 + 59);
  assert.equal(istanbulDakikasi(new Date('2026-10-02T21:30:00Z')), 30);
});
```

- [ ] **Step 2: `package.json`'a test betiği ekle ve testin düştüğünü gör**

`"check": "astro check"` satırından sonra:

```json
    "check": "astro check",
    "test": "node --test \"tests/**/*.test.ts\""
```

Run: `npm test`
Expected: FAIL — `Cannot find module '…/src/lib/acikDurum.ts'`.

- [ ] **Step 3: `src/lib/acikDurum.ts`**

```ts
/*
  Açık/kapalı çipinin mantığı (Hero). Saf fonksiyonlar: build sırasında saat
  metnini ayrıştırmak için, tarayıcıda o anki durumu hesaplamak için aynı kod
  kullanılıyor; tests/acik-durum.test.ts denetliyor.

  Bu dosya `@/` takma adıyla import YAPMAZ: testler Node'da doğrudan
  çalıştırıyor, orada takma ad yok.

  Neden ayrıştırma bu kadar katı: çip ziyaretçiye "şu an açığız" diye bir
  İDDİA basıyor. Saat metni beklenen kalıpta değilse (örn. "Hafta içi
  09:00–18:00", ya da {PLACEHOLDER}) çip HİÇ basılmaz — yanlış "açığız"
  demek, hiç dememekten pahalıdır ({PLACEHOLDER} sözleşmesinin mantığı).
*/

export interface CalismaAraligi {
  /** Gece yarısından itibaren dakika, 0–1439. */
  acilisDk: number;
  kapanisDk: number;
  /** Ekranda yazılan hâli, "08:00". */
  acilis: string;
  kapanis: string;
}

const KALIP = /^Her gün (\d{2}):(\d{2})\s*[–-]\s*(\d{2}):(\d{2})$/;

export function calismaAraligi(metin: string): CalismaAraligi | null {
  const m = KALIP.exec(metin.trim());
  if (!m) return null;
  const [sa1, dk1, sa2, dk2] = [m[1], m[2], m[3], m[4]].map(Number) as [number, number, number, number];
  if (sa1 > 23 || sa2 > 24 || dk1 > 59 || dk2 > 59) return null;
  const acilisDk = sa1 * 60 + dk1;
  const kapanisDk = (sa2 * 60 + dk2) % 1440;
  // Açılış = kapanış belirsiz (7/24 mü, hiç mi?) — iddia basmayız.
  if (acilisDk === kapanisDk) return null;
  return { acilisDk, kapanisDk, acilis: `${m[1]}:${m[2]}`, kapanis: `${m[3]}:${m[4]}` };
}

export function acikMi(simdiDk: number, a: Pick<CalismaAraligi, 'acilisDk' | 'kapanisDk'>): boolean {
  return a.acilisDk < a.kapanisDk
    ? simdiDk >= a.acilisDk && simdiDk < a.kapanisDk
    : simdiDk >= a.acilisDk || simdiDk < a.kapanisDk; // gece yarısını aşan aralık
}

/*
  Kalıp bilerek EK gerektirmiyor: "23:00'e kadar" / "20:00'ye kadar" gibi
  saat ekleri saat değişince sessizce yanlışlaşır.
*/
export function durumMetni(acik: boolean, a: Pick<CalismaAraligi, 'acilis' | 'kapanis'>): string {
  return acik ? `Şu an açığız · kapanış ${a.kapanis}` : `Şu an kapalıyız · açılış ${a.acilis}`;
}

/** Türkiye saatiyle gece yarısından itibaren dakika — ziyaretçinin telefonunun saat dilimi değil. */
export function istanbulDakikasi(tarih: Date = new Date()): number {
  const parca = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Istanbul',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(tarih);
  const sa = Number(parca.find((p) => p.type === 'hour')?.value ?? 0);
  const dk = Number(parca.find((p) => p.type === 'minute')?.value ?? 0);
  return sa * 60 + dk;
}
```

- [ ] **Step 4: Testler geçiyor**

Run: `npm test`
Expected: `# pass 8`, `# fail 0`.

- [ ] **Step 5: Commit**

```bash
git add src/lib/acikDurum.ts tests/acik-durum.test.ts package.json
git commit -m "$(cat <<'EOF'
Açık/kapalı çipi mantığı: Türkiye saatiyle, katı ayrıştırmayla

Saat metni "Her gün HH:MM–HH:MM" kalıbında değilse çip basılmaz.
node --test ile 8 test (sınırlar, gece yarısı, saat dilimi).

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: Dönüşüm yüzeyleri — Hero, AraButonu, üst çubuk, mobil bar, yan düğmeler, çerez bandı

**Files:**
- Modify: `src/components/Hero.astro` (tamamı), `src/components/AraButonu.astro` (şablon), `src/components/StickyUstCubuk.astro` (şablon), `src/components/MobilBar.astro` (iki sınıf), `src/components/YanButonlar.astro` (üç sınıf), `src/components/CerezBandi.astro` (şablon + betik)
- Create: `$SP/cip-test.mjs`

**Interfaces:**
- Consumes: Görev 2 belirteçleri; Görev 3 `calismaAraligi`, `acikMi`, `durumMetni`, `istanbulDakikasi`.
- Produces: `[data-acik-durum]` öğesi, `data-durum="acik" | "kapali"`, metin `[data-metin]` içinde.

- [ ] **Step 1: `Hero.astro` — tamamını yaz**

Ön madde (`---` blokları arası): mevcut `interface Props`, `bolgeler` ve `kunye` aynen kalır; başlık yorumu ve import'lar ile `aralik` aşağıdaki gibi.

```astro
---
/*
  2, 3, 4 — Tek H1 + somut vaat + ana CTA. Hepsi kaydırmadan görünen alanda.

  Gece laciverti blok + sağ üstte tek yumuşak ışık lekesi (`isik`, saf CSS:
  sıfır byte, sıfır istek, LCP metin kalır). Beyaz metin lacivert-900 üzerinde
  16.25:1. design-system/MASTER.md.
*/
import AraButonu from './AraButonu.astro';
import Ikon from './Ikon.astro';
import { firma, tumIlceler, deger, doldurulmusMu } from '@/lib/veri';
import { calismaAraligi } from '@/lib/acikDurum';
import type { IkonAdi } from '@/lib/types';

interface Props {
  h1: string;
  altBaslik: string;
  waMesaji: string;
  /** Konumu ya da sayfanın ne olduğunu söyleyen kısa etiket — süsleme değil. */
  etiket: string;
  /** Hizmet sayfalarında o cihazın silüeti. */
  ikon?: IkonAdi;
}

const { h1, altBaslik, waMesaji, etiket, ikon } = Astro.props;

// (bolgeler ve kunye tanımları ile yorumları BURADA, değişmeden)

/*
  Açık/kapalı çipi — aramadan önce sorulan "şu an açık mısınız?" sorusunun
  cevabı. Saat metni "Her gün HH:MM–HH:MM" kalıbında değilse null döner ve
  çip hiç basılmaz (lib/acikDurum.ts). Durumu tarayıcı yazar, Türkiye saatiyle.
*/
const aralik = calismaAraligi(deger(firma.calismaSaatleri) ?? '');
---

{/* id="icerik" sayfalardaki <main> üzerinde — "İçeriğe atla" oraya gidiyor. */}
<section class="koyu-blok isik relative overflow-hidden bg-lacivert-900">
  {/* Mobilde üst boşluk bilerek az (py-10): acil arayan kişi telefon
      düğmesini kaydırmadan görsün. Masaüstünde yer bol, py-24 kalıyor. */}
  <div class="kap relative py-10 sm:py-16 lg:py-24">
    <div class:list={['grid items-start gap-8 lg:gap-12', kunye.length > 0 && 'lg:grid-cols-[1.15fr_1fr]']}>
      <div>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
          {
            /*
              Genişlik SABİT ve çip betik çalışana kadar görünmez (invisible:
              yer tutar, görünmez). Metin sonradan yazıldığı için genişlik
              ona göre değişseydi yanındaki etiket ve alttaki H1 kayardı (CLS).
              17.5rem iki metnin uzununu ("Şu an kapalıyız · açılış 08:00")
              14 px'te taşıyor — Görev 4 Adım 6'da ölçüldü. JS kapalıysa çip
              görünmez kalır; saat bilgisi künyede zaten yazılı.
            */
            aralik && (
              <p
                data-acik-durum
                data-acilis-dk={aralik.acilisDk}
                data-kapanis-dk={aralik.kapanisDk}
                data-acilis={aralik.acilis}
                data-kapanis={aralik.kapanis}
                class="durum-cipi invisible inline-flex w-[17.5rem] max-w-full items-center gap-2 rounded-full border px-3 py-1.5 text-kucuk font-semibold whitespace-nowrap"
              >
                <span aria-hidden="true" class="durum-noktasi h-2 w-2 shrink-0 rounded-full"></span>
                <span data-metin></span>
              </p>
            )
          }
          <p class="etiket flex items-center gap-2 text-turuncu-300">
            {ikon && <Ikon ad={ikon} boyut={18} />}
            {etiket}
          </p>
        </div>

        <h1 class="text-h1 mt-4 leading-[1.04] font-extrabold tracking-tight text-balance text-white">
          {h1}
        </h1>

        <p class="text-lead mt-4 max-w-xl leading-relaxed text-lacivert-200">{altBaslik}</p>

        <AraButonu konum="hero" mesaj={waMesaji} boyut="buyuk" zemin="koyu" class="mt-7 max-w-md" />

        <p class="mt-4 flex items-start gap-2 text-kucuk leading-relaxed text-lacivert-300">
          <Ikon ad="onay" boyut={16} class="mt-0.5 shrink-0 text-turuncu-300" />
          Fiyatı önce söyleriz, onayınızı almadan işleme başlamayız.
        </p>
      </div>

      {/*
        Aramadan önce sorulan iki soru: "şu an açık mısınız", "bizim oraya
        geliyor musunuz". Süs değil. Mobilde CTA'nın ALTINA yığılır.

        YAPI UYARISI: dt/dd, dl'in DOĞRUDAN altındaki div'in çocuğu olmak
        ZORUNDA (Lighthouse: dlitem). İkon dt'nin içinde, konumlandırmayla
        sola çekili. Ölçüler: masaüstü pl-21 (84px) = p-6 (24) + ikon (44) +
        boşluk (16); mobil pl-17 (68px) = p-4 (16) + ikon (36) + boşluk (16).
      */}
      {
        kunye.length > 0 && (
          <dl class="grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]">
            {kunye.map((k, i) => (
              <div class:list={['relative p-4 pl-17 lg:p-6 lg:pl-21', i > 0 && 'border-t border-white/10']}>
                <dt class="etiket text-lacivert-300">
                  <span
                    aria-hidden="true"
                    class="absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-sm bg-white/10 text-turuncu-300 lg:top-6 lg:left-6 lg:h-11 lg:w-11"
                  >
                    <Ikon ad={k.ikon} boyut={22} />
                  </span>
                  {k.etiket}
                </dt>
                <dd class="mt-1.5 leading-relaxed font-semibold text-white">{k.metin}</dd>
              </div>
            ))}
          </dl>
        )
      }
    </div>
  </div>
</section>

<style>
  /* Durum rengi betiğin yazdığı data-durum'a bağlı. Kapalıyken nötr (gri
     nokta, beyaz yazı); açıkken yeşil — nokta 7.13:1, yazı 13.41:1. */
  .durum-cipi {
    border-color: rgb(255 255 255 / 0.15);
    background: rgb(255 255 255 / 0.05);
    color: #fff;
  }
  .durum-noktasi {
    background: var(--color-lacivert-300);
  }
  .durum-cipi[data-durum='acik'] {
    border-color: rgb(34 197 94 / 0.4);
    background: rgb(34 197 94 / 0.1);
    color: var(--color-durum-metin);
  }
  .durum-cipi[data-durum='acik'] .durum-noktasi {
    background: var(--color-durum);
    box-shadow: 0 0 0 4px rgb(34 197 94 / 0.18);
  }
</style>

<script>
  import { acikMi, durumMetni, istanbulDakikasi } from '@/lib/acikDurum';

  const cip = document.querySelector<HTMLElement>('[data-acik-durum]');
  const metin = cip?.querySelector<HTMLElement>('[data-metin]');

  function yaz() {
    if (!cip || !metin) return;
    const d = cip.dataset;
    const aralik = {
      acilisDk: Number(d.acilisDk),
      kapanisDk: Number(d.kapanisDk),
      acilis: d.acilis ?? '',
      kapanis: d.kapanis ?? '',
    };
    const acik = acikMi(istanbulDakikasi(), aralik);
    cip.dataset.durum = acik ? 'acik' : 'kapali';
    metin.textContent = durumMetni(acik, aralik);
    cip.classList.remove('invisible');
  }

  yaz();
  // Sayfa açık kalırsa durum dakikada bir tazelenir (08:00 / 23:00 geçişi).
  if (cip) setInterval(yaz, 60_000);
</script>
```

- [ ] **Step 2: `AraButonu.astro` — şablon (ön madde aynı, yalnız `temel` değişir)**

`temel` sabitini değiştir:

```ts
const temel =
  'inline-flex min-h-12 items-center justify-center gap-2 px-6 font-semibold transition-colors duration-150';
```

`temel` bilerek köşe taşımaz: aynı öğeye `rounded-sm` ve `rounded-md` birlikte verilirse hangisinin kazanacağı sınıf sırasına değil Tailwind'in ürettiği CSS sırasına bağlıdır. Her varyant köşesini kendisi verir.

Şablonu (ikinci `---`'ten sonrası) şununla değiştir:

```astro
{
  boyut === 'buyuk' ? (
    <div class={`flex flex-col gap-3 ${sinif}`}>
      <a
        href={tel ?? '#'}
        data-olay="tel_click"
        data-konum={konum}
        aria-disabled={tel ? undefined : 'true'}
        class:list={[
          'group flex items-center gap-4 rounded-md px-5 py-4 transition-colors duration-150 sm:px-6 sm:py-5',
          'bg-turuncu-500 text-lacivert-900 shadow-cta hover:bg-turuncu-400',
          !tel && kapali,
        ]}
      >
        <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-lacivert-900/10">
          <Ikon ad="telefon" boyut={26} />
        </span>
        {/* Numara sayfadaki en büyük tipografik nesne. Yoksa hiç basılmaz:
            iskele metni yazmaktansa buton sade "Hemen Ara" olarak kalır. */}
        <span class="min-w-0">
          {numara ? (
            <>
              <span class="etiket block opacity-80">Hemen Ara</span>
              <span class="rakam text-numara mt-1 block leading-none font-extrabold tracking-tight whitespace-nowrap">
                {numara}
              </span>
            </>
          ) : (
            <span class="text-h3 block leading-none font-extrabold">Hemen Ara</span>
          )}
        </span>
      </a>

      {/* WhatsApp ikincil kalır: Google Ads'te birincil dönüşüm form + uzun çağrı. */}
      <a
        href={wa ?? '#'}
        data-olay="whatsapp_click"
        data-konum={konum}
        rel="noopener"
        aria-disabled={wa ? undefined : 'true'}
        class:list={[
          temel,
          'rounded-md py-3',
          koyu
            ? 'border-[1.5px] border-white/30 text-white hover:bg-white/10'
            : 'bg-yesil-600 text-white hover:bg-yesil-700',
          !wa && kapali,
        ]}
      >
        <Ikon ad="whatsapp" boyut={20} />
        WhatsApp'tan Yaz
      </a>
    </div>
  ) : (
    <div class={`flex flex-col gap-3 sm:flex-row ${sinif}`}>
      <a
        href={tel ?? '#'}
        data-olay="tel_click"
        data-konum={konum}
        aria-disabled={tel ? undefined : 'true'}
        class:list={[temel, 'rounded-sm bg-turuncu-500 font-bold text-lacivert-900 hover:bg-turuncu-400', !tel && kapali]}
      >
        <Ikon ad="telefon" boyut={20} />
        Hemen Ara
        {numara && <span class="rakam hidden sm:inline">{numara}</span>}
      </a>

      <a
        href={wa ?? '#'}
        data-olay="whatsapp_click"
        data-konum={konum}
        rel="noopener"
        aria-disabled={wa ? undefined : 'true'}
        class:list={[temel, 'rounded-sm bg-yesil-600 text-white hover:bg-yesil-700', !wa && kapali]}
      >
        <Ikon ad="whatsapp" boyut={20} />
        WhatsApp'tan Yaz
      </a>
    </div>
  )
}
```



- [ ] **Step 3: `StickyUstCubuk.astro` — şablon**

Ön madde ve uzun yorum aynen kalır. Şablonu şununla değiştir:

```astro
<header
  class="sticky top-0 z-40 bg-white/95 shadow-ust-cubuk backdrop-blur supports-[backdrop-filter]:bg-white/85"
>
  <div class="kap flex items-center justify-between gap-4 py-2.5">
    <a
      href="/"
      class="flex min-w-0 items-center gap-2.5 text-lacivert-900 transition-colors duration-150 hover:text-kobalt-700"
    >
      <span
        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-lacivert-900 text-turuncu-300"
      >
        <Ikon ad="arac" boyut={20} />
      </span>
      <span class="line-clamp-2 text-[13px] leading-tight font-extrabold text-balance sm:text-[15px]">{ad}</span>
    </a>

    <nav aria-label="Hizmetler" class="hidden lg:block">
      <ul class="flex items-center gap-6">
        {
          menu.map((m, i) => (
            // 1024 px'te yalnızca ilk üç bağlantı sığıyor (ölçüldü); kalanı xl'de açılır.
            <li class:list={[i >= 3 && 'hidden xl:block']}>
              <a
                href={`/${m.slug}/`}
                class="text-kucuk font-medium text-metin-soluk transition-colors duration-150 hover:text-kobalt-600"
              >
                {m.etiket}
              </a>
            </li>
          ))
        }
        <li>
          <a
            href="/#hizmetler"
            class="text-kucuk font-bold text-kobalt-600 transition-colors duration-150 hover:text-kobalt-700"
          >
            Tüm hizmetler
          </a>
        </li>
        <li>
          <a
            href="/blog/"
            class="text-kucuk font-medium text-metin-soluk transition-colors duration-150 hover:text-kobalt-600"
          >
            Arıza rehberi
          </a>
        </li>
      </ul>
    </nav>

    <a
      href={tel ?? '#'}
      data-olay="tel_click"
      data-konum="header"
      aria-disabled={tel ? undefined : 'true'}
      class:list={[
        'inline-flex min-h-11 shrink-0 items-center gap-2 rounded-sm bg-turuncu-500 px-4',
        'font-bold text-lacivert-900 transition-colors duration-150 hover:bg-turuncu-400',
        !tel && 'pointer-events-none opacity-55',
      ]}
    >
      <Ikon ad="telefon" boyut={18} />
      {
        doldurulmusMu(firma.telefon) ? (
          <>
            <span class="rakam hidden text-[15px] sm:inline">{firma.telefon}</span>
            <span class="text-[15px] sm:hidden">Ara</span>
          </>
        ) : (
          <span class="text-[15px]">Ara</span>
        )
      }
    </a>
  </div>
</header>
```

- [ ] **Step 4: `MobilBar.astro`, `YanButonlar.astro`, `CerezBandi.astro`**

`MobilBar.astro` — ara bağlantısındaki sınıf dizgesi:

```
'col-span-3 flex h-14 items-center justify-center gap-2 bg-turuncu-600 text-[17px] font-bold text-white',
```
→
```
'col-span-3 flex h-14 items-center justify-center gap-2 bg-turuncu-500 text-[17px] font-extrabold text-lacivert-900',
```
(WhatsApp dizgesi değişmez; `yesil-600` belirteci yeni değeri taşıyor.)

`YanButonlar.astro`:

```ts
const temel =
  'flex h-14 w-14 items-center justify-center rounded-full shadow-kart-ust transition-colors duration-150';
```
ara: `'bg-turuncu-600 hover:bg-turuncu-700'` → `'bg-turuncu-500 text-lacivert-900 hover:bg-turuncu-400'`
WhatsApp: `'bg-yesil-600 hover:bg-yesil-700'` → `'bg-yesil-600 text-white hover:bg-yesil-700'`

`CerezBandi.astro` — şablonu (betik hariç) şununla değiştir; metin aynı:

```astro
<div
  data-cerez
  hidden
  class="fixed inset-x-0 bottom-0 z-50 border-t border-lacivert-100 bg-white py-3 shadow-[0_-8px_24px_-12px_rgb(10_31_68/0.25)] sm:py-4"
>
  <div class="kap flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
    <p class="text-[13px] leading-snug text-metin-soluk sm:text-kucuk sm:leading-relaxed">
      Hizmetimizi geliştirmek için ölçümleme çerezleri kullanmak istiyoruz.
      Onaylamazsanız site aynı şekilde çalışır.
      <a href="/kvkk/" class="font-semibold text-kobalt-600 underline">Ayrıntılar</a>
    </p>
    <div class="grid shrink-0 grid-cols-2 gap-2 sm:flex">
      <button
        data-cerez-ret
        type="button"
        class="min-h-11 rounded-sm border-[1.5px] border-lacivert-400 px-5 text-kucuk font-semibold text-metin transition-colors duration-150 hover:bg-zemin"
      >
        Reddet
      </button>
      <button
        data-cerez-kabul
        type="button"
        class="min-h-11 rounded-sm bg-lacivert-900 px-5 text-kucuk font-semibold text-white transition-colors duration-150 hover:bg-lacivert-800"
      >
        Kabul et
      </button>
    </div>
  </div>
</div>
```

Betikteki şu iki satırı:

```ts
      // Mobil sabit alt çubuğun üstüne otursun
      const genis = window.matchMedia('(min-width: 768px)').matches;
      bant.style.paddingBottom = genis ? '1rem' : 'calc(1rem + 3.5rem)';
```
şununla değiştir:

```ts
      /*
        Mobilde bant, sabit alt çubuğun (MobilBar, 3.5rem + güvenli alan)
        ÜSTÜNDE durur. 02.10.2026'ya kadar alttan dolgu veriliyordu: bant z-50
        olduğu için o beyaz dolgu "Hemen Ara" çubuğunu ÖRTÜYORDU — ziyaretçi
        çerez kararı verene kadar alt çubuk görünmüyordu.
      */
      const genis = window.matchMedia('(min-width: 768px)').matches;
      if (!genis) bant.style.bottom = 'calc(3.5rem + env(safe-area-inset-bottom))';
```

- [ ] **Step 5: Build + değişmezler**

```bash
npm run build 2>&1 | grep -E "page\(s\) built|\[seo\]|\[ilce-kapisi\]|error" ; node "$SP/denetim.mjs" dist "$SP/g4.json" "$SP/taban.json"
```
Expected: `74 page(s) built`; `FARK YOK`.

- [ ] **Step 6: Çip tarayıcı testi `$SP/cip-test.mjs` — sahte saatle dört durum + genişlik**

```js
// Ana sayfayı sahte saatle açar, çipin durumunu ve taşmasını ölçer.
// Kullanım: node cip-test.mjs <taban-url>
import { spawn } from 'node:child_process';
import { rmSync } from 'node:fs';
const [, , taban] = process.argv;
const bekle = (ms) => new Promise((r) => setTimeout(r, ms));
const durumlar = [
  ['2026-10-02T04:59:00Z', 'kapali', 'Şu an kapalıyız · açılış 08:00'], // 07:59 TR
  ['2026-10-02T05:00:00Z', 'acik', 'Şu an açığız · kapanış 23:00'], // 08:00 TR
  ['2026-10-02T19:59:00Z', 'acik', 'Şu an açığız · kapanış 23:00'], // 22:59 TR
  ['2026-10-02T20:00:00Z', 'kapali', 'Şu an kapalıyız · açılış 08:00'], // 23:00 TR
];
let hata = 0;
for (const genislik of [320, 390, 1280]) {
  for (const [iso, beklenenDurum, beklenenMetin] of durumlar) {
    const port = 9500 + Math.floor(Math.random() * 90);
    const profil = `${process.env.SP}/_cip_${port}`;
    const c = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profil}`, 'about:blank']);
    let ws; for (let i = 0; i < 50 && !ws; i++) { try { const p = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page'); if (p) ws = new WebSocket(p.webSocketDebuggerUrl); } catch {} if (!ws) await bekle(200); }
    await new Promise((r) => ws.addEventListener('open', r, { once: true }));
    let id = 0; const b = new Map(); ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (b.has(m.id)) { b.get(m.id)(m); b.delete(m.id); } });
    const g = (method, params = {}) => new Promise((r) => { const i = ++id; b.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
    await g('Emulation.setDeviceMetricsOverride', { width: genislik, height: 800, deviceScaleFactor: 1, mobile: genislik < 768 });
    await g('Page.addScriptToEvaluateOnNewDocument', { source: `(() => { const T = Date.parse('${iso}'); const R = Date; class F extends R { constructor(...a) { super(...(a.length ? a : [T])); } static now() { return T; } } globalThis.Date = F; })();` });
    await g('Page.navigate', { url: taban + '/' }); await bekle(2000);
    const s = await g('Runtime.evaluate', { returnByValue: true, expression: `(() => { const c = document.querySelector('[data-acik-durum]'); const m = c.querySelector('[data-metin]'); return { durum: c.dataset.durum, metin: m.textContent, gorunur: getComputedStyle(c).visibility, kutu: Math.round(c.getBoundingClientRect().width), icerik: Math.round(c.scrollWidth), sayfaTasma: document.documentElement.scrollWidth - innerWidth }; })()` });
    const o = s.result.result.value;
    const tamam = o.durum === beklenenDurum && o.metin === beklenenMetin && o.gorunur === 'visible' && o.icerik <= o.kutu && o.sayfaTasma === 0;
    if (!tamam) hata++;
    console.log(`${tamam ? 'TAMAM' : 'HATA '} ${genislik}px ${iso} → ${JSON.stringify(o)}`);
    ws.close(); c.kill(); await bekle(300); try { rmSync(profil, { recursive: true, force: true }); } catch {}
  }
}
console.log(hata === 0 ? '12/12 TAMAM' : `${hata} HATA`);
process.exitCode = hata ? 1 : 0;
```

Run: `SP="$SP" node "$SP/cip-test.mjs" http://127.0.0.1:4400`
Expected: `12/12 TAMAM` — her satırda `icerik <= kutu` (metin sabit genişliğe sığıyor) ve `sayfaTasma: 0`. `icerik > kutu` çıkarsa Hero'daki `w-[17.5rem]` ölçülen `icerik` değerinin en büyüğüne (rem'e çevrilip yukarı yuvarlanarak) çıkarılır ve test tekrarlanır.

- [ ] **Step 7: Çerez bandı alt çubuğu örtmüyor — ölçüm**

```bash
cat > "$SP/bant-test.mjs" <<'EOF'
// 390 px'te çerez bandı açıkken "Hemen Ara" alt çubuğunun görünür ve tıklanabilir olduğunu ölçer.
import { spawn } from 'node:child_process';
const bekle = (ms) => new Promise((r) => setTimeout(r, ms)); const port = 9590;
const c = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${process.env.SP}/_bt`, 'about:blank']);
let ws; for (let i = 0; i < 50 && !ws; i++) { try { const p = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page'); if (p) ws = new WebSocket(p.webSocketDebuggerUrl); } catch {} if (!ws) await bekle(200); }
await new Promise((r) => ws.addEventListener('open', r, { once: true }));
let id = 0; const b = new Map(); ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (b.has(m.id)) { b.get(m.id)(m); b.delete(m.id); } });
const g = (method, params = {}) => new Promise((r) => { const i = ++id; b.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
await g('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await g('Page.navigate', { url: process.argv[2] }); await bekle(2000);
const s = await g('Runtime.evaluate', { returnByValue: true, expression: `(() => { const bant = document.querySelector('[data-cerez]'); const ara = document.querySelector('[data-konum="mobil_bar"][data-olay="tel_click"]'); const r = ara.getBoundingClientRect(); const ust = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2); return { bantAcik: !bant.hidden, bantYukseklik: Math.round(bant.getBoundingClientRect().height), bantAlt: Math.round(innerHeight - bant.getBoundingClientRect().bottom), araUstte: ara.contains(ust) }; })()` });
console.log(JSON.stringify(s.result.result.value)); ws.close(); c.kill();
EOF
SP="$SP" node "$SP/bant-test.mjs" http://127.0.0.1:4400/ ; rm -rf "$SP/_bt"
```
Expected: `bantAcik: true`, `bantAlt: 56` (çubuğun yüksekliği kadar yukarıda), `araUstte: true`. Taban çizgisinde (`git stash` gerekmez — sonuç Adım 4'ten önceki davranışta `araUstte: false` olurdu; o hâl ilk ekran görüntüsünde zaten görüldü).

- [ ] **Step 8: Göz kontrolü**

```bash
for w in 320 390 1280; do node "$SP/shot.mjs" http://127.0.0.1:4400 "$SP/g4-ekran" $w / /klima-servisi/seyhan/; done
```
`ana-390-00.png`, `ana-1280-00.png`, `klima-servisi_seyhan-320-00.png` okunur: çip, turuncu numara düğmesi, künye kartı, üst çubuk. Beklenen: hiçbir genişlikte `scrollWidth > innerWidth` yok.

- [ ] **Step 9: Commit**

```bash
git add src/components/Hero.astro src/components/AraButonu.astro src/components/StickyUstCubuk.astro src/components/MobilBar.astro src/components/YanButonlar.astro src/components/CerezBandi.astro
git commit -m "$(cat <<'EOF'
Dönüşüm yüzeyleri yeni tasarımda: hero, ara düğmeleri, çerez bandı

- Hero: ışık lekeli lacivert, açık/kapalı çipi (sabit genişlik, CLS 0)
- Ara düğmeleri parlak turuncu + lacivert yazı (6.23:1)
- Çerez bandı artık mobil "Hemen Ara" çubuğunu örtmüyor (hata düzeltmesi)
data-olay/data-konum ve bağlantı sayıları değişmedi (denetim: FARK YOK).

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 5: Form

**Files:**
- Modify: `src/components/IletisimFormu.astro` (sınıf dizgeleri; betik değişmez)

**Interfaces:**
- Consumes: Görev 2 belirteçleri (`lacivert-400` alan kenarı, `kobalt-600`, `turuncu-500`, `turuncu-700`, `shadow-kart`, `isik`, `etiket`).

- [ ] **Step 1: Sınıf değişiklikleri (birebir eşleşme)**

| Eski | Yeni |
|---|---|
| `'mt-2 w-full rounded-sm border-2 border-lacivert-100 bg-white px-4 py-3 text-govde ' +` | `'mt-2 w-full rounded-sm border-[1.5px] border-lacivert-400 bg-white px-4 py-3 text-govde ' +` |
| `'focus:border-lacivert-600 aria-[invalid=true]:border-turuncu-600';` | `'focus:border-kobalt-600 aria-[invalid=true]:border-turuncu-700';` |
| `class="grid max-w-2xl gap-5 rounded-md border border-lacivert-100 bg-white p-6 sm:grid-cols-2 lg:max-w-none lg:p-8"` | `class="grid max-w-2xl gap-5 rounded-lg border border-lacivert-100 bg-white p-5 shadow-kart sm:grid-cols-2 sm:p-6 lg:max-w-none lg:p-8"` |
| `class="mt-0.5 h-5 w-5 shrink-0 accent-lacivert-600"` | `class="mt-0.5 h-5 w-5 shrink-0 accent-kobalt-600"` |
| `<a href="/kvkk/" class="font-semibold text-lacivert-700 underline">` | `<a href="/kvkk/" class="font-semibold text-kobalt-600 underline">` |
| `class="hidden items-start gap-2 rounded-sm border-l-4 sm:col-span-2 border-turuncu-600 bg-zemin px-4 py-3 text-kucuk font-semibold text-turuncu-700"` | `class="hidden items-start gap-2 rounded-sm border-l-4 sm:col-span-2 border-turuncu-700 bg-zemin px-4 py-3 text-kucuk font-semibold text-turuncu-700"` |
| `class="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-sm bg-yesil-600 px-6` | `class="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-yesil-600 px-6` |
| `class="koyu-blok hidden rounded-md bg-lacivert-900 p-8 text-white lg:block"` | `class="koyu-blok isik hidden rounded-lg bg-lacivert-900 p-8 text-white lg:block"` |
| `class="rakam flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-turuncu-600 font-bold"` | `class="rakam flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-turuncu-500 font-extrabold text-lacivert-900"` |
| `<p class="plaka text-lacivert-300">Beklemek istemezseniz</p>` | `<p class="etiket text-lacivert-300">Beklemek istemezseniz</p>` |
| `<p class="rakam text-h2 mt-2 leading-none font-bold whitespace-nowrap text-turuncu-300">` | `<p class="rakam text-h2 mt-2 leading-none font-extrabold whitespace-nowrap text-turuncu-300">` |

Hata kutusu metni turuncu-700 / zemin: 5.19:1 (≥ 4.5). Alan kenarı lacivert-400 / beyaz: 3.45:1 (≥ 3).

- [ ] **Step 2: Build + değişmezler**

```bash
npm run build 2>&1 | grep -E "page\(s\) built|\[seo\]|error" ; node "$SP/denetim.mjs" dist "$SP/g5.json" "$SP/taban.json"
```
Expected: `74 page(s) built`; `FARK YOK` (`fAd` her sayfada değişmedi).

- [ ] **Step 3: Form akışı hâlâ çalışıyor — boş gönderimde odak ve hata**

```bash
cat > "$SP/form-test.mjs" <<'EOF'
// Boş form gönderilince hata kutusunun göründüğünü ve odağın "Adınız"a gittiğini ölçer;
// dolu formda /tesekkurler/ yönlendirmesinin başladığını (sessionStorage) doğrular.
import { spawn } from 'node:child_process';
const bekle = (ms) => new Promise((r) => setTimeout(r, ms)); const port = 9591;
const c = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${process.env.SP}/_ft`, 'about:blank']);
let ws; for (let i = 0; i < 50 && !ws; i++) { try { const p = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page'); if (p) ws = new WebSocket(p.webSocketDebuggerUrl); } catch {} if (!ws) await bekle(200); }
await new Promise((r) => ws.addEventListener('open', r, { once: true }));
let id = 0; const b = new Map(); ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (b.has(m.id)) { b.get(m.id)(m); b.delete(m.id); } });
const g = (method, params = {}) => new Promise((r) => { const i = ++id; b.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const d = async (ifade) => (await g('Runtime.evaluate', { returnByValue: true, expression: ifade })).result.result.value;
await g('Page.navigate', { url: process.argv[2] }); await bekle(1500);
const bos = await d(`(() => { document.querySelector('[data-form] [type=submit]').click(); const h = document.querySelector('[data-hata]'); return { hataGorunur: getComputedStyle(h).display !== 'none', mesaj: h.textContent, odak: document.activeElement.id }; })()`);
const dolu = await d(`(() => { const f = document.querySelector('[data-form]'); f.querySelector('#f-ad').value = 'Deneme'; f.querySelector('#f-tel').value = '0545 000 00 00'; f.querySelector('#f-ariza').value = 'Test'; f.querySelector('#f-kvkk').checked = true; addEventListener('beforeunload', () => {}); f.querySelector('[type=submit]').click(); return { wa: sessionStorage.getItem('cs_wa')?.startsWith('https://wa.me/') ?? false, oto: sessionStorage.getItem('cs_wa_oto') }; })()`);
console.log(JSON.stringify({ bos, dolu })); ws.close(); c.kill();
EOF
SP="$SP" node "$SP/form-test.mjs" http://127.0.0.1:4400/klima-servisi/seyhan/ ; rm -rf "$SP/_ft"
```
Expected: `bos: { hataGorunur: true, mesaj: "Adınızı yazın.", odak: "f-ad" }`, `dolu: { wa: true, oto: "1" }`.

- [ ] **Step 4: Commit**

```bash
git add src/components/IletisimFormu.astro
git commit -m "$(cat <<'EOF'
Form yeni tasarımda: gölgeli kart, 3:1 alan kenarı, kobalt odak

Alan kenarı lacivert-400 (beyazda 3.45:1) — önceki çizgi alan sınırı
için gereken orana ulaşmıyordu. Form betiği değişmedi.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 6: İçerik bileşenleri

**Files:**
- Create: `src/components/HizmetIzgarasi.astro`
- Modify: `src/components/Bolum.astro`, `GuvenRozetleri.astro`, `OlcuSeridi.astro`, `HizmetKarti.astro`, `ArizaCozum.astro`, `Markalar.astro`, `Surec.astro`, `IlceBlogu.astro`, `Yorumlar.astro`, `Sss.astro`, `AltCta.astro`, `Footer.astro`, `KomsuIlceler.astro`, `FiyatTablosu.astro`

**Interfaces:**
- Produces: `HizmetIzgarasi` — `interface Props { hizmetler: Hizmet[] }`. `HizmetKarti` — `interface Props { hizmet: Hizmet }` (**`ilceAdlari` kaldırıldı**; Görev 7 çağıranları günceller).

- [ ] **Step 1: Mekanik geçiş (bütün `.astro` dosyaları)**

Sıra önemli: özel kalıp genelden önce.

```bash
# IletisimFormu HARİÇ: Görev 5'te elle geçti ve hata kutusundaki
# "font-semibold text-turuncu-700" HATA rengidir — buradaki kural onu maviye çevirirdi.
find src -name '*.astro' ! -name 'IletisimFormu.astro' -print0 | xargs -0 sed -i -E \
  -e 's/transition-colors duration-150 hover:border-turuncu-600/shadow-kart transition-[border-color,box-shadow] duration-150 hover:border-kobalt-600\/40 hover:shadow-kart-ust/g' \
  -e 's/rounded-sm border-l-4 border-turuncu-600/rounded-md/g' \
  -e 's/\bplaka\b/etiket/g' \
  -e 's/text-turuncu-600/text-kobalt-600/g' \
  -e 's/text-lacivert-700/text-kobalt-600/g' \
  -e 's/hover:border-turuncu-600/hover:border-kobalt-600/g' \
  -e 's/hover:text-turuncu-700/hover:text-kobalt-700/g' \
  -e 's/font-semibold text-turuncu-700/font-semibold text-kobalt-600/g' \
  -e 's/hover:bg-lacivert-700/hover:bg-lacivert-800/g' \
  -e 's/font-bold tracking-tight/font-extrabold tracking-tight/g'
git diff --stat
```
Expected: değişiklik yalnızca `src/components` ve `src/pages` altında, `IletisimFormu.astro` listede yok; `git diff | grep '^-' | grep -c 'data-olay'` → `0` (ölçüm niteliğine dokunulmadı).

- [ ] **Step 2: `Bolum.astro` — etiket rengi, başlık ağırlığı, mobil boşluk**

Şablonu şununla değiştir (ön madde aynı; başlık yorumundaki "Saf CSS…" cümlesinden önce şu satır eklenir: `Kartlar gölgeyle ayrışır, bölümler renk bloğuyla (02.10.2026).`):

```astro
<section id={id} class={zeminSinifi}>
  <div class="kap py-12 sm:py-16 lg:py-24">
    {
      (etiket || baslik || aciklama) && (
        <div class:list={['max-w-3xl', ortala && 'mx-auto text-center']}>
          {etiket && (
            <p class:list={['etiket', koyu ? 'text-turuncu-300' : 'text-kobalt-600']}>
              {etiket}
            </p>
          )}
          {baslik && (
            <h2
              class:list={[
                'text-h2 mt-2.5 leading-[1.15] font-extrabold tracking-tight text-balance',
                koyu ? 'text-white' : 'text-lacivert-900',
              ]}
            >
              {baslik}
            </h2>
          )}
          {aciklama && (
            <p
              class:list={[
                'text-lead mt-4 leading-relaxed',
                koyu ? 'text-lacivert-200' : 'text-metin-soluk',
              ]}
            >
              {aciklama}
            </p>
          )}
        </div>
      )
    }

    <div class:list={[(etiket || baslik || aciklama) && 'mt-8 sm:mt-10']}>
      <slot />
    </div>
  </div>
</section>
```

- [ ] **Step 3: `HizmetKarti.astro` (tamamı) ve yeni `HizmetIzgarasi.astro`**

`src/components/HizmetKarti.astro`:

```astro
---
/*
  Hizmet vitrin kartı — yatay satır: ikon kabı · ad + özet · ok. Ana sayfa,
  hizmet hub'ı, iletişim ve 404'te aynı kart (HizmetIzgarasi üzerinden).

  02.10.2026: kartın altındaki ilçe adı satırı kaldırıldı. Bağlantı değil düz
  metindi ve her kartta aynı dört adı tekrarlayıp kartı kalabalıklaştırıyordu;
  ilçe sayfalarına giden bağlantılar ana sayfadaki "Bölgeler" matrisinde.
  Ok turuncu DEĞİL: turuncu yalnızca arama eylemine ait.
*/
import Ikon from './Ikon.astro';
import { hizmetIkonu } from '@/lib/veri';
import type { Hizmet } from '@/lib/types';

interface Props {
  hizmet: Hizmet;
}

const { hizmet } = Astro.props;
---

<a
  href={`/${hizmet.slug}/`}
  class="group flex h-full items-center gap-4 rounded-md border border-lacivert-100 bg-white p-4 shadow-kart transition-[border-color,box-shadow] duration-150 hover:border-kobalt-600/40 hover:shadow-kart-ust sm:p-5"
>
  <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-kobalt-50 text-kobalt-600">
    <Ikon ad={hizmetIkonu(hizmet.slug)} boyut={24} />
  </span>
  <span class="min-w-0 flex-1">
    <span class="block text-lead leading-snug font-extrabold text-lacivert-900">{hizmet.ad}</span>
    <span class="mt-1 block text-kucuk leading-relaxed text-metin-soluk">{hizmet.ozet}</span>
  </span>
  <span
    aria-hidden="true"
    class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zemin text-lacivert-900 transition-colors duration-150 group-hover:bg-kobalt-600 group-hover:text-white"
  >
    <Ikon ad="ok" boyut={18} />
  </span>
</a>
```

`src/components/HizmetIzgarasi.astro`:

```astro
---
/*
  Hizmet kartı ızgarası — dört sayfada (ana sayfa, hub "Diğer hizmetler",
  iletişim, 404) aynı. Sütun sayısı KART SAYISINA göre seçilir ki son satırda
  tek başına kart kalmasın: 10 hizmet → 2 sütun (5+5); 9 hizmet (hub, kendisi
  hariç) → geniş ekranda 3 sütun (3+3+3). Yatay kart 3 sütunda ancak lg'de
  rahat sığıyor, o yüzden üçüncü sütun lg'de açılır.
*/
import HizmetKarti from './HizmetKarti.astro';
import type { Hizmet } from '@/lib/types';

interface Props {
  hizmetler: Hizmet[];
}

const { hizmetler } = Astro.props;
const ucSutun = hizmetler.length % 3 === 0 && hizmetler.length % 2 !== 0;
---

<ul class:list={['grid gap-3 sm:grid-cols-2 sm:gap-4', ucSutun && 'lg:grid-cols-3']}>
  {
    hizmetler.map((h) => (
      <li>
        <HizmetKarti hizmet={h} />
      </li>
    ))
  }
</ul>
```

- [ ] **Step 4: `GuvenRozetleri`, `OlcuSeridi`, `ArizaCozum` — şablonlar**

`GuvenRozetleri.astro` şablonu:

```astro
<section class="bg-white">
  <ul class:list={['kap grid gap-5 py-10 sm:py-12 lg:gap-8', sutun]}>
    {
      rozetler.map((r) => (
        <li class="flex gap-4">
          <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-kobalt-50 text-kobalt-600">
            <Ikon ad={r.ikon} boyut={24} />
          </span>
          <div class="min-w-0">
            <p class="leading-snug font-bold text-lacivert-900">{r.baslik}</p>
            <p class="mt-1 text-kucuk leading-relaxed text-metin-soluk">{r.aciklama}</p>
          </div>
        </li>
      ))
    }
  </ul>
</section>
```
(Başlık yorumundaki "İkonlar dolu renk kaplarında" cümlesi → "İkonlar açık mavi kapta (kobalt-50), kobalt ikon 5.81:1.")

`OlcuSeridi.astro` şablonu:

```astro
<section class="border-y border-lacivert-100 bg-zemin">
  <dl class:list={['kap grid grid-cols-2 gap-x-6 gap-y-8 py-10 sm:py-12', sutun]}>
    {
      olculer.map((o) => (
        <div>
          <dt class="sr-only">{o.birim}</dt>
          <dd>
            <span class="rakam text-dev block leading-none font-extrabold tracking-tight text-lacivert-900">
              {o.sayi}
              <span class="text-h3 ml-1.5 font-bold text-kobalt-600">{o.birim}</span>
            </span>
            <span class="mt-2 block text-kucuk text-metin-soluk">{o.not}</span>
          </dd>
        </div>
      ))
    }
  </dl>
</section>
```

`ArizaCozum.astro` şablonu:

```astro
<Bolum etiket={etiket} baslik={baslik} zemin={zemin}>
  <ul class="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
    {
      arizalar.map((a) => (
        <li class="flex flex-col rounded-md border border-lacivert-100 bg-white p-5 shadow-kart sm:p-6">
          <h3 class="flex items-start gap-3 leading-snug font-bold text-lacivert-900">
            <span
              aria-hidden="true"
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-kobalt-50 text-kobalt-600"
            >
              <Ikon ad="arac" boyut={18} />
            </span>
            <span class="pt-1">{a.baslik}</span>
          </h3>
          <p class="mt-3 leading-relaxed text-metin-soluk">{a.cozum}</p>
        </li>
      ))
    }
  </ul>
</Bolum>
```

- [ ] **Step 5: `Markalar`, `Surec`, `IlceBlogu` — şablonlar**

`Markalar.astro` — `<ul>` ve yedek parça kutusu:

```astro
      <ul class="flex flex-wrap gap-2">
        {markalar.map((m) => (
          <li class="rounded-full border border-lacivert-100 bg-white px-4 py-2 text-kucuk font-semibold text-lacivert-900">
            {m}
          </li>
        ))}
        {/* Kapsayıcı kapanış — A6. Kobalt: turuncu yalnızca arama eylemine ait. */}
        <li class="rounded-full bg-kobalt-600 px-4 py-2 text-kucuk font-bold text-white">
          ve diğer bütün markalar
        </li>
      </ul>

      {parca && (
        <div class="mt-8 flex items-start gap-4 rounded-lg bg-zemin p-6 lg:p-8">
          <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-white text-kobalt-600 shadow-kart">
            <Ikon ad="kalkan" boyut={22} />
          </span>
          <div>
            <p class="text-h3 font-extrabold text-lacivert-900">Yedek parça</p>
            <p class="mt-2 leading-relaxed text-metin">{parca}</p>
          </div>
        </div>
      )}
```

`Surec.astro` — `<ol>`:

```astro
  {/* Numara süs değil: adımlar gerçekten sırayla oluyor. */}
  <ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {
      adimlar.map((a, i) => (
        <li class="rounded-lg border border-white/10 bg-white/[0.05] p-6">
          <span
            class="rakam flex h-11 w-11 items-center justify-center rounded-full bg-turuncu-500 text-lead font-extrabold text-lacivert-900"
            aria-hidden="true"
          >
            {i + 1}
          </span>
          <h3 class="text-h3 mt-4 font-bold text-white">{a.baslik}</h3>
          <p class="mt-2 leading-relaxed text-lacivert-200">{a.metin}</p>
        </li>
      ))
    }
  </ol>
```

`IlceBlogu.astro` — not kartı ve yan sütun:

```astro
  <div class:list={['grid gap-6 lg:gap-8', yanSutun && 'lg:grid-cols-[1.4fr_1fr]']}>
    {/* Sayfanın var olma gerekçesi bu paragraf. */}
    <div class="rounded-lg border border-lacivert-100 bg-white p-6 shadow-kart lg:p-8">
      <p class="text-lead leading-relaxed text-metin">{ilce.yerelNotlar}</p>
    </div>

    {
      yanSutun && (
        /* self-start: tek satırlık kutu, yanındaki uzun notun boyuna esnemesin */
        <dl class="grid gap-px self-start overflow-hidden rounded-lg border border-lacivert-100 bg-lacivert-100 shadow-kart">
          {ulasimVar && (
            <div class="bg-white p-6">
              <dt class="etiket flex items-center gap-2 text-metin-soluk">
                <Ikon ad="saat" boyut={16} class="text-kobalt-600" />
                Ortalama ulaşım
              </dt>
              <dd class="mt-2">
                <span class="rakam text-dev leading-none font-extrabold text-lacivert-900">
                  {ilce.ulasimDk}
                  <span class="text-h3 ml-1 font-bold text-kobalt-600">dakika</span>
                </span>
              </dd>
            </div>
          )}

          {mahalleMetni && (
            <div class="bg-white p-6">
              <dt class="etiket flex items-center gap-2 text-metin-soluk">
                <Ikon ad="konum" boyut={16} class="text-kobalt-600" />
                Gittiğimiz mahalleler
              </dt>
              <dd class="mt-2 leading-relaxed text-metin">
                {mahalleler.length > 0 ? mahalleMetni : `${ilce.ad} genelinde ${mahalleMetni.toLocaleLowerCase('tr-TR')}`}
              </dd>
            </div>
          )}
        </dl>
      )
    }
  </div>
```

- [ ] **Step 6: `Yorumlar`, `Sss`, `AltCta`, `Footer`**

`Yorumlar.astro` şablonu (açıklama metni aynı, karta taşındı):

```astro
{
  url && (
    <Bolum etiket="Yorumlar" baslik="Müşteri yorumları">
      {/* Yıldız, puan, yorum sayısı BASILMAZ (yasak 3): Google bunları kendi
          sitemize gömülü göstermiyor, uydurması ceza riski. Yalnızca bağlantı. */}
      <div class="grid max-w-4xl gap-5 rounded-lg border border-lacivert-100 bg-zemin p-6 sm:grid-cols-[1fr_auto] sm:items-center lg:p-8">
        <p class="text-lead leading-relaxed text-metin">
          Yorumlarımızı kendi sitemize kopyalamıyoruz. Hepsi Google işletme profilimizde, tarih ve
          isimleriyle birlikte duruyor.
        </p>
        <a
          href={url}
          rel="noopener nofollow"
          target="_blank"
          class="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-lacivert-900 px-6 font-semibold text-white transition-colors duration-150 hover:bg-lacivert-800"
        >
          Google yorumlarımızı okuyun
          <span class="sr-only">(yeni sekmede açılır)</span>
          <Ikon ad="dis-link" boyut={18} />
        </a>
      </div>
    </Bolum>
  )
}
```

`Sss.astro` şablonu (`<style>` bloğu aynı kalır):

```astro
<Bolum etiket="Sorular" baslik={baslik} zemin={zemin}>
  <div class="grid max-w-3xl gap-3">
    {
      gorunur.map((s) => (
        <details class="group rounded-md border border-lacivert-100 bg-white shadow-kart transition-shadow duration-150 open:shadow-kart-ust">
          <summary class="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-md px-5 py-4 font-bold text-lacivert-900 sm:px-6">
            {s.soru}
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zemin text-kobalt-600 transition-transform duration-150 group-open:rotate-180">
              <Ikon ad="chevron" boyut={18} />
            </span>
          </summary>
          <div class="px-5 pb-5 sm:px-6 sm:pb-6">
            <p class="leading-relaxed text-metin-soluk">{s.cevap}</p>
            {s.maddeler && s.maddeler.length > 0 && (
              <ul class="mt-4 grid gap-2">
                {s.maddeler.map((m) => (
                  <li class="rounded-sm bg-zemin px-4 py-3 leading-relaxed">
                    <span class="font-bold text-lacivert-900">{m.ad}</span>
                    <span class="text-metin-soluk"> — {m.detay}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </details>
      ))
    }
  </div>
</Bolum>
```

`AltCta.astro` — nokta dokusu `<div aria-hidden … radial-gradient …>` bloğu silinir; bölüm ve kap:

```astro
<section class="koyu-blok isik relative overflow-hidden bg-lacivert-900">
  <div class="kap relative py-14 lg:py-24">
```
(İçerideki `plaka`/`font-bold tracking-tight` Adım 1'de zaten `etiket`/`font-extrabold tracking-tight` oldu.)

`Footer.astro` — logo kabı: `rounded-sm bg-white/10">` → `rounded-sm bg-white/10 text-turuncu-300">`. (`plaka` → `etiket` ve `text-plaka` → `text-etiket` Adım 1'de yapıldı; reddi beyan 11 px'ten 13 px'e çıktı.)

- [ ] **Step 7: `KomsuIlceler`, `FiyatTablosu` — kontrol**

Adım 1 bu iki dosyadaki `plaka`, `text-turuncu-600`, `text-lacivert-700` geçişlerini yaptı. Ek olarak `FiyatTablosu.astro` işlem listesinde:
`class="grid max-w-3xl gap-px overflow-hidden rounded-md border border-lacivert-100 bg-lacivert-100 sm:grid-cols-2"` → `class="grid max-w-3xl gap-px overflow-hidden rounded-lg border border-lacivert-100 bg-lacivert-100 shadow-kart sm:grid-cols-2"`

```bash
grep -nE "turuncu-600|lacivert-600|\bplaka\b" src/components/*.astro
```
Expected: yalnızca henüz Görev 7'de işlenecek dosyalar dışında **0** satır (bileşenlerde sonuç boş).

- [ ] **Step 8: Build + değişmezler**

```bash
npm run build 2>&1 | grep -E "page\(s\) built|\[seo\]|error" ; node "$SP/denetim.mjs" dist "$SP/g6.json" "$SP/taban.json"
```
Expected: `74 page(s) built`; `FARK YOK`. (`index.astro` henüz `ilceAdlari` geçiriyor — Astro bilinmeyen prop'u yok sayar, build kırılmaz; Görev 7 düzeltir.)

- [ ] **Step 9: Commit**

```bash
git add src/components
git commit -m "$(cat <<'EOF'
İçerik bileşenleri yeni tasarımda; HizmetIzgarasi eklendi

Yatay hizmet kartı (tekrarlanan ilçe satırı kalktı), gölgeli kartlar,
kobalt ikon kapları, sade etiketler, mobilde sıkılaşan bölüm boşluğu.
Sütun sayısı kart sayısına göre: son satırda yetim kart yok.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 7: Sayfalar

**Files:**
- Modify: `src/pages/index.astro`, `src/pages/[hizmet]/index.astro`, `src/pages/iletisim.astro`, `src/pages/404.astro`, `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`, `src/pages/tesekkurler.astro`, `src/pages/kvkk.astro`, `src/pages/kullanim-kosullari.astro`

**Interfaces:**
- Consumes: `HizmetIzgarasi` (`hizmetler: Hizmet[]`).

- [ ] **Step 1: Açık zemindeki koyu ikon kapları → kobalt**

```bash
sed -i 's/items-center justify-center rounded-sm bg-lacivert-900 text-white/items-center justify-center rounded-sm bg-kobalt-50 text-kobalt-600/g' \
  src/pages/blog/index.astro 'src/pages/blog/[slug].astro' src/pages/iletisim.astro src/pages/tesekkurler.astro
grep -c "bg-kobalt-50 text-kobalt-600" src/pages/blog/index.astro 'src/pages/blog/[slug].astro' src/pages/iletisim.astro src/pages/tesekkurler.astro
```
Expected: dört dosyada da ≥ 1.

- [ ] **Step 2: `index.astro` — ızgara ve Bölgeler matrisi**

1. `import HizmetKarti from '@/components/HizmetKarti.astro';` → `import HizmetIzgarasi from '@/components/HizmetIzgarasi.astro';`
2. `const ilceAdlari = ilceler.map((i) => i.ad);` satırını sil (tek kullanıcısı karttı).
3. "Hangi cihaza bakıyoruz?" bölümündeki `<ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"> … </ul>` → `<HizmetIzgarasi hizmetler={hizmetler} />`
4. "Bölgenize özel sayfalar" bölümünün içi (`<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"> … </div>`) şununla değişir — **bağlantı sayısı ve hedefleri aynı**, yalnızca dizilim:

```astro
        {/* Her hizmet tek satır + ilçe hapları. Önceki 40 satırlık liste
            telefonda ~2.400 px tutuyordu; bağlantıların hepsi duruyor. */}
        <ul class="grid gap-3 lg:grid-cols-2">
          {hizmetler.map((h) => (
            <li class="rounded-md border border-lacivert-100 bg-white p-4 shadow-kart">
              <nav aria-label={h.ad}>
                <h3 class="flex items-center gap-2.5 font-bold text-lacivert-900">
                  <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-kobalt-50 text-kobalt-600">
                    <Ikon ad={hizmetIkonu(h.slug)} boyut={18} />
                  </span>
                  {h.ad}
                </h3>
                <ul class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {ilceler.map((i) => (
                    <li>
                      <a
                        href={`/${h.slug}/${i.slug}/`}
                        class="flex min-h-11 items-center justify-center rounded-full border border-lacivert-100 px-3 text-kucuk font-semibold text-kobalt-600 transition-colors duration-150 hover:border-kobalt-600 hover:bg-kobalt-50"
                      >
                        {i.ad}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </li>
          ))}
        </ul>
```

- [ ] **Step 3: Diğer üç ızgara — `[hizmet]/index.astro`, `iletisim.astro`, `404.astro`**

Üçünde de: `import HizmetKarti from '@/components/HizmetKarti.astro';` → `import HizmetIzgarasi from '@/components/HizmetIzgarasi.astro';` ve `<ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"> … <HizmetKarti hizmet={h} /> … </ul>` bloğu:
- `[hizmet]/index.astro` → `<HizmetIzgarasi hizmetler={digerHizmetler} />`
- `iletisim.astro` ve `404.astro` → `<HizmetIzgarasi hizmetler={hizmetler} />`

`iletisim.astro` künye: `class="grid max-w-4xl gap-px overflow-hidden rounded-md border border-lacivert-100 bg-lacivert-100 sm:grid-cols-2"` → `class="grid max-w-4xl gap-px overflow-hidden rounded-lg border border-lacivert-100 bg-lacivert-100 shadow-kart sm:grid-cols-2"`.

- [ ] **Step 4: Blog kartları ve teşekkür sayfası**

`blog/index.astro`: kart başlığı `text-h3 mt-4 leading-snug font-bold` → `text-h3 mt-4 leading-snug font-extrabold`. (Kart hover/gölge ve "Yazıyı oku" rengi Görev 6 Adım 1'de geçti.)

`tesekkurler.astro`: nokta dokusu `<div aria-hidden="true" class="pointer-events-none absolute inset-0" style="background-image: radial-gradient(...)">` bloğu silinir; `<section class="koyu-blok relative overflow-hidden bg-lacivert-900">` → `<section class="koyu-blok isik relative overflow-hidden bg-lacivert-900">`; WhatsApp düğmesindeki `rounded-sm bg-yesil-600` → `rounded-md bg-yesil-600`; telefon düğmesindeki `rounded-sm border-2 border-white/35` → `rounded-md border-[1.5px] border-white/30`.

- [ ] **Step 5: Yasal sayfalar**

`kvkk.astro` ve `kullanim-kosullari.astro`: `<section class="koyu-blok bg-lacivert-900">` → `<section class="koyu-blok isik bg-lacivert-900">`. (Liste kalemlerindeki sol turuncu çubuk ve renkler Görev 6 Adım 1'de geçti.)

- [ ] **Step 6: Kalan eski belirteç taraması**

```bash
grep -rnE "turuncu-600|lacivert-600|\bplaka\b|ilceAdlari|HizmetKarti hizmet=\{h\} ilce" src --include=*.astro
```
Expected: yalnızca `src/components/HizmetIzgarasi.astro` içindeki `<HizmetKarti hizmet={h} />` dışında **0 satır** (bu desen o satırı yakalamaz) → çıktı **boş**.

- [ ] **Step 7: Build + değişmezler**

```bash
npm run build 2>&1 | grep -E "page\(s\) built|\[seo\]|\[ilce-kapisi\]|error" ; node "$SP/denetim.mjs" dist "$SP/g7.json" "$SP/taban.json"
```
Expected: `74 page(s) built`; `FARK YOK` — `baglanti` alanı sayesinde bu, ana sayfadaki 40 ilçe bağlantısının ve bütün iç bağlantıların aynı kaldığını da kanıtlar.

- [ ] **Step 8: Commit**

```bash
git add src/pages
git commit -m "$(cat <<'EOF'
Sayfalar yeni tasarımda; ana sayfa Bölgeler matrisi

40 satırlık ilçe listesi hizmet başına tek satıra indi, 40 bağlantının
hepsi duruyor. Dört sayfa HizmetIzgarasi kullanıyor.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 8: Marka varlıkları ve eski belirteçlerin silinmesi

**Files:**
- Modify: `public/favicon.svg`, `tools/og-uret.mjs`, `public/og.png` (betikle üretilir), `src/styles/global.css` (GEÇİŞ satırları)

- [ ] **Step 1: `public/favicon.svg`**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#0a1f44"/>
  <g fill="none" stroke="#ff7a1a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="9" width="20" height="9" rx="2"/>
    <path d="M10 14h12"/>
    <path d="M11 23c1-1 1-2.3 0-3.3M16 24.5c1-1 1-2.3 0-3.3M21 23c1-1 1-2.3 0-3.3"/>
  </g>
</svg>
```

- [ ] **Step 2: `tools/og-uret.mjs` — renkler ve doku**

- Başlık yorumu: `Tasarım sistemine sadık: lacivert blok, tek turuncu vurgu, gölge/gradient yok.` → `Tasarım sistemine sadık (Gece Mavisi, 02.10.2026): lacivert blok + sağ üstte ışık lekesi, turuncu yalnızca numara kutusunda.`
- Sabitler: `LACIVERT = '#0a1f44'`, `TURUNCU = '#ff7a1a'`, `ACIK = '#c9d6ea'`, ve yeni `const TURUNCU_METIN = '#ffb27a';`
- `<pattern id="nokta" …>…</pattern>` → `<radialGradient id="isik" cx="100%" cy="0%" r="75%"><stop offset="0" stop-color="#1b3f86"/><stop offset="1" stop-color="#1b3f86" stop-opacity="0"/></radialGradient>`
- `<rect width="${G}" height="${Y}" fill="url(#nokta)"/>` → `<rect width="${G}" height="${Y}" fill="url(#isik)"/>`
- Firma adı satırında `fill="${TURUNCU}"` → `fill="${TURUNCU_METIN}"` (turuncu-500 lacivertte metin olarak değil, turuncu-300 kullanılır)
- Numara kutusu `rx="6"` → `rx="16"`; numara metninde `fill="${BEYAZ}"` → `fill="${LACIVERT}"` (lacivert/turuncu 6.23:1; beyaz/turuncu 2.61 olurdu)

```bash
node tools/og-uret.mjs
```
Expected: `public/og.png — 1200x630, … KB`. Görsel `Read` ile açılıp göz kontrolü yapılır.

- [ ] **Step 3: Eski belirteçleri sil**

`src/styles/global.css` içinden: `--font-plaka` tanımı ve üstündeki GEÇİŞ yorumu, `--color-turuncu-600` ve `--color-lacivert-600` satırları ve GEÇİŞ yorumu, `--text-plaka` satırı, `@utility plaka { … }` bloğu ve GEÇİŞ yorumu.

```bash
grep -rnE "turuncu-600|lacivert-600|\bplaka\b|text-plaka|font-plaka|#9a3412|#0b2942|#0c5c96" src tools public/favicon.svg
```
Expected: **boş** (yorumlardaki tarihsel anlatım dahil — kalan yorum varsa güncel ada çevrilir).

- [ ] **Step 4: Build + değişmezler + testler**

```bash
npm test 2>&1 | tail -3 ; npm run build 2>&1 | grep -E "page\(s\) built|\[seo\]|\[ilce-kapisi\]|error" ; node "$SP/denetim.mjs" dist "$SP/g8.json" "$SP/taban.json"
```
Expected: `# pass 8 # fail 0`; `74 page(s) built`; `FARK YOK`.

- [ ] **Step 5: Commit**

```bash
git add public/favicon.svg tools/og-uret.mjs public/og.png src/styles/global.css
git commit -m "$(cat <<'EOF'
Marka varlıkları yeni paletle; eski belirteçler silindi

favicon ve paylaşım görseli Gece Mavisi renklerinde. turuncu-600,
lacivert-600 ve monospace "plaka" sistemi kaldırıldı (kaynakta 0 kullanım).

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 9: Bütün doğrulama

**Files:** yok (yalnızca ölçüm; sonuçlar Görev 10'da belgelere yazılır)

- [ ] **Step 1: 5 sayfa × 6 genişlik ekran görüntüsü ve taşma**

```bash
for w in 320 390 768 1024 1280 1440; do node "$SP/shot.mjs" http://127.0.0.1:4400 "$SP/son-ekran" $w / /klima-servisi/seyhan/ /buzdolabi-tamiri/ /iletisim/ /blog/klima-sogutmuyor/; done 2>&1 | tee "$SP/son-ekran.txt"
grep -c "" "$SP/son-ekran.txt"; awk '{split($3,a,"=");split($4,b,"="); if (a[2]!=b[2]) print "TAŞMA", $0}' "$SP/son-ekran.txt"
```
Expected: 30 satır; `TAŞMA` satırı yok. Göz kontrolü: her sayfanın 390 ve 1280 görüntülerinin tamamı, diğer genişliklerin ilk parçası okunur. Bakılacaklar: kesik metin, üst üste binme, boş kalan sütun, yetim kart, okunmayan renk.

- [ ] **Step 2: Kontrast — kullanılan bütün metin/zemin çiftleri**

```bash
"$PY" "$SP/kontrast.py" <<'EOF'
#FFFFFF #0A1F44 beyaz/lacivert-900
#C9D6EA #0A1F44 lacivert-200/lacivert-900
#A9BEDF #0A1F44 lacivert-300/lacivert-900
#FFB27A #0A1F44 turuncu-300/lacivert-900
#BBF7D0 #0A1F44 durum-metin/lacivert-900
#0A1F44 #FF7A1A lacivert-900/turuncu-500
#0A1F44 #FF8F3F lacivert-900/turuncu-400
#FFFFFF #0E7A4F beyaz/yesil-600
#FFFFFF #0B6341 beyaz/yesil-700
#1D4ED8 #FFFFFF kobalt-600/beyaz
#1D4ED8 #F2F5FA kobalt-600/zemin
#1D4ED8 #E8EFFD kobalt-600/kobalt-50
#1E40AF #FFFFFF kobalt-700/beyaz
#FFFFFF #1D4ED8 beyaz/kobalt-600
#0F1B2D #F2F5FA metin/zemin
#4B5A70 #FFFFFF metin-soluk/beyaz
#4B5A70 #F2F5FA metin-soluk/zemin
#0A1F44 #FFFFFF lacivert-900/beyaz
#B4410F #F2F5FA turuncu-700/zemin
#7A8BA8 #FFFFFF lacivert-400-alan-kenari/beyaz
#FFFFFF #13306A beyaz/lacivert-800
EOF
```
Expected: alan kenarı ≥ 3.00, diğer bütün satırlar ≥ 4.50.

- [ ] **Step 3: Testler, çip, bant, form**

```bash
npm test 2>&1 | tail -3
SP="$SP" node "$SP/cip-test.mjs" http://127.0.0.1:4400 | tail -1
SP="$SP" node "$SP/bant-test.mjs" http://127.0.0.1:4400/
SP="$SP" node "$SP/form-test.mjs" http://127.0.0.1:4400/klima-servisi/seyhan/
```
Expected: `# pass 8`; `12/12 TAMAM`; `araUstte: true`; form `hataGorunur: true`, `wa: true`.

- [ ] **Step 4: B8 hız — taban çizgisiyle karşılaştırma**

```bash
for u in / /klima-servisi/seyhan/; do echo "== $u"; node "$SP/b8.mjs" "http://127.0.0.1:4400$u" 3; done | tee "$SP/b8-son.txt"; echo; cat "$SP/b8-taban.txt"
```
Expected: `GEÇERSİZ` satırı yok; LCP < 2,0 sn; **CLS < 0,1** (hedef 0,000 — font değişimi metrik eşlemesiyle kaymamalı); LCP öğesi metin (H1). Taban ile fark tabloya yazılır. CLS > 0,01 çıkarsa: `Jakarta Yedek` değerleri yeniden ölçülür (1000 px'te, Görev 2'deki yöntemle) ve ölçüm tekrarlanır.

- [ ] **Step 5: Sayfa ağırlığı ve JS**

```bash
for p in index.html klima-servisi/seyhan/index.html; do printf "%s ham %s B · gzip " $p $(wc -c < dist/$p); gzip -c dist/$p | wc -c; done
du -b dist/fonts/*.woff2 ; ls dist/_astro/*.js 2>/dev/null | while read f; do printf "%s gzip " "$f"; gzip -c "$f" | wc -c; done
```
Expected: sayfa + iki font (gzip/woff2) toplamı < 500 KB; JS gzip toplamı < 40 KB (taban ~2,07 KB + çip ~0,3 KB).

Commit yok.

---

### Task 10: Belgeler, dalın birleştirilmesi, canlıya alma onayı

**Files:**
- Modify: `design-system/MASTER.md` (tamamı), `CLAUDE.md` (ilgili bölümler)

- [ ] **Step 1: `design-system/MASTER.md` — yeniden yaz**

Bölümler: (1) yön ve neden — Gece Mavisi, 02.10.2026, sahibinin "kalitesiz" tespiti ve dört sorunu; (2) ui-ux-pro-max notu aynen korunur ve **`--design-system` için doğru sorgu** eklenir: `"home services appliance repair local emergency trust conversion"` → "Trust & Authority + Conversion"; (3) renk tablosu — spec §1 tablosunun aynısı, Görev 9 Adım 2'nin ölçülen oranlarıyla; tek vurgu kuralı ve odak halkası; (4) tipografi — Plus Jakarta Sans, dilimler, swap + Jakarta Yedek ölçüleri, ölçek tablosu, `etiket`; (5) köşe/gölge/ışık — üç köşe, dört gölge ve rolleri, `isik` yalnızca hangi bloklarda; (6) bileşen kuralları — yatay hizmet kartı, `HizmetIzgarasi` sütun kuralı, açık/kapalı çipi ve CLS gerekçesi, form alanı kenarı 3:1; (7) etkileşim — eski bölüm, "yalnızca renk" → "renk ve gölge"; (8) "Uydurmama sözleşmesi" ve "Eksik veri nasıl görünür" bölümleri **aynen** korunur.

- [ ] **Step 2: `CLAUDE.md` güncellemeleri**

1. "Tasarım sistemi" → "Özet" paragrafı: `**Flat Design + Trust & Authority.** … Gölge yok, gradient yok, tek vurgu rengi (turuncu), köşe yalnızca 6/12 px, ikonlar dolu renk kaplarında.` → yeni özet: Gece Mavisi (02.10.2026); lacivert bloklar + rolüne göre gölgeli kartlar; turuncu yalnızca arama eylemi, lacivert yazıyla; açık zeminde kobalt; köşe 10/16/20; Plus Jakarta Sans kendi sunucumuzdan; hero'da tek ışık lekesi; açık/kapalı çipi.
2. "Performans bütçesi" bölümüne yeni alt başlık: **"Gece Mavisi sonrası — 02.10.2026"**: Görev 9 Adım 4 tablosu (taban ↔ son, LCP/CLS/FCP/aktarım), font dosyaları ve bitiş süreleri, yöntem notu (yerel önizleme, Brotli yok — mutlak KB canlıdan büyük, karşılaştırma göreli).
3. "Kendi kaynaklarımızda dış istek sıfır: CSS tamamen inline, yazı tipi indirilmiyor" cümlesi → "yazı tipi **kendi alan adımızdan** iniyor (2 dosya, 48 KB), dış istek yine sıfır".
4. Panel → "Tetiği sahibi çekecek" tablosundaki **D1** satırı ve "D. İçerik" → **D1** maddesi: `[x]` — karar tersine döndü, gerekçe + ölçüm.
5. Durum tablosu → Performans satırları: sayfa ağırlığı ve JS yeni değerlerle.
6. "Ölçümleme" bölümüne **çerez bandı hata kaydı**: sorun (bant mobilde "Hemen Ara" çubuğunu örtüyordu), kök neden (alttan dolgu + z-50), çözüm (`bottom` ile çubuğun üstüne), doğrulama (`bant-test`: `araUstte: true`), tarih.
7. "Para sayfası iskeleti" → blok sırası değişmedi notu + "Hero'da açık/kapalı çipi (02.10.2026)" bir paragraf: saat metni kalıbı, Türkiye saati, `lib/acikDurum.ts`, `npm test`.
8. "Komutlar" bölümü: `npm test   # açık/kapalı çipi mantığı (node --test, 8 test)` satırı eklenir; "Test altyapısı yok" cümlesi → "Test altyapısı yalnızca saf fonksiyonlar için (`node --test`, paket yok)".

- [ ] **Step 3: Build ve commit**

```bash
npm run build 2>&1 | grep -E "page\(s\) built" && git add design-system/MASTER.md CLAUDE.md && git commit -m "$(cat <<'EOF'
Belgeler: Gece Mavisi tasarım sistemi, ölçümler, çerez bandı hata kaydı

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 4: `main`'e birleştir (push YOK)**

```bash
git switch main && git merge --ff-only tasarim/gece-mavisi && git log --oneline -12
```
Expected: hızlı ileri alma, dal commit'leri `main`'de.

- [ ] **Step 5: Sahibine rapor ve canlıya alma onayı**

Rapor (Türkçe, ürün diliyle): ne değişti; önce/sonra ekran görüntüleri (Artifact sayfası olarak — 390 ve 1280 ana sayfa + Seyhan klima); ölçümler sayılarla (testler 8/8, çip 12/12, denetim FARK YOK 74 sayfa, taşma 0/30, kontrast, LCP/CLS önce→sonra); bulunan çerez bandı hatası; **push için açık onay sorusu**. Onay gelirse push, ardından CLAUDE.md "Çalışma şekli" kuralı: dört yüzey (telefon · WhatsApp · form · `data-olay`) canlıdan **gerçek tarayıcıyla** sayılır ve sonuç CLAUDE.md'ye yazılır.
