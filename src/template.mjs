// Editorial broadsheet HTML/CSS template for 1024x1024 exact PNG rendering.
import {
  EDITION,
  REGIONS,
  UTC_TIMELINE,
  NUMBERS_PANEL,
  HERO_STORIES,
  GRID_STORIES,
  DIGEST_STORIES,
  computeRegionCounts,
} from './stories.mjs';
import { renderHeroArt, renderGridArt, renderWorldMap } from './illustrations.mjs';

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function buildBroadsheetHtml() {
  const { total, counts } = computeRegionCounts();
  const regionColorMap = Object.fromEntries(REGIONS.map((r) => [r.id, r.color]));
  const allPinned = [...HERO_STORIES, ...GRID_STORIES, ...DIGEST_STORIES];

  const regionPills = REGIONS.map(
    (r) =>
      `<div class="rpill" style="background:${r.color}"><span class="rname">${esc(r.label)}</span><span class="rcnt">${counts[r.id]}</span></div>`
  ).join('');

  const utcItems = UTC_TIMELINE.map(
    (u) => `<span class="utc-item"><b>${esc(u.time)}</b> ${esc(u.text)}</span>`
  ).join('<span class="utc-sep">&middot;</span>');

  const heroCards = HERO_STORIES.map((s) => {
    const col = regionColorMap[s.region];
    return `
      <article class="hero-card">
        <div class="card-loc">
          <span class="num-dot" style="background:${col}">${s.num}</span>
          <span class="loc-txt">${esc(s.location)}</span>
        </div>
        <div class="hero-art">${renderHeroArt(s.art, s.status)}</div>
        <div class="hero-body">
          <div class="kicker" style="color:${col}">${esc(s.kicker)}</div>
          <h2 class="hero-h">${esc(s.headline)}</h2>
          <p class="hero-p">${esc(s.body)}</p>
          <div class="src-line">${esc(s.sources)}</div>
        </div>
      </article>`;
  }).join('');

  const numbersHtml = NUMBERS_PANEL.map(
    (n) => `
      <div class="num-row">
        <div class="num-val">${esc(n.value)}</div>
        <div class="num-lbl">${esc(n.label)}</div>
      </div>`
  ).join('');

  const makeGridRow = (items) =>
    items
      .map((s) => {
        const col = regionColorMap[s.region];
        return `
        <article class="grid-card">
          <div class="card-loc sm">
            <span class="num-dot sm" style="background:${col}">${s.num}</span>
            <span class="loc-txt">${esc(s.location)}</span>
          </div>
          <div class="grid-art">${renderGridArt(s.art, s.status)}</div>
          <div class="grid-body">
            <div class="kicker sm" style="color:${col}">${esc(s.kicker)}</div>
            <h3 class="grid-h">${esc(s.headline)}</h3>
            <p class="grid-p">${esc(s.body)}</p>
            <div class="src-line sm">${esc(s.sources)}</div>
          </div>
        </article>`;
      })
      .join('');

  const mid = Math.ceil(DIGEST_STORIES.length / 2);
  const digestCol1 = DIGEST_STORIES.slice(0, mid);
  const digestCol2 = DIGEST_STORIES.slice(mid);

  const renderDigestCol = (items) =>
    items
      .map((d) => {
        const col = regionColorMap[d.region];
        const tag =
          d.status === 'CLAIM'
            ? `<span class="mini-tag claim">CLAIM</span>`
            : d.status === 'REPORTED'
              ? `<span class="mini-tag rep">REPORTED</span>`
              : '';
        return `
        <div class="d-row">
          <span class="d-num" style="background:${col}">${d.num}</span>
          <div class="d-txt"><b>${esc(d.place)}:</b> ${esc(d.text)} <span class="d-src">${esc(d.source)}</span>${tag}</div>
        </div>`;
      })
      .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>${esc(EDITION.dateLabel)} \u2014 The World in One Day</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1024px;
    height: 1024px;
    overflow: hidden;
    background: #FBF8F1;
    color: #141D2E;
    font-family: "Noto Sans", "DejaVu Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    width: 1024px;
    height: 1024px;
    display: flex;
    flex-direction: column;
    background: #FBF8F1;
  }
  /* Top Eyebrow */
  .eyebrow {
    height: 20px;
    background: #141D2E;
    color: #F8FAFC;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    font-size: 9.2px;
    font-weight: 800;
    letter-spacing: 0.7px;
  }
  .eyebrow .mid { color: #FDE68A; letter-spacing: 0.5px; }

  /* Masthead — huge full-width serif headline for 300px thumbnail dominance */
  .masthead {
    padding: 0 10px 2px;
    text-align: center;
    border-bottom: 2.5px solid #141D2E;
  }
  .masthead h1 {
    font-family: "Noto Serif Display", "Noto Serif", "C059", Georgia, serif;
    font-size: 67px;
    font-weight: 900;
    line-height: 0.99;
    letter-spacing: -1.4px;
    color: #0F172A;
    transform: scaleX(1.03);
  }
  .deck {
    margin: 3px 10px 4px;
    text-align: center;
    font-family: "Noto Serif", "C059", Georgia, serif;
    font-style: italic;
    font-weight: 700;
    font-size: 11.7px;
    color: #991B1B;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Region Pills */
  .regions {
    display: flex;
    gap: 4px;
    padding: 0 10px 4px;
  }
  .rpill {
    flex: 1;
    height: 17px;
    border-radius: 2.5px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 8.4px;
    font-weight: 800;
    letter-spacing: 0.3px;
  }
  .rcnt {
    background: rgba(255,255,255,0.22);
    padding: 0 4px;
    border-radius: 2px;
    font-weight: 900;
  }

  /* UTC Bar */
  .utc-bar {
    margin: 0 10px 5px;
    height: 19px;
    background: #14233C;
    color: #F1F5F9;
    border-radius: 2.5px;
    display: flex;
    align-items: center;
    padding: 0 7px 0 0;
    font-size: 8.6px;
    overflow: hidden;
  }
  .utc-badge {
    background: #B91C1C;
    color: #FFFFFF;
    font-weight: 900;
    font-size: 8.5px;
    letter-spacing: 0.5px;
    padding: 0 7px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 7px;
    border-radius: 2.5px 0 0 2.5px;
  }
  .utc-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    white-space: nowrap;
  }
  .utc-item b { color: #FDE047; margin-right: 2px; }
  .utc-sep { color: #64748B; margin: 0 3px; }

  /* Main content container */
  .body-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 10px;
  }

  /* Hero Row: 3 cards + Dark Navy Numbers panel */
  .hero-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 184px;
    gap: 6px;
    height: 224px;
  }
  .hero-card, .grid-card {
    background: #FFFDF9;
    border: 1px solid #D5CCB8;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .card-loc {
    height: 18px;
    padding: 0 6px;
    background: #F4EFE3;
    border-bottom: 1px solid #E2DAC7;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .card-loc.sm { height: 16px; padding: 0 5px; gap: 4px; }
  .num-dot {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 8.2px;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .num-dot.sm { width: 12px; height: 12px; font-size: 7.6px; }
  .loc-txt {
    font-size: 8.3px;
    font-weight: 800;
    letter-spacing: 0.35px;
    color: #1E293B;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .hero-art { height: 88px; border-bottom: 1px solid #E5DEC9; flex-shrink: 0; }
  .hero-art svg, .grid-art svg { display: block; }
  .hero-body {
    flex: 1;
    padding: 5px 7px 4px;
    display: flex;
    flex-direction: column;
  }
  .kicker {
    font-size: 7.8px;
    font-weight: 900;
    letter-spacing: 0.45px;
    margin-bottom: 2px;
  }
  .kicker.sm { font-size: 7.2px; margin-bottom: 1.5px; }
  .hero-h {
    font-family: "Noto Serif", "C059", Georgia, serif;
    font-size: 15.2px;
    font-weight: 900;
    line-height: 1.12;
    color: #0F172A;
    margin-bottom: 3px;
  }
  .hero-p {
    font-size: 8.9px;
    line-height: 1.24;
    color: #273549;
    flex: 1;
  }
  .src-line {
    font-size: 7.4px;
    font-weight: 700;
    color: #64748B;
    margin-top: 2px;
  }
  .src-line.sm { font-size: 7.0px; }

  /* Numbers Panel */
  .numbers-panel {
    background: #14233C;
    color: #F8FAFC;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #0F172A;
  }
  .numbers-hdr {
    background: #A61C1C;
    color: #FFFFFF;
    font-size: 9.2px;
    font-weight: 900;
    letter-spacing: 0.6px;
    padding: 3.5px 7px;
  }
  .numbers-body {
    flex: 1;
    padding: 4px 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .num-row {
    border-bottom: 1px solid rgba(148,163,184,0.24);
    padding-bottom: 2px;
  }
  .num-row:last-child { border-bottom: none; padding-bottom: 0; }
  .num-val {
    font-family: "Noto Serif", "C059", Georgia, serif;
    font-size: 16.2px;
    font-weight: 900;
    line-height: 1.02;
    color: #FDE047;
  }
  .num-lbl {
    font-size: 7.6px;
    line-height: 1.14;
    color: #CBD5E1;
  }

  /* Middle Grid Rows (2 rows x 5 cards) */
  .grid-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5.5px;
    height: 161px;
  }
  .grid-art { height: 64px; border-bottom: 1px solid #E5DEC9; flex-shrink: 0; }
  .grid-body {
    flex: 1;
    padding: 3.5px 5.5px 3px;
    display: flex;
    flex-direction: column;
  }
  .grid-h {
    font-family: "Noto Serif", "C059", Georgia, serif;
    font-size: 11.7px;
    font-weight: 900;
    line-height: 1.12;
    color: #0F172A;
    margin-bottom: 2.5px;
  }
  .grid-p {
    font-size: 8.15px;
    line-height: 1.20;
    color: #273549;
    flex: 1;
  }

  /* Lower Band: Map + 2-Col Digest */
  .lower-band {
    display: grid;
    grid-template-columns: 288px 1fr;
    gap: 7px;
    flex: 1;
    min-height: 200px;
  }
  .map-box, .digest-box {
    background: #FFFDF9;
    border: 1px solid #D5CCB8;
    border-radius: 3px;
    padding: 4px 6px 5px;
    display: flex;
    flex-direction: column;
  }
  .sec-hdr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1.5px solid #141D2E;
    padding-bottom: 2px;
    margin-bottom: 4px;
    font-size: 8.8px;
    font-weight: 900;
    letter-spacing: 0.45px;
    color: #141D2E;
  }
  .sec-hdr span.sub { font-weight: 700; color: #64748B; font-size: 7.8px; letter-spacing: 0.2px; }
  .digest-cols {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .d-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .d-row {
    display: flex;
    align-items: flex-start;
    gap: 4px;
    font-size: 8.15px;
    line-height: 1.18;
  }
  .d-num {
    width: 13px;
    height: 12px;
    border-radius: 2px;
    color: #FFFFFF;
    font-size: 7.2px;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .d-txt { color: #1E293B; }
  .d-txt b { color: #0F172A; }
  .d-src { color: #64748B; font-style: italic; font-size: 7.3px; }
  .mini-tag {
    display: inline-block;
    margin-left: 3px;
    padding: 0 3px;
    border-radius: 2px;
    font-size: 6.5px;
    font-weight: 900;
    color: #FFFFFF;
    vertical-align: middle;
  }
  .mini-tag.claim { background: #D97706; }
  .mini-tag.rep { background: #475569; }

  /* Date Check Audit Box */
  .date-check {
    margin: 5px 10px 3px;
    padding: 4px 7px;
    background: #FFF7F5;
    border: 1.5px solid #B91C1C;
    border-radius: 3px;
    display: flex;
    gap: 7px;
    align-items: center;
    height: 49px;
  }
  .dc-badge {
    background: #B91C1C;
    color: #FFFFFF;
    font-size: 8.6px;
    font-weight: 900;
    letter-spacing: 0.4px;
    padding: 4px 6px;
    border-radius: 2px;
    text-align: center;
    line-height: 1.1;
    flex-shrink: 0;
  }
  .dc-text {
    font-size: 7.65px;
    line-height: 1.24;
    color: #1E293B;
  }
  .dc-text b.inc { color: #141D2E; }
  .dc-text b.exc { color: #991B1B; }

  /* Micro Legend Footer */
  .legend {
    height: 16px;
    padding: 0 10px 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 7.3px;
    color: #475569;
  }
  .leg-pills { display: flex; align-items: center; gap: 6px; }
  .lp {
    display: inline-block;
    padding: 0.5px 4px;
    border-radius: 2px;
    color: #FFFFFF;
    font-weight: 900;
    font-size: 6.8px;
    margin-right: 2px;
  }
</style>
</head>
<body>
<main class="page">
  <header class="eyebrow">
    <span>${esc(EDITION.eyebrowLeft)}</span>
    <span class="mid">${total} DATED STORIES &middot; ${REGIONS.length} REGIONS &middot; EVERY ONE DATED ${esc(EDITION.dateLabel.toUpperCase())}</span>
    <span>${esc(EDITION.eyebrowRight)}</span>
  </header>

  <section class="masthead">
    <h1>${esc(EDITION.dateLabel)}</h1>
  </section>

  <div class="deck">${esc(EDITION.standfirst)}</div>
  <div class="regions">${regionPills}</div>

  <div class="utc-bar">
    <div class="utc-badge">UTC</div>
    <div class="utc-strip">${utcItems}</div>
  </div>

  <div class="body-wrap">
    <section class="hero-row">
      ${heroCards}
      <aside class="numbers-panel">
        <div class="numbers-hdr">THE DAY IN NUMBERS</div>
        <div class="numbers-body">${numbersHtml}</div>
      </aside>
    </section>

    <section class="grid-row">${makeGridRow(GRID_STORIES.slice(0, 5))}</section>
    <section class="grid-row">${makeGridRow(GRID_STORIES.slice(5, 10))}</section>

    <section class="lower-band">
      <div class="map-box">
        <div class="sec-hdr"><span>WHERE IT HAPPENED</span><span class="sub">20 global pins</span></div>
        ${renderWorldMap(allPinned, regionColorMap)}
      </div>
      <div class="digest-box">
        <div class="sec-hdr"><span>ALSO ON TUESDAY 24 NOVEMBER \u2014 ${DIGEST_STORIES.length} MORE DATED STORIES</span><span class="sub">All 24 Nov 2026 UTC &middot; ${REGIONS.length} regions</span></div>
        <div class="digest-cols">
          <div class="d-col">${renderDigestCol(digestCol1)}</div>
          <div class="d-col">${renderDigestCol(digestCol2)}</div>
        </div>
      </div>
    </section>
  </div>

  <section class="date-check">
    <div class="dc-badge">DATE<br/>CHECK</div>
    <div class="dc-text">
      <b class="inc">Included:</b> ${esc(EDITION.dateAuditIncluded)}
      <b class="exc">Excluded as earlier days\u2019 news:</b> ${esc(EDITION.dateAuditExcluded)}
    </div>
  </section>

  <footer class="legend">
    <div class="leg-pills">
      <span><b class="lp" style="background:#15803D">CONFIRMED</b>2+ wires</span>
      <span><b class="lp" style="background:#1D4ED8">OFFICIAL</b>govt/court/agency</span>
      <span><b class="lp" style="background:#475569">REPORTED</b>single outlet</span>
      <span><b class="lp" style="background:#D97706">CLAIM</b>one side\u2019s account</span>
    </div>
    <div>Original vector illustrations &amp; map drawn in code &middot; Sources: BBC, Guardian, NYT, Al Jazeera, France24, CNA, CNBC, AP, USGS, RNZ</div>
  </footer>
</main>
</body>
</html>`;
}
