// ==========================================
// COMMON APP LOGIC
// ==========================================

// Parse info.txt file
async function loadShopInfo() {
    try {
        const response = await fetch('./assets/info.txt');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();

        const info = {};
        text.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split('=');
            if (key && valueParts.length > 0) {
                info[key.trim()] = valueParts.join('=').trim();
            }
        });

        return info;
    } catch (error) {
        console.error('Error loading shop info:', error);
        return null;
    }
}

// Populate shop information on homepage
async function populateShopInfo() {
    const info = await loadShopInfo();
    if (!info) return;

    const lang = getCurrentLanguage();
    const suffix = lang === 'english' ? '_EN' : '';

    // Update shop name in header
    const shopNameEl = document.querySelector('.shop-name');
    if (shopNameEl && !shopNameEl.hasAttribute('data-lang')) {
        shopNameEl.textContent = info[`SHOP_NAME${suffix}`] || info.SHOP_NAME;
    }

    // Update shop details
    const updates = {
        'shop-tagline': info[`TAGLINE${suffix}`] || info.TAGLINE,
        'shop-owner': info[`OWNER_NAME${suffix}`] || info.OWNER_NAME,
        'shop-qualification': info[`QUALIFICATION${suffix}`] || info.QUALIFICATION,
        'shop-phone': info.PHONE,
        'shop-hours': info[`WORKING_HOURS${suffix}`] || info.WORKING_HOURS,
        'shop-services': info[`SERVICES${suffix}`] || info.SERVICES
    };

    Object.entries(updates).forEach(([className, value]) => {
        const el = document.querySelector(`.${className}`);
        if (el && value) {
            // For address, update innerHTML to preserve line breaks
            if (className === 'shop-address') {
                const address = info[`ADDRESS${suffix}`] || info.ADDRESS;
                el.innerHTML = address.replace(/\n/g, '<br>');
            } else {
                el.textContent = value;
            }
        }
    });

    // Handle address separately with better formatting
    const addressEl = document.querySelector('.shop-address');
    if (addressEl) {
        const address = info[`ADDRESS${suffix}`] || info.ADDRESS;
        // Replace literal \n or actual newlines with <br>
        addressEl.innerHTML = address.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
    }

    // Store info globally for phone and WhatsApp handlers
    window.shopInfo = info;
}

// Initialize Swiper slider
function initSlider() {
    if (typeof Swiper !== 'undefined' && document.querySelector('.swiper')) {
        new Swiper('.swiper', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
}

// Click-to-call handler
function makeCall() {
    if (window.shopInfo && window.shopInfo.PHONE) {
        window.location.href = `tel:${window.shopInfo.PHONE}`;
    }
}

// WhatsApp handler
function openWhatsApp() {
    if (window.shopInfo && window.shopInfo.WHATSAPP) {
        const phone = window.shopInfo.WHATSAPP.replace(/[^0-9]/g, '');
        const message = getCurrentLanguage() === 'marathi'
            ? 'नमस्कार! मला कृषी माहिती हवी आहे.'
            : 'Hello! I need agriculture information.';
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    }
}

// Show loading state
function showLoading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> <span data-lang="loading">लोड होत आहे...</span></div>';
        // ✅ NO applyLanguage() call - prevents infinite loop
    }
}

// Show error message
function showError(containerId, message) {
    const container = document.getElementById(containerId);
    if (container) {
        if (message) {
            // If message is provided, use it directly (might be a translation key)
            container.innerHTML = `<div class="error"><i class="fas fa-exclamation-triangle"></i> <span data-lang="${message}">${t(message)}</span></div>`;
        } else {
            container.innerHTML = '<div class="error"><i class="fas fa-exclamation-triangle"></i> <span data-lang="error">त्रुटी</span></div>';
        }
        // ✅ NO applyLanguage() call - prevents infinite loop
    }
}

// Utility: Format date
function formatDate(date) {
    const d = new Date(date);
    const lang = getCurrentLanguage();
    return d.toLocaleDateString(lang === 'marathi' ? 'mr-IN' : 'en-IN');
}

// Utility: Get season badge color
function getSeasonColor(season) {
    const colors = {
        'kharif': '#4caf50',
        'rabi': '#ff9800',
        'summer': '#f44336'
    };
    return colors[season] || '#757575';
}

// Listen for language changes and refresh shop info
document.addEventListener('languageChanged', () => {
    if (typeof populateShopInfo === 'function') {
        populateShopInfo();
    }
});

// Export functions
window.loadShopInfo = loadShopInfo;
window.populateShopInfo = populateShopInfo;
window.initSlider = initSlider;
window.makeCall = makeCall;
window.openWhatsApp = openWhatsApp;
window.showLoading = showLoading;
window.showError = showError;
window.formatDate = formatDate;
window.getSeasonColor = getSeasonColor;
