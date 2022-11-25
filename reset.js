const fs = require("fs");
const path = require("path");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");
const index = require("./index.js");

function reset() {
    // Delete old file if it exists
    if (!fs.existsSync(DIST_DIR)) {
        
      }
      else {
        fs.unlinkSync(distPath);
      }
}

module.exports = reset;