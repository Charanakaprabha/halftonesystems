const fs = require('fs');
let code = fs.readFileSync('src/pages/CareersPage.jsx', 'utf8');

// 1. Fix Hero padding so it's not hidden behind navbar
code = code.replace(/padding: '100px 24px 60px'/, "padding: '180px 24px 60px'");

// 2. Change all 'maxWidth: '1000px'' to '1200px' to match Open Positions Layout width
code = code.replace(/maxWidth: '1000px'/g, "maxWidth: '1200px'");

// 3. Match Section Header fonts exactly
code = code.replace(/fontSize: 'clamp\(2rem, 4vw, 2.5rem\)'/g, "fontSize: 'clamp(1.5rem, 4vw, 2.8rem)'");
code = code.replace(/paddingBottom: '80px', paddingTop: '60px'/g, "paddingBottom: '100px', paddingTop: '80px'");

// 4. Inject `.hts-card` into all standard grid blocks in Culture/HTS sections.
// These blocks generally start with style={{ background: T.bg, border: `1px solid ${T.border}`
// We'll just replace that substring with className="hts-card" style={{ ...
code = code.replace(/<div style=\{\{\s*background: T\.bg,\s*border: `1px solid \$\{T\.border\}`/g, 
    '<div className="hts-card" style={{ background: T.bg, border: `1px solid ${T.border}`');

// 5. Inject `.hts-card` CSS dynamically at the bottom if it doesn't exist
if (!code.includes('.hts-card {')) {
    code = code.replace(/<\/style>/, `
                .hts-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .hts-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 16px 24px -10px rgba(0, 0, 0, 0.15), 0 8px 16px -8px rgba(0, 0, 0, 0.1);
                    border-color: #2563EB !important;
                }
            </style>`);
}

fs.writeFileSync('src/pages/CareersPage.jsx', code);
console.log('Update for cards, paddings, fonts completed');
