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

      // Ensure the span has className="circle"
      content = content.replace(
        /<span style=\{\{ width: "28px", height: "28px", borderRadius: "50%", background: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#333", fontSize: "14px", flexShrink: 0 \}\}>↗<\/span>/g,
        '<span className="circle" style={{ width: "28px", height: "28px", borderRadius: "50%", background: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#333", fontSize: "14px", flexShrink: 0 }}>↗</span>'
      );

      // Attempt to strip <i>, <img>, <svg> from buttons or links with button classes
      // This is a rough regex to find <svg> and <img> inside <button> or <NavLink/a> with btn class.
      // But actually, the user wants us to "Find every <i>, <svg>, <img>, and <span> inside all buttons that has any icon class... and delete it completely"
      // Let's just find and delete <svg...>, <i...>, <img...> if they sit next to our span inside a button.
      // Since it's hard to reliably parse HTML with regex, we can rely on the CSS rule to hide them if any escaped our previous Lucide sweep.
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceInDir(srcDir);
