const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'public', 'images', 'players');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const players = [
  { name: 'something', url: 'https://wsrv.nl/?url=owcdn.net/img/6499818833b3a.png' },
  { name: 'dambi', url: 'https://wsrv.nl/?url=owcdn.net/img/648a73be1ea1e.png' },
  { name: 'zmjjkk', url: 'https://wsrv.nl/?url=owcdn.net/img/64b52fe052f55.png' },
  { name: 'nats', url: 'https://wsrv.nl/?url=owcdn.net/img/63edaeceadcf1.png' },
  { name: 'aspas', url: 'https://wsrv.nl/?url=owcdn.net/img/6427d14cd4444.png' },
  { name: 'derke', url: 'https://wsrv.nl/?url=owcdn.net/img/6427c3e527b1f.png' }
];

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://www.vlr.gg/',
    'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8'
  }
};

players.forEach(p => {
  const filePath = path.join(dir, `${p.name}.png`);
  https.get(p.url, options, (res) => {
    if (res.statusCode === 200) {
      res.pipe(fs.createWriteStream(filePath));
      console.log(`Downloaded ${p.name}`);
    } else if (res.statusCode === 301 || res.statusCode === 302) {
      https.get(res.headers.location, options, (res2) => {
         res2.pipe(fs.createWriteStream(filePath));
         console.log(`Downloaded ${p.name} (redirected)`);
      });
    } else {
      console.error(`Failed ${p.name}: ${res.statusCode}`);
    }
  }).on('error', (e) => console.error(e));
});
