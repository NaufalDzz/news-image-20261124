// Verified full-day world news dataset strictly for Tuesday 24 November 2026 (00:00-24:00 UTC).
// Every story happened or was first reported on Tuesday 24 November 2026 UTC; adjacent-day events
// (Mon 23 Nov, Sun 22 Nov, Wed 25 Nov) are explicitly audited and excluded in EDITION.dateAuditExcluded.

export const EDITION = {
  dateLabel: 'Tuesday 24 November 2026',
  eyebrowLeft: 'THE WORLD IN ONE DAY',
  eyebrowRight: 'FULL DAY · 00:00–24:00 UTC',
  standfirst:
    'US jury convicts Huawei on 10 counts · Zaporizhzhia strike & Poland drone · China probes Shanghai chief Chen Jining · Dow tops 50,000',
  dateAuditIncluded:
    'All 35 stories happened or were first reported on Tuesday 24 November 2026 (00:00–24:00 UTC), set after the UTC day ended.',
  dateAuditExcluded:
    'Mon 23 Nov — Jensen Huang’s Nvidia CEO reinstatement & +31.5% close, CrowdStrike–Zscaler $43.9B deal, NATO AWACS to Poland, EU 22nd sanctions, UK Rohingya genocide move, Belgian ATC strike. Sun 22 Nov — COP31 no-deal close, 186-drone Kyiv raid, Vegas GP, Alcaraz ATP Finals. Wed 25 Nov — Solomon Islands–Australia security treaty signed in Canberra.',
  excludedTokens: [
    'reinstatement',
    '31.5%',
    'crowdstrike',
    'zscaler',
    '43.9b',
    'awacs',
    '22nd sanctions',
    'rohingya',
    'belgian atc',
    'cop31',
    '186-drone',
    'vegas gp',
    'alcaraz',
    'solomon islands',
  ],
};

export const REGIONS = [
  { id: 'EUROPE', label: 'EUROPE', color: '#1D4ED8' },
  { id: 'MIDDLE EAST', label: 'MIDDLE EAST', color: '#B91C1C' },
  { id: 'EAST ASIA', label: 'EAST ASIA', color: '#B45309' },
  { id: 'AMERICAS', label: 'AMERICAS', color: '#6D28D9' },
  { id: 'AFRICA', label: 'AFRICA', color: '#15803D' },
  { id: 'SOUTH ASIA', label: 'SOUTH ASIA', color: '#C2410C' },
  { id: 'SE ASIA', label: 'SE ASIA', color: '#0F766E' },
  { id: 'GLOBAL', label: 'GLOBAL', color: '#334155' },
  { id: 'OCEANIA', label: 'OCEANIA', color: '#0369A1' },
];

export const UTC_TIMELINE = [
  { time: '01:32', text: 'Nepal M5.3 quake' },
  { time: '03:35', text: 'Seoul F-15Ks' },
  { time: '11:37', text: 'UK 5,258 heat' },
  { time: '12:33', text: 'Sanofi $41B' },
  { time: '14:24', text: 'Shanghai purge' },
  { time: '19:18', text: 'Riyadh tower hit' },
  { time: '21:43', text: 'Huawei verdict' },
];

export const NUMBERS_COLUMN = [
  { value: '10 / 12', label: 'Counts Huawei convicted on in US', accent: '#FDE047' },
  { value: '$41B', label: 'Sanofi cash buyout of US Insmed', accent: '#93C5FD' },
  { value: '50,019', label: 'Dow close above 50K (+0.85%)', accent: '#86EFAC' },
  { value: '5,258', label: 'Record England summer heat toll', accent: '#FCA5A5' },
  { value: '+8.99%', label: 'Taiwan TAIEX surge (KOSPI +6.32%)', accent: '#6EE7B7' },
  { value: '204', label: 'Sooryavanshi 53-ball cricket mark', accent: '#FDBA74' },
];

export const HERO_STORIES = [
  {
    num: 1,
    location: 'BROOKLYN, NEW YORK',
    kicker: 'AMERICAS · LAW & TECH',
    region: 'AMERICAS',
    status: 'OFFICIAL',
    art: 'huawei_verdict',
    headline: 'US jury convicts Huawei on 10 counts',
    body: 'Federal jury finds Chinese tech giant guilty of trade-secrets theft, bank fraud and Iran-sanctions violations after 11-week trial, acquitting it of RICO racketeering.',
    sources: 'BBC · Al Jazeera · France24',
    geo: { lat: 40.7, lon: -74.0 },
  },
  {
    num: 2,
    location: 'ZAPORIZHZHIA & POLAND',
    kicker: 'EUROPE · WAR',
    region: 'EUROPE',
    status: 'CONFIRMED',
    art: 'zaporizhzhia_poland',
    headline: 'Russian strike kills 2; drone enters Poland',
    body: 'Overnight Zaporizhzhia barrage wrecks a five-storey flat block, wounding 40+ including four children; a jet-powered Russian drone enters Poland near Dorohusk.',
    sources: 'AP · Guardian · PAP',
    geo: { lat: 47.8, lon: 35.2 },
  },
  {
    num: 3,
    location: 'SHANGHAI & BEIJING',
    kicker: 'EAST ASIA · POLITICS',
    region: 'EAST ASIA',
    status: 'OFFICIAL',
    art: 'shanghai_purge',
    headline: 'China probes Shanghai chief Chen Jining',
    body: 'Anti-graft watchdog CCDI places Shanghai Party Secretary — a sitting member of China’s 24-seat Politburo — under investigation for severe discipline violations.',
    sources: 'NYT · Al Jazeera · CNN',
    geo: { lat: 31.2, lon: 121.5 },
  },
];

export const GRID_STORIES = [
  {
    num: 4,
    location: 'TAIPEI & NY',
    kicker: 'GLOBAL · MARKETS',
    region: 'GLOBAL',
    status: 'CONFIRMED',
    art: 'global_markets',
    headline: 'Asia chips surge; Dow tops 50,000',
    body: 'Taiwan (+8.99%) & Seoul (+6.32%) rally; Dow hits 50,019 (+0.85%) as Nvidia falls 6%.',
    sources: 'CNBC · NYT · CNA',
    geo: { lat: 25.0, lon: 121.5 },
  },
  {
    num: 5,
    location: 'PARIS & NJ',
    kicker: 'AMERICAS · PHARMA',
    region: 'AMERICAS',
    status: 'OFFICIAL',
    art: 'sanofi_insmed',
    headline: 'Sanofi seals $41B Insmed buyout',
    body: 'Pharma’s largest deal in 3 years ($175/sh cash) adds lung drugs as Insmed jumps 14.1%.',
    sources: 'CNBC · FT · Sanofi',
    geo: { lat: 48.9, lon: 2.3 },
  },
  {
    num: 6,
    location: 'LONDON',
    kicker: 'EUROPE · HEALTH',
    region: 'EUROPE',
    status: 'OFFICIAL',
    art: 'uk_heat_deaths',
    headline: 'England logs record 5,258 heat deaths',
    body: 'UKHSA interim 2026 toll climbs 76% above 2022’s peak of 2,985 after severe heatwaves.',
    sources: 'Guardian · AJ · CNA',
    geo: { lat: 51.5, lon: -0.1 },
  },
  {
    num: 7,
    location: 'GAZA CITY',
    kicker: 'MIDDLE EAST · WAR',
    region: 'MIDDLE EAST',
    status: 'CONFIRMED',
    art: 'gaza_strike',
    headline: 'Gaza strike kills Hamas security chief',
    body: 'West Gaza City airstrike kills Brig Gen Naeem Abu Nahal & six others; meningitis rises.',
    sources: 'BBC · F24 · CNA',
    geo: { lat: 31.5, lon: 34.5 },
  },
  {
    num: 8,
    location: 'LAUSANNE & DAKAR',
    kicker: 'AFRICA · SPORT',
    region: 'AFRICA',
    status: 'OFFICIAL',
    art: 'senegal_afcon',
    headline: 'Senegal restored as AFCON champs',
    body: 'CAS overturns CAF stripping of Senegal’s 2025 title after chaotic Morocco final.',
    sources: 'France24 · Guardian',
    geo: { lat: 14.7, lon: -17.4 },
  },
  {
    num: 9,
    location: 'RIYADH',
    kicker: 'MIDDLE EAST · SECURITY',
    region: 'MIDDLE EAST',
    status: 'CONFIRMED',
    art: 'riyadh_tower',
    headline: 'Houthi strike hits Riyadh PIF Tower',
    body: 'Attack wounds 11 at 80-storey sovereign-fund skyscraper; coalition condemns raid.',
    sources: 'NYT · FT · CNA',
    geo: { lat: 24.7, lon: 46.7 },
  },
  {
    num: 10,
    location: 'BEIJING / ISLAMABAD',
    kicker: 'GLOBAL · SPACE',
    region: 'GLOBAL',
    status: 'OFFICIAL',
    art: 'shenzhou24_crew',
    headline: 'China taps Pakistan pilot for Tiangong',
    body: 'Air Force pilot Zeeshan Ali becomes first foreign astronaut chosen for Shenzhou-24.',
    sources: 'France24 · AJ · CNA',
    geo: { lat: 33.7, lon: 73.1 },
  },
  {
    num: 11,
    location: 'DOHA',
    kicker: 'SOUTH ASIA · CRICKET',
    region: 'SOUTH ASIA',
    status: 'OFFICIAL',
    art: 'sooryavanshi_204',
    headline: '15-year-old hits record 53-ball 204',
    body: 'India’s Sooryavanshi blasts 28 sixes vs UAE — fastest List A double-century mark.',
    sources: 'Al Jazeera · CNA',
    geo: { lat: 25.3, lon: 51.5 },
  },
  {
    num: 12,
    location: 'CANBERRA',
    kicker: 'OCEANIA · TECH LAW',
    region: 'OCEANIA',
    status: 'OFFICIAL',
    art: 'australia_tech_bill',
    headline: 'Australia backs 5% tech-fine bill',
    body: 'Labor & Greens seal Digital Duty of Care deal letting citizens sue platforms for harm.',
    sources: 'Guardian · AJ',
    geo: { lat: -35.3, lon: 149.1 },
  },
  {
    num: 13,
    location: 'HANOI',
    kicker: 'SE ASIA · DISASTER',
    region: 'SE ASIA',
    status: 'CONFIRMED',
    art: 'hanoi_blast',
    headline: 'Hanoi hot-pot gas blast kills at least 6',
    body: 'Cooking-gas explosion collapses Dong Da eatery, injuring 10+ as crews search rubble.',
    sources: 'Al Jazeera · Hindu',
    geo: { lat: 21.0, lon: 105.8 },
  },
];

export const DIGEST_STORIES = [
  {
    num: 14,
    region: 'EUROPE',
    place: 'Paris',
    text: 'Judges order Sarkozy & Carla Bruni to face trial',
    source: 'BBC',
    status: 'OFFICIAL',
  },
  {
    num: 15,
    region: 'EUROPE',
    place: 'Madrid',
    text: 'UCL: Real Madrid rout PSV 5–1; Arsenal 1–1, City 2–2',
    source: 'F24',
    status: 'OFFICIAL',
  },
  {
    num: 16,
    region: 'EUROPE',
    place: 'Brussels',
    text: 'EU sets Dec 1 quotas on tariff-free Chinese hybrids',
    source: 'GDN',
    status: 'OFFICIAL',
  },
  {
    num: 17,
    region: 'EUROPE',
    place: 'Tallinn',
    text: 'Russia warns Estonia border closure risks “open war”',
    source: 'CNBC',
    status: 'OFFICIAL',
  },
  {
    num: 18,
    region: 'EUROPE',
    place: 'NATO',
    text: 'Rutte vows space defence over Russian nuclear-sat bid',
    source: 'BBC',
    status: 'OFFICIAL',
  },
  {
    num: 19,
    region: 'GLOBAL',
    place: 'Geneva',
    text: 'World Chess G1: Gukesh holds Sindarov to 38-move draw',
    source: 'FIDE',
    status: 'OFFICIAL',
  },
  {
    num: 20,
    region: 'MIDDLE EAST',
    place: 'Hormuz',
    text: 'Iran claims mines hit 3 tankers; oil flow off 40%',
    source: 'CNBC',
    status: 'CLAIM',
  },
  {
    num: 21,
    region: 'MIDDLE EAST',
    place: 'Baghdad',
    text: 'PM al-Zaidi orders federal takeover of Kurdish oil',
    source: 'AJ',
    status: 'OFFICIAL',
  },
  {
    num: 22,
    region: 'MIDDLE EAST',
    place: 'Qom/UN',
    text: 'UN slams Iran after singer Parastoo Ahmadi flogged',
    source: 'F24',
    status: 'CONFIRMED',
  },
  {
    num: 23,
    region: 'EAST ASIA',
    place: 'Ulleungdo',
    text: 'Seoul scrambles F-15Ks as Russian bombers near isle',
    source: 'AJ',
    status: 'CONFIRMED',
  },
  {
    num: 24,
    region: 'EAST ASIA',
    place: 'Tokyo',
    text: 'PM Takaichi speeds 2027 ICC dues despite US sanctions',
    source: 'NYT',
    status: 'OFFICIAL',
  },
  {
    num: 25,
    region: 'EAST ASIA',
    place: 'Beijing',
    text: 'Official “Ma” gets death sentence over $150K leaks',
    source: 'GDN',
    status: 'OFFICIAL',
  },
  {
    num: 26,
    region: 'SOUTH ASIA',
    place: 'Dhaka',
    text: 'Ex-PM Hasina sets Dec 16 return; Dhaka vows arrest',
    source: 'BBC',
    status: 'CONFIRMED',
  },
  {
    num: 27,
    region: 'SOUTH ASIA',
    place: 'Himalaya',
    text: 'M5.3 quake hits Nepal–Sikkim border at 01:32 UTC',
    source: 'USGS',
    status: 'OFFICIAL',
  },
  {
    num: 28,
    region: 'SE ASIA',
    place: 'Malaysia',
    text: 'PM Anwar sets Dec return of 6,500+ Myanmar migrants',
    source: 'AJ',
    status: 'CONFIRMED',
  },
  {
    num: 29,
    region: 'SE ASIA',
    place: 'Serang, ID',
    text: 'Candy-factory fire toll hits 26; criminal probe opens',
    source: 'NYT',
    status: 'CONFIRMED',
  },
  {
    num: 30,
    region: 'AFRICA',
    place: 'Madagascar',
    text: 'Warrants sought for Rajoelina over Boeing 777 deal',
    source: 'AFN',
    status: 'OFFICIAL',
  },
  {
    num: 31,
    region: 'AFRICA',
    place: 'DR Congo',
    text: 'Military Cessna 208 missing; rebels claim hit',
    source: 'BBC',
    status: 'CLAIM',
    geo: { lat: -3.9, lon: 28.7 },
  },
  {
    num: 32,
    region: 'AFRICA',
    place: 'Mauritius',
    text: 'M6.4 quake hits Mauritius–Réunion seas at 11:06 UTC',
    source: 'USGS',
    status: 'OFFICIAL',
  },
  {
    num: 33,
    region: 'AMERICAS',
    place: 'Colombia',
    text: 'Villavicencio car bomb wounds 23+; ex-FARC blamed',
    source: 'AJ',
    status: 'CONFIRMED',
    geo: { lat: 4.1, lon: -73.6 },
  },
  {
    num: 34,
    region: 'AMERICAS',
    place: 'Havana',
    text: 'Cuba life expectancy falls for first time since 1950',
    source: 'GDN',
    status: 'REPORTED',
  },
  {
    num: 35,
    region: 'OCEANIA',
    place: 'Canberra',
    text: 'Australia & Singapore sign chip, food & carbon pacts',
    source: 'CNA',
    status: 'OFFICIAL',
  },
];

export function computeRegionCounts() {
  const all = [...HERO_STORIES, ...GRID_STORIES, ...DIGEST_STORIES];
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
  const all = [...HERO_STORIES, ...GRID_STORIES, ...DIGEST_STORIES];
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
  const geoPins = all.filter((s) => s.geo);
  if (geoPins.length > 17) {
    throw new Error(`Too many map pins (${geoPins.length} > 17)`);
  }
  return { total: all.length, geoPins: geoPins.length };
}
