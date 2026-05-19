const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf-8');

// Replace hardcoded colors with CSS variables
const replacements = [
  ['#E8345A', 'var(--color-pink)'],
  ['#4A2C6E', 'var(--color-purple)'],
  ['#1a1a2e', 'var(--color-navy)'],
  ['#111111', 'var(--color-text-dark)'],
  ['#111', 'var(--color-text-dark)'],
  ['#444444', 'var(--color-text-mid)'],
  ['#444', 'var(--color-text-mid)'],
  ['#999999', 'var(--color-text-muted)'],
  ['#999', 'var(--color-text-muted)'],
  ['#eeeeee', 'var(--color-border)'],
  ['#eee', 'var(--color-border)'],
  ['#ffffff', 'var(--color-white)'],
];

for (const [hex, variable] of replacements) {
  css = css.replace(new RegExp(hex, 'gi'), variable);
}

// Remove the old @layer base body block
css = css.replace(/@layer base \{[\s\S]*?\n\}/, '');

// Ensure the new CSS blocks are at the top, just under @import "tailwindcss"
const newStyles = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

:root {
  /* ── FONTS ── */
  --font-main: 'Poppins', sans-serif;

  /* ── PRIMARY COLORS ── */
  --color-purple:       #4A2C6E;   /* dark purple — sections, cards */
  --color-purple-light: #7B4BAE;   /* medium purple — hover states */
  --color-pink:         #E8345A;   /* coral pink — CTAs, accents, active */
  --color-navy:         #1a1a2e;   /* dark navy — buttons, navbar */

  /* ── NEUTRAL COLORS ── */
  --color-white:        #ffffff;
  --color-bg:           #f5f5f5;   /* light gray page background */
  --color-text-dark:    #111111;   /* headings */
  --color-text-mid:     #444444;   /* body text */
  --color-text-muted:   #999999;   /* labels, captions */
  --color-border:       #eeeeee;   /* dividers, borders */

  /* ── TYPOGRAPHY SCALE ── */
  --text-xs:    12px;
  --text-sm:    13px;
  --text-base:  15px;
  --text-lg:    18px;
  --text-xl:    22px;
  --text-2xl:   28px;
  --text-3xl:   36px;
  --text-hero:  42px;

  /* ── SPACING ── */
  --section-padding: 60px 80px;
  --card-radius:     16px;
  --btn-radius:      50px;
}

/* ── GLOBAL RESETS ── */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-main);
  font-size: var(--text-base);
  color: var(--color-text-mid);
  background: var(--color-white);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* ── HEADINGS ── */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-main);
  color: var(--color-text-dark);
  line-height: 1.2;
  font-weight: 700;
  text-transform: none; /* NO uppercase globally */
}

/* ── BUTTONS — global reusable classes ── */
.btn-primary {
  background: var(--color-pink);
  color: var(--color-white);
  border: none;
  border-radius: var(--btn-radius);
  padding: 12px 26px;
  font-size: var(--text-sm);
  font-weight: 600;
  font-family: var(--font-main);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s ease, transform 0.2s ease;
}
.btn-primary:hover {
  background: #c9284c;
  transform: scale(1.03);
}

.btn-dark {
  background: var(--color-navy);
  color: var(--color-white);
  border: none;
  border-radius: var(--btn-radius);
  padding: 12px 26px;
  font-size: var(--text-sm);
  font-weight: 600;
  font-family: var(--font-main);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s ease;
}
.btn-dark:hover { background: #2e2e50; }

.btn-outline {
  background: transparent;
  color: var(--color-text-dark);
  border: 1.5px solid var(--color-border);
  border-radius: var(--btn-radius);
  padding: 12px 26px;
  font-size: var(--text-sm);
  font-weight: 600;
  font-family: var(--font-main);
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-outline:hover {
  border-color: var(--color-pink);
  color: var(--color-pink);
}

/* ── SECTION LABELS ── */
.section-label {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 8px;
  display: block;
}

/* ── LINKS ── */
a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}
a:hover { color: var(--color-pink); }

/* ── SECTION SPACING ── */
section {
  padding: var(--section-padding);
}
`;

css = css.replace('@import "tailwindcss";', '@import "tailwindcss";\n\n' + newStyles);

fs.writeFileSync('src/index.css', css);
