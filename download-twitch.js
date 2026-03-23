const fs = require('fs');
const https = require('https');

function download(user, saveAs) {
  const req = https.get('https://decapi.me/twitch/avatar/' + user, (res) => {
    let url = '';
    res.on('data', d => url += d);
    res.on('end', () => {
      console.log(user, '->', url);
      if(url.startsWith('https')) {
        https.get(url, (imgRes) => {
          imgRes.pipe(fs.createWriteStream('public/images/players/' + saveAs + '.png'));
        });
      }
    });
  });
}

download('something_vlr', 'something');
download('zmjjkk', 'zmjjkk');
download('nats', 'nats');
download('aspas', 'aspas');
download('derke', 'derke');
download('faker', 'dambi');
