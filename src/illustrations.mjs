// Original bright, light-palette print-editorial SVG illustrations for all 13 hero & grid stories.
// Pass 2 polish: zero artwork/chip/badge overlap across all 13 panels, maximized 300px contrast.

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const STATUS_STYLE = {
  CONFIRMED: { bg: '#166534', fg: '#FFFFFF' },
  OFFICIAL: { bg: '#1E40AF', fg: '#FFFFFF' },
  REPORTED: { bg: '#475569', fg: '#FFFFFF' },
  CLAIM: { bg: '#C2410C', fg: '#FFFFFF' },
};

function cornerOverlays(num, location, regionColor, status, viewW, viewH, small = false) {
  const chipH = small ? 14 : 16;
  const fsLoc = small ? 7.4 : 8.2;
  const fsNum = small ? 7.2 : 8.0;
  const numR = small ? 5.0 : 5.8;
  const locText = esc(location);
  const chipW = Math.min(viewW - 10, Math.round(numR * 2 + 11 + location.length * (fsLoc * 0.61)));

  const st = STATUS_STYLE[status] || STATUS_STYLE.REPORTED;
  const stFs = small ? 6.5 : 7.3;
  const stH = small ? 12 : 13.5;
  const stW = Math.round(status.length * (stFs * 0.67) + 9);
  const stX = viewW - stW - 4;
  const stY = viewH - stH - 3.5;

  return `
    <g transform="translate(4,3.5)">
      <rect x="0" y="0" width="${chipW}" height="${chipH}" rx="2.5" fill="rgba(255,253,249,0.95)" stroke="rgba(15,23,42,0.18)" stroke-width="0.8"/>
      <circle cx="${(numR + 3.0).toFixed(1)}" cy="${(chipH / 2).toFixed(1)}" r="${numR}" fill="${regionColor}"/>
      <text x="${(numR + 3.0).toFixed(1)}" y="${(chipH / 2 + fsNum * 0.36).toFixed(1)}" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="${fsNum}" font-weight="900" fill="#FFFFFF">${num}</text>
      <text x="${(numR * 2 + 6.2).toFixed(1)}" y="${(chipH / 2 + fsLoc * 0.35).toFixed(1)}" font-family="Noto Sans, sans-serif" font-size="${fsLoc}" font-weight="900" letter-spacing="0.2" fill="#0F172A">${locText}</text>
    </g>
    <g transform="translate(${stX},${stY})">
      <rect x="0" y="0" width="${stW}" height="${stH}" rx="2" fill="${st.bg}"/>
      <text x="${(stW / 2).toFixed(1)}" y="${(stH * 0.75).toFixed(1)}" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="${stFs}" font-weight="900" letter-spacing="0.3" fill="${st.fg}">${esc(status)}</text>
    </g>`;
}

export function renderHeroArt(story, regionColor) {
  const W = 268;
  const H = 86;
  const ov = cornerOverlays(story.num, story.location, regionColor, story.status, W, H, false);

  switch (story.art) {
    case 'huawei_verdict':
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hwBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#E8F0FA"/>
            <stop offset="100%" stop-color="#F6F1E6"/>
          </linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#hwBg)"/>
        <rect x="0" y="70" width="${W}" height="16" fill="#E5DEC9"/>
        <!-- Federal courthouse pediment & columns (left) -->
        <g transform="translate(12,24)">
          <polygon points="0,12 42,0 84,12" fill="#CBD5E1" stroke="#475569" stroke-width="1"/>
          <rect x="3" y="12" width="78" height="4" fill="#94A3B8"/>
          <g fill="#F8FAFC" stroke="#64748B" stroke-width="0.9">
            <rect x="9" y="16" width="8" height="28"/>
            <rect x="25" y="16" width="8" height="28"/>
            <rect x="49" y="16" width="8" height="28"/>
            <rect x="65" y="16" width="8" height="28"/>
          </g>
          <rect x="36" y="24" width="12" height="20" fill="#334155"/>
          <rect x="0" y="44" width="84" height="5" fill="#94A3B8"/>
        </g>
        <!-- Wooden gavel & soundblock (center) -->
        <g transform="translate(105,34)">
          <rect x="2" y="33" width="44" height="7" rx="2" fill="#7C2D12"/>
          <g transform="rotate(-26 24 21)">
            <rect x="18" y="10" width="38" height="5.5" rx="2.5" fill="#9A3412"/>
            <rect x="6" y="4" width="18" height="17" rx="2.5" fill="#7C2D12" stroke="#FDE68A" stroke-width="0.8"/>
            <rect x="4" y="5" width="4" height="15" rx="1" fill="#D97706"/>
            <rect x="22" y="5" width="4" height="15" rx="1" fill="#D97706"/>
          </g>
        </g>
        <!-- Verdict document with bold stamps (right, well above OFFICIAL badge) -->
        <g transform="translate(162,8)">
          <rect x="0" y="0" width="98" height="58" rx="3" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.1"/>
          <text x="8" y="11.5" font-family="Noto Sans, sans-serif" font-size="6.8" font-weight="900" letter-spacing="0.4" fill="#475569">US JURY VERDICT</text>
          <line x1="8" y1="15" x2="90" y2="15" stroke="#CBD5E1" stroke-width="0.9"/>
          <rect x="7" y="18.5" width="84" height="17" rx="2" fill="#FEE2E2" stroke="#B91C1C" stroke-width="1.3"/>
          <text x="49" y="30.2" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="10.2" font-weight="900" fill="#991B1B">GUILTY 10 / 12</text>
          <rect x="7" y="39" width="84" height="13" rx="2" fill="#ECFDF5" stroke="#15803D" stroke-width="0.9"/>
          <text x="49" y="48" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="7.4" font-weight="900" fill="#166534">RICO: ACQUITTED</text>
        </g>
        ${ov}
      </svg>`;

    case 'zaporizhzhia_poland':
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="zpSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1E3A5F"/>
            <stop offset="68%" stop-color="#355880"/>
            <stop offset="100%" stop-color="#5B789B"/>
          </linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#zpSky)"/>
        <rect x="0" y="71" width="${W}" height="15" fill="#1E293B"/>
        <!-- Zaporizhzhia apartment block + blast glow (left) -->
        <g transform="translate(10,23)">
          <rect x="0" y="12" width="44" height="37" fill="#334155" stroke="#94A3B8" stroke-width="0.8"/>
          <rect x="46" y="18" width="28" height="31" fill="#475569" stroke="#94A3B8" stroke-width="0.8"/>
          <g fill="#FDE68A" opacity="0.85">
            <rect x="6" y="18" width="5" height="5.5"/><rect x="15" y="18" width="5" height="5.5"/>
            <rect x="6" y="27" width="5" height="5.5"/><rect x="15" y="27" width="5" height="5.5"/>
            <rect x="6" y="36" width="5" height="5.5"/><rect x="24" y="36" width="5" height="5.5"/>
            <rect x="52" y="24" width="5" height="5.5"/><rect x="62" y="33" width="5" height="5.5"/>
          </g>
          <circle cx="38" cy="19" r="13" fill="#F97316" opacity="0.45"/>
          <polygon points="38,5 43,14 52,12 46,20 51,28 41,24 36,32 33,23 23,23 31,16 27,8 35,13" fill="#F97316"/>
          <polygon points="38,11 41,16 47,17 42,21 43,26 38,22 33,25 35,19 30,16 36,15" fill="#FEF08A"/>
          <rect x="2" y="50" width="88" height="11.5" rx="2" fill="#FEF2F2"/>
          <text x="46" y="58.2" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="7.3" font-weight="900" fill="#991B1B">2 KILLED · 40+ HURT</text>
        </g>
        <!-- Poland-Ukraine NATO border cleanly positioned below top-left chip -->
        <line x1="170" y1="22" x2="170" y2="71" stroke="#FCA5A5" stroke-width="1.6" stroke-dasharray="4,3"/>
        <rect x="122" y="22" width="44" height="11" rx="2" fill="#FFFFFF"/>
        <text x="144" y="30" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="7.0" font-weight="900" fill="#B91C1C">POLAND</text>
        <rect x="175" y="22" width="46" height="11" rx="2" fill="#DBEAFE"/>
        <text x="198" y="30" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="7.0" font-weight="900" fill="#1E40AF">UKRAINE</text>
        <!-- Radar sweep & looping UAV track -->
        <circle cx="144" cy="51" r="15" fill="none" stroke="#93C5FD" stroke-width="0.9" stroke-dasharray="3,2" opacity="0.65"/>
        <path d="M244,54 C210,41 168,38 136,47 C124,51 130,60 150,58 C176,56 198,50 226,42" fill="none" stroke="#FDE047" stroke-width="2.1" stroke-dasharray="4,2"/>
        <polygon points="130,49 143,43 141,50 145,55" fill="#FFFFFF" stroke="#B91C1C" stroke-width="1"/>
        <text x="144" y="68" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="6.9" font-weight="900" fill="#F8FAFC">DOROHUSK</text>
        ${ov}
      </svg>`;

    case 'shanghai_purge':
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#DCEBF8"/>
            <stop offset="72%" stop-color="#F6EEE3"/>
            <stop offset="100%" stop-color="#F2DFD5"/>
          </linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#shBg)"/>
        <rect x="0" y="70" width="${W}" height="16" fill="#C7DDF0"/>
        <line x1="0" y1="70" x2="${W}" y2="70" stroke="#94A3B8" stroke-width="0.9"/>
        <!-- Crisp daylight Shanghai Pudong skyline (left) -->
        <g fill="#475569" stroke="#1E293B" stroke-width="0.7">
          <rect x="10" y="47" width="14" height="23"/>
          <rect x="27" y="40" width="12" height="30"/>
          <line x1="52" y1="22" x2="52" y2="70" stroke="#334155" stroke-width="2"/>
          <circle cx="52" cy="35" r="3.9" fill="#DC2626" stroke="#FFFFFF" stroke-width="0.8"/>
          <circle cx="52" cy="51" r="6.0" fill="#DC2626" stroke="#FFFFFF" stroke-width="0.9"/>
          <path d="M44,70 L52,56 L60,70 Z" fill="#334155"/>
          <polygon points="72,70 76,25 87,21 92,70" fill="#64748B"/>
          <polygon points="97,70 99,30 113,30 115,70" fill="#475569"/>
          <rect x="102.5" y="34" width="7" height="5.5" fill="#DCEBF8"/>
          <polygon points="120,70 123,35 134,35 137,70" fill="#64748B"/>
        </g>
        <!-- Crisp cream CCDI dossier card (right, cleanly clear of OFFICIAL badge) -->
        <g transform="translate(146,8)">
          <rect x="0" y="0" width="114" height="58" rx="3" fill="#FFFFFF" stroke="#991B1B" stroke-width="1.2"/>
          <rect x="0" y="0" width="114" height="14" rx="2" fill="#991B1B"/>
          <text x="57" y="10" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="7.3" font-weight="900" letter-spacing="0.4" fill="#FFFFFF">CCDI POLITBURO PROBE</text>
          <text x="8" y="27" font-family="Noto Serif, Georgia, serif" font-size="10.2" font-weight="900" fill="#0F172A">Chen Jining</text>
          <text x="8" y="37" font-family="Noto Sans, sans-serif" font-size="7.2" font-weight="700" fill="#475569">Shanghai Party Sec.</text>
          <text x="8" y="46.5" font-family="Noto Sans, sans-serif" font-size="7.0" font-weight="800" fill="#991B1B">24-Seat Politburo</text>
          <circle cx="94" cy="35" r="10.5" fill="#FEF2F2" stroke="#DC2626" stroke-width="1.7"/>
          <line x1="102" y1="43" x2="108" y2="49" stroke="#DC2626" stroke-width="2.3" stroke-linecap="round"/>
          <text x="94" y="37.8" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="6.8" font-weight="900" fill="#991B1B">CCDI</text>
        </g>
        ${ov}
      </svg>`;

    default:
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg"><rect width="${W}" height="${H}" fill="#F1F5F9"/>${ov}</svg>`;
  }
}

export function renderGridArt(story, regionColor) {
  const W = 194;
  const H = 58;
  const ov = cornerOverlays(story.num, story.location, regionColor, story.status, W, H, true);

  switch (story.art) {
    case 'global_markets':
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#ECFDF5"/>
        <rect x="108" y="0" width="86" height="${H}" fill="#FEF2F2"/>
        <line x1="108" y1="0" x2="108" y2="${H}" stroke="#CBD5E1" stroke-width="1" stroke-dasharray="3,2"/>
        <!-- Asia chip surge chart cleanly below labels (left) -->
        <text x="8" y="30" font-family="Noto Sans, sans-serif" font-size="10.8" font-weight="900" fill="#166534">+8.99%</text>
        <text x="8" y="39.5" font-family="Noto Sans, sans-serif" font-size="6.8" font-weight="800" fill="#334155">TAIEX · KOSPI +6.3%</text>
        <polyline points="8,53 34,51 60,47 82,36 100,20" fill="none" stroke="#15803D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <polygon points="103,17 94,18.5 99.5,25" fill="#15803D"/>
        <!-- Dow 50K & Nvidia dip (right, well above CONFIRMED pill) -->
        <text x="114" y="17.5" font-family="Noto Sans, sans-serif" font-size="9.5" font-weight="900" fill="#1E40AF">DOW 50,019</text>
        <polyline points="115,24 136,27 156,32 178,35" fill="none" stroke="#DC2626" stroke-width="2.2" stroke-linecap="round"/>
        <text x="114" y="37" font-family="Noto Sans, sans-serif" font-size="8.0" font-weight="900" fill="#B91C1C">NVDA -6%</text>
        ${ov}
      </svg>`;

    case 'sanofi_insmed':
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#E0F2FE"/>
        <!-- Crisp medical capsule (left, below chip) -->
        <g transform="translate(12,24)">
          <rect x="0" y="0" width="62" height="24" rx="12" fill="#FFFFFF" stroke="#1D4ED8" stroke-width="1.4"/>
          <path d="M12,0 L31,0 L31,24 L12,24 A12,12 0 0,1 12,0 Z" fill="#2563EB"/>
          <rect x="8" y="6" width="14" height="3.2" rx="1.6" fill="#93C5FD"/>
          <circle cx="46" cy="12" r="5" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="1"/>
          <line x1="46" y1="9" x2="46" y2="15" stroke="#1D4ED8" stroke-width="1.6"/>
          <line x1="43" y1="12" x2="49" y2="12" stroke="#1D4ED8" stroke-width="1.6"/>
        </g>
        <!-- Bold $41B cash deal text (right, zero overlap with top-left chip or OFFICIAL pill) -->
        <g transform="translate(92,16)">
          <text x="0" y="13" font-family="Noto Serif, Georgia, serif" font-size="16.5" font-weight="900" fill="#1E3A8A">$41B</text>
          <text x="0" y="23.5" font-family="Noto Sans, sans-serif" font-size="7.6" font-weight="900" fill="#15803D">INSMED +14.1%</text>
          <text x="0" y="32.5" font-family="Noto Sans, sans-serif" font-size="6.8" font-weight="700" fill="#475569">$175/SH CASH</text>
        </g>
        ${ov}
      </svg>`;

    case 'uk_heat_deaths':
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ukHeat" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#FEF3C7"/>
            <stop offset="100%" stop-color="#FDE68A"/>
          </linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#ukHeat)"/>
        <!-- Blazing coral sun -->
        <circle cx="112" cy="18" r="12" fill="#F97316" opacity="0.88"/>
        <circle cx="112" cy="18" r="18" fill="#FB923C" opacity="0.24"/>
        <!-- Big Ben silhouette shifted cleanly left -->
        <g fill="#334155">
          <rect x="14" y="29" width="15" height="29"/>
          <polygon points="12,29 21.5,18 31,29"/>
          <circle cx="21.5" cy="38" r="4.6" fill="#FFFBEB"/>
          <line x1="21.5" y1="38" x2="21.5" y2="34.8" stroke="#1E293B" stroke-width="1.1"/>
          <line x1="21.5" y1="38" x2="24.2" y2="38" stroke="#1E293B" stroke-width="1.1"/>
          <rect x="32" y="42" width="32" height="16" fill="#475569"/>
        </g>
        <!-- Cleanly framed 5,258 readout in open warm sky -->
        <rect x="74" y="28" width="66" height="25" rx="3" fill="rgba(255,253,249,0.88)" stroke="#D97706" stroke-width="0.9"/>
        <text x="107" y="42.5" text-anchor="middle" font-family="Noto Serif, Georgia, serif" font-size="14" font-weight="900" fill="#991B1B">5,258</text>
        <text x="107" y="50.5" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="6.6" font-weight="800" fill="#7C2D12">+76% VS 2022</text>
        <!-- Crisp red thermometer (far right, above OFFICIAL badge) -->
        <g transform="translate(158,6)">
          <rect x="4" y="0" width="7.5" height="27" rx="3.7" fill="#FFFFFF" stroke="#991B1B" stroke-width="1.1"/>
          <circle cx="7.8" cy="29" r="5.8" fill="#DC2626" stroke="#991B1B" stroke-width="1.1"/>
          <rect x="6" y="6" width="3.6" height="21" fill="#DC2626"/>
        </g>
        ${ov}
      </svg>`;

    case 'gaza_strike':
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gzSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#FDECE2"/>
            <stop offset="100%" stop-color="#F5D7C3"/>
          </linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#gzSky)"/>
        <rect x="0" y="48" width="${W}" height="10" fill="#D6C4B0"/>
        <g fill="#64748B" opacity="0.7">
          <circle cx="92" cy="22" r="9"/>
          <circle cx="104" cy="16" r="11"/>
          <circle cx="117" cy="13" r="10"/>
        </g>
        <g fill="#475569" stroke="#334155" stroke-width="0.6">
          <rect x="12" y="34" width="18" height="15"/>
          <rect x="33" y="29" width="22" height="20"/>
          <rect x="58" y="36" width="16" height="13"/>
          <rect x="114" y="33" width="20" height="16"/>
        </g>
        <polygon points="91,24 96,33 106,32 99,39 103,47 92,43 83,47 86,39 79,33 88,33" fill="#DC2626"/>
        <polygon points="91,30 94,35 99,36 95,40 96,44 91,41 87,44 88,39 85,36 89,35" fill="#FDE047"/>
        <rect x="132" y="8" width="54" height="14" rx="2" fill="#FFFFFF" stroke="#B91C1C" stroke-width="1"/>
        <text x="159" y="17.8" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.0" font-weight="900" fill="#991B1B">7 KILLED</text>
        ${ov}
      </svg>`;

    case 'senegal_afcon':
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#DCFCE7"/>
        <rect x="0" y="44" width="${W}" height="14" fill="#BBF7D0"/>
        <g transform="translate(14,22)">
          <rect x="0" y="0" width="2" height="30" fill="#475569"/>
          <rect x="2" y="0" width="16" height="23" fill="#15803D"/>
          <rect x="18" y="0" width="16" height="23" fill="#FACC15"/>
          <rect x="34" y="0" width="16" height="23" fill="#DC2626"/>
          <polygon points="26,5.5 27.6,10.1 32.5,10.1 28.5,12.9 30,17.5 26,14.7 22,17.5 23.5,12.9 19.5,10.1 24.4,10.1" fill="#15803D"/>
        </g>
        <g transform="translate(82,16)">
          <path d="M5,4 L27,4 L24,19 C23,24 19,27 16,27 C13,27 9,24 8,19 Z" fill="#F59E0B" stroke="#B45309" stroke-width="1.2"/>
          <circle cx="16" cy="9" r="4.8" fill="#FDE047"/>
          <rect x="13" y="27" width="6" height="5.5" fill="#D97706"/>
          <rect x="8" y="32.5" width="16" height="4.2" rx="1.5" fill="#92400E"/>
        </g>
        <g transform="translate(122,16)">
          <rect x="0" y="0" width="64" height="20" rx="3" fill="#FFFFFF" stroke="#15803D" stroke-width="1.2"/>
          <text x="32" y="9.5" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="7.2" font-weight="900" fill="#15803D">CAS RULING</text>
          <text x="32" y="17.2" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="6.8" font-weight="800" fill="#0F172A">TITLE RESTORED</text>
        </g>
        ${ov}
      </svg>`;

    case 'riyadh_tower':
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rySky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#E0F2FE"/>
            <stop offset="100%" stop-color="#FEF3C7"/>
          </linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#rySky)"/>
        <rect x="0" y="50" width="${W}" height="8" fill="#E7D7BE"/>
        <g fill="#94A3B8">
          <rect x="16" y="36" width="14" height="15"/>
          <rect x="34" y="31" width="13" height="20"/>
          <rect x="96" y="34" width="14" height="17"/>
        </g>
        <g transform="translate(58,8)">
          <polygon points="8,0 24,0 28,43 4,43" fill="#334155" stroke="#0F172A" stroke-width="1"/>
          <g stroke="#CBD5E1" stroke-width="0.7" opacity="0.8">
            <line x1="8" y1="8" x2="24" y2="8"/>
            <line x1="7" y1="16" x2="25" y2="16"/>
            <line x1="6" y1="24" x2="26" y2="24"/>
            <line x1="5" y1="32" x2="27" y2="32"/>
            <line x1="16" y1="0" x2="16" y2="43"/>
          </g>
        </g>
        <g fill="#64748B" opacity="0.6">
          <circle cx="94" cy="19" r="6.5"/>
          <circle cx="105" cy="14" r="7.5"/>
        </g>
        <polygon points="84,17 89,22 95,20 91,26 95,32 87,29 82,33 83,26 77,23 83,22" fill="#EA580C"/>
        <circle cx="86" cy="25" r="3.4" fill="#FEF08A"/>
        <rect x="122" y="10" width="65" height="23" rx="2.5" fill="#FFFFFF" stroke="#B91C1C" stroke-width="1.1"/>
        <text x="154.5" y="20.5" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.2" font-weight="900" fill="#991B1B">PIF TOWER</text>
        <text x="154.5" y="29.5" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="7.2" font-weight="900" fill="#334155">11 WOUNDED</text>
        ${ov}
      </svg>`;

    case 'shenzhou24_crew':
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="spSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#DBEAFE"/>
            <stop offset="100%" stop-color="#EFF6FF"/>
          </linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#spSky)"/>
        <path d="M-10,62 Q97,44 204,62 Z" fill="#93C5FD" stroke="#2563EB" stroke-width="1"/>
        <g transform="translate(52,21)">
          <rect x="0" y="6" width="26" height="9" rx="1" fill="#2563EB" stroke="#1E3A8A" stroke-width="0.8"/>
          <rect x="64" y="6" width="26" height="9" rx="1" fill="#2563EB" stroke="#1E3A8A" stroke-width="0.8"/>
          <rect x="26" y="5" width="38" height="11" rx="3" fill="#FFFFFF" stroke="#334155" stroke-width="1.2"/>
          <rect x="41" y="0" width="8" height="21" rx="2" fill="#E2E8F0" stroke="#334155" stroke-width="1"/>
          <circle cx="45" cy="10.5" r="2.6" fill="#0EA5E9"/>
        </g>
        <g transform="translate(14,33)">
          <rect x="0" y="0" width="6" height="14" fill="#FFFFFF" stroke="#334155" stroke-width="0.5"/>
          <rect x="6" y="0" width="16" height="14" fill="#15803D"/>
          <circle cx="14" cy="7" r="3.6" fill="#FFFFFF"/>
          <circle cx="15.4" cy="6.4" r="3.0" fill="#15803D"/>
        </g>
        <g transform="translate(154,10)">
          <rect x="0" y="0" width="32" height="18" rx="2" fill="#DC2626"/>
          <polygon points="7,4 8.3,7.6 12,7.6 9,9.8 10.2,13.4 7,11.2 3.8,13.4 5,9.8 2,7.6 5.7,7.6" fill="#FDE047"/>
        </g>
        ${ov}
      </svg>`;

    case 'sooryavanshi_204':
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#E0F2FE"/>
        <rect x="0" y="38" width="${W}" height="20" fill="#BBF7D0"/>
        <line x1="0" y1="38" x2="${W}" y2="38" stroke="#15803D" stroke-width="1"/>
        <g transform="translate(22,23) rotate(-28)">
          <rect x="0" y="0" width="9" height="25" rx="2" fill="#D97706" stroke="#78350F" stroke-width="1"/>
          <rect x="3" y="-9" width="3" height="10" fill="#1E293B"/>
        </g>
        <path d="M40,34 Q68,8 92,15" fill="none" stroke="#DC2626" stroke-width="1.6" stroke-dasharray="3,2"/>
        <circle cx="94" cy="16" r="4.6" fill="#B91C1C" stroke="#FFFFFF" stroke-width="0.9"/>
        <g transform="translate(106,8)">
          <rect x="0" y="0" width="80" height="31" rx="3" fill="#0F172A" stroke="#15803D" stroke-width="1.3"/>
          <text x="40" y="14.5" text-anchor="middle" font-family="Noto Serif, Georgia, serif" font-size="14" font-weight="900" fill="#FDE047">204</text>
          <text x="40" y="25.5" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="7.4" font-weight="900" fill="#86EFAC">53 BALLS · 28×6</text>
        </g>
        ${ov}
      </svg>`;

    case 'australia_tech_bill':
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#E0F2FE"/>
        <rect x="0" y="44" width="${W}" height="14" fill="#D1FAE5"/>
        <g transform="translate(24,18)">
          <line x1="22" y1="0" x2="22" y2="27" stroke="#334155" stroke-width="2"/>
          <path d="M4,27 L22,8 L40,27" fill="none" stroke="#64748B" stroke-width="2"/>
          <rect x="22" y="1" width="12" height="7" fill="#1D4ED8"/>
          <rect x="2" y="27" width="40" height="8" fill="#FFFFFF" stroke="#475569" stroke-width="1"/>
        </g>
        <g transform="translate(102,9)">
          <path d="M22,0 L44,7 L42,27 C40,36 22,42 22,42 C22,42 4,36 2,27 L0,7 Z" fill="#1E3A8A" stroke="#0F172A" stroke-width="1.2"/>
          <text x="22" y="21" text-anchor="middle" font-family="Noto Serif, Georgia, serif" font-size="13.5" font-weight="900" fill="#FDE047">5%</text>
          <text x="22" y="31" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="6.4" font-weight="900" fill="#FFFFFF">FINE CAP</text>
        </g>
        ${ov}
      </svg>`;

    case 'hanoi_blast':
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#FEF3C7"/>
        <rect x="0" y="46" width="${W}" height="12" fill="#CBD5E1"/>
        <g fill="#94A3B8" opacity="0.65">
          <circle cx="76" cy="21" r="8.5"/>
          <circle cx="88" cy="16" r="10.5"/>
          <circle cx="100" cy="20" r="8"/>
        </g>
        <g fill="#78716C" stroke="#44403C" stroke-width="0.8">
          <rect x="14" y="25" width="26" height="22" fill="#D6D3D1"/>
          <rect x="19" y="30" width="6.5" height="6.5" fill="#475569"/>
          <rect x="29" y="30" width="6.5" height="6.5" fill="#475569"/>
          <polygon points="43,47 50,33 66,38 78,32 90,47" fill="#A8A29E"/>
        </g>
        <!-- Red fire rescue vehicle shifted cleanly clear of CONFIRMED pill -->
        <g transform="translate(94,30)">
          <rect x="0" y="4" width="32" height="12" rx="2" fill="#DC2626"/>
          <rect x="22" y="6" width="8" height="5" fill="#DBEAFE"/>
          <circle cx="7" cy="16" r="3" fill="#0F172A"/>
          <circle cx="25" cy="16" r="3" fill="#0F172A"/>
          <rect x="12" y="1" width="5" height="3" fill="#FDE047"/>
        </g>
        <rect x="128" y="8" width="58" height="14" rx="2" fill="#FFFFFF" stroke="#B91C1C" stroke-width="1"/>
        <text x="157" y="17.8" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.0" font-weight="900" fill="#991B1B">6+ KILLED</text>
        ${ov}
      </svg>`;

    default:
      return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg"><rect width="${W}" height="${H}" fill="#F1F5F9"/>${ov}</svg>`;
  }
}
