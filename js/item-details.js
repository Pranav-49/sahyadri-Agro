async function loadItemDetails() {
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get('id');

    if (!itemId) {
        window.location.href = 'categories.html';
        return;
    }

    try {
        const response = await fetch('./assets/data/items-detailed.json');
        const data = await response.json();
        const item = data.find(i => i.id == itemId);

        if (!item) {
            window.location.href = 'categories.html';
            return;
        }

        renderItemDetails(item);
    } catch (error) {
        console.error('Error loading item:', error);
    }
}

function renderItemDetails(item) {
    const lang = getCurrentLanguage();
    const name = lang === 'marathi' ? item.name_mr : item.name_en;

    document.getElementById('item-name').textContent = name;
    document.getElementById('item-title').textContent = `${name} - सह्याद्री कृषी सेवा`;

    const html = `
        <div class="item-detail-card">
            <img src="${item.main_image}" alt="${name}" class="detail-image">
            <h1>${name}</h1>
            <p class="scientific-name"><i>${item.scientific_name}</i></p>
            
            <div class="detail-section">
                <h2><i class="fas fa-cloud-sun"></i> ${lang === 'marathi' ? 'हवामान आणि माती' : 'Climate & Soil'}</h2>
                <div class="info-grid">
                    <div><strong>${lang === 'marathi' ? 'हवामान' : 'Climate'}:</strong> ${item.climate}</div>
                    <div><strong>${lang === 'marathi' ? 'तापमान' : 'Temperature'}:</strong> ${item.temperature_range}</div>
                    <div><strong>${lang === 'marathi' ? 'पाऊस' : 'Rainfall'}:</strong> ${item.rainfall_requirement}</div>
                    <div><strong>${lang === 'marathi' ? 'माती' : 'Soil'}:</strong> ${item.soil_type}</div>
                    <div><strong>pH:</strong> ${item.soil_ph}</div>
                    <div><strong>${lang === 'marathi' ? 'सूर्यप्रकाश' : 'Sunlight'}:</strong> ${item.sunlight_requirement}</div>
                </div>
            </div>

            <div class="detail-section">
                <h2><i class="fas fa-seedling"></i> ${lang === 'marathi' ? 'लागवड माहिती' : 'Cultivation'}</h2>
                <div class="info-grid">
                    <div><strong>${lang === 'marathi' ? 'पेरणी हंगाम' : 'Sowing Season'}:</strong> ${item.sowing_season}</div>
                    <div><strong>${lang === 'marathi' ? 'कापणी (दिवस)' : 'Harvest Days'}:</strong> ${item.harvest_time_days}</div>
                    <div><strong>${lang === 'marathi' ? 'अंतर' : 'Spacing'}:</strong> ${item.plant_spacing}</div>
                    <div><strong>${lang === 'marathi' ? 'बियाणे दर' : 'Seed Rate'}:</strong> ${item.seed_rate}</div>
                </div>
            </div>

            <div class="detail-section">
                <h2><i class="fas fa-tint"></i> ${lang === 'marathi' ? 'सिंचन आणि खत' : 'Irrigation & Fertilizer'}</h2>
                <p><strong>${lang === 'marathi' ? 'सिंचन' : 'Irrigation'}:</strong> ${item.irrigation_requirement}</p>
                <p><strong>${lang === 'marathi' ? 'खत' : 'Fertilizer'}:</strong> ${item.fertilizer_requirement}</p>
                <p><strong>${lang === 'marathi' ? 'सेंद्रिय खत' : 'Organic Manure'}:</strong> ${item.organic_manure}</p>
            </div>

            <div class="detail-section">
                <h2><i class="fas fa-bug"></i> ${lang === 'marathi' ? 'कीड आणि रोग' : 'Pests & Diseases'}</h2>
                <p><strong>${lang === 'marathi' ? 'कीड' : 'Pests'}:</strong> ${item.common_pests.join(', ')}</p>
                <p><strong>${lang === 'marathi' ? 'रोग' : 'Diseases'}:</strong> ${item.common_diseases.join(', ')}</p>
                <p><strong>${lang === 'marathi' ? 'प्रतिबंध' : 'Prevention'}:</strong> ${item.basic_prevention}</p>
            </div>

            <div class="detail-section">
                <h2><i class="fas fa-chart-line"></i> ${lang === 'marathi' ? 'उत्पन्न' : 'Yield & Market'}</h2>
                <p><strong>${lang === 'marathi' ? 'सरासरी उत्पादन' : 'Average Yield'}:</strong> ${item.average_yield}</p>
                <p><strong>${lang === 'marathi' ? 'बाजार उपयोग' : 'Market Use'}:</strong> ${item.market_use}</p>
                <p><strong>${lang === 'marathi' ? 'साठवण' : 'Storage'}:</strong> ${item.storage_life}</p>
            </div>
        </div>
    `;

    document.getElementById('item-details').innerHTML = html;
}

document.addEventListener('languageChanged', () => {
    loadItemDetails();
});

window.loadItemDetails = loadItemDetails;
