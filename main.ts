import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A pickup line an AI would say out loud, written fresh for this entry.
const LINE =
  "I read your whole chat history before tonight. You like me already — you just don't know it yet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate self-check: the entry must be 1–140 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-140 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
