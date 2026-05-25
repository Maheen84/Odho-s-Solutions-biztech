const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // Replacing <ArrowUpRight /> and <ArrowRight />
      const spanStr = `<span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#333", fontSize: "14px", flexShrink: 0 }}>↗</span>`;
      
      content = content.replace(/<ArrowUpRight\s*(?:size=\{[^\}]+\})?\s*(?:className=[\"\{\}A-Za-z0-9_\-\s]+)?\s*\/?>(?:<\/ArrowUpRight>)?/g, spanStr);
      content = content.replace(/<ArrowRight\s*(?:size=\{[^\}]+\})?\s*(?:className=[\"\{\}A-Za-z0-9_\-\s]+)?\s*\/?>(?:<\/ArrowRight>)?/g, spanStr);

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceInDir(srcDir);
