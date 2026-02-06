// ==========================================
// CATEGORY & ITEM MANAGEMENT
// ==========================================

let categoriesData = null;

// Load categories and items data
async function loadCategoriesData() {
    try {
        const response = await fetch('./assets/data/categories.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        categoriesData = await response.json();
        return categoriesData;
    } catch (error) {
        console.error('Error loading categories:', error);
        return null;
    }
}

// Render category cards on categories.html
async function renderCategories() {
    const container = document.getElementById('category-grid');
    if (!container) return;

    showLoading('category-grid');

    const data = await loadCategoriesData();
    if (!data || !data.categories) {
        showError('category-grid', 'errorLoading');
        return;
    }

    const lang = getCurrentLanguage();
    let html = '';

    data.categories.forEach(category => {
        const name = lang === 'marathi' ? category.nameMr : category.nameEn;
        const categoryUrl = `explore.html?category=${category.id}`;
        
        html += `
            <a href="${categoryUrl}" class="category-card" data-category="${category.id}">
                <div class="category-icon">${category.icon}</div>
                <div class="category-name">${name}</div>
                <div class="category-count">${category.count} ${lang === 'marathi' ? 'वस्तू' : 'items'}</div>
            </a>
        `;
    });

    container.innerHTML = html;
    applyLanguage(); // Apply language to any data-lang elements
}

// Render items for a specific category on explore.html
async function renderCategoryItems() {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get('category');

    if (!categoryId) {
        window.location.href = 'categories.html';
        return;
    }

    const data = await loadCategoriesData();
    if (!data) {
        showError('items-grid', 'errorLoading');
        return;
    }

    // Find category
    const category = data.categories.find(c => c.id === categoryId);
    if (!category) {
        window.location.href = 'categories.html';
        return;
    }

    // Get items for this category
    const items = data.items[categoryId] || [];
    const lang = getCurrentLanguage();

    // Update page title and headings
    const categoryName = lang === 'marathi' ? category.nameMr : category.nameEn;
    document.getElementById('page-title').textContent = `${categoryName} - सह्याद्री कृषी सेवा केंद्र`;
    document.getElementById('category-title').textContent = categoryName;
    document.getElementById('category-heading').textContent = categoryName;
    
    const descText = lang === 'marathi' 
        ? `या श्रेणीतील सर्व ${category.nameMr}` 
        : `All ${category.nameEn} in this category`;
    document.getElementById('category-description').textContent = descText;

    // Render items
    const container = document.getElementById('items-grid');
    if (!container) return;

    showLoading('items-grid');

    if (items.length === 0) {
        container.innerHTML = `
            <div class="error">
                <i class="fas fa-inbox"></i>
                <p>${lang === 'marathi' ? 'या श्रेणीत कोणत्याही वस्तू नाहीत' : 'No items in this category'}</p>
            </div>
        `;
        return;
    }

    let html = '';

    items.forEach(item => {
        const name = lang === 'marathi' ? item.nameMr : item.nameEn;
        const imagePath = item.image || `./assets/images/items/${item.id}.jpg`;

        html += `
            <div class="item-card">
                <div class="item-image">
                    <img src="${imagePath}" alt="${name}" 
                         onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%232d7a3e%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22white%22 x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2216%22%3E${encodeURIComponent(name)}%3C/text%3E%3C/svg%3E';">
                </div>
                <div class="item-name">${name}</div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Listen for language changes
document.addEventListener('languageChanged', () => {
    // Re-render appropriate content
    if (document.getElementById('category-grid')) {
        renderCategories();
    } else if (document.getElementById('items-grid')) {
        renderCategoryItems();
    }
});

// Export functions
window.renderCategories = renderCategories;
window.renderCategoryItems = renderCategoryItems;
window.loadCategoriesData = loadCategoriesData;
