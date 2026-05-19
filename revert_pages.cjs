const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/className="relative pt-24 pb-20 circuit-bg/g, 'className="relative pt-24 pb-20 bg-white circuit-bg');
  content = content.replace(/className="py-24"/g, 'className="py-24 bg-white"');
  
  if (file === 'About.tsx') {
    content = content.replace(/className="text-xl font-bold mb-3 tracking-tight"/g, 'className="text-xl font-bold mb-3 uppercase tracking-tight"');
  }

  fs.writeFileSync(filePath, content, 'utf8');
}
