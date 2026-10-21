import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const STAGING = path.resolve('_deploy_staging');

function copyDir(src, dest, ignore = []) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    if (ignore.includes(item)) continue;
    const s = path.join(src, item);
    const d = path.join(dest, item);
    if (fs.statSync(s).isDirectory()) {
      copyDir(s, d, ignore);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

if (fs.existsSync(STAGING)) {
  fs.rmSync(STAGING, { recursive: true, force: true });
}
fs.mkdirSync(STAGING, { recursive: true });

// Copy essential build files
copyDir(path.join(ROOT, 'site'), path.join(STAGING, 'site'));
copyDir(path.join(ROOT, 'public'), path.join(STAGING, 'public'));
copyDir(path.join(ROOT, 'assets'), path.join(STAGING, 'assets'));
copyDir(path.join(ROOT, 'demos'), path.join(STAGING, 'demos'));
copyDir(path.join(ROOT, 'embed'), path.join(STAGING, 'embed'));

const filesToCopy = [
  'package.json',
  'netlify.toml',
  '_redirects',
  'styles.css',
  'demo-client.html',
  'workerbee.html',
  'handyman.html',
  'reception.html',
  'darnley.html',
  '04_Runway_OS_Fashion_Battle.html',
  'fashion.html'
];

for (const f of filesToCopy) {
  const src = path.join(ROOT, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(STAGING, f));
  }
}

console.log('✓ Prepared clean _deploy_staging directory (zero bloat, no .git/node_modules/archives).');
