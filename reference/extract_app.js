const fs = require('fs');
const content = fs.readFileSync('reference/index.js', 'utf8');

// Find the wedding application code. Usually it's at the end of the bundle after React and vendor libs.
// Let's find occurrences of Cinzel or Pragnya or Ruby or Occasions or similar.
const indexCinzel = content.indexOf('Cinzel');
console.log('Cinzel index:', indexCinzel);

// Let's slice from say 10,000 characters before Cinzel to the end
const appSlice = content.slice(Math.max(0, indexCinzel - 15000));
fs.writeFileSync('reference/app_extracted.js', appSlice);
console.log('Saved app_extracted.js, length:', appSlice.length);
