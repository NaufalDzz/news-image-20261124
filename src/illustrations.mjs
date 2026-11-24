// Original full-bleed editorial SVG illustrations for all 13 hero and grid stories.
// Pass 2: zero text/badge collisions, elevated banner contrast for 300px readability,
// three burning Hormuz tankers, unobstructed Hanoi rescue scene, cleaner Shanghai & Australia spacing.

function topicBanner(label, bg = '#8B1A1A', w = null, x = 0, y = 0, h = 18, fs = 10.4) {
  const width = w ?? Math.max(88, Math.round(label.length * (fs * 0.67) + 14));
  return `
    <g transform="translate(${x},${y})">
      <rect x="0" y="0" width="${width}" height="${h}" fill="${bg}" />
      <rect x="0" y="${h - 1.4}" width="${width}" height="1.4" fill="rgba(255,255,255,0.28)" />
      <text x="6.5" y="${(h * 0.72).toFixed(1)}" font-family="Noto Sans, sans-serif" font-size="${fs}" font-weight="900" letter-spacing="0.35" fill="#FFFFFF">${label}</text>
    </g>`;
}

function statBadge(label, xRight, yBottom, bg = '#FFFFFF', fg = '#0F172A', border = '#131F33', fs = 8.4) {
  const w = Math.max(54, Math.round(label.length * (fs * 0.62) + 12));
  const h = 16;
  const x = xRight - w;
  const y = yBottom - h;
  return `
    <g transform="translate(${x},${y})">
      <rect x="0" y="0" width="${w}" height="${h}" rx="2" fill="${bg}" stroke="${border}" stroke-width="1.15"/>
      <text x="${(w / 2).toFixed(1)}" y="11.2" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="${fs}" font-weight="900" letter-spacing="0.25" fill="${fg}">${label}</text>
    </g>`;
}

export function renderHeroArt(key, banner, statPill) {
  // ViewBox 328 x 92
  switch (key) {
    case 'shanghai_purge':
      return `<svg viewBox="0 0 328 92" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1E293B"/>
            <stop offset="58%" stop-color="#475569"/>
            <stop offset="100%" stop-color="#991B1B"/>
          </linearGradient>
        </defs>
        <rect width="328" height="92" fill="url(#shSky)"/>
        <rect x="0" y="74" width="328" height="18" fill="#0F172A"/>
        <path d="M0,74 L328,74" stroke="#F87171" stroke-width="1" opacity="0.5"/>
        <!-- Shanghai Pudong skyline positioned cleanly below top-left banner -->
        <g fill="#111827" stroke="#334155" stroke-width="0.8">
          <rect x="12" y="44" width="16" height="30"/>
          <rect x="32" y="36" width="14" height="38"/>
          <!-- Oriental Pearl Tower -->
          <line x1="60" y1="22" x2="60" y2="74" stroke="#CBD5E1" stroke-width="2.2"/>
          <circle cx="60" cy="34" r="4.3" fill="#DC2626" stroke="#F8FAFC" stroke-width="1"/>
          <circle cx="60" cy="52" r="6.8" fill="#DC2626" stroke="#F8FAFC" stroke-width="1.1"/>
          <path d="M52,74 L60,58 L68,74 Z" fill="#1E293B"/>
          <!-- Shanghai Tower -->
          <polygon points="84,74 88,24 101,20 106,74" fill="#1E293B" stroke="#94A3B8" stroke-width="0.9"/>
          <!-- SWFC -->
          <polygon points="112,74 114,27 130,27 132,74" fill="#0F172A" stroke="#64748B" stroke-width="0.9"/>
          <rect x="118" y="31" width="8" height="6.5" fill="#7F1D1D"/>
          <!-- Jin Mao -->
          <polygon points="138,74 141,31 153,31 156,74" fill="#1E293B"/>
          <rect x="162" y="47" width="18" height="27"/>
        </g>
        <g fill="#FDE68A" opacity="0.78">
          <rect x="92" y="32" width="3" height="2"/><rect x="96" y="40" width="3" height="2"/>
          <rect x="91" y="50" width="4" height="2"/><rect x="144" y="39" width="4" height="2"/>
          <rect x="144" y="49" width="4" height="2"/><rect x="36" y="44" width="4" height="2"/>
        </g>
        <!-- Right focal card lifted cleanly above bottom-right stat pill -->
        <g transform="translate(194,6)">
          <rect x="0" y="0" width="126" height="58" rx="3" fill="#FAF6EE" stroke="#991B1B" stroke-width="1.6"/>
          <rect x="0" y="0" width="126" height="13.5" rx="2" fill="#7F1D1D"/>
          <text x="63" y="9.8" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.0" font-weight="900" fill="#FDE68A">CCDI DISCIPLINE FILE</text>
          <text x="9" y="28" font-family="Noto Serif, serif" font-size="11.5" font-weight="900" fill="#0F172A">CHEN JINING</text>
          <text x="9" y="40" font-family="Noto Sans, sans-serif" font-size="7.6" font-weight="700" fill="#475569">Shanghai Party Sec.</text>
          <text x="9" y="51" font-family="Noto Sans, sans-serif" font-size="7.5" font-weight="900" fill="#991B1B">24-Seat Politburo</text>
          <circle cx="104" cy="35" r="12.5" fill="none" stroke="#B91C1C" stroke-width="2.3"/>
          <line x1="113" y1="44" x2="119" y2="50" stroke="#B91C1C" stroke-width="2.8" stroke-linecap="round"/>
          <polygon points="104,26.5 106.3,32.2 112,32.2 107.4,35.8 109.2,41.6 104,38 98.8,41.6 100.6,35.8 96,32.2 101.7,32.2" fill="#DC2626"/>
        </g>
        ${topicBanner(banner, '#8B1A1A', 138, 0, 0, 20, 11.0)}
        ${statBadge(statPill, 322, 88, '#FEF08A', '#7F1D1D', '#7F1D1D', 8.5)}
      </svg>`;

    case 'zaporizhzhia_poland':
      return `<svg viewBox="0 0 328 92" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nightWar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0B1426"/>
            <stop offset="68%" stop-color="#1E3050"/>
            <stop offset="100%" stop-color="#2D3F5E"/>
          </linearGradient>
        </defs>
        <rect width="328" height="92" fill="url(#nightWar)"/>
        <g stroke="#38BDF8" stroke-width="1" fill="none" opacity="0.45">
          <circle cx="58" cy="78" r="22"/><circle cx="58" cy="78" r="40"/><circle cx="58" cy="78" r="56"/>
        </g>
        <path d="M58,78 L88,26 A56,56 0 0,1 114,45 Z" fill="#38BDF8" opacity="0.18"/>
        <line x1="146" y1="22" x2="146" y2="88" stroke="#F8FAFC" stroke-width="2" stroke-dasharray="5,4"/>
        <text x="137" y="34" text-anchor="end" font-family="Noto Sans, sans-serif" font-size="9.4" font-weight="900" fill="#93C5FD">POLAND</text>
        <text x="155" y="34" text-anchor="start" font-family="Noto Sans, sans-serif" font-size="9.4" font-weight="900" fill="#FDE047">UKRAINE</text>
        <!-- Recon drone incursion loop into Dorohusk -->
        <path d="M210,41 Q154,23 92,45 Q112,58 154,50" fill="none" stroke="#EF4444" stroke-width="2.5" stroke-dasharray="4,2"/>
        <polygon points="84,45 103,37 99,45 103,53" fill="#FFFFFF" stroke="#EF4444" stroke-width="1.4"/>
        <text x="58" y="69" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="7.9" font-weight="800" fill="#BAE6FD">DOROHUSK</text>
        <!-- Crisp mini Poland & Ukraine flag accents along ground strip -->
        <g transform="translate(12,79)">
          <rect x="0" y="0" width="16" height="4.5" fill="#FFFFFF"/><rect x="0" y="4.5" width="16" height="4.5" fill="#DC2626"/>
        </g>
        <g transform="translate(154,79)">
          <rect x="0" y="0" width="16" height="4.5" fill="#2563EB"/><rect x="0" y="4.5" width="16" height="4.5" fill="#FACC15"/>
        </g>
        <!-- Zaporizhzhia 5-storey apartment block + firelight -->
        <rect x="0" y="76" width="328" height="16" fill="#0F172A"/>
        <rect x="202" y="33" width="54" height="45" fill="#475569" stroke="#1E293B" stroke-width="1.3"/>
        <rect x="260" y="42" width="48" height="36" fill="#334155" stroke="#1E293B" stroke-width="1.2"/>
        <g fill="#FDE68A">
          <rect x="209" y="40" width="7" height="5"/><rect x="221" y="40" width="7" height="5"/>
          <rect x="209" y="50" width="7" height="5"/><rect x="233" y="50" width="7" height="5"/>
          <rect x="209" y="60" width="7" height="5"/><rect x="268" y="50" width="6" height="5"/>
          <rect x="280" y="50" width="6" height="5"/><rect x="292" y="50" width="6" height="5"/>
        </g>
        <circle cx="244" cy="23" r="10.5" fill="#64748B" opacity="0.65"/>
        <circle cx="256" cy="19" r="8" fill="#475569" opacity="0.55"/>
        <polygon points="232,36 244,18 250,30 264,20 256,36 268,41 248,44 236,46" fill="#F97316"/>
        <polygon points="240,36 247,26 252,34 257,29 251,40" fill="#FEF08A"/>
        ${topicBanner(banner, '#8B1A1A', 172, 0, 0, 20, 10.6)}
        ${statBadge(statPill, 322, 88, '#FFFFFF', '#991B1B', '#991B1B', 8.5)}
      </svg>`;

    case 'asian_chip_rally':
      return `<svg viewBox="0 0 328 92" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mktBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0F2922"/>
            <stop offset="100%" stop-color="#173D31"/>
          </linearGradient>
        </defs>
        <rect width="328" height="92" fill="url(#mktBg)"/>
        <g stroke="#2B5B4A" stroke-width="0.9">
          <line x1="12" y1="26" x2="316" y2="26"/>
          <line x1="12" y1="46" x2="316" y2="46"/>
          <line x1="12" y1="66" x2="316" y2="66"/>
          <line x1="90" y1="20" x2="90" y2="86"/>
          <line x1="175" y1="20" x2="175" y2="86"/>
          <line x1="255" y1="20" x2="255" y2="86"/>
        </g>
        <g transform="translate(16,29)">
          <rect x="0" y="0" width="46" height="46" rx="4" fill="#0F172A" stroke="#34D399" stroke-width="1.6"/>
          <rect x="10" y="10" width="26" height="26" rx="2" fill="#10B981"/>
          <text x="23" y="26.5" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="11" font-weight="900" fill="#052E16">AI</text>
          <g stroke="#6EE7B7" stroke-width="2">
            <line x1="11" y1="-5" x2="11" y2="0"/><line x1="23" y1="-5" x2="23" y2="0"/><line x1="35" y1="-5" x2="35" y2="0"/>
            <line x1="11" y1="46" x2="11" y2="51"/><line x1="23" y1="46" x2="23" y2="51"/><line x1="35" y1="46" x2="35" y2="51"/>
            <line x1="-5" y1="12" x2="0" y2="12"/><line x1="-5" y1="23" x2="0" y2="23"/><line x1="-5" y1="34" x2="0" y2="34"/>
            <line x1="46" y1="12" x2="51" y2="12"/><line x1="46" y1="23" x2="51" y2="23"/><line x1="46" y1="34" x2="51" y2="34"/>
          </g>
        </g>
        <polygon points="80,78 112,72 146,62 180,45 214,28 244,18 264,22 264,84 80,84" fill="#22C55E" opacity="0.28"/>
        <polyline points="80,78 112,72 146,62 180,45 214,28 244,18" fill="none" stroke="#4ADE80" stroke-width="3.4" stroke-linejoin="round"/>
        <circle cx="244" cy="18" r="4.2" fill="#4ADE80"/>
        <polyline points="244,18 266,27 292,38 314,45" fill="none" stroke="#F87171" stroke-width="3" stroke-dasharray="5,2.5"/>
        <circle cx="314" cy="45" r="3.6" fill="#EF4444"/>
        <rect x="86" y="25" width="76" height="15" rx="2" fill="#052E16" stroke="#4ADE80" stroke-width="1"/>
        <text x="124" y="35.5" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.4" font-weight="900" fill="#86EFAC">NIKKEI +3.91%</text>
        <rect x="242" y="48" width="78" height="15" rx="2" fill="#450A0A" stroke="#F87171" stroke-width="1"/>
        <text x="281" y="58.5" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.0" font-weight="900" fill="#FCA5A5">US OPEN SLIPS</text>
        ${topicBanner(banner, '#14532D', 138, 0, 0, 20, 11.0)}
        ${statBadge(statPill, 322, 88, '#FEF08A', '#052E16', '#052E16', 8.3)}
      </svg>`;

    default:
      return '';
  }
}

export function renderGridArt(key, banner, statPill) {
  // ViewBox 196 x 63
  switch (key) {
    case 'sanofi_insmed':
      return `<svg viewBox="0 0 196 63" xmlns="http://www.w3.org/2000/svg">
        <rect width="196" height="63" fill="#172554"/>
        <rect x="0" y="46" width="196" height="17" fill="#1E3A8A"/>
        <!-- Biotech capsule left with specular sheen & medical cross -->
        <g transform="translate(12,24)">
          <rect x="0" y="6" width="38" height="17" rx="8.5" fill="#0284C7" stroke="#FFFFFF" stroke-width="1.4"/>
          <rect x="19" y="6" width="19" height="17" rx="8.5" fill="#F8FAFC"/>
          <rect x="17" y="6" width="5" height="17" fill="#E0F2FE"/>
          <path d="M7,9.5 L31,9.5" stroke="#FFFFFF" stroke-width="1.3" stroke-linecap="round" opacity="0.55"/>
          <rect x="8" y="11" width="2.4" height="7" fill="#FFFFFF"/>
          <rect x="5.7" y="13.3" width="7" height="2.4" fill="#FFFFFF"/>
        </g>
        <!-- +14% bar chart shifted left & callout raised cleanly above $175/SHARE -->
        <g transform="translate(60,21)">
          <rect x="0" y="18" width="9" height="15" fill="#60A5FA"/>
          <rect x="13" y="11" width="9" height="22" fill="#38BDF8"/>
          <rect x="26" y="2" width="9" height="31" fill="#4ADE80"/>
        </g>
        <text x="148" y="24" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="12.5" font-weight="900" fill="#4ADE80">+14%</text>
        <text x="148" y="34" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="7.8" font-weight="900" fill="#BFDBFE">INSMED STOCK</text>
        ${topicBanner(banner, '#1E40AF', 118, 0, 0, 17, 9.1)}
        ${statBadge(statPill, 191, 59, '#FEF08A', '#1E3A8A', '#1E3A8A', 7.8)}
      </svg>`;

    case 'uk_heat_deaths':
      return `<svg viewBox="0 0 196 63" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="heatSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#991B1B"/>
            <stop offset="55%" stop-color="#EA580C"/>
            <stop offset="100%" stop-color="#FDE047"/>
          </linearGradient>
        </defs>
        <rect width="196" height="63" fill="url(#heatSky)"/>
        <circle cx="156" cy="20" r="16" fill="#FEF08A" opacity="0.9"/>
        <circle cx="156" cy="20" r="11" fill="#FFFFFF" opacity="0.55"/>
        <!-- London skyline silhouette -->
        <g fill="#2A0A0A">
          <rect x="0" y="50" width="196" height="13"/>
          <rect x="18" y="24" width="12" height="26"/>
          <polygon points="18,24 24,14 30,24"/>
          <circle cx="24" cy="31" r="3" fill="#FEF08A"/>
          <rect x="30" y="39" width="26" height="11"/>
          <polygon points="68,50 76,18 84,50"/>
          <ellipse cx="99" cy="41" rx="7" ry="11"/>
          <rect x="112" y="39" width="16" height="11"/>
        </g>
        <!-- Crisp thermometer cleanly above bottom-right pill -->
        <g transform="translate(156,9) scale(0.84)">
          <rect x="-4" y="0" width="8" height="25" rx="4" fill="#FFFFFF" stroke="#7F1D1D" stroke-width="1.4"/>
          <circle cx="0" cy="25" r="7" fill="#DC2626" stroke="#7F1D1D" stroke-width="1.4"/>
          <rect x="-2" y="5" width="4" height="20" fill="#DC2626"/>
        </g>
        ${topicBanner(banner, '#7F1D1D', 108, 0, 0, 17, 9.1)}
        ${statBadge(statPill, 191, 59, '#FFFFFF', '#991B1B', '#7F1D1D', 7.8)}
      </svg>`;

    case 'gaza_strike':
      return `<svg viewBox="0 0 196 63" xmlns="http://www.w3.org/2000/svg">
        <rect width="196" height="63" fill="#292524"/>
        <rect x="0" y="45" width="196" height="18" fill="#44403C"/>
        <circle cx="96" cy="24" r="14" fill="#57534E"/>
        <circle cx="110" cy="18" r="11" fill="#78716C" opacity="0.8"/>
        <circle cx="84" cy="28" r="9" fill="#44403C"/>
        <g fill="#78716C" stroke="#1C1917" stroke-width="1">
          <rect x="12" y="30" width="28" height="22"/>
          <rect x="44" y="24" width="26" height="28"/>
          <rect x="122" y="28" width="32" height="24"/>
          <rect x="158" y="34" width="26" height="18"/>
        </g>
        <g fill="#292524">
          <rect x="18" y="35" width="5" height="5"/><rect x="28" y="35" width="5" height="5"/>
          <rect x="50" y="30" width="5" height="5"/><rect x="60" y="30" width="5" height="5"/>
          <rect x="129" y="34" width="6" height="5"/><rect x="141" y="34" width="6" height="5"/>
        </g>
        <polygon points="82,46 92,26 98,37 110,27 104,42 115,47 95,49" fill="#F97316"/>
        <polygon points="89,45 96,34 101,42 106,38 100,47" fill="#FEF08A"/>
        ${topicBanner(banner, '#8B1A1A', 104, 0, 0, 17, 9.1)}
        ${statBadge(statPill, 191, 59, '#FFFFFF', '#991B1B', '#7F1D1D', 7.8)}
      </svg>`;

    case 'senegal_afcon':
      return `<svg viewBox="0 0 196 63" xmlns="http://www.w3.org/2000/svg">
        <rect width="196" height="63" fill="#0F291E"/>
        <rect x="0" y="38" width="196" height="25" fill="#15803D"/>
        <line x1="0" y1="38" x2="196" y2="38" stroke="#86EFAC" stroke-width="1.2"/>
        <ellipse cx="98" cy="52" rx="46" ry="9" fill="none" stroke="#86EFAC" stroke-width="1" opacity="0.65"/>
        <polygon points="18,16 62,40 42,40" fill="#FEF08A" opacity="0.18"/>
        <polygon points="178,16 134,40 154,40" fill="#FEF08A" opacity="0.18"/>
        <!-- Senegal tricolour -->
        <g transform="translate(14,23)">
          <rect x="0" y="0" width="14" height="26" fill="#00853F"/>
          <rect x="14" y="0" width="14" height="26" fill="#FDEF42"/>
          <rect x="28" y="0" width="14" height="26" fill="#E31B23"/>
          <polygon points="21,8 22.5,12 26.5,12 23.2,14.5 24.4,18.5 21,16 17.6,18.5 18.8,14.5 15.5,12 19.5,12" fill="#00853F"/>
          <rect x="0" y="0" width="42" height="26" fill="none" stroke="#FFFFFF" stroke-width="1"/>
        </g>
        <!-- Golden AFCON Trophy + football -->
        <g transform="translate(82,19)">
          <path d="M4,4 L24,4 L21,18 C20,24 8,24 7,18 Z" fill="#FACC15" stroke="#92400E" stroke-width="1.2"/>
          <path d="M4,7 C-2,7 -2,15 6,16" fill="none" stroke="#FACC15" stroke-width="2.2"/>
          <path d="M24,7 C30,7 30,15 22,16" fill="none" stroke="#FACC15" stroke-width="2.2"/>
          <rect x="11" y="23" width="6" height="7" fill="#EAB308"/>
          <rect x="6" y="30" width="16" height="5" rx="1" fill="#B45309"/>
        </g>
        <circle cx="122" cy="49" r="5" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.1"/>
        <polygon points="122,46 124.5,48 123.5,51 120.5,51 119.5,48" fill="#0F172A"/>
        ${topicBanner(banner, '#15803D', 138, 0, 0, 17, 8.8)}
        ${statBadge(statPill, 191, 59, '#FEF08A', '#14532D', '#14532D', 7.6)}
      </svg>`;

    case 'shenzhou24_crew':
      return `<svg viewBox="0 0 196 63" xmlns="http://www.w3.org/2000/svg">
        <rect width="196" height="63" fill="#09152B"/>
        <g fill="#E2E8F0">
          <circle cx="16" cy="24" r="1"/><circle cx="48" cy="19" r="1.2"/><circle cx="144" cy="13" r="1.2"/><circle cx="180" cy="20" r="1"/>
        </g>
        <ellipse cx="98" cy="95" rx="135" ry="44" fill="#1D4ED8"/>
        <path d="M6,62 Q98,41 190,62" fill="none" stroke="#7DD3FC" stroke-width="2.2"/>
        <!-- Tiangong lifted cleanly above bottom-right pill -->
        <g transform="translate(116,25)">
          <rect x="-32" y="-10" width="24" height="6.5" fill="#2563EB" stroke="#93C5FD" stroke-width="0.9"/>
          <rect x="-32" y="5.5" width="24" height="6.5" fill="#2563EB" stroke="#93C5FD" stroke-width="0.9"/>
          <rect x="18" y="-11" width="26" height="7" fill="#2563EB" stroke="#93C5FD" stroke-width="0.9"/>
          <rect x="18" y="5.5" width="26" height="7" fill="#2563EB" stroke="#93C5FD" stroke-width="0.9"/>
          <rect x="-12" y="-5" width="32" height="10" rx="3" fill="#F8FAFC" stroke="#475569" stroke-width="1"/>
          <rect x="10" y="-5" width="4" height="10" fill="#DC2626"/>
        </g>
        <g transform="translate(12,35)">
          <rect x="0" y="0" width="26" height="17" rx="1.5" fill="#15803D" stroke="#FFFFFF" stroke-width="0.9"/>
          <rect x="0" y="0" width="7" height="17" fill="#FFFFFF"/>
          <circle cx="17" cy="8.5" r="4.3" fill="#FFFFFF"/>
          <circle cx="18.7" cy="7.7" r="3.4" fill="#15803D"/>
        </g>
        <line x1="46" y1="26" x2="78" y2="26" stroke="#FDE047" stroke-width="1.5" stroke-dasharray="3,2.5"/>
        <polygon points="78,26 68,22 70,26 68,30" fill="#FDE047"/>
        ${topicBanner(banner, '#0F766E', 118, 0, 0, 17, 9.1)}
        ${statBadge(statPill, 191, 59, '#FFFFFF', '#0F172A', '#1E3A8A', 7.6)}
      </svg>`;

    case 'hormuz_tankers':
      return `<svg viewBox="0 0 196 63" xmlns="http://www.w3.org/2000/svg">
        <rect width="196" height="63" fill="#1E3A5F"/>
        <rect x="0" y="0" width="196" height="31" fill="#334155"/>
        <path d="M0,31 L54,23 L112,30 L162,21 L196,28 L196,35 L0,35 Z" fill="#A16207" opacity="0.72"/>
        <rect x="0" y="34" width="196" height="29" fill="#0C4A6E"/>
        <!-- Three distinct burning tankers with rising smoke plumes -->
        <g fill="#1E293B" opacity="0.52">
          <circle cx="42" cy="19" r="5"/><circle cx="47" cy="15" r="4"/>
          <circle cx="92" cy="22" r="4.5"/><circle cx="98" cy="17" r="3.5"/>
          <circle cx="151" cy="18" r="4"/><circle cx="156" cy="14" r="3"/>
        </g>
        <g transform="translate(8,33)">
          <polygon points="0,8 44,8 48,2 4,2" fill="#0F172A"/>
          <rect x="6" y="-4" width="8" height="6" fill="#475569"/>
          <polygon points="22,2 26,-10 31,-2 35,-12 39,2" fill="#EF4444"/>
          <polygon points="26,2 30,-6 34,2" fill="#FEF08A"/>
        </g>
        <g transform="translate(68,36)">
          <polygon points="0,8 42,8 46,2 4,2" fill="#0F172A"/>
          <rect x="31" y="-4" width="7" height="6" fill="#475569"/>
          <polygon points="11,2 15,-9 20,-1 24,-11 28,2" fill="#F97316"/>
          <polygon points="15,2 19,-5 23,2" fill="#FEF08A"/>
        </g>
        <g transform="translate(130,30)">
          <polygon points="0,7 38,7 41,2 3,2" fill="#1E293B"/>
          <rect x="27" y="-3" width="6" height="5" fill="#64748B"/>
          <polygon points="10,2 14,-8 18,-1 22,-9 25,2" fill="#EA580C"/>
          <polygon points="14,2 17,-4 20,2" fill="#FEF08A"/>
        </g>
        <!-- Naval mine bottom-left -->
        <g transform="translate(26,52)">
          <circle r="5" fill="#0F172A" stroke="#F8FAFC" stroke-width="0.9"/>
          <g stroke="#F8FAFC" stroke-width="1.3">
            <line x1="-8" y1="0" x2="8" y2="0"/><line x1="0" y1="-8" x2="0" y2="8"/>
          </g>
        </g>
        ${topicBanner(banner, '#9A3412', 130, 0, 0, 17, 8.9)}
        ${statBadge(statPill, 191, 59, '#FEF08A', '#9A3412', '#9A3412', 7.8)}
      </svg>`;

    case 'sooryavanshi_204':
      return `<svg viewBox="0 0 196 63" xmlns="http://www.w3.org/2000/svg">
        <!-- Stadium floodlight pylons + Doha twilight pitch -->
        <rect width="196" height="63" fill="#0F2D4A"/>
        <g stroke="#94A3B8" stroke-width="1.3">
          <line x1="15" y1="22" x2="15" y2="39"/><line x1="184" y1="16" x2="184" y2="39"/>
        </g>
        <rect x="9" y="19" width="12" height="4" rx="1" fill="#FEF08A"/>
        <rect x="178" y="13" width="12" height="4" rx="1" fill="#FEF08A"/>
        <polygon points="15,23 58,40 30,40" fill="#FEF08A" opacity="0.14"/>
        <rect x="0" y="38" width="196" height="25" fill="#15803D"/>
        <polygon points="62,63 82,38 114,38 134,63" fill="#E5C890"/>
        <g stroke="#FEF08A" stroke-width="1.7">
          <line x1="94" y1="32" x2="94" y2="48"/><line x1="98" y1="32" x2="98" y2="48"/><line x1="102" y1="32" x2="102" y2="48"/>
          <line x1="93" y1="32" x2="103" y2="32"/>
        </g>
        <path d="M56,42 Q112,5 176,20" fill="none" stroke="#FDE047" stroke-width="2.2" stroke-dasharray="4,2.5"/>
        <circle cx="176" cy="20" r="4.5" fill="#FFFFFF" stroke="#DC2626" stroke-width="1.2"/>
        <g transform="translate(36,24) rotate(24)">
          <rect x="0" y="8" width="8" height="24" rx="1.5" fill="#FDE68A" stroke="#92400E" stroke-width="1.2"/>
          <rect x="2.5" y="0" width="3" height="9" fill="#1E293B"/>
        </g>
        <rect x="132" y="25" width="56" height="14" rx="2" fill="#14233C" stroke="#FDE047" stroke-width="1"/>
        <text x="160" y="35" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.0" font-weight="900" fill="#FDE047">28 SIXES</text>
        ${topicBanner(banner, '#C2410C', 138, 0, 0, 17, 8.8)}
        ${statBadge(statPill, 191, 59, '#FFFFFF', '#9A3412', '#9A3412', 7.6)}
      </svg>`;

    case 'australia_tech_bill':
      return `<svg viewBox="0 0 196 63" xmlns="http://www.w3.org/2000/svg">
        <rect width="196" height="63" fill="#0F2937"/>
        <rect x="0" y="45" width="196" height="18" fill="#155E75"/>
        <!-- Canberra Parliament House cleanly left -->
        <g transform="translate(6,20) scale(0.92)">
          <polygon points="4,30 30,9 56,30" fill="none" stroke="#E2E8F0" stroke-width="2.2"/>
          <line x1="30" y1="0" x2="30" y2="9" stroke="#E2E8F0" stroke-width="2"/>
          <rect x="30" y="0" width="10" height="6" fill="#2563EB"/>
          <rect x="6" y="26" width="48" height="8" fill="#CBD5E1"/>
        </g>
        <!-- 5% Fine Cap Shield cleanly separated from DUTY OF CARE badge -->
        <g transform="translate(72,18) scale(0.86)">
          <path d="M22,0 L42,7 L42,21 C42,32 33,38 22,42 C11,38 2,32 2,21 L2,7 Z" fill="#131F33" stroke="#FDE047" stroke-width="2.1"/>
          <text x="22" y="22" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="16" font-weight="900" fill="#FDE047">5%</text>
          <text x="22" y="33" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="6.4" font-weight="900" fill="#E2E8F0">FINE CAP</text>
        </g>
        <!-- Southern Cross stars in top-right Australian night sky -->
        <g fill="#FEF08A" opacity="0.92">
          <circle cx="154" cy="11" r="1.8"/><circle cx="144" cy="21" r="1.6"/>
          <circle cx="166" cy="19" r="1.6"/><circle cx="155" cy="31" r="2.0"/>
          <circle cx="161" cy="25" r="1.1"/>
        </g>
        ${topicBanner(banner, '#0369A1', 118, 0, 0, 17, 9.1)}
        ${statBadge(statPill, 191, 59, '#FFFFFF', '#0369A1', '#0369A1', 7.8)}
      </svg>`;

    case 'hanoi_blast':
      return `<svg viewBox="0 0 196 63" xmlns="http://www.w3.org/2000/svg">
        <rect width="196" height="63" fill="#271B1A"/>
        <rect x="0" y="48" width="196" height="15" fill="#443330"/>
        <!-- Collapsed Hanoi shophouse facade -->
        <g fill="#6B5B57" stroke="#1C1917" stroke-width="1">
          <rect x="12" y="22" width="38" height="29"/>
          <polygon points="54,51 54,28 84,36 92,51"/>
          <rect x="134" y="23" width="46" height="28"/>
        </g>
        <g fill="#271B1A">
          <rect x="18" y="27" width="7" height="6"/><rect x="30" y="27" width="7" height="6"/>
          <rect x="142" y="29" width="7" height="6"/><rect x="155" y="29" width="7" height="6"/><rect x="168" y="29" width="7" height="6"/>
        </g>
        <!-- Blast firelight -->
        <polygon points="74,47 86,22 94,35 108,24 102,41 116,46 92,49" fill="#EF4444"/>
        <polygon points="82,46 90,31 96,41 102,36 96,47" fill="#FEF08A"/>
        <!-- Rescue ambulance cleanly on left street, zero collision with right pill -->
        <g transform="translate(18,41)">
          <rect x="0" y="0" width="28" height="12" rx="2" fill="#F8FAFC" stroke="#1E293B" stroke-width="0.9"/>
          <rect x="9" y="-3.5" width="9" height="3.5" rx="1" fill="#DC2626"/>
          <rect x="11" y="3" width="6" height="6" fill="#DC2626"/>
          <rect x="13" y="2" width="2" height="8" fill="#FFFFFF"/>
          <rect x="10" y="5" width="8" height="2" fill="#FFFFFF"/>
          <circle cx="6" cy="12" r="3" fill="#0F172A"/><circle cx="22" cy="12" r="3" fill="#0F172A"/>
        </g>
        ${topicBanner(banner, '#991B1B', 114, 0, 0, 17, 9.1)}
        ${statBadge(statPill, 191, 59, '#FFFFFF', '#991B1B', '#7F1D1D', 7.6)}
      </svg>`;

    case 'colombia_bomb':
      return `<svg viewBox="0 0 196 63" xmlns="http://www.w3.org/2000/svg">
        <rect width="196" height="63" fill="#2B1F2E"/>
        <rect x="0" y="48" width="196" height="15" fill="#3F3344"/>
        <rect x="10" y="22" width="76" height="30" fill="#D6CCC2" stroke="#475569" stroke-width="1.2"/>
        <rect x="6" y="18" width="84" height="5" fill="#475569"/>
        <g fill="#334155">
          <rect x="16" y="28" width="9" height="11"/><rect x="30" y="28" width="9" height="11"/>
          <rect x="44" y="28" width="9" height="11"/><rect x="58" y="28" width="9" height="11"/>
        </g>
        <polygon points="86,44 98,21 105,33 120,23 113,39 127,44 108,48 92,50" fill="#EA580C"/>
        <polygon points="94,43 102,31 107,39 113,34 107,45" fill="#FEF08A"/>
        <g transform="translate(154,10)">
          <rect x="0" y="0" width="32" height="9" fill="#FACC15"/>
          <rect x="0" y="9" width="32" height="4.5" fill="#1D4ED8"/>
          <rect x="0" y="13.5" width="32" height="4.5" fill="#DC2626"/>
          <rect x="0" y="0" width="32" height="18" fill="none" stroke="#FFFFFF" stroke-width="0.8"/>
        </g>
        ${topicBanner(banner, '#6D28D9', 124, 0, 0, 17, 8.9)}
        ${statBadge(statPill, 191, 59, '#FEF08A', '#7F1D1D', '#7F1D1D', 7.8)}
      </svg>`;

    default:
      return '';
  }
}
