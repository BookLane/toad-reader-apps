// Fix UI Kitten popover positioning on web
(function() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { // Element node
          fixPositioning(node);
          // Also check children
          node.querySelectorAll && node.querySelectorAll('div').forEach(fixPositioning);
        }
      });
    });
  });

  function fixPositioning(element) {
    const style = element.getAttribute('style');
    if (style && (style.includes('-999px') || style.includes('left: -999') || style.includes('top: -999'))) {
      const hasFlexEnd = style.includes('flex-end');

      if (hasFlexEnd) {
        // Menu de tri en haut à droite
        element.style.left = 'auto';
        element.style.right = '0';
        element.style.top = '60px';
        element.style.position = 'fixed';
      } else {
        // Autocomplete en dessous - copier la largeur du parent
        const parent = element.parentElement;
        if (parent) {
          const parentWidth = parent.offsetWidth || parent.clientWidth;
          element.style.width = parentWidth + 'px';

          // S'assurer que le parent a position: relative pour que absolute fonctionne
          const parentPosition = window.getComputedStyle(parent).position;
          if (parentPosition === 'static') {
            parent.style.position = 'relative';
          }
        }
        element.style.left = '0';
        element.style.top = '100%';
        element.style.position = 'absolute';
        element.style.zIndex = '1000';
      }
    }
  }

  // Fix existing elements
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('div').forEach(fixPositioning);
  });

  // Watch for new elements
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Also fix on every animation frame for dynamically positioned elements
  setInterval(() => {
    document.querySelectorAll('div[style*="-999px"]').forEach(fixPositioning);
  }, 100);
})();
