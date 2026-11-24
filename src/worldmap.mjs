// Clean real-geography equirectangular vector world map with exact (lat, lon) pin projection.
// Uses original simplified natural coastlines covering every inhabited continent and major islands.

const MAP_W = 304;
const MAP_H = 186;
const LON_MIN = -168;
const LON_MAX = 182;
const LAT_MAX = 75;
const LAT_MIN = -55;

export function projectLatLon(lat, lon) {
  const x = ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * MAP_W;
  const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * MAP_H;
  return { x: Number(x.toFixed(1)), y: Number(y.toFixed(1)) };
}

function polyPath(coords) {
  return (
    coords
      .map(([lon, lat], idx) => {
        const p = projectLatLon(lat, lon);
        return `${idx === 0 ? 'M' : 'L'}${p.x},${p.y}`;
      })
      .join(' ') + ' Z'
  );
}

// Non-self-intersecting simplified natural geographic polygons [lon, lat] for crisp 304x186 rendering.
const LANDMASSES = [
  // North America
  [
    [-166, 60], [-162, 66], [-156, 71], [-140, 70], [-125, 70], [-110, 68],
    [-95, 68], [-82, 63], [-92, 58], [-88, 52], [-79, 52], [-78, 62],
    [-64, 60], [-56, 52], [-60, 46], [-67, 45], [-70, 42], [-75, 38],
    [-76, 35], [-81, 31], [-80, 25], [-82, 26], [-84, 30], [-90, 29],
    [-97, 26], [-97, 21], [-91, 18], [-87, 21], [-88, 16], [-83, 15],
    [-83, 10], [-78, 8], [-80, 7], [-85, 10], [-92, 15], [-105, 19],
    [-110, 24], [-114, 31], [-112, 24], [-117, 32], [-121, 35], [-124, 41],
    [-124, 48], [-131, 54], [-138, 59], [-150, 61], [-161, 56],
  ],
  // Greenland
  [
    [-52, 60], [-42, 60], [-34, 67], [-20, 72], [-18, 75], [-55, 75],
    [-66, 73], [-56, 69], [-53, 64],
  ],
  // Cuba / Greater Antilles
  [[-85, 22], [-79, 23], [-74, 20], [-80, 20]],
  // South America
  [
    [-78, 9], [-75, 11], [-71, 12], [-62, 10], [-52, 5], [-49, 0],
    [-40, -3], [-35, -6], [-35, -10], [-39, -15], [-41, -22], [-48, -26],
    [-53, -34], [-58, -38], [-65, -42], [-67, -50], [-69, -54], [-74, -51],
    [-73, -42], [-71, -30], [-71, -18], [-77, -12], [-81, -5], [-80, 1],
  ],
  // Iceland
  [[-24, 64], [-14, 64], [-14, 66], [-23, 66]],
  // Great Britain
  [[-5.5, 50.2], [1.5, 51.3], [1.6, 53], [-1.5, 55.5], [-2, 57.8], [-5, 58.5], [-5.5, 55], [-4, 52]],
  // Ireland
  [[-10, 51.6], [-6, 52.3], [-6, 55], [-9.5, 54.4]],
  // Scandinavia (separate clean polygon avoiding Baltic self-intersection)
  [
    [5, 61], [11, 65], [19, 69], [29, 71], [32, 69], [28, 65],
    [22, 63], [21, 60], [18, 59], [14, 55.5], [11, 57.5], [8, 58.2],
  ],
  // Continental Europe + Asia (clean non-intersecting coastline around Baltic, Black Sea, Arabia, India, SE Asia)
  [
    [-9, 37], [-9, 43], [-2, 43.4], [-4.5, 48], [2, 51], [8, 54],
    [10, 56.5], [11.5, 54.5], [19, 54.6], [21, 56.5], [24, 59.5], [29, 60],
    [29, 65], [33, 68.8], [41, 67], [46, 68], [60, 69], [70, 72],
    [90, 74], [115, 73], [140, 71], [168, 68], [178, 65], [163, 60],
    [160, 52], [154, 58], [142, 54], [140, 47], [135, 43], [130, 42],
    [129, 35], [126, 35], [126, 39], [122, 40], [120, 38], [122, 31],
    [119, 25], [114, 22], [108, 21], [109, 12], [105, 9], [100, 13],
    [103, 5], [104, 1], [101, 3], [98, 8], [97, 16], [92, 21],
    [88, 22], [80, 15], [77, 8], [73, 19], [68, 23], [66, 25],
    [58, 25], [56, 26.5], [51, 29], [48, 30], [50, 26], [56, 24],
    [59, 22], [53, 16], [44, 13], [43, 14], [39, 21], [35, 29],
    [34, 31], [36, 36], [27, 37], [26, 40], [29, 41], [36, 41],
    [41, 41], [38, 45], [32, 46], [29, 45], [27, 41], [23, 38],
    [20, 40], [15, 45], [13, 45.6], [16, 41], [18, 40], [16, 38],
    [12, 42], [8, 44], [3, 43], [0, 39], [-5, 36],
  ],
  // Sicily & Sardinia
  [[12.5, 37.8], [15.6, 38.2], [15.1, 36.7]],
  [[8.3, 39], [9.8, 39], [9.6, 41.2], [8.3, 41]],
  // Africa
  [
    [-17, 15], [-16, 21], [-10, 30], [-6, 35.8], [3, 36.8], [10.5, 37],
    [11, 33], [20, 32], [25, 31.6], [32.5, 31.2], [35, 25], [38, 19],
    [43, 12], [51, 11.8], [49, 6], [41, -2], [40, -11], [40.5, -16],
    [35, -20], [33, -26], [28, -33], [20, -34.8], [18, -33], [15, -26],
    [12, -17], [13, -8], [9, -1], [9, 4], [2, 6], [-4, 5], [-8, 5],
    [-13, 9], [-16, 12],
  ],
  // Madagascar
  [[44, -25], [47, -25], [50, -15], [49, -12], [45, -17], [43.5, -22]],
  // Sri Lanka
  [[80, 9.5], [81.8, 7.5], [80.6, 6], [79.8, 7.5]],
  // Taiwan
  [[120.2, 22], [121.9, 25.1], [121.3, 25.2], [120, 23]],
  // Japan
  [[130, 31], [131.5, 34], [136, 34.5], [140.5, 35.5], [141.8, 40.5], [140, 41], [137, 37], [133, 35.5], [130, 33]],
  [[140.5, 42], [145, 43.3], [144, 45], [141.5, 45.2], [140, 43]],
  // Philippines
  [[120, 14], [122.5, 18.4], [124, 13], [126, 7], [122, 7.5], [121, 12]],
  // Sumatra, Java, Borneo, Sulawesi, New Guinea
  [[95.5, 5.5], [99, 3], [105.5, -5.8], [103.5, -5.8], [97, 1.5]],
  [[105.5, -6.2], [114.4, -7.8], [114, -8.7], [105.8, -7]],
  [[109, 1.5], [117, 6.8], [119, 1], [116, -4], [110, -3]],
  [[119, -5], [122, -5], [125, 1.5], [120.5, 1]],
  [[132, -2], [141, -2.5], [150, -10], [146, -9], [138, -7], [132, -4]],
  // Australia + Tasmania
  [
    [114, -22], [122, -18], [130, -12], [136, -12], [137, -15], [141, -16],
    [142.5, -11], [146, -18], [153.5, -27], [151, -34], [149.8, -37.5],
    [141, -38], [136, -35], [129, -32], [115, -34.5], [113.5, -26],
  ],
  [[144.8, -40.8], [148.2, -41], [147, -43.5], [145.3, -43]],
  // New Zealand
  [[173, -35], [178, -38], [175, -41.3], [173, -40.5]],
  [[171, -41], [174, -42], [169, -46.5], [166.5, -45.5]],
];

function resolvePinPositions(rawPins) {
  const pts = rawPins.map((s) => {
    const p = projectLatLon(s.geo.lat, s.geo.lon);
    return {
      ...s,
      x: Math.max(8, Math.min(MAP_W - 8, p.x)),
      y: Math.max(8, Math.min(MAP_H - 17, p.y)),
      ox: p.x,
      oy: p.y,
      r: s.num <= 13 ? 6.0 : 5.0,
    };
  });

  for (let iter = 0; iter < 22; iter++) {
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i];
        const b = pts[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 0.01;
        const minDist = a.r + b.r + 1.1;
        if (dist < minDist) {
          const push = (minDist - dist) * 0.5;
          const ux = dx / dist;
          const uy = dy / dist;
          a.x -= ux * push;
          a.y -= uy * push;
          b.x += ux * push;
          b.y += uy * push;
        }
      }
    }
    for (const p of pts) {
      p.x = Math.max(7, Math.min(MAP_W - 7, p.x));
      p.y = Math.max(7, Math.min(MAP_H - 17, p.y));
    }
  }
  return pts;
}

export function renderWorldMap(stories, regionColorMap) {
  const geoStories = stories.filter((s) => s.geo);
  const placed = resolvePinPositions(geoStories);

  const lands = LANDMASSES.map((poly) => `<path d="${polyPath(poly)}" />`).join('');

  const pTaipei = projectLatLon(25.0, 121.5);
  const pNyc = projectLatLon(40.7, -74.0);
  const marketArc = `<path d="M${pNyc.x},${pNyc.y} Q${((pNyc.x + pTaipei.x) / 2).toFixed(1)},12 ${pTaipei.x},${pTaipei.y}" fill="none" stroke="#B45309" stroke-width="1.05" stroke-dasharray="3,2.5" opacity="0.62"/>`;

  const pinsSvg = placed
    .map((s) => {
      const col = regionColorMap[s.region] || '#141D2E';
      const fs = s.num <= 13 ? 6.9 : 6.0;
      const leader =
        Math.hypot(s.x - s.ox, s.y - s.oy) > 4.2
          ? `<line x1="${s.ox.toFixed(1)}" y1="${s.oy.toFixed(1)}" x2="${s.x.toFixed(1)}" y2="${s.y.toFixed(1)}" stroke="${col}" stroke-width="0.9" opacity="0.72"/>`
          : '';
      return `
        ${leader}
        <g transform="translate(${s.x.toFixed(1)},${s.y.toFixed(1)})">
          <circle r="${s.r}" fill="${col}" stroke="#FFFFFF" stroke-width="1.15"/>
          <text y="2.35" text-anchor="middle" font-family="Noto Sans, sans-serif" font-size="${fs}" font-weight="900" fill="#FFFFFF">${s.num}</text>
        </g>`;
    })
    .join('');

  const eqY = projectLatLon(0, 0).y;
  const lat30N = projectLatLon(30, 0).y;
  const lat30S = projectLatLon(-30, 0).y;
  const lon0 = projectLatLon(0, 0).x;
  const lon90E = projectLatLon(0, 90).x;
  const lon90W = projectLatLon(0, -90).x;

  return `<svg viewBox="0 0 ${MAP_W} ${MAP_H}" width="100%" height="${MAP_H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${MAP_W}" height="${MAP_H}" rx="2.5" fill="#DFECF5" stroke="#B8CBDC" stroke-width="1"/>
    <g stroke="#C5D8E6" stroke-width="0.6" stroke-dasharray="2,2">
      <line x1="0" y1="${eqY}" x2="${MAP_W}" y2="${eqY}"/>
      <line x1="0" y1="${lat30N}" x2="${MAP_W}" y2="${lat30N}"/>
      <line x1="0" y1="${lat30S}" x2="${MAP_W}" y2="${lat30S}"/>
      <line x1="${lon90W}" y1="0" x2="${lon90W}" y2="${MAP_H}"/>
      <line x1="${lon0}" y1="0" x2="${lon0}" y2="${MAP_H}"/>
      <line x1="${lon90E}" y1="0" x2="${lon90E}" y2="${MAP_H}"/>
    </g>
    <g fill="#D5DFCE" stroke="#8DA08A" stroke-width="0.75" stroke-linejoin="round">
      ${lands}
    </g>
    ${marketArc}
    ${pinsSvg}
    <rect x="0" y="${MAP_H - 13}" width="${MAP_W}" height="13" fill="#F4F8FB" opacity="0.93"/>
    <text x="6" y="${MAP_H - 4}" font-family="Noto Sans, sans-serif" font-size="7.0" font-weight="700" fill="#334155">${placed.length} exact-coordinate pins (1\u201313 + key briefs) \u00b7 Arc: Asia\u2013US chips (#3)</text>
  </svg>`;
}
