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
