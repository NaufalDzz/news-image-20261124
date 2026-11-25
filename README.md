# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/NaufalDzz/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/NaufalDzz/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One-page editorial world-news broadsheet summing up the complete 24-hour UTC day of **Tuesday 24 November 2026** (`00:00–24:00 UTC`) in a single `1024×1024` PNG: **38 date-verified stories across 10 regions and 14 fields** (Europe, Middle East, North America, Africa, East Asia, South Asia, Southeast Asia, Latin America, Oceania, and World/Space), 3 full-width commanding hero leads, 8 wide feature cards with high-contrast 300px-legible vector icon+stat panels, a full-day UTC timeline (`01:32–21:43 UTC`), a crisp 3-column 27-story brief digest, inline epistemic verification badges (`CONFIRMED`, `OFFICIAL`, `REPORTED`, `CLAIM`), and an OCR-safe `DATE CHECK` audit strictly excluding adjacent days' news (Mon 23 Nov, Sun 22 Nov, Wed 25 Nov).

## Highlights
- **3 full-width hero leads (verified 24 Nov 2026 UTC):** US federal jury in Brooklyn convicts Huawei on 10 of 12 counts (trade-secrets theft, bank fraud, Iran sanctions) while acquitting it of RICO racketeering; China's CCDI places Shanghai Party Secretary and Politburo member Chen Jining under formal investigation; overnight Russian barrage hits a Zaporizhzhia flat block (2 dead, 40+ injured) as a Russian drone enters Polish airspace near Dorohusk.
- **8 wide feature cards & 27 verified briefs across 10 regions and 14 fields:** Asian chip rally (TAIEX +8.99%, KOSPI +6.32%) as Dow tops 50,000 while Nvidia slips ~6%; Sanofi's $41bn cash buyout of US biotech Insmed ($175/share, +14%); England's record 5,258 summer heat deaths (UKHSA, +76% vs 2022 peak); Houthi strike hitting Riyadh's 80-storey PIF Tower (11 hurt); IRGC claim of a fourth mined Gulf oil tanker; China naming Pakistani pilot Zeeshan Ali as first foreign Tiangong astronaut for Shenzhou-24; CAS restoring Senegal's 2025 AFCON title; Australia backing its 5% global-revenue Digital Duty of Care tech bill; plus 27 briefs spanning Sarkozy & Carla Bruni trial order, Versailles Nahel murder trial ruling, EU Chinese hybrid import quotas, UEFA Champions League results, Gaza Hamas security chief strike, Houthis advancing within 60 km of Aden, Iraq federal Kurdish oil takeover, Japan accelerating 2027 ICC dues, 15-year-old Sooryavanshi's record 53-ball 204, Bangladesh's Hasina Dec 16 return pledge, Nepal M5.3 & Mauritius M6.4 quakes, Hanoi Dong Da gas blast, Malaysia Myanmar migrant deportations, Indonesia Serang factory fire toll hitting 26, Madagascar Rajoelina Boeing 777 warrants, Egypt–Sudan Nile Dam stand, South Africa Farmgate court ruling, Microsoft "Code Red", Rep. Omar unsealed raid files, CIA–ODNI cyber breach, WHO warning on Cuba life expectancy, Venezuela Supreme Court vetting call, US Brazil tariff plans, Australia–Singapore pacts, and World Chess Championship Game 1 draw.
- **Deterministic & verified:** `main.ts` uses Node 22 standard library only, validates PNG signature, `IHDR` bounds (`1024×1024`), `IEND` trailer, and `1 MiB` byte cap before writing `/output/entry.png`. Automated DOM/layout gates verify zero horizontal or vertical overflow, zero clipped or overlapping text, zero console errors, zero leakage of excluded adjacent-day events, and byte-identical determinism across repeated runs.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

To rebuild `entry.png` locally from the vector HTML/SVG source (requires local Chromium):

```sh
node src/render.mjs
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=52vz5va8&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
