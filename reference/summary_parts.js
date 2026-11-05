const fs = require('fs');

const part1 = fs.readFileSync('reference/part1.js', 'utf8');
const part2 = fs.readFileSync('reference/part2.js', 'utf8');

console.log('Part 1 first 100 lines:');
console.log(part1.split('\n').slice(0, 100).join('\n'));

console.log('\n===================\nPart 2 first 100 lines:');
console.log(part2.split('\n').slice(0, 100).join('\n'));
