const fs = require('fs');
const lines = fs.readFileSync('reference/app_readable.js', 'utf8').split('\n');

// Let's write lines 550-3000 to reference/part1.js
fs.writeFileSync('reference/part1.js', lines.slice(550, 3000).join('\n'));
// Let's write lines 8400-10384 to reference/part2.js
fs.writeFileSync('reference/part2.js', lines.slice(8400).join('\n'));

console.log('Saved part1.js and part2.js');
