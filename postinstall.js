import fs from "node:fs";
import path from "node:path";

console.log("🚀 Running post-installation tasks...");

const configDir = path.join(process.cwd(), "config");

if (!fs.existsSync(configDir)) {
  fs.mkdirSync(configDir, { recursive: true });
  console.log("📁 Created config directory.");
}