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

      // Remove ArrowUpRight and ArrowRight from lucide-react imports
      // Examples: 
      // import { ArrowUpRight, Check, Monitor } from "lucide-react";
      // import { Check, ArrowRight } from "lucide-react";
      
      content = content.replace(/,\s*ArrowUpRight/g, '');
      content = content.replace(/ArrowUpRight\s*,\s*/g, '');
      content = content.replace(/\{\s*ArrowUpRight\s*\}/g, '{}');
      
      content = content.replace(/,\s*ArrowRight/g, '');
      content = content.replace(/ArrowRight\s*,\s*/g, '');
      content = content.replace(/\{\s*ArrowRight\s*\}/g, '{}');
      
      // Clean up empty imports
      content = content.replace(/import\s*\{\s*\}\s*from\s*["']lucide-react["'];?\n?/g, '');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceInDir(srcDir);
