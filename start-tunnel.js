const { startTunnel } = require('untun');

async function main() {
  console.log('Starting Cloudflare tunnel for port 3000...');
  const tunnel = await startTunnel({ port: 3000 });
  const url = await tunnel.getURL();
  console.log('TUNNEL_PUBLIC_URL=' + url);
}

main().catch(err => {
  console.error('Tunnel error:', err);
});
