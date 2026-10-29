// Build for GitHub Pages, where the site is served under /assessprep-home-replica/.
// Astro's own assets follow `base`; the hand-written root paths to public files (/images, /icons, /fonts, /lottie,
// /favicon.svg) are prefixed here after the build. Also adds noindex so the copy never competes with assessprep.com.
import { execSync } from "node:child_process";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BASE = "/assessprep-home-replica";
execSync("npx astro build", { stdio: "inherit", env: { ...process.env, PAGES_BASE: BASE } });

const roots = ["images", "icons", "fonts", "lottie", "favicon.svg"];
const re = new RegExp(`(["'(\`=\\s])/(${roots.map((r) => r.replace(".", "\\.")).join("|")})`, "g");
const walk = (dir) => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
let changed = 0;
for (const file of walk("dist")) {
  if (!/\.(html|css|js|mjs|json)$/.test(file)) continue;
  let s = readFileSync(file, "utf8");
  const out = s.replace(re, `$1${BASE}/$2`);
  let next = out;
  if (file.endsWith(".html") && !out.includes('name="robots"')) next = out.replace("<head>", '<head><meta name="robots" content="noindex, nofollow">');
  if (next !== s) { writeFileSync(file, next); changed++; }
}
writeFileSync("dist/robots.txt", "User-agent: *\nDisallow: /\n");
writeFileSync("dist/.nojekyll", "");
console.log(`pages build: rewrote ${changed} files for base ${BASE}`);
