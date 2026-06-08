const fs = require('fs');
const path = require('path');

const pages = [
  { src: 'src/pages/Work.tsx', dest: 'src/app/work/page.tsx' },
  { src: 'src/pages/Blog.tsx', dest: 'src/app/blog/page.tsx' },
  { src: 'src/pages/BlogDetail.tsx', dest: 'src/app/blog/[slug]/page.tsx' },
  { src: 'src/pages/Contact.tsx', dest: 'src/app/contact/page.tsx' },
];

pages.forEach(({ src, dest }) => {
  let content = fs.readFileSync(src, 'utf8');

  // Add "use client" at top
  content = '"use client";\n' + content;

  // Replace react-router-dom imports
  content = content
    .replace(/import \{[^}]*\} from "react-router-dom";\r?\n/g, (match) => {
      const imports = match.match(/\{([^}]*)\}/)[1].split(',').map(s => s.trim());
      let result = '';
      
      const hasNavLink = imports.includes('NavLink');
      const hasUseParams = imports.includes('useParams');
      const hasUseSearchParams = imports.includes('useSearchParams');
      const hasUseLocation = imports.includes('useLocation');
      
      if (hasNavLink) {
        result += 'import Link from "next/link";\n';
      }
      
      const navImports = [];
      if (hasUseParams) navImports.push('useParams');
      if (hasUseSearchParams) navImports.push('useSearchParams');
      if (hasUseLocation) navImports.push('usePathname');
      
      if (navImports.length > 0) {
        result += `import { ${navImports.join(', ')} } from "next/navigation";\n`;
      }
      
      return result;
    });

  // Replace JSX
  content = content
    .replace(/<NavLink /g, '<Link ')
    .replace(/<\/NavLink>/g, '</Link>')
    .replace(/ to=/g, ' href=')
    .replace(/ to\{/g, ' href{');

  // Fix component import paths (from src/pages/ depth to src/app/xxx/ depth)
  // For top-level pages like work, blog, contact: ../components → ../../components
  // For nested pages like blog/[slug]: ../components → ../../../components
  const depth = dest.split('/').length - 2; // subtract src/app
  if (depth === 2) {
    // e.g., src/app/work/page.tsx
    content = content.replace(/from "\.\.\/components\//g, 'from "../../components/');
  } else if (depth === 3) {
    // e.g., src/app/blog/[slug]/page.tsx
    content = content.replace(/from "\.\.\/components\//g, 'from "../../../components/');
  }

  // Create directory
  const dir = path.dirname(dest);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(dest, content);
  console.log(`Converted: ${src} -> ${dest}`);
});

console.log('All pages converted!');
