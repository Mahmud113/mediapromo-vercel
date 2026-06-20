const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public");
const files = ["index.html", "styles.css", "script.js", "assets"];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  const from = path.join(root, file);
  const to = path.join(outDir, file);

  fs.cpSync(from, to, { recursive: true });
}

console.log("Built static site to public/");
