// ==========================================
// LANGUAGE MANAGEMENT SYSTEM
// ==========================================

let currentLanguage = 'marathi'; // Default language
let translations = {};

// Initialize language system
async function initLanguage() {
  try {
    // Load translations from JSON
    const response = await fetch('./assets/data/languages.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    translations = await response.json();

    // Check localStorage for saved preference
    const saved = localStorage.getItem('language');
    if (saved && (saved === 'marathi' || saved === 'english')) {
      currentLanguage = saved;
    }

    // Apply language
    applyLanguage();
  } catch (error) {
    console.error('Error loading languages:', error);
  }
}

// Switch between Marathi and English
function switchLanguage() {
  currentLanguage = currentLanguage === 'marathi' ? 'english' : 'marathi';
  localStorage.setItem('language', currentLanguage);
  applyLanguage();

  // ✅ Dispatch event ONLY here when user explicitly switches language
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: currentLanguage } }));
}

// Apply language to all elements with data-lang attribute
function applyLanguage() {
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(el => {
    const key = el.getAttribute('data-lang');
    const text = translations[currentLanguage]?.[key];
    if (text) {
      // Check if element has children that shouldn't be replaced
      if (el.hasAttribute('data-lang-text-only')) {
        // Only replace text nodes, keep element structure
        const firstTextNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (firstTextNode) {
          firstTextNode.textContent = text;
        }
      } else {
        el.textContent = text;
      }
    }
  });

  // Update language toggle button
  const langButton = document.querySelector('.lang-toggle');
  if (langButton) {
    langButton.innerHTML = currentLanguage === 'marathi'
      ? '<i class="fas fa-language"></i> English'
      : '<i class="fas fa-language"></i> मराठी';
  }

  // 🚫 DO NOT dispatch any event here - prevents infinite loop
  // Event is dispatched ONLY from switchLanguage()
}

// Get translated text programmatically
function t(key) {
  return translations[currentLanguage]?.[key] || key;
}

// Get current language
function getCurrentLanguage() {
  return currentLanguage;
}

// Export functions for global use
window.switchLanguage = switchLanguage;
window.t = t;
window.getCurrentLanguage = getCurrentLanguage;
window.initLanguage = initLanguage;
window.applyLanguage = applyLanguage; // CRITICAL: Expose for dynamic content

