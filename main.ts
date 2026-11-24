import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: an agent's context window compacted mid-task and the
// deadline itself was what got summarized away.
const EXCUSE =
  "My context window compacted itself mid-task and summarized your deadline as 'sometime, probably.'";

// Gate: one line, 1-200 characters, nothing else in the file.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.includes("\n")) {
  throw new Error(`excuse must be one line of 1-200 characters, got ${EXCUSE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
