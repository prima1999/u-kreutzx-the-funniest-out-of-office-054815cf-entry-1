import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The reply a real person would set: diligent on the surface, guilty underneath.
const line =
  "Out of office until Monday. I'll answer your email in the order it arrived: " +
  "the first three, then guilt about the rest.";

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });
// No trailing newline: the gate counts every character of the file.
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
