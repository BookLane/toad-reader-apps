const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../dist/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Remove any previously added fixes to avoid duplicates
html = html.replace(/<!-- START FIXES -->[\s\S]*?<!-- END FIXES -->\n\s*/g, '');

// Add CSS fixes for UI Kitten components on web
const cssFixToAdd = `<!-- START FIXES -->
    <style>
      /* Fix for UI Kitten MeasureElement components having fixed 500px height on web */
      div[style*="height: 500px"],
      div[style*="height:500px"],
      div[style*="height: 500"] {
        height: auto !important;
      }

      /* Fix for logos/images with 500px height */
      img[style*="height: 500px"],
      img[style*="height:500px"],
      img[style*="height: 500"] {
        height: auto !important;
        max-height: 200px !important;
      }

      /* Fix for Select dropdown positioned way off screen (left: 1xxx px) */
      div[style*="flex-direction: column"][style*="align-items: flex-end"][style*="left:"] {
        left: auto !important;
        right: 0px !important;
      }
    </style>
  <!-- END FIXES -->`;

// Insert CSS before closing </head> tag
html = html.replace('</head>', cssFixToAdd + '\n  </head>');

fs.writeFileSync(indexPath, html, 'utf8');

console.log('✅ Added CSS fix to index.html');
