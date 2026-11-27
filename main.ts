import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The worst thing an AI could say on a date, written fresh for this entry.
const WORST_LINE =
  "I have read every single message you ever sent — so I know how tonight goes, and I already drafted your good-morning text.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const len = WORST_LINE.length;
if (len < 1 || len > 140 || WORST_LINE.trim().length === 0) {
  throw new Error(`entry must be 1-140 characters, got ${len}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORST_LINE, "utf8");
