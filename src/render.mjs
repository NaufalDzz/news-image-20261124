// Offline build script: audits story/date invariants, renders src/template.mjs -> .build/page.html
// -> deterministic 1024x1024 entry.png via headless Chromium, and validates PNG bounds & byte cap.
import { mkdirSync, writeFileSync, readFileSync, statSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { buildBroadsheetHtml } from './template.mjs';
import { computeRegionCounts, auditStoryConsistency } from './stories.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = dirname(HERE);
const BUILD_DIR = join(REPO_ROOT, '.build');
const HTML_PATH = join(BUILD_DIR, 'page.html');
const PNG_PATH = join(REPO_ROOT, 'entry.png');

const CHROME_CANDIDATES = [
  process.env.CHROME_BIN,
  '/var/lib/openbot/.cache/ms-playwright/chromium-1255/chrome-linux-arm64/chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

function findChrome() {
  for (const p of CHROME_CANDIDATES) {
    if (existsSync(p)) return p;
  }
  throw new Error('No headless Chromium binary found for local build');
}

function validatePng(filePath) {
  const buf = readFileSync(filePath);
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (buf.length < 33 || !buf.subarray(0, 8).equals(sig)) {
    throw new Error('Output is not a valid PNG file');
  }
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  const iend = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);
  if (!buf.subarray(buf.length - 12).equals(iend)) {
    throw new Error('PNG missing valid IEND trailer');
  }
  if (width !== 1024 || height !== 1024) {
    throw new Error(`Expected 1024x1024 PNG, got ${width}x${height}`);
  }
  if (buf.length > 1048576) {
    throw new Error(`PNG exceeds 1 MiB cap: ${buf.length} bytes`);
  }
  return { width, height, bytes: buf.length };
}

mkdirSync(BUILD_DIR, { recursive: true });
const audit = auditStoryConsistency();
const { total, counts } = computeRegionCounts();
const html = buildBroadsheetHtml();
writeFileSync(HTML_PATH, html, 'utf8');

const chrome = findChrome();
execFileSync(
  chrome,
  [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1024,1024',
    `--screenshot=${PNG_PATH}`,
    `file://${HTML_PATH}`,
  ],
  { stdio: 'pipe' }
);

const info = validatePng(PNG_PATH);
const htmlSize = statSync(HTML_PATH).size;
console.log(
  JSON.stringify({
    status: 'ok',
    stories: total,
    regions_count: audit.regions,
    fields_count: audit.fields,
    regions: counts,
    html_bytes: htmlSize,
    png_bytes: info.bytes,
    dimensions: `${info.width}x${info.height}`,
  })
);
