import https from 'node:https';

https.get('https://9lmntsstudio.com', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Server:', res.headers['server']);
  console.log('Content-Type:', res.headers['content-type']);
  console.log('ETag:', res.headers['etag']);
  console.log('Age:', res.headers['age']);
  console.log('X-NF-Request-ID:', res.headers['x-nf-request-id']);
  
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    console.log('Body length:', data.length);
    console.log('Has stationsDrawer:', data.includes('stationsDrawer'));
    console.log('Has Reverse-Engineer Simulator:', data.includes('clonerTerminalOutput') || data.includes('Reverse-Engineer'));
    console.log('Title match:', data.match(/<title>([^<]+)<\/title>/)?.[1]);
  });
}).on('error', (e) => {
  console.error('Error fetching URL:', e.message);
});
