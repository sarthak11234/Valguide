const fs = require('fs');

const usernames = [
  'tenz', 'tarik', 'kyedae', 'mixwell', 'benjyfishy', 'sliggytv', 'fps_shaka', 's0mcs', 'averagejonas', 'dizzy',
  'brawk', 'aspaszin', 'demon1', 'derke', 'nats', 'miniboo', 'f0rsaken', 'something', 't3xture', 'zmjjkk'
];

async function getAvatars() {
  const map = {};
  for (const user of usernames) {
    try {
      const res = await fetch(`https://decapi.me/twitch/avatar/${user}`);
      const text = await res.text();
      if (text && text.startsWith('http')) {
        map[user] = text.trim();
      }
    } catch (e) {}
  }
  fs.writeFileSync('avatars.json', JSON.stringify(map, null, 2));
  console.log('Saved to avatars.json');
}
getAvatars();
