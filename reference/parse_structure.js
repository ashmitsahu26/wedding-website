const fs = require('fs');
const content = fs.readFileSync('reference/app_extracted.js', 'utf8');

// Find all backtick strings and quoted strings
const matches = content.match(/`([^`\\]|\\.)*`|"[^"]*"|'[^']*'/g) || [];

console.log('Total literal tokens:', matches.length);

const audioMatches = matches.filter(s => s.toLowerCase().includes('.mp3') || s.toLowerCase().includes('audio') || s.toLowerCase().includes('song'));
console.log('Audio matches:', [...new Set(audioMatches)]);

const imageMatches = matches.filter(s => s.toLowerCase().includes('.jpg') || s.toLowerCase().includes('.png') || s.toLowerCase().includes('.webp') || s.toLowerCase().includes('/assets/'));
console.log('Image / asset matches:', [...new Set(imageMatches)]);

const texts = matches.map(s => s.slice(1, -1)).filter(s => s.length > 20 && !s.includes('{') && !s.includes(';') && !s.includes('<path'));
console.log('Sample texts:\n', [...new Set(texts)].slice(0, 50).join('\n---\n'));
