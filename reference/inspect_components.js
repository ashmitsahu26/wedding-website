const fs = require('fs');
const content = fs.readFileSync('reference/app_extracted.js', 'utf8');

// Find function declarations: function Name(...) { ... }
const fnMatches = content.match(/function\s+([a-zA-Z0-9_$]+)\s*\([^)]*\)\s*\{/g) || [];
console.log('Function definitions found:', fnMatches.length);

// Let us find components by looking for returns containing jsxs / jsx
const lines = fs.readFileSync('reference/app_readable.js', 'utf8').split('\n');
console.log('Total lines in app_readable:', lines.length);

// Let us find lines with function or const definitions
const funcs = [];
lines.forEach((l, i) => {
  if (l.startsWith('function ') || l.startsWith('const ') || l.includes('return(0,') || l.includes('return (0,')) {
    if (l.length < 120) {
      funcs.push(`${i}: ${l}`);
    }
  }
});
console.log('Sample functions / returns (first 40):');
console.log(funcs.slice(0, 40).join('\n'));
