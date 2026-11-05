const fs = require('fs');

// Read JPEG SOF markers to get width and height
function getJpgDimensions(filepath) {
  const buf = fs.readFileSync(filepath);
  let offset = 2;
  while (offset < buf.length) {
    if (buf[offset] !== 0xFF) break;
    const marker = buf[offset + 1];
    if (marker === 0xC0 || marker === 0xC2) {
      const height = buf.readUInt16BE(offset + 5);
      const width = buf.readUInt16BE(offset + 7);
      return { width, height };
    }
    const len = buf.readUInt16BE(offset + 2);
    offset += 2 + len;
  }
  return null;
}

const files = fs.readdirSync('couple_photos');
files.forEach(f => {
  if (f.endsWith('.jpg')) {
    console.log(f, getJpgDimensions('couple_photos/' + f));
  }
});
