// Deterministic news-image-20261124 entrypoint (Node 22 standard library only).
// Validates the bundled 1024x1024 Tuesday 24 November 2026 broadsheet PNG (signature,
// IHDR bounds, IEND trailer, <= 1 MiB cap) and writes exact bytes to /output/entry.png.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1048576;
const MAX_DIM = 1024;
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const PNG_IEND = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);

function verifyPngPayload(buf: Buffer): { width: number; height: number } {
  if (buf.length < 33 || buf.length > MAX_BYTES) {
    throw new Error(`Invalid PNG byte length: ${buf.length}`);
  }
  if (!buf.subarray(0, 8).equals(PNG_SIG)) {
    throw new Error('Missing PNG header signature');
  }
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  if (width < 1 || width > MAX_DIM || height < 1 || height > MAX_DIM) {
    throw new Error(`PNG dimensions out of range: ${width}x${height}`);
  }
  if (!buf.subarray(buf.length - 12).equals(PNG_IEND)) {
    throw new Error('PNG file truncated: missing IEND chunk');
  }
  return { width, height };
}

const sourceUrl = new URL('./entry.png', import.meta.url);
const payload = readFileSync(sourceUrl);
verifyPngPayload(payload);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), payload);
