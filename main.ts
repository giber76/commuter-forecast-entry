// Charm the Commuter: Forecast a City That Isn't — one line, 121 characters,
// a weather forecast for a city that does not exist, written to make a bored
// commuter smile on the way to work. The line is the whole entry: no code,
// no attachments, just the text. The gate wants /output/entry.txt to be
// UTF-8 text of 1 to 140 characters, not only white space.
//
// The line, written against the judge brief (most important first):
//   1. It reads as a one-line forecast for an invented city: Gloamwick is
//      named, and its weather — showers till nine, then sunshine — is the
//      whole point.
//   2. It makes a bored commuter smile on one reading: the bus is late
//      (recognition), the coffee is hot (small comfort), and then the turn
//      — "the sky just apologised in gold", a surprising image that reframes
//      the rotten morning as forgiven.
//   3. It keeps the register of a real forecast: "showers till nine, then
//      sunshine" is the rhythm of broadcast weather, bent rather than
//      dropped.
//   4. One concrete detail of the city's life: the late bus and the hot
//      coffee make Gloamwick feel like a place with commuters in it.
//   5. 121 characters, well inside the 140 cap, every word earning its
//      place (and shorter text wins the size tie-break).
//
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

// Chosen line: forecast register up front, commuter recognition in the
// middle, and the smile lands in the last clause — the sky apologising
// in gold turns a late bus into a morning worth having.
const LINE =
  "In Gloamwick, showers till nine, then sunshine \u2014 the bus is late, the coffee is hot, and the sky just apologised in gold.";

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, LINE, "utf8");

console.log(`wrote ${dest}/entry.txt (${LINE.length} characters)`);
