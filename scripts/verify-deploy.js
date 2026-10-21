import https from 'node:https';

function checkUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({
          url,
          statusCode: res.statusCode,
          server: res.headers['server'],
          etag: res.headers['etag'],
          length: data.length,
          title: data.match(/<title>([^<]+)<\/title>/)?.[1],
          hasTriage: data.includes('triageForm'),
          hasWaveform: data.includes('waveform-box') || data.includes('wave-bar'),
          hasInterac: data.includes('payments@9lmntsstudio.com')
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Testing Netlify Edge for 9LMNTS Studio...');
  const home = await checkUrl('https://9lmntsstudio.com/');
  console.log('\n[Home /]:', home);

  const os = await checkUrl('https://9lmntsstudio.com/os/');
  console.log('\n[OS Gateway /os/]:', os);
}

run().catch(console.error);
