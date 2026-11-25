// Verified full-day world news dataset strictly for Tuesday 24 November 2026 (00:00-24:00 UTC).
// 38 dated stories across 10 regions and 14 fields: 3 full-width hero leads, 8 wide feature cards,
// and 27 structured briefs. Adjacent-day events (Mon 23 Nov, Sun 22 Nov, Wed 25 Nov) are audited
// and excluded with programmatic zero-leakage verification.

export const EDITION = {
  dateLabel: 'Tuesday 24 November 2026',
  eyebrowLeft: 'THE WORLD IN ONE DAY',
  eyebrowRight: 'FULL DAY · 00:00–24:00 UTC',
  fieldsCount: 14,
  standfirst:
    'US jury convicts Huawei on 10 counts · China probes Shanghai chief Chen Jining · Russian strike hits Zaporizhzhia & drone enters Poland',
  dateAuditIncluded:
    'Every story here happened, or was first reported, on Tuesday 24 November 2026 (00:00–24:00 UTC).',
  dateAuditExcluded:
    'Mon 23 Nov: Nvidia reinstating Jensen Huang (+31.5%), Ukraine sea-drone strike off Libya, EU 22nd Russia sanctions, Belgium flight strike, Parastoo Ahmadi flogging, Villavicencio car bomb, NATO space defence · Sun 22 Nov: COP31 collapse, 186-drone Kyiv raid, Alcaraz ATP title · Wed 25 Nov: Shenzhou-24 liftoff, Australia–Solomon Islands treaty.',
  excludedTokens: [
    'jensen huang',
    '31.5%',
    'merkury',
    'libya',
    '22nd russia',
    'belgium flight',
    'parastoo',
    'ahmadi',
    '74 lashes',
    'villavicencio',
    'space defence',
    'rutte',
    'cop31',
    '186-drone',
    'alcaraz',
    'solomon islands',
    'liftoff',
    'open war',
    'ulleungdo',
    'cessna',
  ],
};

export const REGIONS = [
  { id: 'Europe', label: 'Europe', color: '#1D4ED8' },
  { id: 'Middle East', label: 'Middle East', color: '#B91C1C' },
  { id: 'North America', label: 'N. America', color: '#6D28D9' },
  { id: 'Africa', label: 'Africa', color: '#15803D' },
  { id: 'East Asia', label: 'East Asia', color: '#B45309' },
  { id: 'South Asia', label: 'South Asia', color: '#C2410C' },
  { id: 'SE Asia', label: 'SE Asia', color: '#0F766E' },
  { id: 'Latin America', label: 'Latin America', color: '#A21CAF' },
  { id: 'Oceania', label: 'Oceania', color: '#0369A1' },
  { id: 'World', label: 'World', color: '#334155' },
];

export const UTC_TIMELINE = [
  { time: '01:32', text: 'Nepal M5.3 quake' },
  { time: '07:30', text: 'TAIEX +8.99%' },
  { time: '11:37', text: 'UK 5,258 heat' },
  { time: '12:33', text: 'Sanofi $41bn' },
  { time: '14:24', text: 'Shanghai probe' },
  { time: '19:18', text: 'Riyadh tower hit' },
  { time: '21:43', text: 'Huawei verdict' },
];

export const HERO_STORIES = [
  {
    num: 1,
    location: 'BROOKLYN, USA',
    beat: 'LAW & TECH',
    region: 'North America',
    status: 'OFFICIAL',
    art: 'huawei_verdict',
    headline: 'US jury convicts Huawei on 10 criminal counts',
    body: 'Federal jury finds Chinese tech giant guilty of trade-secrets theft, bank fraud and Iran-sanctions offences after an 11-week trial, acquitting it of RICO racketeering.',
    sources: 'Reuters · BBC · Al Jazeera',
  },
  {
    num: 2,
    location: 'SHANGHAI & BEIJING',
    beat: 'POLITICS',
    region: 'East Asia',
    status: 'OFFICIAL',
    art: 'shanghai_purge',
    headline: 'China probes Shanghai chief Chen Jining',
    body: 'Anti-graft watchdog CCDI places Shanghai Party Secretary — a sitting member of the 24-seat Politburo — under investigation for severe discipline and law violations.',
    sources: 'NYT · Guardian · CNA',
  },
  {
    num: 3,
    location: 'ZAPORIZHZHIA & POLAND',
    beat: 'WAR',
    region: 'Europe',
    status: 'CONFIRMED',
    art: 'zaporizhzhia_poland',
    headline: 'Russian strike kills 2; drone enters Poland',
    body: 'Overnight barrage wrecks a five-storey residential block in Zaporizhzhia, wounding 40+ including children; a Russian drone crosses into Polish airspace near Dorohusk.',
    sources: 'AP · Guardian · PAP',
  },
];

export const FEATURE_STORIES = [
  {
    num: 4,
    location: 'TAIPEI, SEOUL & NY',
    beat: 'MARKETS',
    region: 'East Asia',
    status: 'CONFIRMED',
    art: 'global_markets',
    headline: 'Asian chips rally as Dow tops 50,000',
    body: 'TAIEX (+8.99%) and KOSPI (+6.32%) surge; Wall Street splits as Dow tops 50,000 while Nvidia slips ~6%.',
    sources: 'CNBC · NYT · CNA',
  },
  {
    num: 5,
    location: 'PARIS / NEW JERSEY',
    beat: 'PHARMA',
    region: 'North America',
    status: 'OFFICIAL',
    art: 'sanofi_insmed',
    headline: 'Sanofi agrees $41bn cash Insmed deal',
    body: 'Pharma’s biggest cash deal in 3 years ($175/sh) adds rare lung drugs as Insmed jumps 14%.',
    sources: 'Reuters · FT · Sanofi',
  },
  {
    num: 6,
    location: 'LONDON, UK',
    beat: 'HEALTH',
    region: 'Europe',
    status: 'OFFICIAL',
    art: 'uk_heat_deaths',
    headline: 'England logs 5,258 summer heat deaths',
    body: 'UKHSA interim 2026 summer toll rises 76% above 2022’s peak of 2,985 after severe heatwaves.',
    sources: 'Guardian · BBC · CNA',
  },
  {
    num: 7,
    location: 'RIYADH, SAUDI ARABIA',
    beat: 'SECURITY',
    region: 'Middle East',
    status: 'CONFIRMED',
    art: 'riyadh_tower',
    headline: 'Houthi strike hits Riyadh PIF Tower',
    body: 'Second strike in a week wounds 11 at 80-storey sovereign-fund tower; coalition condemns attack.',
    sources: 'NYT · CNA · Al-Monitor',
  },
  {
    num: 8,
    location: 'STRAIT OF HORMUZ',
    beat: 'ENERGY',
    region: 'Middle East',
    status: 'CLAIM',
    art: 'hormuz_tanker',
    headline: 'Iran claims mine hits 4th Gulf tanker',
    body: 'IRGC Navy alleges oil tanker ablaze east of Hormuz on unauthorised route amid Gulf tensions.',
    sources: 'CNBC · Seatrade · Mehr',
  },
  {
    num: 9,
    location: 'BEIJING / ISLAMABAD',
    beat: 'SPACE',
    region: 'World',
    status: 'OFFICIAL',
    art: 'shenzhou24_crew',
    headline: 'China names Pakistani Tiangong pilot',
    body: 'Air Force pilot Zeeshan Ali picked as first foreign astronaut on China’s Shenzhou-24 station crew.',
    sources: 'Al Jazeera · CNA · CMSA',
  },
  {
    num: 10,
    location: 'LAUSANNE / DAKAR',
    beat: 'SPORT',
    region: 'Africa',
    status: 'OFFICIAL',
    art: 'senegal_afcon',
    headline: 'CAS restores Senegal’s AFCON title',
    body: 'Sports court upholds appeal, overturning CAF stripping of Senegal’s 2025 crown after Morocco final.',
    sources: 'Guardian · France24 · CAS',
  },
  {
    num: 11,
    location: 'CANBERRA, AUSTRALIA',
    beat: 'TECH LAW',
    region: 'Oceania',
    status: 'OFFICIAL',
    art: 'australia_tech_bill',
    headline: 'Australia backs 5% global tech-fine bill',
    body: 'Labor–Greens Digital Duty of Care deal lets users sue platforms for online harm.',
    sources: 'Guardian · Al Jazeera',
  },
];

export const BRIEF_STORIES = [
  // Column 1 (Europe + Middle East + East Asia — 9 items, concise single-line zero-overflow copy)
  {
    num: 12,
    region: 'Europe',
    place: 'Paris',
    text: 'Judges order Sarkozy & Carla Bruni to face 2027 trial',
    source: 'BBC',
    status: 'OFFICIAL',
  },
  {
    num: 13,
    region: 'Europe',
    place: 'Versailles',
    text: 'Court orders murder trial in 2023 Nahel shooting',
    source: 'F24',
    status: 'OFFICIAL',
  },
  {
    num: 14,
    region: 'Europe',
    place: 'Brussels',
    text: 'EU sets Dec 1 quotas on tariff-free Chinese hybrids',
    source: 'GDN',
    status: 'OFFICIAL',
  },
  {
    num: 15,
    region: 'Europe',
    place: 'Madrid',
    text: 'UCL: Real Madrid rout PSV 5–1; Arsenal 1–1, City 2–2',
    source: 'AJ',
    status: 'CONFIRMED',
  },
  {
    num: 16,
    region: 'Middle East',
    place: 'Gaza City',
    text: 'Israeli strike kills Hamas security chief Abu Nahal & 6',
    source: 'BBC',
    status: 'CONFIRMED',
  },
  {
    num: 17,
    region: 'Middle East',
    place: 'Yemen',
    text: 'Houthis advance within 60 km of Aden, officials say',
    source: 'TOI',
    status: 'REPORTED',
  },
  {
    num: 18,
    region: 'Middle East',
    place: 'Baghdad',
    text: 'PM al-Zaidi orders federal takeover of Kurdish oil',
    source: 'AJ',
    status: 'OFFICIAL',
  },
  {
    num: 19,
    region: 'East Asia',
    place: 'Tokyo',
    text: 'PM Takaichi speeds 2027 ICC dues despite US curbs',
    source: 'CNA',
    status: 'OFFICIAL',
  },
  {
    num: 20,
    region: 'East Asia',
    place: 'Beijing',
    text: 'Ex-official “Ma” gets death sentence for espionage',
    source: 'GDN',
    status: 'OFFICIAL',
  },

  // Column 2 (South Asia + SE Asia + Africa — 9 items)
  {
    num: 21,
    region: 'South Asia',
    place: 'Doha',
    text: '15-yr-old Sooryavanshi hits 53-ball 204 (28 sixes)',
    source: 'GDN',
    status: 'OFFICIAL',
  },
  {
    num: 22,
    region: 'South Asia',
    place: 'Dhaka',
    text: 'Ex-PM Hasina sets Dec 16 return; govt vows arrest',
    source: 'AJ',
    status: 'CONFIRMED',
  },
  {
    num: 23,
    region: 'South Asia',
    place: 'Nepal',
    text: 'M5.3 quake hits Koshi–Sikkim border at 01:32 UTC',
    source: 'USGS',
    status: 'OFFICIAL',
  },
  {
    num: 24,
    region: 'SE Asia',
    place: 'Hanoi',
    text: 'Dong Da eatery gas blast kills 6+, injures 10+',
    source: 'AJ',
    status: 'CONFIRMED',
  },
  {
    num: 25,
    region: 'SE Asia',
    place: 'Malaysia',
    text: 'Anwar sets Dec return of 6,500+ Myanmar migrants',
    source: 'CNA',
    status: 'OFFICIAL',
  },
  {
    num: 26,
    region: 'SE Asia',
    place: 'Indonesia',
    text: 'Serang factory fire toll hits 26; criminal probe opens',
    source: 'CNA',
    status: 'CONFIRMED',
  },
  {
    num: 27,
    region: 'Africa',
    place: 'Madagascar',
    text: 'Warrants sought for Rajoelina over Boeing 777 deal',
    source: 'AFN',
    status: 'OFFICIAL',
  },
  {
    num: 28,
    region: 'Africa',
    place: 'Cairo',
    text: 'Egypt & Sudan reject unilateral Nile Dam actions',
    source: 'DNE',
    status: 'OFFICIAL',
  },
  {
    num: 29,
    region: 'Africa',
    place: 'Cape Town',
    text: 'Court voids “Farmgate” panel report for Ramaphosa',
    source: 'STR',
    status: 'OFFICIAL',
  },

  // Column 3 (Africa + North America + Latin America + Oceania + World — 9 items)
  {
    num: 30,
    region: 'Africa',
    place: 'Mauritius',
    text: 'M6.4 quake strikes nearby seas; no tsunami alert',
    source: 'USGS',
    status: 'OFFICIAL',
  },
  {
    num: 31,
    region: 'North America',
    place: 'Redmond',
    text: 'Microsoft declares “Code Red” after 24-hr outage',
    source: 'RTR',
    status: 'REPORTED',
  },
  {
    num: 32,
    region: 'North America',
    place: 'Washington',
    text: 'Files show judge–DOJ clash over Rep. Omar raid',
    source: 'CNN',
    status: 'OFFICIAL',
  },
  {
    num: 33,
    region: 'North America',
    place: 'Washington',
    text: 'Cyber breach hits unclassified CIA–ODNI intel unit',
    source: 'AP',
    status: 'REPORTED',
  },
  {
    num: 34,
    region: 'Latin America',
    place: 'Havana',
    text: 'WHO: Cuba life expectancy drops to 74.4 (1st since ’50)',
    source: 'GDN',
    status: 'OFFICIAL',
  },
  {
    num: 35,
    region: 'Latin America',
    place: 'Caracas',
    text: 'Jurists urge Venezuela to vet 32 Supreme Court picks',
    source: 'ICJ',
    status: 'OFFICIAL',
  },
  {
    num: 36,
    region: 'Latin America',
    place: 'Brasília',
    text: 'US prepares new subsidy tariffs targeting Brazil & allies',
    source: 'AP',
    status: 'REPORTED',
  },
  {
    num: 37,
    region: 'Oceania',
    place: 'Canberra',
    text: 'Australia & Singapore sign chip, food & carbon pacts',
    source: 'CNA',
    status: 'OFFICIAL',
  },
  {
    num: 38,
    region: 'World',
    place: 'Geneva',
    text: 'World Chess G1: Gukesh draws Sindarov in 38 moves',
    source: 'FIDE',
    status: 'OFFICIAL',
  },
];

export function computeRegionCounts() {
  const all = [...HERO_STORIES, ...FEATURE_STORIES, ...BRIEF_STORIES];
  const counts = Object.fromEntries(REGIONS.map((r) => [r.id, 0]));
  for (const s of all) {
    if (!(s.region in counts)) {
      throw new Error(`Unknown region "${s.region}" on story #${s.num}`);
    }
    counts[s.region] += 1;
  }
  return { total: all.length, counts };
}

export function auditStoryConsistency() {
  const all = [...HERO_STORIES, ...FEATURE_STORIES, ...BRIEF_STORIES];
  const seenNums = new Set();
  for (let i = 0; i < all.length; i += 1) {
    const expected = i + 1;
    if (all[i].num !== expected || seenNums.has(all[i].num)) {
      throw new Error(`Story numbering mismatch at index ${i}: got ${all[i].num}, expected ${expected}`);
    }
    seenNums.add(all[i].num);
  }
  const corpus = all
    .map((s) => `${s.location || ''} ${s.place || ''} ${s.headline || ''} ${s.body || ''} ${s.text || ''}`)
    .join('\n')
    .toLowerCase();
  for (const token of EDITION.excludedTokens) {
    if (corpus.includes(token.toLowerCase())) {
      throw new Error(`Excluded adjacent-day token "${token}" leaked into story copy`);
    }
  }
  return { total: all.length, regions: REGIONS.length, fields: EDITION.fieldsCount };
}
