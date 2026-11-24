// Original flat-editorial SVG illustrations for the 13 lead/grid stories + vector World Map.
// Designed for high clarity and silhouette readability at both 1024px and 300px thumbnail scale.

const STATUS_STYLE = {
  CONFIRMED: { bg: '#15803D', fg: '#FFFFFF' },
  OFFICIAL: { bg: '#1D4ED8', fg: '#FFFFFF' },
  REPORTED: { bg: '#475569', fg: '#FFFFFF' },
  CLAIM: { bg: '#D97706', fg: '#FFFFFF' },
  ONGOING: { bg: '#B91C1C', fg: '#FFFFFF' },
};

function statusTag(status, x, y, w = 68) {
  const st = STATUS_STYLE[status] || STATUS_STYLE.REPORTED;
  return `
    <g transform="translate(${x},${y})">
      <rect x="0" y="0" width="${w}" height="15" rx="2.5" fill="${st.bg}" />
      <text x="${w / 2}" y="10.8" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.4" font-weight="800" letter-spacing="0.4" fill="${st.fg}">${status}</text>
    </g>`;
}

function calloutPill(label, x, y, w, bg = '#14233C', fg = '#FFFFFF') {
  return `
    <g transform="translate(${x},${y})">
      <rect x="0" y="0" width="${w}" height="16" rx="2.5" fill="${bg}" />
      <text x="${w / 2}" y="11.2" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.8" font-weight="800" letter-spacing="0.3" fill="${fg}">${label}</text>
    </g>`;
}

export function renderHeroArt(key, status) {
  // ViewBox 264 x 88
  const badge = statusTag(status, 190, 68, 68);
  switch (key) {
    case 'megaspeed_rally':
      return `<svg viewBox="0 0 264 88" width="100%" height="88" xmlns="http://www.w3.org/2000/svg">
        <rect width="264" height="88" fill="#EEF4EE"/>
        <!-- Subtle chart grid -->
        <g stroke="#CFE0D1" stroke-width="1">
          <line x1="112" y1="18" x2="256" y2="18"/>
          <line x1="112" y1="36" x2="256" y2="36"/>
          <line x1="112" y1="54" x2="256" y2="54"/>
          <line x1="112" y1="72" x2="256" y2="72"/>
        </g>
        <!-- Left panel: silicon chip + Entity List stamp -->
        <rect x="8" y="8" width="96" height="72" rx="4" fill="#FAF6EE" stroke="#CBD5E1" stroke-width="1.2"/>
        <g transform="translate(34,20)">
          <rect x="0" y="0" width="44" height="44" rx="4" fill="#1E293B" stroke="#0F172A" stroke-width="1.5"/>
          <rect x="10" y="10" width="24" height="24" rx="2" fill="#22C55E"/>
          <rect x="15" y="15" width="14" height="14" rx="1" fill="#14532D"/>
          <!-- Chip pins -->
          <g stroke="#475569" stroke-width="2.2">
            <line x1="10" y1="-6" x2="10" y2="0"/><line x1="22" y1="-6" x2="22" y2="0"/><line x1="34" y1="-6" x2="34" y2="0"/>
            <line x1="10" y1="44" x2="10" y2="50"/><line x1="22" y1="44" x2="22" y2="50"/><line x1="34" y1="44" x2="34" y2="50"/>
            <line x1="-6" y1="10" x2="0" y2="10"/><line x1="-6" y1="22" x2="0" y2="22"/><line x1="-6" y1="34" x2="0" y2="34"/>
            <line x1="44" y1="10" x2="50" y2="10"/><line x1="44" y1="22" x2="50" y2="22"/><line x1="44" y1="34" x2="50" y2="34"/>
          </g>
        </g>
        <!-- Red angled ENTITY LIST stamp -->
        <g transform="translate(56,50) rotate(-13)">
          <rect x="-42" y="-11" width="84" height="20" rx="2" fill="#FFF1F2" stroke="#B91C1C" stroke-width="2"/>
          <text x="0" y="3" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="9.2" font-weight="900" fill="#B91C1C">ENTITY LIST</text>
        </g>
        <!-- Right: Asian chip rally area + bold green curve -->
        <polygon points="116,74 138,70 158,66 176,58 196,44 218,32 242,20 254,18 254,78 116,78" fill="#BBF7D0" opacity="0.65"/>
        <polyline points="116,74 138,70 158,66 176,58 196,44 218,32 242,20 254,18" fill="none" stroke="#15803D" stroke-width="3.2" stroke-linejoin="round"/>
        <circle cx="242" cy="20" r="4" fill="#15803D"/>
        <!-- Rally callout pills positioned cleanly above curve -->
        ${calloutPill('TAIEX +9%', 114, 8, 60, '#14532D', '#FFFFFF')}
        ${calloutPill('KOSPI +7%', 178, 8, 60, '#166534', '#FEF08A')}
        <rect x="114" y="28" width="76" height="14" rx="2" fill="#FFFFFF" stroke="#86EFAC" stroke-width="1"/>
        <text x="152" y="38" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.2" font-weight="800" fill="#14532D">NIKKEI +3.9%</text>
        ${badge}
      </svg>`;

    case 'poland_zaporizhzhia':
      return `<svg viewBox="0 0 264 88" width="100%" height="88" xmlns="http://www.w3.org/2000/svg">
        <rect width="264" height="88" fill="#1E2B45"/>
        <!-- Subtle night horizon glow -->
        <rect x="0" y="64" width="264" height="24" fill="#2A3957"/>
        <!-- Left half: Poland radar & border -->
        <g stroke="#60A5FA" stroke-width="1" opacity="0.45" fill="none">
          <circle cx="52" cy="70" r="22"/><circle cx="52" cy="70" r="40"/><circle cx="52" cy="70" r="58"/>
        </g>
        <path d="M52,70 L78,24 A58,58 0 0,1 102,42 Z" fill="#38BDF8" opacity="0.18"/>
        <!-- Border line PL | UA -->
        <line x1="126" y1="6" x2="126" y2="82" stroke="#F8FAFC" stroke-width="1.8" stroke-dasharray="5,4"/>
        <text x="116" y="18" text-anchor="end" font-family="Noto Sans, sans-serif" font-size="9.5" font-weight="900" fill="#93C5FD">POLAND</text>
        <text x="136" y="18" text-anchor="start" font-family="Noto Sans, sans-serif" font-size="9.5" font-weight="900" fill="#FDE047">UKRAINE</text>
        <!-- Drone incursion arc crossing border into Dorohusk -->
        <path d="M186,34 Q138,18 82,36 Q98,48 136,42" fill="none" stroke="#EF4444" stroke-width="2.4" stroke-dasharray="4,2"/>
        <!-- Sleek delta drone silhouette -->
        <polygon points="78,36 94,29 91,36 94,43" fill="#F8FAFC" stroke="#EF4444" stroke-width="1.2"/>
        <!-- Right half: Zaporizhzhia residential block + rescue floodlight -->
        <rect x="172" y="34" width="38" height="44" fill="#475569" stroke="#1E293B" stroke-width="1.2"/>
        <rect x="214" y="42" width="32" height="36" fill="#334155" stroke="#1E293B" stroke-width="1.2"/>
        <!-- Lit windows -->
        <g fill="#FDE68A">
          <rect x="178" y="42" width="6" height="5"/><rect x="188" y="42" width="6" height="5"/>
          <rect x="178" y="52" width="6" height="5"/><rect x="198" y="52" width="6" height="5"/>
          <rect x="220" y="50" width="5" height="5"/><rect x="232" y="50" width="5" height="5"/>
        </g>
        <!-- Impact plume -->
        <polygon points="196,38 206,24 210,33 220,25 214,39 224,42 208,45 198,47" fill="#F97316"/>
        <polygon points="202,38 208,30 212,37 216,33 211,42" fill="#FEF08A"/>
        ${calloutPill('AIRSPACE BREACH', 8, 66, 98, '#991B1B', '#FFFFFF')}
        ${badge}
      </svg>`;

    case 'shenzhou24_space':
      return `<svg viewBox="0 0 264 88" width="100%" height="88" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="spBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0B1933"/>
            <stop offset="100%" stop-color="#1E3A6E"/>
          </linearGradient>
        </defs>
        <rect width="264" height="88" fill="url(#spBg)"/>
        <!-- Stars -->
        <g fill="#E2E8F0">
          <circle cx="22" cy="18" r="1.1"/><circle cx="48" cy="12" r="1.4"/><circle cx="90" cy="15" r="1"/>
          <circle cx="152" cy="12" r="1.3"/><circle cx="212" cy="16" r="1.1"/><circle cx="246" cy="24" r="1.5"/>
          <circle cx="34" cy="44" r="1"/><circle cx="234" cy="48" r="1.1"/>
        </g>
        <!-- Sunlit Earth limb -->
        <ellipse cx="132" cy="122" rx="170" ry="52" fill="#1D4ED8"/>
        <ellipse cx="132" cy="125" rx="166" ry="49" fill="#0284C7"/>
        <path d="M18,86 Q132,58 246,86" fill="none" stroke="#7DD3FC" stroke-width="2.5" opacity="0.8"/>
        <!-- Tiangong space station (center-right) -->
        <g transform="translate(148,36)">
          <!-- Solar wings -->
          <rect x="-42" y="-14" width="32" height="10" fill="#1E40AF" stroke="#93C5FD" stroke-width="1"/>
          <rect x="-42" y="8" width="32" height="10" fill="#1E40AF" stroke="#93C5FD" stroke-width="1"/>
          <rect x="24" y="-16" width="36" height="11" fill="#1E40AF" stroke="#93C5FD" stroke-width="1"/>
          <rect x="24" y="9" width="36" height="11" fill="#1E40AF" stroke="#93C5FD" stroke-width="1"/>
          <!-- Core & lab modules -->
          <rect x="-14" y="-7" width="40" height="14" rx="4" fill="#F8FAFC" stroke="#475569" stroke-width="1.2"/>
          <rect x="-26" y="-5" width="14" height="10" rx="2" fill="#E2E8F0" stroke="#475569" stroke-width="1"/>
          <rect x="2" y="-12" width="10" height="24" rx="2" fill="#CBD5E1" stroke="#475569" stroke-width="1"/>
          <!-- Red band accent -->
          <rect x="14" y="-7" width="4" height="14" fill="#DC2626"/>
        </g>
        <!-- Approaching Shenzhou-24 capsule on left -->
        <g transform="translate(70,38)">
          <rect x="-18" y="-14" width="14" height="8" fill="#2563EB" stroke="#93C5FD" stroke-width="0.9"/>
          <rect x="-18" y="6" width="14" height="8" fill="#2563EB" stroke="#93C5FD" stroke-width="0.9"/>
          <rect x="-12" y="-6" width="16" height="12" rx="2" fill="#F1F5F9" stroke="#334155" stroke-width="1"/>
          <polygon points="4,-5 16,-2 16,2 4,5" fill="#E2E8F0" stroke="#334155" stroke-width="1"/>
          <line x1="19" y1="0" x2="46" y2="0" stroke="#FDE047" stroke-width="1.5" stroke-dasharray="3,3"/>
        </g>
        <!-- Mission label badges -->
        ${calloutPill('SHENZHOU-24 \u00b7 1ST FOREIGN CREW', 8, 8, 154, '#0F766E', '#FFFFFF')}
        <!-- Pakistan crescent-star mini emblem -->
        <g transform="translate(18,62)">
          <rect x="0" y="0" width="26" height="17" rx="2" fill="#15803D" stroke="#FFFFFF" stroke-width="0.8"/>
          <rect x="0" y="0" width="7" height="17" rx="1" fill="#FFFFFF"/>
          <circle cx="16.5" cy="8.5" r="4.2" fill="#FFFFFF"/>
          <circle cx="18.2" cy="7.7" r="3.4" fill="#15803D"/>
        </g>
        ${badge}
      </svg>`;

    default:
      return '';
  }
}

export function renderGridArt(key, status) {
  // ViewBox 190 x 64
  const badge = statusTag(status, 118, 46, 67);
  switch (key) {
    case 'hormuz_tankers':
      return `<svg viewBox="0 0 190 64" width="100%" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="190" height="64" fill="#DFF0F7"/>
        <!-- Desert coastline silhouette top -->
        <path d="M0,0 L190,0 L190,15 Q145,22 105,14 Q60,24 0,16 Z" fill="#E6D5B8" stroke="#B89F78" stroke-width="1"/>
        <!-- Sea surface -->
        <rect x="0" y="38" width="190" height="26" fill="#0369A1" opacity="0.22"/>
        <!-- Three dark tanker silhouettes with flames -->
        <g transform="translate(14,34)">
          <polygon points="0,8 42,8 46,2 4,2" fill="#1E293B"/>
          <rect x="6" y="-4" width="8" height="6" fill="#475569"/>
          <polygon points="22,2 26,-10 30,-2 34,-12 37,2" fill="#EF4444"/>
          <polygon points="25,2 28,-6 32,2" fill="#FDE047"/>
        </g>
        <g transform="translate(68,36)">
          <polygon points="0,8 40,8 44,2 4,2" fill="#1E293B"/>
          <rect x="30" y="-4" width="7" height="6" fill="#475569"/>
          <polygon points="10,2 14,-9 18,-1 22,-11 25,2" fill="#F97316"/>
          <polygon points="13,2 17,-5 20,2" fill="#FEF08A"/>
        </g>
        <g transform="translate(122,32)">
          <polygon points="0,7 36,7 39,2 3,2" fill="#334155"/>
          <polygon points="12,2 16,-8 20,-1 24,-9 27,2" fill="#EA580C"/>
        </g>
        <!-- Floating naval mine icon -->
        <g transform="translate(34,53)">
          <circle cx="0" cy="0" r="5" fill="#0F172A"/>
          <g stroke="#0F172A" stroke-width="1.5">
            <line x1="-8" y1="0" x2="8" y2="0"/><line x1="0" y1="-8" x2="0" y2="8"/>
            <line x1="-6" y1="-6" x2="6" y2="6"/><line x1="-6" y1="6" x2="6" y2="-6"/>
          </g>
        </g>
        ${calloutPill('3 TANKERS', 6, 5, 58, '#9A3412', '#FFFFFF')}
        ${badge}
      </svg>`;

    case 'australia_tech_bill':
      return `<svg viewBox="0 0 190 64" width="100%" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="190" height="64" fill="#EBF5F0"/>
        <!-- Canberra Parliament House silhouette left -->
        <g transform="translate(6,14)">
          <polygon points="4,40 31,15 58,40" fill="none" stroke="#1E293B" stroke-width="2.2"/>
          <line x1="31" y1="3" x2="31" y2="15" stroke="#1E293B" stroke-width="2"/>
          <rect x="31" y="3" width="9" height="5.5" fill="#1D4ED8"/>
          <rect x="6" y="36" width="50" height="8" fill="#CBD5E1" stroke="#475569" stroke-width="1"/>
        </g>
        <!-- Duty of Care Shield cleanly centered with generous daylight -->
        <g transform="translate(70,9) scale(0.86)">
          <path d="M26,0 L50,8 L50,24 C50,36 39,43 26,48 C13,43 2,36 2,24 L2,8 Z" fill="#14233C" stroke="#0F766E" stroke-width="2.2"/>
          <text x="26" y="24" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="16" font-weight="900" fill="#FDE047">5%</text>
          <text x="26" y="36" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="6.8" font-weight="800" fill="#E2E8F0">FINE CAP</text>
        </g>
        ${calloutPill('DUTY OF CARE', 118, 6, 67, '#0F766E', '#FFFFFF')}
        ${badge}
      </svg>`;

    case 'korea_jets':
      return `<svg viewBox="0 0 190 64" width="100%" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="190" height="64" fill="#E6EEF8"/>
        <!-- Radar concentric rings -->
        <g stroke="#3B82F6" stroke-width="0.9" fill="none" opacity="0.45">
          <circle cx="56" cy="40" r="16"/><circle cx="56" cy="40" r="30"/><circle cx="56" cy="40" r="46"/>
        </g>
        <!-- Ulleungdo island shape -->
        <polygon points="48,44 55,34 65,38 62,48 51,48" fill="#15803D" stroke="#14532D" stroke-width="1.2"/>
        <!-- KADIZ boundary arc -->
        <path d="M98,4 Q112,34 92,62" fill="none" stroke="#DC2626" stroke-width="1.6" stroke-dasharray="4,3"/>
        <!-- Approaching warplane arrows -->
        <g fill="#B91C1C">
          <polygon points="122,16 138,11 135,16 138,21"/>
          <polygon points="134,28 150,23 147,28 150,33"/>
        </g>
        <!-- Scrambled F-15K intercept arrow -->
        <polygon points="94,26 76,20 80,27 76,33" fill="#1D4ED8"/>
        <line x1="60" y1="36" x2="88" y2="26" stroke="#1D4ED8" stroke-width="1.8"/>
        ${calloutPill('SHELTER ALERT', 6, 5, 76, '#B91C1C', '#FEF08A')}
        ${badge}
      </svg>`;

    case 'hasina_return':
      return `<svg viewBox="0 0 190 64" width="100%" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="190" height="64" fill="#F6F1E6"/>
        <!-- Calendar tile DEC 16 -->
        <g transform="translate(8,8)">
          <rect x="0" y="0" width="52" height="48" rx="4" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.3"/>
          <rect x="0" y="0" width="52" height="15" rx="3" fill="#B91C1C"/>
          <text x="26" y="11" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.5" font-weight="900" fill="#FFFFFF">DEC</text>
          <text x="26" y="38" text-anchor="middle" font-family="Noto Serif, serif" font-size="22" font-weight="900" fill="#141D2E">16</text>
        </g>
        <!-- Flight path & jet silhouette cleanly below top pill -->
        <path d="M66,34 Q102,22 142,35" fill="none" stroke="#0F766E" stroke-width="2" stroke-dasharray="4,3"/>
        <polygon points="146,35 131,29 134,35 130,40" fill="#0F766E"/>
        <!-- Bangladesh green/red flag badge -->
        <rect x="68" y="42" width="24" height="15" rx="1.5" fill="#006A4E"/>
        <circle cx="79" cy="49.5" r="4.5" fill="#F42A41"/>
        ${calloutPill('ARREST WARNING', 96, 6, 88, '#7F1D1D', '#FFFFFF')}
        ${badge}
      </svg>`;

    case 'malaysia_migrants':
      return `<svg viewBox="0 0 190 64" width="100%" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="190" height="64" fill="#E8F3F6"/>
        <!-- Sea bands -->
        <rect x="0" y="42" width="190" height="22" fill="#0E7490" opacity="0.22"/>
        <!-- Repatriation ship silhouette -->
        <g transform="translate(16,24)">
          <polygon points="0,20 72,20 78,12 6,12" fill="#1E293B"/>
          <rect x="14" y="3" width="42" height="9" rx="1.5" fill="#F8FAFC" stroke="#334155" stroke-width="1.2"/>
          <rect x="20" y="6" width="6" height="4" fill="#38BDF8"/>
          <rect x="30" y="6" width="6" height="4" fill="#38BDF8"/>
          <rect x="40" y="6" width="6" height="4" fill="#38BDF8"/>
          <rect x="48" y="-3" width="8" height="6" fill="#DC2626"/>
        </g>
        <!-- Route arrow MY -> MM -->
        <text x="108" y="20" font-family="Noto Sans, sans-serif" font-size="9" font-weight="900" fill="#1E293B">MY &#8594; MM</text>
        <text x="108" y="34" font-family="Noto Sans, sans-serif" font-size="14" font-weight="900" fill="#B91C1C">6,500+</text>
        ${badge}
      </svg>`;

    case 'japan_icc':
      return `<svg viewBox="0 0 190 64" width="100%" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="190" height="64" fill="#F7F2E8"/>
        <!-- Japanese rising sun disc left -->
        <rect x="10" y="14" width="44" height="30" rx="2" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
        <circle cx="32" cy="29" r="9" fill="#BC002D"/>
        <!-- ICC scales of justice centered cleanly between flag & badges -->
        <g transform="translate(66,14) scale(0.9)" stroke="#14233C" stroke-width="2" fill="none">
          <line x1="22" y1="4" x2="22" y2="38"/>
          <line x1="10" y1="38" x2="34" y2="38"/>
          <line x1="6" y1="11" x2="38" y2="11"/>
          <path d="M6,11 L1,24 L11,24 Z" fill="#F59E0B" stroke-width="1.2"/>
          <path d="M38,11 L33,24 L43,24 Z" fill="#F59E0B" stroke-width="1.2"/>
        </g>
        ${calloutPill('2027 PAID EARLY', 104, 6, 81, '#1E3A8A', '#FFFFFF')}
        ${badge}
      </svg>`;

    case 'drc_aircraft':
      return `<svg viewBox="0 0 190 64" width="100%" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="190" height="64" fill="#EDF3EA"/>
        <!-- South Kivu highland ridges -->
        <polygon points="0,64 0,40 36,28 74,42 118,24 162,38 190,30 190,64" fill="#86A789"/>
        <polygon points="0,64 0,48 52,38 96,50 144,36 190,46 190,64" fill="#4F775A"/>
        <!-- Dashed descent path + prop aircraft silhouette -->
        <path d="M20,14 Q68,14 108,34" fill="none" stroke="#DC2626" stroke-width="2" stroke-dasharray="4,3"/>
        <g transform="translate(86,20) rotate(22)">
          <rect x="-12" y="-2.5" width="24" height="5" rx="2" fill="#1E293B"/>
          <rect x="-3" y="-11" width="5" height="22" rx="1" fill="#334155"/>
          <rect x="-12" y="-6" width="3" height="12" fill="#475569"/>
        </g>
        <!-- Smoke plume on ridge -->
        <circle cx="114" cy="34" r="5" fill="#F97316"/>
        <circle cx="118" cy="28" r="4" fill="#64748B" opacity="0.75"/>
        ${calloutPill('MINEMBWE', 6, 5, 58, '#14532D', '#FFFFFF')}
        ${badge}
      </svg>`;

    case 'wfp_food_routes':
      return `<svg viewBox="0 0 190 64" width="100%" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="190" height="64" fill="#EAF2F8"/>
        <rect x="0" y="42" width="190" height="22" fill="#1D4ED8" opacity="0.16"/>
        <!-- Grain freighter -->
        <g transform="translate(12,24)">
          <polygon points="0,19 64,19 70,11 4,11" fill="#1E3A8A"/>
          <rect x="10" y="3" width="14" height="8" fill="#D97706"/>
          <rect x="26" y="3" width="14" height="8" fill="#F59E0B"/>
          <rect x="42" y="3" width="14" height="8" fill="#D97706"/>
          <rect x="56" y="-2" width="8" height="13" fill="#F8FAFC" stroke="#1E293B" stroke-width="1"/>
        </g>
        <!-- Red chokepoint barrier -->
        <g transform="translate(92,16)">
          <rect x="0" y="0" width="8" height="32" rx="2" fill="#B91C1C"/>
          <line x1="-4" y1="8" x2="12" y2="24" stroke="#FEF08A" stroke-width="2.2"/>
          <line x1="12" y1="8" x2="-4" y2="24" stroke="#FEF08A" stroke-width="2.2"/>
        </g>
        <text x="112" y="23" font-family="Noto Sans, sans-serif" font-size="13.5" font-weight="900" fill="#B91C1C">7.3M</text>
        <text x="112" y="35" font-family="Noto Sans, sans-serif" font-size="8" font-weight="800" fill="#334155">+$727M COST</text>
        ${badge}
      </svg>`;

    case 'colombia_bomb':
      return `<svg viewBox="0 0 190 64" width="100%" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="190" height="64" fill="#F8EFEA"/>
        <!-- Civic headquarters facade shifted left for clean separation -->
        <rect x="10" y="16" width="76" height="40" fill="#E2D6C8" stroke="#64748B" stroke-width="1.3"/>
        <rect x="6" y="12" width="84" height="6" fill="#475569"/>
        <g fill="#475569">
          <rect x="16" y="24" width="10" height="12"/><rect x="32" y="24" width="10" height="12"/>
          <rect x="48" y="24" width="10" height="12"/><rect x="64" y="24" width="10" height="12"/>
        </g>
        <!-- Sharp blast starburst cleanly clear of CONFIRMED badge -->
        <polygon points="88,34 99,16 105,28 120,18 112,33 126,38 110,42 113,52 99,44 87,49 92,39" fill="#EA580C"/>
        <polygon points="95,34 102,24 106,32 113,28 108,38 97,40" fill="#FEF08A"/>
        <!-- Colombian tri-band accent -->
        <rect x="150" y="8" width="32" height="8" fill="#FACC15"/>
        <rect x="150" y="16" width="32" height="4" fill="#1D4ED8"/>
        <rect x="150" y="20" width="32" height="4" fill="#DC2626"/>
        ${badge}
      </svg>`;

    case 'meta_muse_uk':
      return `<svg viewBox="0 0 190 64" width="100%" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="190" height="64" fill="#EFEFF9"/>
        <!-- Smartphone frame -->
        <rect x="10" y="6" width="34" height="52" rx="5" fill="#1E293B" stroke="#0F172A" stroke-width="1.5"/>
        <rect x="14" y="12" width="26" height="38" rx="2" fill="#FFFFFF"/>
        <!-- AI Sparkle inside phone -->
        <polygon points="27,19 29.5,26.5 37,29 29.5,31.5 27,39 24.5,31.5 17,29 24.5,26.5" fill="#4F46E5"/>
        <!-- Shopping bag icon cleanly separated from top-right pill -->
        <g transform="translate(56,15)">
          <rect x="0" y="8" width="32" height="29" rx="3" fill="#2563EB"/>
          <path d="M9,8 C9,0 23,0 23,8" fill="none" stroke="#1E3A8A" stroke-width="2.5"/>
          <text x="16" y="27" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.8" font-weight="900" fill="#FFFFFF">MUSE</text>
        </g>
        <!-- UK regulator pill fits fully inside 190px frame -->
        ${calloutPill('UK \u00b7 ICO/CMA', 107, 6, 78, '#3730A3', '#FFFFFF')}
        ${badge}
      </svg>`;

    default:
      return '';
  }
}

export function renderWorldMap(stories, regionColorMap) {
  // Clean editorial equirectangular vector world map (286 x 174) with 19 crisp all-continent pins
  const pins = stories
    .filter((s) => s.pin)
    .map((s) => {
      const col = regionColorMap[s.region] || '#141D2E';
      const r = s.num <= 13 ? 6.6 : 5.8;
      const fs = s.num <= 13 ? 7.4 : 6.6;
      return `
        <g transform="translate(${s.pin.x},${s.pin.y})">
          <circle r="${r}" fill="${col}" stroke="#FFFFFF" stroke-width="1.2"/>
          <text y="2.6" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="${fs}" font-weight="900" fill="#FFFFFF">${s.num}</text>
        </g>`;
    })
    .join('');

  return `<svg viewBox="0 0 286 174" width="100%" height="174" xmlns="http://www.w3.org/2000/svg">
    <rect width="286" height="174" rx="3" fill="#E8F1F7" stroke="#CBD5E1" stroke-width="1"/>
    <!-- Subtle graticule -->
    <g stroke="#CFE0EC" stroke-width="0.6" stroke-dasharray="2,2">
      <line x1="0" y1="84" x2="286" y2="84"/>
      <line x1="0" y1="46" x2="286" y2="46"/>
      <line x1="0" y1="122" x2="286" y2="122"/>
      <line x1="71" y1="0" x2="71" y2="174"/>
      <line x1="143" y1="0" x2="143" y2="174"/>
      <line x1="214" y1="0" x2="214" y2="174"/>
    </g>
    <!-- Crisp stylized world landmasses -->
    <g fill="#D8E1D3" stroke="#96A896" stroke-width="0.9" stroke-linejoin="round">
      <!-- North America -->
      <path d="M16,32 L46,24 L76,26 L94,40 L84,56 L72,62 L66,76 L72,84 L62,86 L50,74 L38,68 L28,54 L14,44 Z"/>
      <!-- Greenland -->
      <path d="M88,12 L114,10 L118,24 L102,32 L88,24 Z"/>
      <!-- South America -->
      <path d="M72,88 L90,86 L108,100 L114,114 L102,136 L88,154 L80,150 L78,126 L70,104 Z"/>
      <!-- Europe -->
      <path d="M130,36 L146,24 L168,26 L176,38 L174,56 L158,64 L144,62 L134,54 Z"/>
      <!-- UK / Ireland -->
      <path d="M128,44 L134,42 L136,52 L129,52 Z"/>
      <!-- Africa -->
      <path d="M132,68 L156,66 L174,76 L182,92 L176,114 L164,140 L152,140 L142,114 L132,96 L126,80 Z"/>
      <!-- Madagascar -->
      <path d="M180,118 L185,118 L184,130 L179,129 Z"/>
      <!-- Asia + Middle East -->
      <path d="M174,24 L218,20 L256,28 L272,42 L262,56 L248,66 L244,82 L228,96 L216,92 L206,86 L194,86 L180,84 L172,72 L176,56 Z"/>
      <!-- Japan -->
      <path d="M254,58 L260,54 L263,68 L256,74 L252,68 Z"/>
      <!-- Maritime SE Asia -->
      <path d="M218,100 L232,102 L238,108 L224,110 Z"/>
      <path d="M240,94 L247,96 L246,106 L239,104 Z"/>
      <!-- Australia -->
      <path d="M232,116 L260,114 L270,126 L266,142 L248,144 L232,134 Z"/>
      <!-- New Zealand -->
      <path d="M273,140 L278,138 L276,150 L271,150 Z"/>
    </g>
    <!-- Dashed US-to-Asia chip/export-control link for story #1 -->
    <path d="M76,52 Q158,12 240,78" fill="none" stroke="#B45309" stroke-width="1.1" stroke-dasharray="3,2.5" opacity="0.7"/>
    <!-- Numbered Story Pins across all continents -->
    ${pins}
    <text x="6" y="168" font-family="Noto Sans, sans-serif" font-size="7.2" font-weight="700" fill="#475569">20 global pins (1\u201313 + key briefs) \u00b7 Dashed arc = US\u2013Asia chip impact (#1)</text>
  </svg>`;
}
