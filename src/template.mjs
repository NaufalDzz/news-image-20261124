// Editorial broadsheet HTML/CSS layout for 1024x1024 deterministic PNG rendering.
// Pass 2: zero DOM overflow/clipping across all elements, 2-line punchy headlines,
// balanced 276px map + 722px 2-column 22-story digest, and 9.2px OCR-safe DATE CHECK box.
import {
  EDITION,
  REGIONS,
  UTC_TIMELINE,
  NUMBERS_COLUMN,
  HERO_STORIES,
  GRID_STORIES,
  DIGEST_STORIES,
  computeRegionCounts,
} from './stories.mjs';
import { renderHeroArt, renderGridArt } from './illustrations.mjs';
import { renderWorldMap } from './worldmap.mjs';

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
  const allStories = [...HERO_STORIES, ...GRID_STORIES, ...DIGEST_STORIES];

  const regionPills = REGIONS.map(
    (r) =>
      `<div class="rpill" style="background:${r.color}"><span class="rname">${esc(r.label)}</span><span class="rcnt">${counts[r.id]}</span></div>`
  ).join('');

  const utcItems = UTC_TIMELINE.map(
    (u) => `<span class="utc-item"><b>${esc(u.time)}</b> ${esc(u.text)}</span>`
  ).join('<span class="utc-sep">&middot;</span>');

  const numbersHtml = NUMBERS_COLUMN.map(
    (n) => `
      <div class="num-item">
        <div class="num-val" style="color:${n.accent}">${esc(n.value)}</div>
        <div class="num-lbl">${esc(n.label)}</div>
      </div>`
  ).join('');

  const heroCards = HERO_STORIES.map((s) => {
    const col = regionColorMap[s.region];
    return `
      <article class="hero-card">
        <div class="hero-art">${renderHeroArt(s, col)}</div>
        <div class="hero-body">
          <div class="kicker" style="color:${col}">${esc(s.kicker)}</div>
          <h2 class="hero-h">${esc(s.headline)}</h2>
          <p class="hero-p">${esc(s.body)}</p>
          <div class="src-line">${esc(s.sources)}</div>
        </div>
      </article>`;
  }).join('');

  const makeGridRow = (items) =>
    items
      .map((s) => {
        const col = regionColorMap[s.region];
        return `
        <article class="grid-card">
          <div class="grid-art">${renderGridArt(s, col)}</div>
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
        const tag = d.status === 'CLAIM' ? ' <em class="d-claim">(claim)</em>' : '';
        return `
        <div class="d-row">
          <span class="d-num" style="background:${col}">${d.num}</span>
          <div class="d-txt"><b>${esc(d.place)}</b> ${esc(d.text)}${tag}</div>
          <span class="d-src">${esc(d.source)}</span>
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
    background: #FAF6EE;
    color: #141D2E;
    font-family: "Noto Sans", "DejaVu Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-variant-numeric: tabular-nums;
  }
  .page {
    width: 1024px;
    height: 1024px;
    display: flex;
    flex-direction: column;
    background: #FAF6EE;
  }

  /* Slim Newspaper Eyebrow */
  .eyebrow {
    height: 18px;
    background: #142238;
    color: #F8FAFC;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 9.0px;
    font-weight: 800;
    letter-spacing: 0.55px;
  }
  .eyebrow .mid { color: #FDE68A; }

  /* Oversized Print Masthead (zero transform or font-box overflow) */
  .masthead {
    padding: 0 10px 0;
    text-align: center;
    border-bottom: 2.5px solid #142238;
  }
  .masthead h1 {
    font-family: "Noto Serif Display", "Noto Serif", "C059", Georgia, serif;
    font-size: 60px;
    font-weight: 900;
    line-height: 1.22;
    letter-spacing: -1.0px;
    color: #0F172A;
  }
  .deck {
    margin: 2px 10px 3px;
    text-align: center;
    font-family: "Noto Serif", "C059", Georgia, serif;
    font-style: italic;
    font-weight: 700;
    font-size: 12.0px;
    line-height: 1.2;
    color: #991B1B;
    white-space: nowrap;
  }

  /* Compact 2-Strip Context Band: Region Pills + Single UTC Timeline */
  .regions {
    display: flex;
    gap: 3.5px;
    padding: 0 10px 3px;
  }
  .rpill {
    flex: 1;
    height: 16.5px;
    border-radius: 2.5px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 8.2px;
    font-weight: 800;
    letter-spacing: 0.25px;
  }
  .rcnt {
    background: rgba(255,255,255,0.24);
    padding: 0 4px;
    border-radius: 2px;
    font-weight: 900;
  }
  .utc-bar {
    margin: 0 10px 5px;
    height: 19px;
    background: #142238;
    color: #F1F5F9;
    border-radius: 2.5px;
    display: flex;
    align-items: center;
    padding: 0 7px 0 0;
    font-size: 8.8px;
  }
  .utc-badge {
    background: #B91C1C;
    color: #FFFFFF;
    font-weight: 900;
    font-size: 8.4px;
    letter-spacing: 0.4px;
    padding: 0 6.5px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 7px;
    border-radius: 2.5px 0 0 2.5px;
    flex-shrink: 0;
  }
  .utc-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    white-space: nowrap;
  }
  .utc-item b { color: #FDE047; margin-right: 1.5px; }
  .utc-sep { color: #64748B; }

  /* Main Broadsheet Canvas */
  .body-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5.5px;
    padding: 0 10px;
    min-height: 0;
  }

  /* Hero Row: 3 Spacious Lead Cards + Vertical Navy THE DAY IN NUMBERS Column */
  .hero-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 176px;
    gap: 6px;
    height: 226px;
  }
  .hero-card, .grid-card {
    background: #FFFDF9;
    border: 1px solid #CFC6B2;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-width: 0;
  }
  .hero-art { height: 86px; border-bottom: 1px solid #DCD4C0; flex-shrink: 0; }
  .grid-art { height: 58px; border-bottom: 1px solid #DCD4C0; flex-shrink: 0; }
  .hero-art svg, .grid-art svg { display: block; width: 100%; height: 100%; }

  .hero-body {
    flex: 1;
    padding: 4.5px 7px 4px;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  .kicker {
    font-size: 8.2px;
    font-weight: 900;
    letter-spacing: 0.4px;
    line-height: 1.15;
    margin-bottom: 2px;
  }
  .kicker.sm { font-size: 7.4px; letter-spacing: 0.3px; margin-bottom: 1.5px; }
  .hero-h {
    font-family: "Noto Serif", "C059", Georgia, serif;
    font-size: 19.5px;
    font-weight: 900;
    line-height: 1.2;
    color: #0F172A;
    margin-bottom: 3.5px;
  }
  .hero-p {
    font-size: 9.8px;
    line-height: 1.27;
    color: #273549;
    flex: 1;
  }
  .src-line {
    font-size: 7.9px;
    font-weight: 700;
    line-height: 1.2;
    color: #64748B;
    margin-top: 2px;
  }
  .src-line.sm { font-size: 7.1px; margin-top: 1px; }

  /* Vertical THE DAY IN NUMBERS Navy Column */
  .numbers-col {
    background: #142238;
    border: 1px solid #0F172A;
    border-radius: 3px;
    padding: 5px 8px 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #F8FAFC;
    min-width: 0;
  }
  .num-hdr {
    font-size: 9.0px;
    font-weight: 900;
    letter-spacing: 0.55px;
    color: #FFFFFF;
    border-bottom: 1.5px solid #3B82F6;
    padding-bottom: 2px;
    line-height: 1.2;
  }
  .num-item {
    border-bottom: 1px solid rgba(148,163,184,0.22);
    padding: 0.5px 0 1px;
  }
  .num-item:last-child { border-bottom: none; padding-bottom: 0; }
  .num-val {
    font-family: "Noto Sans", sans-serif;
    font-size: 15.2px;
    font-weight: 900;
    line-height: 1.32;
    letter-spacing: -0.25px;
  }
  .num-lbl {
    font-size: 7.8px;
    font-weight: 600;
    line-height: 1.2;
    color: #E2E8F0;
  }

  /* 2 Rows x 5 Airy Light-Art Secondary Cards */
  .grid-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 6px;
    height: 157px;
  }
  .grid-body {
    flex: 1;
    padding: 3.5px 6px 3px;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  .grid-h {
    font-family: "Noto Serif", "C059", Georgia, serif;
    font-size: 14.2px;
    font-weight: 900;
    line-height: 1.24;
    color: #0F172A;
    margin-bottom: 2px;
  }
  .grid-p {
    font-size: 8.6px;
    line-height: 1.22;
    color: #273549;
    flex: 1;
  }

  /* Lower Band: Non-Overlapping 15-Pin World Map + Crisp 22-Story Digest */
  .lower-band {
    display: grid;
    grid-template-columns: 278px 1fr;
    gap: 6px;
    flex: 1;
    min-height: 224px;
    min-width: 0;
  }
  .map-box, .digest-box {
    background: #FFFDF9;
    border: 1px solid #CFC6B2;
    border-radius: 3px;
    padding: 4.5px 6px 4px;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
  }
  .sec-hdr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1.6px solid #142238;
    padding-bottom: 2px;
    margin-bottom: 4px;
    font-size: 9.0px;
    font-weight: 900;
    letter-spacing: 0.4px;
    color: #142238;
    white-space: nowrap;
  }
  .sec-hdr span.sub { font-weight: 700; color: #64748B; font-size: 7.9px; letter-spacing: 0.1px; }
  .digest-cols {
    flex: 1;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 9px;
    min-width: 0;
  }
  .d-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
  }
  .d-row {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 9.4px;
    line-height: 1.26;
    border-bottom: 1px dotted #E2DAC4;
    padding: 0.5px 0 1.5px;
    min-width: 0;
  }
  .d-row:last-child { border-bottom: none; padding-bottom: 0; }
  .d-num {
    width: 14.5px;
    height: 13px;
    border-radius: 2px;
    color: #FFFFFF;
    font-size: 7.6px;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .d-txt {
    color: #1E293B;
    flex: 1;
    min-width: 0;
    white-space: nowrap;
  }
  .d-txt b { color: #0F172A; font-weight: 900; margin-right: 2px; }
  .d-claim { font-style: normal; font-weight: 800; color: #C2410C; font-size: 8.1px; }
  .d-src {
    font-size: 7.0px;
    font-weight: 800;
    color: #475569;
    background: #F1ECE1;
    padding: 0.5px 3px;
    border-radius: 2px;
    flex-shrink: 0;
  }

  /* OCR-Safe DATE CHECK Audit Box (>= 9.2px) */
  .date-check {
    margin: 4.5px 10px 2px;
    padding: 4px 8px;
    background: #FFF8F6;
    border: 1.6px solid #B91C1C;
    border-radius: 3px;
    display: flex;
    gap: 8px;
    align-items: center;
    height: 52px;
  }
  .dc-badge {
    background: #B91C1C;
    color: #FFFFFF;
    font-size: 8.8px;
    font-weight: 900;
    letter-spacing: 0.45px;
    padding: 5px 7px;
    border-radius: 2.5px;
    text-align: center;
    line-height: 1.12;
    flex-shrink: 0;
  }
  .dc-text {
    font-size: 9.2px;
    line-height: 1.24;
    color: #1E293B;
  }
  .dc-text b.inc { color: #0F172A; }
  .dc-text b.exc { color: #991B1B; }

  /* Crisp Legend Footer */
  .legend {
    height: 17px;
    padding: 0 10px 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 7.8px;
    color: #475569;
  }
  .leg-pills { display: flex; align-items: center; gap: 7px; }
  .lp {
    display: inline-block;
    padding: 0.5px 4px;
    border-radius: 2px;
    font-weight: 900;
    font-size: 6.8px;
    margin-right: 2.5px;
    color: #FFFFFF;
  }
  .lp-conf { background: #166534; }
  .lp-off { background: #1E40AF; }
  .lp-rep { background: #475569; }
  .lp-clm { background: #C2410C; }
</style>
</head>
<body>
<main class="page">
  <header class="eyebrow">
    <span>${esc(EDITION.eyebrowLeft)}</span>
    <span class="mid">${total} DATED STORIES &middot; ${REGIONS.length} REGIONS &middot; ALL FROM TUESDAY 24 NOVEMBER 2026</span>
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
      <aside class="numbers-col">
        <div class="num-hdr">THE DAY IN NUMBERS</div>
        ${numbersHtml}
      </aside>
    </section>

    <section class="grid-row">${makeGridRow(GRID_STORIES.slice(0, 5))}</section>
    <section class="grid-row">${makeGridRow(GRID_STORIES.slice(5, 10))}</section>

    <section class="lower-band">
      <div class="map-box">
        <div class="sec-hdr"><span>WHERE IT HAPPENED</span><span class="sub">15 spaced pins</span></div>
        ${renderWorldMap(allStories, regionColorMap)}
      </div>
      <div class="digest-box">
        <div class="sec-hdr"><span>ALSO ON TUESDAY 24 NOVEMBER &mdash; ${DIGEST_STORIES.length} MORE DATED STORIES</span><span class="sub">All 24 Nov 2026 UTC &middot; ${REGIONS.length} regions</span></div>
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
      <b class="exc">Excluded as earlier/later days&rsquo; news:</b> ${esc(EDITION.dateAuditExcluded)}
    </div>
  </section>

  <footer class="legend">
    <div class="leg-pills">
      <span><b class="lp lp-conf">CONFIRMED</b>2+ wires</span>
      <span><b class="lp lp-off">OFFICIAL</b>govt/court/agency</span>
      <span><b class="lp lp-rep">REPORTED</b>single outlet</span>
      <span><b class="lp lp-clm">CLAIM</b>one side&rsquo;s account</span>
    </div>
    <div>Original vector illustrations &amp; map drawn in code &middot; Sources: BBC, Guardian, NYT, Al Jazeera, F24, CNBC, CNA, AP, FIDE, USGS</div>
  </footer>
</main>
</body>
</html>`;
}
