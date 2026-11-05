const fs = require('fs');
const content = fs.readFileSync('reference/index.js', 'utf8');

// Find all image imports or asset assignments: e.g. = "/assets/..."
const assetVars = content.match(/([a-zA-Z0-9_$]+)\s*=\s*["'`]\/assets\/[^"'`]+["'`]/g) || [];
console.log('Asset variable definitions:');
console.log(assetVars);
