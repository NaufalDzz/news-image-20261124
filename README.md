# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/NaufalDzz/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/NaufalDzz/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One-page editorial world-news graphic summing up **Tuesday 24 November 2026** (00:00–14:45 UTC) in a single `1024×1024` PNG: 35 date-verified stories across 9 regions (Europe, Middle East, East Asia, Americas, Africa, South Asia, Southeast Asia, Global, and Oceania), a full-width Day in Numbers strip, 13 full-bleed original vector illustrations with high-contrast topic ribbons, a real-geography 24-pin equirectangular world map, a chronological UTC timeline, tabular 22-story digest, epistemic certainty tags (`CONFIRMED`, `OFFICIAL`, `REPORTED`, `CLAIM`), and an explicit `DATE CHECK` audit excluding earlier days' news.

## Highlights
- **Lead stories (24 Nov 2026 UTC):** China's CCDI places Shanghai Party Secretary and Politburo member Chen Jining under investigation; overnight Russian strike on Zaporizhzhia kills 2 and wounds over 40 while a recon drone breaches Polish airspace near Dorohusk; Asian chip stocks soar (TAIEX +8.99% to 40,122, KOSPI +6.32% to 5,006, Nikkei +3.91%) before Wall Street slips at open amid Congressional scrutiny of Nvidia and the US Megaspeed blacklist.
- **Global breadth across beats:** Sanofi's $41B cash buyout of Insmed, England's record 5,258 summer heat-linked deaths, Israeli strike killing Hamas security chief Naeem Abu Nahal and six others in Gaza, Senegal regaining the AFCON title on CAS appeal, China selecting Pakistan's Muhammad Zeeshan Ali for Shenzhou-24, Iran's Strait of Hormuz tanker-mine claim as oil traffic drops 40%, 15-year-old Vaibhav Sooryavanshi's world-record 53-ball 204 (28 sixes) vs UAE, Australia's 5% global-revenue tech-fine bill, Hanoi's deadly hot-pot gas explosion, Colombia's Villavicencio car bomb, plus 22 verified dated briefs across every inhabited continent.
- **Deterministic & self-contained:** `main.ts` uses Node 22 standard library only, validates PNG signature, `IHDR` bounds (`1024×1024`), `IEND` trailer, and the `1 MiB` byte cap before writing `/output/entry.png`. Full reproducible source (`src/stories.mjs`, `src/illustrations.mjs`, `src/worldmap.mjs`, `src/template.mjs`, `src/render.mjs`) is included in the repository.

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
