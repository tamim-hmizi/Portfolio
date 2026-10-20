// Render the code-native SVG share card with the caller's installed sharp package.
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
const require = createRequire(import.meta.url);
const sharp = require("sharp");
const source = fileURLToPath(new URL("../public/og-image.svg", import.meta.url));
const target = fileURLToPath(new URL("../public/og-image.png", import.meta.url));
await sharp(source).png().toFile(target);
console.log("Share card rendered at 1200 × 630.");
