# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/NaufalDzz/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/NaufalDzz/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One-page editorial world-news broadsheet summing up the complete 24-hour UTC day of **Tuesday 24 November 2026** (`00:00–24:00 UTC`) in a single `1024×1024` PNG: **35 date-verified stories across 9 regions** (Europe, Middle East, East Asia, Americas, Africa, South Asia, Southeast Asia, Global, and Oceania), 13 bright light-palette original vector illustrations, a vertical navy Day in Numbers sidebar, a 15-pin non-overlapping real-geography world map, a full-day chronological UTC bar (`01:32–21:43 UTC`), a crisp 22-story tabular digest, epistemic certainty labels (`CONFIRMED`, `OFFICIAL`, `REPORTED`, `CLAIM`), and an OCR-safe `DATE CHECK` audit excluding adjacent days' news (Mon 23 Nov, Sun 22 Nov, Wed 25 Nov).

## Highlights
- **Lead stories (resolved full-day 24 Nov 2026 UTC):** US federal jury in Brooklyn convicts Huawei on 10 of 12 counts (trade-secrets conspiracy, bank fraud, Iran sanctions) while acquitting it of RICO racketeering; overnight Russian strike kills 2 and wounds 40+ in Zaporizhzhia while a jet-powered Russian drone enters Polish airspace near Dorohusk; China's CCDI places Shanghai Party Secretary and Politburo member Chen Jining under formal investigation.
- **Global breadth across beats & resolved late-day outcomes:** Asian chip surge (TAIEX +8.99% to 40,122, KOSPI +6.32%) and mixed Wall Street close (Dow reclaims 50,000 at 50,019 +0.85%, Nasdaq -1.48%, Nvidia -6%), Sanofi's $41B cash buyout of US biotech Insmed (+14.1%), England's record 5,258 summer heat-linked deaths, Israeli strike killing Hamas security chief Brig Gen Naeem Abu Nahal and six others in Gaza, Senegal restored as AFCON champions on CAS appeal, Houthi strike hitting Riyadh's PIF Tower (11 wounded), China selecting Pakistan's Zeeshan Ali for Shenzhou-24, 15-year-old Sooryavanshi's record 53-ball 204 (28 sixes), Australia's 5% global-revenue tech-fine bill, Hanoi's deadly hot-pot gas blast (6+ killed), plus 22 verified briefs including Sarkozy & Carla Bruni ordered to stand trial, UEFA Champions League results (Real Madrid 5–1 PSV, Arsenal 1–1 Dortmund, Man City 2–2 Napoli), World Chess Championship G1 38-move draw (Gukesh–Sindarov), Strait of Hormuz tanker-mine claim (-40% oil flow), and UN condemnation of Iran's flogging of singer Parastoo Ahmadi.
- **Deterministic & verified:** `main.ts` uses Node 22 standard library only, validates PNG header, `IHDR` bounds (`1024×1024`), `IEND` trailer, and `1 MiB` byte cap before writing `/output/entry.png`. Automated DOM/layout gates verify zero horizontal or vertical overflow, zero clipped or truncated text, >=14.8px minimum map-pin spacing, and zero leakage of excluded adjacent-day events.

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
