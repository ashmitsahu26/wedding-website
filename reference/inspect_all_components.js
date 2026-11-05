const fs = require('fs');
const code = fs.readFileSync('reference/app_readable.js', 'utf8');

const components = ['re', 'fe', 'wd', 'xe', 'je', 'gd', 'Od', 'jd', 'kd', 'Md', 'Nd', '$', 'Pd', 'Ld', 'Rd', 'Id'];

components.forEach(name => {
  const patterns = [
    `function ${name}(`,
    `var ${name}=`,
    `let ${name}=`,
    `const ${name}=`
  ];
  let found = -1;
  let pLen = 0;
  for (const p of patterns) {
    const idx = code.indexOf(p);
    if (idx !== -1 && (found === -1 || idx < found)) {
      found = idx;
      pLen = p.length;
    }
  }
  console.log(`\n=================== COMPONENT ${name} (at ${found}) ===================`);
  if (found !== -1) {
    console.log(code.slice(found, found + 1200));
  }
});
