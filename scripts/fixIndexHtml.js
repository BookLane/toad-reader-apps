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

      /* Fix for Select dropdown - very aggressive targeting */
      div[tabindex="0"][class*="r-1i6wzk"][class*="r-1rvib"][class*="r-1loqt21"] {
        position: fixed !important;
        left: 50% !important;
        top: 50% !important;
        transform: translate(-50%, -20%) !important;
        max-width: 400px !important;
        width: auto !important;
        z-index: 10000 !important;
      }

      /* Fallback for any dropdown with these exact inline styles */
      div[style*="left: 0px"][style*="top: 90px"][style*="flex-direction: column"][style*="align-items: center"] {
        left: 50% !important;
        top: 50% !important;
        transform: translate(-50%, -20%) !important;
        margin-top: 50px !important;
      }
    </style>
  <!-- END FIXES -->`;

// Insert CSS before closing </head> tag
html = html.replace('</head>', cssFixToAdd + '\n  </head>');

fs.writeFileSync(indexPath, html, 'utf8');

console.log('✅ Added CSS fix to index.html');
