const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Look for <img and replace with <img loading="lazy" unless it already has loading=""
      // Simple regex replacement that avoids duplicating loading attribute
      if (content.includes('<img ') && !content.includes('loading="lazy"')) {
        const newContent = content.replace(/<img (?!.*loading=)[^>]*>/g, (match) => {
          if (!match.includes('loading=')) {
            return match.replace('<img ', '<img loading="lazy" ');
          }
          return match;
        });
        
        if (content !== newContent) {
          fs.writeFileSync(fullPath, newContent);
          console.log(`Updated images in ${fullPath}`);
        }
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Done.');
