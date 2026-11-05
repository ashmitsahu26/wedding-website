const fs = require('fs');
const lines = fs.readFileSync('reference/app_readable.js', 'utf8').split('\n');

const keywords = ['Pragnya', 'Krutibas', 'Sangeet', 'Haldi', 'Reception', 'Mandap', 'guest', 'Bhawanipatna', 'Bharat Palace'];

keywords.forEach(kw => {
  console.log(`=== Matches for "${kw}":`);
  lines.forEach((line, idx) => {
    if (line.includes(kw)) {
      console.log(`Line ${idx}: ${line.slice(0, 150)}`);
    }
  });
});
