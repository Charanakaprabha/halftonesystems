const fs = require('fs');
let code = fs.readFileSync('src/pages/CareersPage.jsx', 'utf8');

code = code.replace(/color: '#0f172a'/g, 'color: T.textDark');
code = code.replace(/color: '#0d9488'/g, 'color: T.primary');
code = code.replace(/color: '#111827'/g, 'color: T.textDark');
code = code.replace(/color: '#334155'/g, 'color: T.textBody');
code = code.replace(/color: '#475569'/g, 'color: T.textBody');
code = code.replace(/background: '#f8fafc'/g, 'background: T.bg');
code = code.replace(/background: '#e0f2fe'/g, 'background: T.bgAlt');
code = code.replace(/border: '1px solid #e2e8f0'/g, 'border: `1px solid ${T.border}`');
code = code.replace(/border: '1px solid #111827'/g, 'border: `1px solid ${T.border}`');

// Sizes
code = code.replace(/fontSize: '2rem'/g, "fontSize: '1.75rem'");
code = code.replace(/fontSize: '1.5rem'/g, "fontSize: '1.25rem'");
code = code.replace(/fontSize: '1.25rem'/g, "fontSize: '1.1rem'");
code = code.replace(/fontSize: '1.1rem'/g, "fontSize: '1rem'");

// Borders
code = code.replace(/borderTop: '4px solid #0d9488'/g, 'borderTop: `4px solid ${T.primary}`');
code = code.replace(/borderLeftColor: '#0d9488'/g, 'borderLeftColor: T.primary');
code = code.replace(/borderLeft: '4px solid #0d9488'/g, 'borderLeft: `4px solid ${T.primary}`');
code = code.replace(/borderTop: '6px solid #0d9488'/g, 'borderTop: `6px solid ${T.primary}`');
code = code.replace(/borderTop: '2px solid #d97706'/g, 'borderTop: `2px solid ${T.border}`');
code = code.replace(/borderRight: '1px solid #e2e8f0'/g, 'borderRight: `1px solid ${T.border}`');
code = code.replace(/borderBottom: '1px solid #e2e8f0'/g, 'borderBottom: `1px solid ${T.border}`');
code = code.replace(/borderTop: '6px solid #111827'/g, 'borderTop: `6px solid ${T.primary}`');
code = code.replace(/borderLeftWidth: '6px',/g, ''); // the previous style had border left 6px
code = code.replace(/borderLeftColor: '#0d9488',/g, 'borderTop: `6px solid ${T.primary}`,');

fs.writeFileSync('src/pages/CareersPage.jsx', code);
console.log('Update complete');
