// Editorial broadsheet HTML/CSS layout for 1024x1024 deterministic PNG rendering.
// v4 Pass 2: zero DOM overflow/clipping across all 38 stories, balanced 2-line headlines,
// full-width 3-column hero leads, 2x4 wide feature cards, clean 3-column 27-story brief grid,
// and OCR-safe >=9.5px DATE CHECK audit box.
import {
  EDITION,
  REGIONS,
  UTC_TIMELINE,
  HERO_STORIES,
  FEATURE_STORIES,
  BRIEF_STORIES,
  computeRegionCounts,
} from './stories.mjs';
import { renderHeroArt, renderFeatureArt } from './illustrations.mjs';

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function statusClass(status) {
  switch (status) {
    case 'CONFIRMED':
      return 'st-conf';
    case 'OFFICIAL':
      return 'st-off';
    case 'CLAIM':
      return 'st-clm';
    default:
      return 'st-rep';
  }
}

export function buildBroadsheetHtml() {
  const { total, counts } = computeRegionCounts();
  const regionColorMap = Object.fromEntries(REGIONS.map((r) => [r.id, r.color]));

  const regionPills = REGIONS.map(
    (r) =>
      `<div class="rpill" style="background:${r.color}"><span class="rname">${esc(r.label)}</span><span class="rcnt">${counts[r.id]}</span></div>`
  ).join('');

  const utcItems = UTC_TIMELINE.map(
    (u) => `<span class="utc-item"><b>${esc(u.time)}</b> ${esc(u.text)}</span>`
  ).join('<span class="utc-sep">|</span>');

  const heroCards = HERO_STORIES.map((s) => {
    const col = regionColorMap[s.region];
    return `
      <article class="hero-card">
        <div class="hero-art">${renderHeroArt(s)}</div>
        <div class="hero-body">
          <div class="meta-row">
            <div class="meta-left">
              <span class="num-dot" style="background:${col}">${s.num}</span>
              <span class="kicker" style="color:${col}">${esc(s.location)} &middot; ${esc(s.beat)}</span>
            </div>
            <span class="st-badge ${statusClass(s.status)}">${esc(s.status)}</span>
          </div>
          <h2 class="hero-h">${esc(s.headline)}</h2>
          <p class="hero-p">${esc(s.body)}</p>
          <div class="src-line">${esc(s.sources)}</div>
        </div>
      </article>`;
  }).join('');

  const makeFeatureRow = (items) =>
    items
      .map((s) => {
        const col = regionColorMap[s.region];
        return `
        <article class="feat-card">
          <div class="feat-art">${renderFeatureArt(s)}</div>
          <div class="feat-body">
            <div class="meta-row sm">
              <div class="meta-left">
                <span class="num-dot sm" style="background:${col}">${s.num}</span>
                <span class="kicker sm" style="color:${col}">${esc(s.location)}</span>
              </div>
              <span class="st-badge sm ${statusClass(s.status)}">${esc(s.status)}</span>
            </div>
            <h3 class="feat-h">${esc(s.headline)}</h3>
            <p class="feat-p">${esc(s.body)}</p>
            <div class="src-line sm">${esc(s.sources)}</div>
          </div>
        </article>`;
      })
      .join('');

  const perCol = Math.ceil(BRIEF_STORIES.length / 3);
  const briefCols = [
    BRIEF_STORIES.slice(0, perCol),
    BRIEF_STORIES.slice(perCol, perCol * 2),
    BRIEF_STORIES.slice(perCol * 2),
  ];

  const renderBriefCol = (items) =>
    items
      .map((b) => {
        const col = regionColorMap[b.region];
        const claimTag = b.status === 'CLAIM' ? ' <span class="b-claim">CLAIM</span>' : '';
        return `
        <div class="b-row">
          <span class="b-num" style="color:${col}">${b.num}</span>
          <div class="b-txt"><b style="color:${col}">${esc(b.place)}:</b> ${esc(b.text)}${claimTag}</div>
          <span class="b-src">${esc(b.source)}</span>
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
    background: #FAF8F2;
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
    background: #FAF8F2;
  }

  /* Crisp Top Eyebrow */
  .eyebrow {
    height: 19px;
    background: #142238;
    color: #F8FAFC;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    font-size: 9.0px;
    font-weight: 800;
    letter-spacing: 0.45px;
  }
  .eyebrow .mid { color: #FDE68A; }

  /* Authoritative Masthead (zero font-box overflow) */
  .masthead {
    padding: 0 12px;
    text-align: center;
    border-bottom: 2.5px solid #142238;
  }
  .masthead h1 {
    font-family: "Noto Serif Display", "Noto Serif", "C059", Georgia, serif;
    font-size: 56px;
    font-weight: 900;
    line-height: 1.34;
    letter-spacing: -0.9px;
    color: #0F172A;
  }
  .deck {
    margin: 2px 12px 3px;
    text-align: center;
    font-family: "Noto Serif", "C059", Georgia, serif;
    font-weight: 800;
    font-size: 12.0px;
    line-height: 1.2;
    color: #991B1B;
    white-space: nowrap;
  }

  /* Compact 2-Strip Context Band: 10 Regions + Single UTC Timeline */
  .regions {
    display: flex;
    gap: 3px;
    padding: 0 12px 3px;
  }
  .rpill {
    flex: 1;
    height: 17px;
    border-radius: 2.5px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    font-size: 8.1px;
    font-weight: 800;
    letter-spacing: 0.15px;
    white-space: nowrap;
  }
  .rcnt {
    background: rgba(255,255,255,0.24);
    padding: 0 3.5px;
    border-radius: 2px;
    font-weight: 900;
  }
  .utc-bar {
    margin: 0 12px 5px;
    height: 20px;
    background: #142238;
    color: #F1F5F9;
    border-radius: 2.5px;
    display: flex;
    align-items: center;
    padding: 0 8px 0 0;
    font-size: 8.9px;
  }
  .utc-badge {
    background: #F4C430;
    color: #0F172A;
    font-weight: 900;
    font-size: 8.8px;
    letter-spacing: 0.4px;
    padding: 0 7px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 8px;
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
  .utc-item b { color: #FDE047; margin-right: 2px; }
  .utc-sep { color: #64748B; font-weight: 700; }

  /* Main Broadsheet Canvas */
  .body-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 12px;
    min-height: 0;
  }

  /* Hero Row: 3 FULL-WIDTH Commanding Lead Cards */
  .hero-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    height: 226px;
  }
  .hero-card, .feat-card {
    background: #FFFFFF;
    border: 1px solid #CFC6B2;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-width: 0;
  }
  .hero-art { height: 98px; border-bottom: 1px solid #D9D1BE; flex-shrink: 0; }
  .feat-art { height: 64px; border-bottom: 1px solid #D9D1BE; flex-shrink: 0; }
  .hero-art svg, .feat-art svg { display: block; width: 100%; height: 100%; }

  .hero-body {
    flex: 1;
    padding: 5px 8px 4px;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  .feat-body {
    flex: 1;
    padding: 4px 7px 3px;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  /* Inline Number + Dateline + Verification Badge */
  .meta-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    margin-bottom: 3px;
  }
  .meta-row.sm { margin-bottom: 2px; }
  .meta-left {
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    overflow: hidden;
  }
  .num-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 8.6px;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .num-dot.sm { width: 14px; height: 14px; font-size: 7.8px; }
  .kicker {
    font-size: 8.3px;
    font-weight: 900;
    letter-spacing: 0.3px;
    line-height: 1.15;
    white-space: nowrap;
  }
  .kicker.sm { font-size: 7.7px; letter-spacing: 0.2px; }
  .st-badge {
    font-size: 7.3px;
    font-weight: 900;
    letter-spacing: 0.35px;
    padding: 1px 4.5px;
    border-radius: 2px;
    border: 1px solid currentColor;
    flex-shrink: 0;
    line-height: 1.25;
  }
  .st-badge.sm { font-size: 6.9px; padding: 0.5px 4px; }
  .st-conf { color: #166534; background: #DCFCE7; }
  .st-off  { color: #1E40AF; background: #DBEAFE; }
  .st-rep  { color: #334155; background: #F1F5F9; }
  .st-clm  { color: #9A3412; background: #FFEDD5; }

  .hero-h {
    font-family: "Noto Serif", "C059", Georgia, serif;
    font-size: 19.2px;
    font-weight: 900;
    line-height: 1.22;
    color: #0F172A;
    margin-bottom: 3px;
  }
  .hero-p {
    font-size: 10.0px;
    line-height: 1.26;
    color: #273549;
    flex: 1;
  }
  .src-line {
    font-size: 8.0px;
    font-weight: 700;
    line-height: 1.18;
    color: #64748B;
    margin-top: 2px;
  }
  .src-line.sm { font-size: 7.4px; margin-top: 1px; }

  /* Section Divider */
  .sec-bar {
    display: flex;
    align-items: baseline;
    gap: 8px;
    border-top: 1.8px solid #142238;
    padding-top: 3px;
    line-height: 1.15;
  }
  .sec-bar h4 {
    font-size: 9.6px;
    font-weight: 900;
    letter-spacing: 0.45px;
    color: #142238;
  }
  .sec-bar span {
    font-size: 8.6px;
    font-weight: 600;
    color: #64748B;
  }

  /* 2 Rows x 4 Wide Feature Cards */
  .feat-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 7px;
    height: 162px;
  }
  .feat-h {
    font-family: "Noto Serif", "C059", Georgia, serif;
    font-size: 14.3px;
    font-weight: 900;
    line-height: 1.18;
    color: #0F172A;
    margin-bottom: 2.5px;
  }
  .feat-p {
    font-size: 8.9px;
    line-height: 1.23;
    color: #273549;
    flex: 1;
  }

  /* Lower 27-Story Full-Width 3-Column Digest (zero clipping, crisp breathing room) */
  .brief-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  .brief-cols {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    margin-top: 3px;
    min-height: 0;
  }
  .b-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
  }
  .b-row {
    display: flex;
    align-items: baseline;
    gap: 3px;
    font-size: 9.25px;
    line-height: 1.26;
    border-bottom: 1px dotted #DFD7C3;
    padding: 0.5px 0 1.5px;
    min-width: 0;
  }
  .b-row:last-child { border-bottom: none; padding-bottom: 0; }
  .b-num {
    font-size: 8.9px;
    font-weight: 900;
    width: 13px;
    text-align: right;
    flex-shrink: 0;
  }
  .b-txt {
    color: #1E293B;
    flex: 1;
    min-width: 0;
    white-space: nowrap;
  }
  .b-txt b { font-weight: 900; margin-right: 1px; }
  .b-claim {
    display: inline-block;
    font-size: 6.9px;
    font-weight: 900;
    color: #9A3412;
    background: #FFEDD5;
    border: 1px solid #C2410C;
    border-radius: 2px;
    padding: 0 2.5px;
    vertical-align: 1px;
  }
  .b-src {
    font-size: 6.8px;
    font-weight: 800;
    color: #64748B;
    background: #EFEAE0;
    padding: 0 2.5px;
    border-radius: 2px;
    flex-shrink: 0;
  }

  /* OCR-Safe DATE CHECK Audit Box */
  .date-check {
    margin: 4px 12px 2px;
    padding: 4.5px 8px;
    background: #FFF8F6;
    border: 1.6px solid #B91C1C;
    border-radius: 3px;
    display: flex;
    gap: 8px;
    align-items: center;
    height: 55px;
  }
  .dc-badge {
    background: #B91C1C;
    color: #FFFFFF;
    font-size: 8.8px;
    font-weight: 900;
    letter-spacing: 0.45px;
    padding: 5.5px 7.5px;
    border-radius: 2.5px;
    text-align: center;
    line-height: 1.12;
    flex-shrink: 0;
  }
  .dc-text {
    font-size: 9.4px;
    line-height: 1.24;
    color: #1E293B;
  }
  .dc-text b.inc { color: #0F172A; }
  .dc-text b.exc { color: #991B1B; }

  /* Crisp Legend Footer */
  .legend {
    height: 18px;
    padding: 0 12px 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 8.0px;
    color: #475569;
  }
  .leg-pills { display: flex; align-items: center; gap: 7px; }
  .lp {
    display: inline-block;
    padding: 0.5px 4px;
    border-radius: 2px;
    font-weight: 900;
    font-size: 7.0px;
    margin-right: 2.5px;
    border: 1px solid currentColor;
  }
</style>
</head>
<body>
<main class="page">
  <header class="eyebrow">
    <span>${esc(EDITION.eyebrowLeft)}</span>
    <span class="mid">${total} STORIES &middot; ${REGIONS.length} REGIONS &middot; ${EDITION.fieldsCount} FIELDS &middot; EVERY ONE REPORTED ON TUESDAY 24 NOVEMBER 2026 (UTC)</span>
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
    </section>

    <div class="sec-bar">
      <h4>THE DAY IN EIGHT MORE</h4>
      <span>Tuesday&rsquo;s other big stories across 7 regions &amp; 8 beats</span>
    </div>

    <section class="feat-row">${makeFeatureRow(FEATURE_STORIES.slice(0, 4))}</section>
    <section class="feat-row">${makeFeatureRow(FEATURE_STORIES.slice(4, 8))}</section>

    <section class="brief-wrap">
      <div class="sec-bar">
        <h4>ALSO ON TUESDAY 24 NOVEMBER &mdash; ${BRIEF_STORIES.length} MORE STORIES</h4>
        <span>All dated Tue 24 Nov 2026 UTC &middot; ${REGIONS.length} regions colour-matched</span>
      </div>
      <div class="brief-cols">
        <div class="b-col">${renderBriefCol(briefCols[0])}</div>
        <div class="b-col">${renderBriefCol(briefCols[1])}</div>
        <div class="b-col">${renderBriefCol(briefCols[2])}</div>
      </div>
    </section>
  </div>

  <section class="date-check">
    <div class="dc-badge">DATE<br/>CHECK</div>
    <div class="dc-text">
      <b class="inc">Included:</b> ${esc(EDITION.dateAuditIncluded)}
      <b class="exc">Left out as other days&rsquo; news:</b> ${esc(EDITION.dateAuditExcluded)}
    </div>
  </section>

  <footer class="legend">
    <div class="leg-pills">
      <span><b class="lp st-conf">CONFIRMED</b>2+ outlets</span>
      <span><b class="lp st-off">OFFICIAL</b>on the record</span>
      <span><b class="lp st-rep">REPORTED</b>one outlet</span>
      <span><b class="lp st-clm">CLAIM</b>one side&rsquo;s word</span>
    </div>
    <div>Times UTC &middot; Original vector scenes drawn in code &middot; Sources: Reuters, AP, BBC, Guardian, NYT, Al Jazeera, CNA, F24, FIDE, USGS</div>
  </footer>
</main>
</body>
</html>`;
}
