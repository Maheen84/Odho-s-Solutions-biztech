const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('src/pages/ServiceDetail.tsx', 'utf8');

// Add "use client" and replace imports
content = '"use client";\n' + content
  .replace(/import \{ useParams, NavLink \} from "react-router-dom";/, 
    'import { useParams } from "next/navigation";\nimport Link from "next/link";')
  .replace(/<NavLink /g, '<Link ')
  .replace(/<\/NavLink>/g, '</Link>')
  .replace(/ to=/g, ' href=')
  .replace(/from "\.\.\/components\//g, 'from "../../../components/');

const dir = path.join('src', 'app', 'services', '[slug]');
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'page.tsx'), content);
console.log('ServiceDetail converted successfully');
