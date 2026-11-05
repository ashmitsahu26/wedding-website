const fs = require('fs');
const content = fs.readFileSync('reference/app_extracted.js', 'utf8');

// Let's format the code into readable lines
// Simple tokenizer/formatter for readable output
let formatted = content
  .replace(/;/g, ';\n')
  .replace(/{/g, '{\n')
  .replace(/}/g, '\n}\n');

fs.writeFileSync('reference/app_readable.js', formatted);
console.log('Saved reference/app_readable.js');
