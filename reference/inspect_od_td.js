const fs = require('fs');
const code = fs.readFileSync('reference/app_readable.js', 'utf8');

// Let's find definitions of Od, Td, Fd
function printFn(name) {
  const marker1 = `function ${name}(`;
  const marker2 = `var ${name}=`;
  const marker3 = `let ${name}=`;
  const marker4 = `const ${name}=`;
  
  let idx = code.indexOf(marker1);
  if (idx === -1) idx = code.indexOf(marker2);
  if (idx === -1) idx = code.indexOf(marker3);
  if (idx === -1) idx = code.indexOf(marker4);
  
  console.log(`Found ${name} at index ${idx}`);
  if (idx !== -1) {
    console.log(code.slice(idx, idx + 2500));
  }
}

printFn('Fd');
printFn('Od');
printFn('Td');
