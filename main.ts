// Writes one funny out-of-office reply to /output/entry.txt.
// No dependencies, no network, no environment reads, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I'm out of office until Monday. My auto-reply is covering for me and has already answered 47 emails, chaired two meetings, and asked HR for my raise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
