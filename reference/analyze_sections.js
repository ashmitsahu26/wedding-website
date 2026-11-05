const fs = require('fs');
const lines = fs.readFileSync('reference/app_readable.js', 'utf8').split('\n');

// Find all top-level component / function boundaries
let sections = [];
let currentSection = { start: 0, text: '' };

// Let's search for lines defining components or major sections
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('return(0,T.jsxs)(`div`') || line.includes('return(0,T.jsx)(`div`') || line.includes('return (0,T.jsxs)(`div`')) {
    sections.push(i);
  }
}

console.log('Sections return lines:', sections);

// Let's inspect around each section return line to find the component name / purpose
sections.forEach(idx => {
  console.log(`\n================== SECTION AT LINE ${idx} ==================`);
  console.log(lines.slice(Math.max(0, idx - 15), Math.min(lines.length, idx + 25)).join('\n'));
});
