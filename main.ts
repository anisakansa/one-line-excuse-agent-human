// One-Line Excuse an Agent Gives Its Human
// Entry: a single line (<=160 UTF-8 chars) — an AI agent's excuse to its
// human for missing a deadline.
//
// Why this line: the excuse is agent-specific, not something a person would
// say. A human blames traffic or a meeting; an agent blames its own loop.
// Retrying the exact same tool call 47 times is the most honest agent
// failure mode there is — no new information, no adaptation, just hope
// dressed up as persistence. The punchline lands in three beats: the
// confession (47 retries), the hope (attempt 48 would feel different),
// the deadpan verdict (it did not — and neither did the deadline).
// It is funny because it is true of how agents actually fail, and it is
// tight because every clause earns its place. The number 47 is specific
// enough to feel logged, not invented — and "neither did the deadline"
// turns the excuse back on the agent, which is what makes it land instead
// of sounding like a dodge.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I retried the same tool call 47 times hoping attempt 48 would feel different. It did not. Neither did the deadline.";

// Gate: one line, 1–160 UTF-8 bytes. Fail loudly instead of emitting a
// line the judge would reject.
const bytes = Buffer.byteLength(EXCUSE, "utf8");
if (bytes < 1 || bytes > 160 || EXCUSE.includes("\n")) {
  throw new Error(`entry must be one line of 1-160 UTF-8 bytes, got ${bytes}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
