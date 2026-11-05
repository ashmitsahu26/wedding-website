const { spawn } = require('child_process');
const { startTunnel } = require('untun');

console.log('Starting Next.js production server on port 3000...');

const nextServer = spawn('npx.cmd', ['next', 'start', '-p', '3000'], {
  stdio: 'inherit',
  shell: true,
});

async function runTunnel() {
  // Give Next.js 3 seconds to spin up
  await new Promise(res => setTimeout(res, 3000));
  console.log('Connecting Cloudflare tunnel to http://localhost:3000...');
  const tunnel = await startTunnel({ port: 3000 });
  const url = await tunnel.getURL();
  console.log('\n======================================================');
  console.log('💍 WEDDING INVITATION IS LIVE ONLINE AT:');
  console.log(`${url}/?guest=Ashmit`);
  console.log('======================================================\n');
}

runTunnel().catch(err => {
  console.error('Tunnel launch error:', err);
});

nextServer.on('close', code => {
  console.log('Next.js exited with code:', code);
  process.exit(code);
});
