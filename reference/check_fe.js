const fs = require('fs');
const content = fs.readFileSync('reference/extracted/couple_fe.js', 'utf8');

const regex = /children:`([^`]+)`/g;
let match;
const found = new Set();
while ((match = regex.exec(content)) !== null) {
  const str = match[1].trim();
  if (str.length > 4 && !str.includes('keyframes') && !str.includes('calc') && !str.includes('var(')) {
    found.add(str);
  }
}
console.log('Strings in couple_fe.js:');
console.log([...found].join('\n---\n'));
