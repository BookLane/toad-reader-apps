const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../dist/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Remove any previously added fixes to avoid duplicates
html = html.replace(/<!-- START FIXES -->[\s\S]*?<!-- END FIXES -->\n\s*/g, '');

// Add only CSS fix for height
const cssFixToAdd = `<!-- START FIXES -->
    <style>
      /* Fix for UI Kitten MeasureElement components having fixed 500px height on web */
      div[style*="height: 500px"],
      div[style*="height:500px"] {
        height: auto !important;
      }
    </style>
  <!-- END FIXES -->`;

// Insert CSS before closing </head> tag
html = html.replace('</head>', cssFixToAdd + '\n  </head>');

fs.writeFileSync(indexPath, html, 'utf8');

console.log('✅ Added CSS fix to index.html');
