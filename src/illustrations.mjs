// High-contrast editorial SVG illustrations for 300px thumbnail legibility and full-res craft.
// Clean 2-tier stat callout grammar (oversized navy/crimson number block + bold gold sub-ribbon)
// paired with crisp left-side vector symbols and varied, bright front-page backdrops.

function statBlock(x, y, w, mainText, subText, opts = {}) {
  const {
    bg = '#152744',
    fg = '#FFFFFF',
    subBg = '#F4C430',
    subFg = '#0F172A',
    mainSize = 20,
    subSize = 8.4,
    mainH = 31,
    subH = 16,
  } = opts;
  const cx = x + w / 2;
  return `
    <g>
      <rect x="${x}" y="${y}" width="${w}" height="${mainH}" rx="3.5" fill="${bg}"/>
      <text x="${cx}" y="${y + mainH * 0.72}" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="${mainSize}" font-weight="900" fill="${fg}" letter-spacing="-0.3">${mainText}</text>
      <rect x="${x}" y="${y + mainH + 3.5}" width="${w}" height="${subH}" rx="2.5" fill="${subBg}"/>
      <text x="${cx}" y="${y + mainH + 3.5 + subH * 0.74}" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="${subSize}" font-weight="900" fill="${subFg}" letter-spacing="0.25">${subText}</text>
    </g>`;
}

export function renderHeroArt(story) {
  const W = 322;
  const H = 98;
  switch (story.art) {
    case 'huawei_verdict':
      return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#EDF3FA"/>
        <rect x="0" y="78" width="${W}" height="20" fill="#D5E1EF"/>
        <!-- Federal Courthouse -->
        <g transform="translate(12,11)">
          <polygon points="46,2 90,21 2,21" fill="#1E3A5F"/>
          <rect x="6" y="21" width="80" height="5" fill="#334E73"/>
          <rect x="12" y="26" width="9" height="36" fill="#FFFFFF" stroke="#64748B" stroke-width="1.2"/>
          <rect x="29" y="26" width="9" height="36" fill="#FFFFFF" stroke="#64748B" stroke-width="1.2"/>
          <rect x="46" y="26" width="9" height="36" fill="#FFFFFF" stroke="#64748B" stroke-width="1.2"/>
          <rect x="63" y="26" width="9" height="36" fill="#FFFFFF" stroke="#64748B" stroke-width="1.2"/>
          <rect x="78" y="26" width="6" height="36" fill="#E2E8F0" stroke="#64748B" stroke-width="1.2"/>
          <rect x="4" y="62" width="84" height="6" fill="#475569"/>
          <rect x="0" y="68" width="92" height="5" fill="#0F172A"/>
        </g>
        <!-- Crisp Judge Gavel -->
        <g transform="translate(106,33)">
          <rect x="4" y="36" width="40" height="9" rx="3" fill="#334155"/>
          <g transform="rotate(-26 24 22)">
            <rect x="6" y="6" width="30" height="15" rx="3" fill="#9A3412" stroke="#431407" stroke-width="1.5"/>
            <rect x="19" y="20" width="6" height="25" rx="2" fill="#B45309"/>
          </g>
        </g>
        <!-- Oversized 2-Tier Verdict Block -->
        ${statBlock(154, 15, 156, '10 / 12 GUILTY', 'HUAWEI · RICO ACQUITTED', {
          bg: '#152744',
          subBg: '#F4C430',
          mainSize: 19.5,
          subSize: 9.2,
          mainH: 43,
          subH: 21,
        })}
      </svg>`;

    case 'shanghai_purge':
      return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#FBF4E8"/>
        <rect x="0" y="78" width="${W}" height="20" fill="#E5DCC5"/>
        <!-- Shanghai Pudong Skyline -->
        <g transform="translate(10,8)">
          <rect x="6" y="42" width="16" height="30" fill="#64748B"/>
          <rect x="26" y="26" width="18" height="46" fill="#475569"/>
          <polygon points="55,6 63,72 47,72" fill="#1E3A5F"/>
          <circle cx="55" cy="24" r="6.5" fill="#DC2626"/>
          <circle cx="55" cy="45" r="4.8" fill="#F59E0B"/>
          <rect x="69" y="18" width="19" height="54" fill="#334155"/>
          <polygon points="94,12 108,12 110,72 92,72" fill="#1E293B"/>
          <rect x="114" y="34" width="16" height="38" fill="#64748B"/>
          <!-- Bold Red CCDI Investigation Stamp -->
          <circle cx="115" cy="21" r="14" fill="#B91C1C" stroke="#FFFFFF" stroke-width="2.2"/>
          <text x="115" y="24.5" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.6" font-weight="900" fill="#FDE047">CCDI</text>
        </g>
        <!-- Oversized 2-Tier Stat Block -->
        ${statBlock(154, 15, 156, 'POLITBURO', 'SHANGHAI CHIEF PROBED', {
          bg: '#991B1B',
          subBg: '#F4C430',
          mainSize: 21,
          subSize: 9.2,
          mainH: 43,
          subH: 21,
        })}
      </svg>`;

    case 'zaporizhzhia_poland':
      return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#14243D"/>
        <!-- Stylized Poland / Ukraine border radar map -->
        <rect x="9" y="9" width="65" height="80" rx="3" fill="#1E3A5F" stroke="#60A5FA" stroke-width="1"/>
        <rect x="74" y="9" width="73" height="80" rx="3" fill="#1A2E4D" stroke="#60A5FA" stroke-width="1"/>
        <line x1="74" y1="9" x2="74" y2="89" stroke="#F4C430" stroke-width="2.4" stroke-dasharray="5,3"/>
        <text x="41" y="23" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.8" font-weight="900" fill="#BFDBFE">POLAND</text>
        <text x="111" y="23" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="8.8" font-weight="900" fill="#FDE047">UKRAINE</text>
        <!-- Drone incursion arc across Dorohusk -->
        <path d="M126,56 Q86,34 45,46 Q68,56 112,68" fill="none" stroke="#FB923C" stroke-width="2.4" stroke-dasharray="4,2"/>
        <polygon points="41,46 54,40 52,52" fill="#FDE047"/>
        <text x="41" y="81" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="7.4" font-weight="800" fill="#E2E8F0">DOROHUSK</text>
        <!-- Zaporizhzhia impact burst -->
        <circle cx="120" cy="59" r="13" fill="#DC2626" opacity="0.45"/>
        <polygon points="120,44 124,54 134,52 127,60 133,69 122,65 116,73 115,62 105,61 114,55" fill="#F97316"/>
        <circle cx="120" cy="59" r="4.5" fill="#FEF08A"/>
        <!-- Oversized 2-Tier Stat Block -->
        ${statBlock(156, 15, 156, '2 DEAD · 40+', 'DRONE ENTERS POLAND', {
          bg: '#B91C1C',
          subBg: '#F4C430',
          mainSize: 19.5,
          subSize: 9.2,
          mainH: 43,
          subH: 21,
        })}
      </svg>`;

    default:
      return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%"></svg>`;
  }
}

export function renderFeatureArt(story) {
  const W = 240;
  const H = 64;
  switch (story.art) {
    case 'global_markets':
      return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#ECFDF5"/>
        <line x1="10" y1="53" x2="90" y2="53" stroke="#94A3B8" stroke-width="1.3"/>
        <polyline points="12,48 28,42 42,32 58,27 74,15 88,10" fill="none" stroke="#15803D" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
        <polygon points="12,48 28,42 42,32 58,27 74,15 88,10 88,53 12,53" fill="#22C55E" opacity="0.24"/>
        <circle cx="88" cy="10" r="3.6" fill="#15803D"/>
        <polyline points="56,36 70,42 86,47" fill="none" stroke="#DC2626" stroke-width="2.2" stroke-dasharray="3,2"/>
        ${statBlock(98, 7, 134, '+8.99%', 'TAIEX · DOW 50K · NVDA -6%', {
          bg: '#14532D',
          subBg: '#F4C430',
          mainSize: 19.5,
          subSize: 7.4,
          mainH: 30,
          subH: 16,
        })}
      </svg>`;

    case 'sanofi_insmed':
      return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#EFF6FF"/>
        <g transform="translate(10,13)">
          <rect x="4" y="8" width="46" height="22" rx="11" fill="#2563EB" stroke="#1E3A8A" stroke-width="1.6"/>
          <path d="M27,8 L39,8 A11,11 0 0 1 39,30 L27,30 Z" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1.4"/>
          <circle cx="66" cy="19" r="15" fill="#DBEAFE" stroke="#2563EB" stroke-width="1.8"/>
          <rect x="63" y="10" width="6" height="18" rx="1" fill="#1D4ED8"/>
          <rect x="57" y="16" width="18" height="6" rx="1" fill="#1D4ED8"/>
        </g>
        ${statBlock(98, 7, 134, '$41bn', 'CASH DEAL · $175 / SHARE', {
          bg: '#1E3A8A',
          subBg: '#F4C430',
          mainSize: 19.5,
          subSize: 7.7,
          mainH: 30,
          subH: 16,
        })}
      </svg>`;

    case 'uk_heat_deaths':
      return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#FFF7ED"/>
        <circle cx="34" cy="31" r="14" fill="#F97316"/>
        <circle cx="34" cy="31" r="9" fill="#FDE047"/>
        <g stroke="#EA580C" stroke-width="2.2" stroke-linecap="round">
          <line x1="34" y1="8" x2="34" y2="12"/><line x1="34" y1="50" x2="34" y2="54"/>
          <line x1="11" y1="31" x2="15" y2="31"/><line x1="53" y1="31" x2="57" y2="31"/>
          <line x1="18" y1="15" x2="21" y2="18"/><line x1="47" y1="44" x2="50" y2="47"/>
          <line x1="50" y1="15" x2="47" y2="18"/><line x1="21" y1="44" x2="18" y2="47"/>
        </g>
        <rect x="68" y="9" width="12" height="33" rx="6" fill="#FFFFFF" stroke="#9A3412" stroke-width="1.8"/>
        <rect x="71" y="16" width="6" height="26" rx="3" fill="#DC2626"/>
        <circle cx="74" cy="46" r="9.5" fill="#DC2626" stroke="#9A3412" stroke-width="1.8"/>
        ${statBlock(98, 7, 134, '5,258', '+76% VS 2022 PEAK · UKHSA', {
          bg: '#991B1B',
          subBg: '#F4C430',
          mainSize: 19.5,
          subSize: 7.6,
          mainH: 30,
          subH: 16,
        })}
      </svg>`;

    case 'riyadh_tower':
      return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#FEF2F2"/>
        <rect x="18" y="34" width="14" height="28" fill="#94A3B8"/>
        <polygon points="38,6 56,12 58,62 36,62" fill="#334155"/>
        <line x1="44" y1="12" x2="43" y2="60" stroke="#93C5FD" stroke-width="1.2"/>
        <line x1="50" y1="14" x2="51" y2="60" stroke="#93C5FD" stroke-width="1.2"/>
        <rect x="64" y="28" width="16" height="34" fill="#64748B"/>
        <polygon points="56,17 62,23 71,20 66,28 72,35 62,32 57,39 56,30 47,29 54,24" fill="#EF4444"/>
        <circle cx="59" cy="27" r="3.8" fill="#FEF08A"/>
        ${statBlock(98, 7, 134, '11 HURT', '80-STOREY PIF TOWER HIT', {
          bg: '#991B1B',
          subBg: '#F4C430',
          mainSize: 19,
          subSize: 7.6,
          mainH: 30,
          subH: 16,
        })}
      </svg>`;

    case 'hormuz_tanker':
      return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#FFFBEB"/>
        <rect x="0" y="45" width="96" height="19" fill="#93C5FD"/>
        <path d="M6,53 Q18,49 30,53 T54,53 T78,53" fill="none" stroke="#FFFFFF" stroke-width="1.4" opacity="0.75"/>
        <polygon points="10,45 84,45 78,33 16,33" fill="#1E293B"/>
        <rect x="18" y="23" width="16" height="10" fill="#475569"/>
        <rect x="42" y="27" width="24" height="6" fill="#B91C1C"/>
        <path d="M54,27 C47,17 52,11 57,6 C63,13 67,18 60,27 Z" fill="#F97316"/>
        <path d="M56,27 C53,21 55,17 57,14 C59,17 61,21 58,27 Z" fill="#FDE047"/>
        ${statBlock(98, 7, 134, '4TH SHIP', 'IRGC CLAIMS MINE BLAST', {
          bg: '#B45309',
          subBg: '#FDE047',
          mainSize: 19,
          subSize: 7.7,
          mainH: 30,
          subH: 16,
        })}
      </svg>`;

    case 'shenzhou24_crew':
      return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#0F1F3D"/>
        <circle cx="16" cy="14" r="1.2" fill="#FFFFFF"/>
        <circle cx="78" cy="12" r="1.1" fill="#FDE047"/>
        <circle cx="24" cy="52" r="1.1" fill="#93C5FD"/>
        <rect x="12" y="24" width="24" height="10" rx="1" fill="#3B82F6" stroke="#93C5FD" stroke-width="1"/>
        <rect x="62" y="24" width="24" height="10" rx="1" fill="#3B82F6" stroke="#93C5FD" stroke-width="1"/>
        <rect x="37" y="20" width="24" height="18" rx="4" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1.2"/>
        <circle cx="49" cy="29" r="4" fill="#15803D"/>
        <!-- China & Pakistan flag badges -->
        <rect x="14" y="44" width="24" height="14" rx="1.5" fill="#DC2626"/>
        <circle cx="20" cy="49.5" r="2.3" fill="#FDE047"/>
        <rect x="44" y="44" width="24" height="14" rx="1.5" fill="#15803D"/>
        <rect x="44" y="44" width="6.5" height="14" rx="1" fill="#FFFFFF"/>
        <circle cx="58" cy="51" r="3.2" fill="#FFFFFF"/>
        <circle cx="59.3" cy="50.5" r="2.5" fill="#15803D"/>
        ${statBlock(98, 7, 134, 'TIANGONG', '1ST FOREIGN ASTRONAUT', {
          bg: '#1E40AF',
          subBg: '#F4C430',
          mainSize: 18,
          subSize: 7.7,
          mainH: 30,
          subH: 16,
        })}
      </svg>`;

    case 'senegal_afcon':
      return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#F0FDF4"/>
        <g transform="translate(10,13)">
          <rect x="0" y="2" width="16" height="34" fill="#15803D"/>
          <rect x="16" y="2" width="16" height="34" fill="#FACC15"/>
          <rect x="32" y="2" width="16" height="34" fill="#DC2626"/>
          <polygon points="24,13 26,18 31,18 27,21 28.5,26 24,23 19.5,26 21,21 17,18 22,18" fill="#15803D"/>
          <rect x="0" y="2" width="48" height="34" fill="none" stroke="#334155" stroke-width="1"/>
        </g>
        <g transform="translate(65,11)">
          <path d="M2,4 L22,4 L19,21 Q12,27 5,21 Z" fill="#EAB308" stroke="#854D0E" stroke-width="1.3"/>
          <rect x="9.5" y="24" width="5" height="9" fill="#CA8A04"/>
          <rect x="4" y="33" width="16" height="5" rx="1.5" fill="#78350F"/>
        </g>
        ${statBlock(98, 7, 134, 'AFCON', 'CAS RESTORES 2025 TITLE', {
          bg: '#14532D',
          subBg: '#F4C430',
          mainSize: 19.5,
          subSize: 7.6,
          mainH: 30,
          subH: 16,
        })}
      </svg>`;

    case 'australia_tech_bill':
      return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="${W}" height="${H}" fill="#F0F9FF"/>
        <!-- Southern Cross accent dots -->
        <circle cx="14" cy="18" r="2" fill="#0284C7"/>
        <circle cx="84" cy="14" r="2" fill="#0284C7"/>
        <circle cx="88" cy="30" r="1.6" fill="#0284C7"/>
        <circle cx="82" cy="46" r="2" fill="#0284C7"/>
        <g transform="translate(17,8)">
          <path d="M32,2 L58,10 L54,32 C50,42 40,46 32,48 C24,46 14,42 10,32 L6,10 Z" fill="#0369A1" stroke="#0C4A6E" stroke-width="1.8"/>
          <text x="32" y="28" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="16.5" font-weight="900" fill="#FDE047">5%</text>
          <text x="32" y="39" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="6.8" font-weight="900" fill="#E0F2FE">REVENUE</text>
        </g>
        ${statBlock(98, 7, 134, '5% FINE', 'DIGITAL DUTY OF CARE', {
          bg: '#0C4A6E',
          subBg: '#F4C430',
          mainSize: 19.5,
          subSize: 7.8,
          mainH: 30,
          subH: 16,
        })}
      </svg>`;

    default:
      return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="100%"></svg>`;
  }
}
