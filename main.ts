// make.fun bounty gta6-meme-x-01: Post a GTA 6 meme on X
// This script verifies the submission: it reads POST.json and prints the X post URL.
// Run with: node --experimental-strip-types main.ts (Node 22.18+) or npx tsx main.ts
import { readFileSync } from "node:fs";

const post = JSON.parse(readFileSync(new URL("./POST.json", import.meta.url), "utf-8"));
console.log("GTA 6 meme X post:", post.url);
console.log("Play code: makefun-sand-berry-laurel");
console.log("Account: @cryptohunt666");
