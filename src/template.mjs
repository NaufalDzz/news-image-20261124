// Editorial broadsheet HTML/CSS layout for 1024x1024 deterministic PNG rendering.
// Engineered for thumbnail-scale legibility (~300px) with full-width Day-in-Numbers strip,
// 3 wide hero cards, 10 illustrated grid cards, accurate world map, and tabular 22-item digest.
import {
  EDITION,
  REGIONS,
  UTC_TIMELINE,
  NUMBERS_STRIP,
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

const STATUS_CLASS = {
  CONFIRMED: 'st-confirmed',
  OFFICIAL: 'st-official',
  REPORTED: 'st-reported',
  CLAIM: 'st-claim',
};

export function buildBroadsheetHtml() {
  const { total, counts } = computeRegionCounts();
  const regionColorMap = Object.fromEntries(REGIONS.map((r) => [r.id, r.color]));
  const allStories = [...HERO_STORIES, ...GRID_STORIES, ...DIGEST_STORIES];

  const utcItems = UTC_TIMELINE.map(
    (u) => `<span class="utc-item"><b>${esc(u.time)}</b> ${esc(u.text)}</span>`
  ).join('<span class="utc-sep">&middot;</span>');

  const numbersHtml = NUMBERS_STRIP.map(
    (n) => `
      <div class="kpi-cell">
        <div class="kpi-val" style="color:${n.accent}">${esc(n.value)}</div>
        <div class="kpi-lbl">${esc(n.label)}</div>
      </div>`
  ).join('');

  const regionPills = REGIONS.map(
    (r) =>
      `<div class="rpill" style="background:${r.color}"><span class="rname">${esc(r.label)}</span><span class="rcnt">${counts[r.id]}</span></div>`
  ).join('');

  const heroCards = HERO_STORIES.map((s) => {
    const col = regionColorMap[s.region];
    const stCls = STATUS_CLASS[s.status] || 'st-reported';
    return `
      <article class="hero-card">
        <div class="hero-art">${renderHeroArt(s.art, s.banner, s.statPill)}</div>
        <div class="card-meta">
          <div class="meta-left">
            <span class="num-dot" style="background:${col}">${s.num}</span>
            <span class="loc-txt">${esc(s.location)}</span>
            <span class="meta-sep">&middot;</span>
            <span class="kicker" style="color:${col}">${esc(s.kicker.split('\u00b7')[1]?.trim() || s.kicker)}</span>
          </div>
          <span class="st-pill ${stCls}">${esc(s.status)}</span>
        </div>
        <div class="hero-body">
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
        const stCls = STATUS_CLASS[s.status] || 'st-reported';
        return `
        <article class="grid-card">
          <div class="grid-art">${renderGridArt(s.art, s.banner, s.statPill)}</div>
          <div class="card-meta sm">
            <div class="meta-left">
              <span class="num-dot sm" style="background:${col}">${s.num}</span>
              <span class="loc-txt sm">${esc(s.location)}</span>
            </div>
            <span class="st-pill sm ${stCls}">${esc(s.status)}</span>
          </div>
          <div class="grid-body">
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
        const badge =
          d.status === 'CLAIM'
            ? `<span class="d-claim">CLAIM</span>`
            : d.status === 'REPORTED'
              ? `<span class="d-rep">REP</span>`
              : '';
        return `
        <div class="d-row">
          <span class="d-num" style="background:${col}">${d.num}</span>
          <div class="d-txt"><b>${esc(d.place)}</b> ${esc(d.text)}${badge}</div>
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
  }
  .page {
    width: 1024px;
    height: 1024px;
    display: flex;
    flex-direction: column;
    background: #FAF6EE;
  }
  /* Eyebrow */
  .eyebrow {
    height: 18px;
    background: #131F33;
    color: #F8FAFC;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 11px;
    font-size: 8.8px;
    font-weight: 800;
    letter-spacing: 0.65px;
  }
  .eyebrow .mid { color: #FDE68A; letter-spacing: 0.45px; }

  /* Masthead */
  .masthead {
    padding: 0 10px 1px;
    text-align: center;
    border-bottom: 2.5px solid #131F33;
  }
  .masthead h1 {
    font-family: "Noto Serif Display", "Noto Serif", "C059", Georgia, serif;
    font-size: 62px;
    font-weight: 900;
    line-height: 0.99;
    letter-spacing: -1.3px;
    color: #0F172A;
    transform: scaleX(1.035);
  }
  .deck {
    margin: 2px 10px 3px;
    text-align: center;
    font-family: "Noto Serif", "C059", Georgia, serif;
    font-style: italic;
    font-weight: 700;
    font-size: 11.4px;
    color: #991B1B;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* UTC Chronology Strip */
  .utc-bar {
    margin: 0 10px 3.5px;
    height: 18px;
    background: #13223A;
    color: #F1F5F9;
    border-radius: 2px;
    display: flex;
    align-items: center;
    padding: 0 7px 0 0;
    font-size: 8.45px;
    overflow: hidden;
  }
  .utc-badge {
    background: #B91C1C;
    color: #FFFFFF;
    font-weight: 900;
    font-size: 8.1px;
    letter-spacing: 0.45px;
    padding: 0 6px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 6px;
    border-radius: 2px 0 0 2px;
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
  .utc-sep { color: #64748B; margin: 0 2px; }

  /* Horizontal THE DAY IN NUMBERS Ribbon (300px legible!) */
  .kpi-ribbon {
    margin: 0 10px 3.5px;
    height: 39px;
    background: #FFFFFF;
    border: 1px solid #CFC6B2;
    border-top: 2px solid #13223A;
    border-radius: 2px;
    display: grid;
    grid-template-columns: 74px repeat(6, 1fr);
    align-items: center;
    overflow: hidden;
  }
  .kpi-title {
    height: 100%;
    background: #F2ECE0;
    border-right: 1px solid #D5CCB8;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 7.9px;
    font-weight: 900;
    line-height: 1.12;
    letter-spacing: 0.35px;
    color: #131F33;
    padding: 0 4px;
  }
  .kpi-cell {
    padding: 2px 5px;
    text-align: center;
    border-right: 1px solid #E5DEC9;
  }
  .kpi-cell:last-child { border-right: none; }
  .kpi-val {
    font-family: "Noto Serif", "C059", Georgia, serif;
    font-size: 18.2px;
    font-weight: 900;
    line-height: 1.02;
    letter-spacing: -0.35px;
  }
  .kpi-lbl {
    font-size: 7.35px;
    font-weight: 700;
    line-height: 1.12;
    color: #334155;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Region Pills */
  .regions {
    display: flex;
    gap: 3.5px;
    padding: 0 10px 4px;
  }
  .rpill {
    flex: 1;
    height: 16px;
    border-radius: 2px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 8.0px;
    font-weight: 800;
    letter-spacing: 0.28px;
  }
  .rcnt {
    background: rgba(255,255,255,0.22);
    padding: 0 4px;
    border-radius: 2px;
    font-weight: 900;
  }

  /* Main body */
  .body-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 10px;
  }

  /* Hero Row: 3 FULL-WIDTH DRAMATIC CARDS */
  .hero-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    height: 204px;
  }
  .hero-card, .grid-card {
    background: #FFFDF9;
    border: 1px solid #CFC6B2;
    border-radius: 2.5px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .hero-art { height: 92px; border-bottom: 1px solid #D5CCB8; flex-shrink: 0; }
  .grid-art { height: 63px; border-bottom: 1px solid #D5CCB8; flex-shrink: 0; }
  .hero-art svg, .grid-art svg { display: block; width: 100%; height: 100%; }

  /* Card Metadata Strip */
  .card-meta {
    height: 17px;
    padding: 0 6px;
    background: #F4EFE3;
    border-bottom: 1px solid #E5DEC9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    flex-shrink: 0;
  }
  .card-meta.sm { height: 15px; padding: 0 4.5px; }
  .meta-left {
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    overflow: hidden;
  }
  .num-dot {
    width: 13px;
    height: 13px;
    border-radius: 2px;
    color: #FFFFFF;
    font-size: 8.0px;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .num-dot.sm { width: 11.5px; height: 11.5px; font-size: 7.3px; }
  .loc-txt {
    font-size: 8.0px;
    font-weight: 900;
    letter-spacing: 0.3px;
    color: #1E293B;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .loc-txt.sm { font-size: 7.3px; letter-spacing: 0.2px; }
  .meta-sep { color: #94A3B8; font-size: 8px; }
  .kicker {
    font-size: 7.6px;
    font-weight: 900;
    letter-spacing: 0.35px;
    white-space: nowrap;
  }

  /* Crisp Verification Status Pill in Meta Strip */
  .st-pill {
    font-size: 6.7px;
    font-weight: 900;
    letter-spacing: 0.3px;
    padding: 1px 4px;
    border-radius: 2px;
    border: 1px solid currentColor;
    flex-shrink: 0;
    line-height: 1.05;
  }
  .st-pill.sm { font-size: 6.2px; padding: 0.5px 3px; }
  .st-confirmed { color: #166534; background: #DCFCE7; border-color: #86EFAC; }
  .st-official { color: #1E40AF; background: #DBEAFE; border-color: #93C5FD; }
  .st-reported { color: #334155; background: #E2E8F0; border-color: #94A3B8; }
  .st-claim { color: #9A3412; background: #FFEDD5; border-color: #FDBA74; }

  .hero-body {
    flex: 1;
    padding: 4.5px 7px 4px;
    display: flex;
    flex-direction: column;
  }
  .hero-h {
    font-family: "Noto Serif", "C059", Georgia, serif;
    font-size: 16.0px;
    font-weight: 900;
    line-height: 1.11;
    color: #0F172A;
    margin-bottom: 3px;
  }
  .hero-p {
    font-size: 8.75px;
    line-height: 1.22;
    color: #273549;
    flex: 1;
  }
  .src-line {
    font-size: 7.2px;
    font-weight: 700;
    color: #64748B;
    margin-top: 2px;
  }
  .src-line.sm { font-size: 6.8px; }

  /* 2 Rows x 5 Wide Grid Cards */
  .grid-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5.5px;
    height: 152px;
  }
  .grid-body {
    flex: 1;
    padding: 3.5px 5.5px 3px;
    display: flex;
    flex-direction: column;
  }
  .grid-h {
    font-family: "Noto Serif", "C059", Georgia, serif;
    font-size: 12.1px;
    font-weight: 900;
    line-height: 1.11;
    color: #0F172A;
    margin-bottom: 2px;
  }
  .grid-p {
    font-size: 8.0px;
    line-height: 1.18;
    color: #273549;
    flex: 1;
  }

  /* Lower Band: Accurate World Map + Crisp Tabular 2-Col Digest */
  .lower-band {
    display: grid;
    grid-template-columns: 314px 1fr;
    gap: 6px;
    flex: 1;
    min-height: 214px;
  }
  .map-box, .digest-box {
    background: #FFFDF9;
    border: 1px solid #CFC6B2;
    border-radius: 2.5px;
    padding: 4px 5px 4px;
    display: flex;
    flex-direction: column;
  }
  .sec-hdr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1.5px solid #131F33;
    padding-bottom: 2px;
    margin-bottom: 4px;
    font-size: 8.6px;
    font-weight: 900;
    letter-spacing: 0.45px;
    color: #131F33;
  }
  .sec-hdr span.sub { font-weight: 700; color: #64748B; font-size: 7.5px; letter-spacing: 0.2px; }
  .digest-cols {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;
  }
  .d-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .d-row {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 8.25px;
    line-height: 1.18;
    border-bottom: 1px dotted #E5DEC9;
    padding: 1px 0 2px;
  }
  .d-row:last-child { border-bottom: none; padding-bottom: 0; }
  .d-num {
    width: 13.5px;
    height: 12.5px;
    border-radius: 2px;
    color: #FFFFFF;
    font-size: 7.2px;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .d-txt {
    color: #1E293B;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .d-txt b { color: #0F172A; font-weight: 900; margin-right: 2px; }
  .d-src {
    font-size: 6.7px;
    font-weight: 800;
    color: #64748B;
    background: #F1ECE1;
    padding: 0 3px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .d-claim, .d-rep {
    display: inline-block;
    margin-left: 3px;
    padding: 0 2.5px;
    border-radius: 2px;
    font-size: 6.2px;
    font-weight: 900;
    color: #FFFFFF;
    vertical-align: middle;
  }
  .d-claim { background: #C2410C; }
  .d-rep { background: #475569; }

  /* Date Check Audit Box */
  .date-check {
    margin: 4px 10px 2px;
    padding: 3.5px 7px;
    background: #FFF7F5;
    border: 1.5px solid #B91C1C;
    border-radius: 2.5px;
    display: flex;
    gap: 7px;
    align-items: center;
    height: 46px;
  }
  .dc-badge {
    background: #B91C1C;
    color: #FFFFFF;
    font-size: 8.4px;
    font-weight: 900;
    letter-spacing: 0.4px;
    padding: 4px 6px;
    border-radius: 2px;
    text-align: center;
    line-height: 1.1;
    flex-shrink: 0;
  }
  .dc-text {
    font-size: 7.55px;
    line-height: 1.23;
    color: #1E293B;
  }
  .dc-text b.inc { color: #131F33; }
  .dc-text b.exc { color: #991B1B; }

  /* Legend Footer */
  .legend {
    height: 16px;
    padding: 0 10px 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 7.1px;
    color: #475569;
  }
  .leg-pills { display: flex; align-items: center; gap: 6px; }
  .lp {
    display: inline-block;
    padding: 0.5px 3.5px;
    border-radius: 2px;
    font-weight: 900;
    font-size: 6.5px;
    margin-right: 2px;
    border: 1px solid currentColor;
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

  <div class="utc-bar">
    <div class="utc-badge">UTC</div>
    <div class="utc-strip">${utcItems}</div>
  </div>

  <section class="kpi-ribbon">
    <div class="kpi-title">THE DAY IN<br/>NUMBERS</div>
    ${numbersHtml}
  </section>

  <div class="regions">${regionPills}</div>

  <div class="body-wrap">
    <section class="hero-row">${heroCards}</section>
    <section class="grid-row">${makeGridRow(GRID_STORIES.slice(0, 5))}</section>
    <section class="grid-row">${makeGridRow(GRID_STORIES.slice(5, 10))}</section>

    <section class="lower-band">
      <div class="map-box">
        <div class="sec-hdr"><span>WHERE IT HAPPENED</span><span class="sub">Exact city pins</span></div>
        ${renderWorldMap(allStories, regionColorMap)}
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
      <span><b class="lp st-confirmed">CONFIRMED</b>2+ wires</span>
      <span><b class="lp st-official">OFFICIAL</b>govt/court/agency</span>
      <span><b class="lp st-reported">REPORTED</b>single outlet</span>
      <span><b class="lp st-claim">CLAIM</b>one side\u2019s account</span>
    </div>
    <div>Original vector illustrations &amp; map drawn in code &middot; Sources: BBC, Guardian, NYT, Al Jazeera, France24, CNA, CNBC, AP, The Hindu, USGS</div>
  </footer>
</main>
</body>
</html>`;
}
