const fs = require('fs');
const content = fs.readFileSync('reference/index.js', 'utf8');

console.log('Length of bundle:', content.length);

// Extract strings
const matches = content.match(/"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/g) || [];

const interesting = matches.filter(s => {
  const clean = s.slice(1, -1);
  return clean.includes('Pragnya') ||
         clean.includes('Krutibas') ||
         clean.includes('guest') ||
         clean.includes('.mp3') ||
         clean.includes('.jpg') ||
         clean.includes('.png') ||
         clean.includes('.webp') ||
         clean.includes('Wedding') ||
         clean.includes('wedding') ||
         clean.includes('font') ||
         clean.includes('music') ||
         clean.includes('audio') ||
         clean.includes('venue') ||
         clean.includes('Mandap') ||
         clean.includes('Bhubaneswar') ||
         clean.includes('family') ||
         clean.includes('invitation');
});

console.log('Interesting strings count:', interesting.length);
console.log('Unique interesting strings:');
console.log([...new Set(interesting)].join('\n'));
