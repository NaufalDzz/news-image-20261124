# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/NaufalDzz/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/NaufalDzz/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One-page editorial world-news graphic summing up **Tuesday 24 November 2026** (00:00–09:45 UTC) in a single `1024×1024` PNG: 35 date-verified stories across 9 regions (Europe, Americas, East Asia, Middle East, Southeast Asia, South Asia, Africa, Oceania, and Global/Space), 13 original code-drawn flat-vector illustrations, a dark-navy Day in Numbers panel, a 20-pin all-continent world map, a chronological UTC timeline, epistemic certainty badges (`CONFIRMED`, `OFFICIAL`, `REPORTED`, `CLAIM`), and an explicit `DATE CHECK` audit excluding earlier days' news.

## Highlights
- **Lead stories (24 Nov 2026 UTC):** US blacklists Megaspeed in Nvidia scandal fallout as Taiwan (+9%), Seoul (+7%) and Tokyo (+3.91%) chip stocks surge; Russian recon drone breaches Polish airspace near Dorohusk and strikes on Zaporizhzhia kill 2; China names Pakistan's Muhammad Zeeshan Ali as the first foreign astronaut for Shenzhou-24 to Tiangong.
- **Global breadth:** Iran Hormuz tanker mine claim, Australia's 5% global-revenue online-harm tech-fine deal, South Korea's F-15K scramble & Ulleungdo shelter alert, Sheikh Hasina's Dec 16 return announcement & Dhaka arrest warning, Malaysia's plan to repatriate 6,500+ Myanmar migrants, Japan accelerating 2027 ICC funding, DR Congo aircraft shootdown claim, WFP's 7.3M aid-route warning, Colombia's Villavicencio car bomb, Meta's Muse AI launch in the UK, plus 22 additional verified dated briefs across every continent.
- **Deterministic & self-contained:** `main.ts` uses Node 22 standard library only, validates PNG signature, `IHDR` bounds (`1024×1024`), `IEND` trailer, and the `1 MiB` byte cap before writing `/output/entry.png`. Full reproducible source (`src/stories.mjs`, `src/illustrations.mjs`, `src/template.mjs`, `src/render.mjs`) is included in the repository.

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
