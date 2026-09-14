// Generates Stack Studio favicon set (icon.png, apple-icon.png, favicon.ico)
// Pure-JS PNG encoder + SDF-drawn stacked-bars brand mark. No external deps.
import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP_DIR = join(__dirname, "..", "app");

// ---- CRC32 ----
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function encodePNG(width, height, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (width * 4 + 1)] = 0; // filter: none
    rgba.copy(raw, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4);
  }
  const idat = deflateSync(raw);
  return Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);
}

// ---- drawing helpers (SDF rounded rects) ----
function sdRoundBox(px, py, cx, cy, hw, hh, r) {
  const qx = Math.abs(px - cx) - hw + r;
  const qy = Math.abs(py - cy) - hh + r;
  const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0));
  const inside = Math.min(Math.max(qx, qy), 0);
  return outside + inside - r;
}
const smooth = (sdf) => Math.max(0, Math.min(1, 0.5 - sdf)); // 1px AA feather
const lerp = (a, b, t) => Math.round(a + (b - a) * t);

function render(size) {
  const buf = Buffer.alloc(size * size * 4); // all zero => transparent
  // palette
  const bgTop = [108, 75, 255]; // #6C4BFF
  const bgBot = [59, 31, 168]; // #3B1FA8
  const barWhite = [245, 245, 247];
  const barCyan = [34, 211, 238]; // #22D3EE

  // background rounded square (full-bleed, radius ~18%)
  const rOuter = size * 0.18;
  const cx = size / 2;
  const cy = size / 2;
  const hw = size / 2 - 0.5;
  const hh = size / 2 - 0.5;

  // stack bars geometry
  const barW = size * 0.62;
  const barH = size * 0.13;
  const barR = barH * 0.45;
  const gap = size * 0.12;
  const totalH = barH * 3 + gap * 2;
  const startY = cy - totalH / 2 + barH / 2;

  const over = (i, r, g, b, a) => {
    const ia = a / 255;
    buf[i] = Math.round(r * ia + buf[i] * (1 - ia));
    buf[i + 1] = Math.round(g * ia + buf[i + 1] * (1 - ia));
    buf[i + 2] = Math.round(b * ia + buf[i + 2] * (1 - ia));
    buf[i + 3] = Math.max(buf[i + 3], a);
  };

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      // background tile
      const sdfBg = sdRoundBox(x + 0.5, y + 0.5, cx, cy, hw, hh, rOuter);
      const ab = smooth(sdfBg);
      if (ab > 0) {
        const t = y / size;
        over(i, lerp(bgTop[0], bgBot[0], t), lerp(bgTop[1], bgBot[1], t), lerp(bgTop[2], bgBot[2], t), Math.round(ab * 255));
      }
      // three stack bars
      for (let b = 0; b < 3; b++) {
        const by = startY + b * (barH + gap);
        const sdfBar = sdRoundBox(x + 0.5, y + 0.5, cx, by, barW / 2, barH / 2, barR);
        const aBar = smooth(sdfBar);
        if (aBar > 0) {
          const col = b === 1 ? barCyan : barWhite;
          const alpha = Math.round(aBar * (b === 1 ? 255 : 235));
          over(i, col[0], col[1], col[2], alpha);
        }
      }
    }
  }
  return buf;
}

// embedded-PNG ICO (browsers accept PNG payloads inside ICO)
function encodeICO(pngBuf) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = icon
  header.writeUInt16LE(1, 4); // count
  const entry = Buffer.alloc(16);
  entry[0] = 32; // width
  entry[1] = 32; // height
  entry[2] = 0; // colors
  entry[3] = 0; // reserved
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(pngBuf.length, 8); // size
  entry.writeUInt32LE(6 + 16, 12); // offset
  return Buffer.concat([header, entry, pngBuf]);
}

const icon = render(512);
writeFileSync(join(APP_DIR, "icon.png"), encodePNG(512, 512, icon));
console.log("wrote app/icon.png");

const apple = render(180);
writeFileSync(join(APP_DIR, "apple-icon.png"), encodePNG(180, 180, apple));
console.log("wrote app/apple-icon.png");

const fav = render(32);
const favPng = encodePNG(32, 32, fav);
writeFileSync(join(APP_DIR, "favicon.ico"), encodeICO(favPng));
console.log("wrote app/favicon.ico");
