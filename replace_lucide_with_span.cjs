const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      // The exact span the user wants
      const spanStr = `<span style={{ width: '30px', height: '30px', minWidth: '30px', borderRadius: '50%', background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontSize: '14px' }}>↗</span>`;

      // Replace <ArrowUpRight ... /> with simple regex
      content = content.replace(/<ArrowUpRight[^>]*>/g, spanStr);
      // Replace <ArrowRight ... /> with simple regex inside buttons or links
      // Actually let's just replace all <ArrowRight> too if they are used as button icons
      content = content.replace(/<ArrowRight[^>]*>/g, spanStr);

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceInDir(srcDir);
