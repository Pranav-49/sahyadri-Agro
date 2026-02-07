// Translation mapping for data values
const valueTranslations = {
    // Climate
    'Warm': 'उष्ण',
    'Cool': 'थंड',
    'Tropical': 'उष्णकटिबंधीय',
    'Warm, humid': 'उष्ण, दमट',
    'Coastal tropical': 'किनारपट्टीचा उष्णकटिबंधीय',

    // Rainfall
    'Moderate': 'मध्यम',
    'Low': 'कमी',
    'High': 'जास्त',
    'Low to moderate': 'कमी ते मध्यम',

    // Soil
    'Loamy': 'दुमट',
    'Sandy loam': 'वालुकामय दुमट',
    'Deep loam': 'खोल दुमट',
    'Well-drained sandy': 'चांगला निचरा असलेली वालुकामय',
    'Laterite': 'लॅटेराइट',
    'Red soil': 'लाल माती',
    'Black soil': 'काळी माती',
    'Alluvial': 'जलोढ',

    // Sunlight
    'Full Sun': 'पूर्ण सूर्यप्रकाश',
    'Partial shade': 'अर्धवट सावली',

    // Season
    'Kharif': 'खरीप',
    'Rabi': 'रब्बी',
    'Summer': 'उन्हाळी',
    'Kharif, Rabi': 'खरीप, रब्बी',
    'Summer, Kharif': 'उन्हाळी, खरीप',
    'Jan–Feb, Oct': 'जाने–फेब्रु, ऑक्टो',
    'June–July': 'जून–जुलै',
    'April–May': 'एप्रिल–मे',
    'Year-round': 'वर्षभर',
    'All year': 'वर्षभर',

    // Irrigation
    'Regular': 'नियमित',
    'Regular, light': 'नियमित, हलके',
    'Frequent': 'वारंवार',
    'Frequent, light': 'वारंवार, हलके',
    'Critical stages': 'गंभीर अवस्थेत',
    'Immediate use': 'तात्काळ वापर',
    'Regular in dry season': 'कोरड्या हंगामात नियमित',
    'Drip/sprinkler': 'ठिबक/फवारणी',
    'Weekly': 'साप्ताहिक',
    'Bi-weekly': 'पंधरवडा',
    '2–3 irrigations': '२–३ सिंचन',
    '3–5 irrigations': '३–५ सिंचन',
    '1–2 irrigations': '१–२ सिंचन',

    // Fertilizer
    'NPK balanced': 'NPK संतुलित',
    'Nitrogen rich': 'नायट्रोजन समृद्ध',
    'High NPK': 'उच्च NPK',
    'High organic': 'उच्च सेंद्रीय',
    'Phosphorus rich': 'फॉस्फरस समृद्ध',
    'Balanced': 'संतुलित',
    'Low nitrogen': 'कमी नायट्रोजन',
    'Low': 'कमी',
    'Moderate NPK': 'मध्यम NPK',
    'Potassium rich': 'पोटॅशियम समृद्ध',

    // Pests
    'Fruit borer': 'फळ पोखरणारा किडा',
    'Whitefly': 'पांढरी माशी',
    'Shoot borer': 'कोंब पोखरणारा',
    'Thrips': 'थ्रिप्स',
    'Aphids': 'माशी',
    'Fruit fly': 'फळांची माशी',
    'Jassids': 'जॅसिड्स',
    'Leaf miners': 'पानांचे खाण करणारे',
    'Diamond back moth': 'डायमंड बॅक पतंग',
    'Mites': 'माइट्स',
    'Red pumpkin beetle': 'लाल भोपळा बीटल',
    'Pod fly': 'शेंगांची माशी',
    'Pod borer': 'शेंगा पोखरणारा',
    'Pyrilla': 'पायरिला',
    'Borer': 'पोखरणारा',
    'Stem borer': 'खोड पोखरणारा',
    'Shoot fly': 'अंकुर माशी',
    'Rhinoceros beetle': 'गेंडा बीटल',
    'Red palm weevil': 'लाल ताड गांडूळ',
    'Scale insects': 'स्केल किटक',
    'Caterpillar': 'अळी',
    'Mealy bugs': 'मीली बग्ज',
    'Leaf hopper': 'लीफ हॉपर',
    'Termites': 'दीमक',

    // Diseases
    'Leaf curl': 'पाने कुरळे होणे',
    'Blight': 'अंगमारी',
    'Wilt': 'कोमजणे',
    'Die back': 'मरते परत',
    'Leaf spot': 'पानांवर डाग',
    'Yellow vein mosaic': 'पिवळी शिरा मोझॅइक',
    'Downy mildew': 'बुरशी',
    'Stem gall': 'खोडाचा गाठ',
    'Black rot': 'काळा सडणे',
    'Root rot': 'मुळे सडणे',
    'Leaf blight': 'पान अंगमारी',
    'Purple blotch': 'जांभळे डाग',
    'Soft rot': 'मऊ सडणे',
    'Red rot': 'लाल सडणे',
    'Smut': 'काजळी',
    'Rust': 'गंज',
    'Grain mold': 'दाण्यावर बुरशी',
    'Tikka disease': 'टिक्का रोग',
    'Yellow mosaic': 'पिवळा मोझॅइक',
    'Bud rot': 'कळी सडणे',
    'Anthracnose': 'अँथ्रॅक्नोज',
    'Powdery mildew': 'पांढरी बुरशी',
    'Fruit rot': 'फळ सडणे',
    'Stem bleeding': 'खोडातून रक्तस्राव',
    'Damping off': 'बुरशी पडणे',

    // Prevention
    'Crop rotation and neem spray': 'पीक आवर्तन आणि कडुलिंबाची फवारणी',
    'Remove affected plants': 'प्रभावित झाडे काढून टाका',
    'Use resistant varieties': 'प्रतिरोधक जाती वापरा',
    'Proper drainage': 'योग्य निचरा',
    'Use virus-free seeds': 'विषाणुमुक्त बियाणे वापरा',
    'Crop rotation': 'पीक आवर्तन',
    'Disease-free seeds': 'रोगमुक्त बियाणे',
    'Resistant varieties': 'प्रतिरोधक जाती',
    'Drip irrigation': 'ठिबक सिंचन',
    'Avoid waterlogging': 'पाणी साठणे टाळा',
    'Deep ploughing': 'खोल नांगरणी',
    'Disease-free cloves': 'रोगमुक्त पाकळ्या',
    'Healthy rhizomes': 'निरोगी राईझोम्स',
    'Well-drained soil': 'चांगला निचरा असलेली माती',
    'Neem spray': 'कडुलिंबाची फवारणी',
    'Healthy setts': 'निरोगी सेट्स',
    'Seed treatment': 'बियाणे उपचार',
    'Sanitation': 'स्वच्छता',
    'Mulching': 'पालापाचोळा',
    'Integrated pest management': 'एकात्मिक कीड व्यवस्थापन',
    'Regular inspection': 'नियमित तपासणी',

    // Market use
    'Vegetable, processing': 'भाजीपाला, प्रक्रिया',
    'Vegetable': 'भाजीपाला',
    'Spice, fresh': 'मसाला, ताजे',
    'Herb, spice': 'औषधी वनस्पती, मसाला',
    'Salad, vegetable': 'कोशिंबीर, भाजीपाला',
    'Spice': 'मसाला',
    'Vegetable, salad': 'भाजीपाला, कोशिंबीर',
    'Sugar, jaggery': 'साखर, गूळ',
    'Food, feed': 'अन्न, चारा',
    'Flour': 'पीठ',
    'Food, fodder': 'अन्न, चारा',
    'Vegetable, spice': 'भाजीपाला, मसाला',
    'Oil, food': 'तेल, अन्न',
    'Pulse': 'डाळ',
    'Fresh': 'ताजे',
    'Decorative': 'सजावटीचे',
    'Religious use': 'धार्मिक वापर',
    'Oil': 'तेल',
    'Essential oils': 'आवश्यक तेले',
    'Cut flowers': 'कापलेली फुले',
    'Medicinal': 'औषधी',
    'Juice': 'रस',
    'Dried fruit': 'सुके फळ',
    'Wine': 'वाईन',
    'Fruit, oil, water': 'फळ, तेल, पाणी',
    'Processing': 'प्रक्रिया',
    'Export': 'निर्यात',
    'Fresh consumption': 'ताजे सेवन',
    'Tender coconut': 'कोवळा नारळ',
    'Copra': 'खोबरे'
};

// Function to translate a value
function translateValue(value) {
    const lang = getCurrentLanguage();
    if (lang === 'marathi' && valueTranslations[value]) {
        return valueTranslations[value];
    }
    return value;
}

// Function to translate array values
function translateArray(arr) {
    return arr.map(item => translateValue(item));
}

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
                    <div><strong>${lang === 'marathi' ? 'हवामान' : 'Climate'}:</strong> ${translateValue(item.climate)}</div>
                    <div><strong>${lang === 'marathi' ? 'तापमान' : 'Temperature'}:</strong> ${item.temperature_range}</div>
                    <div><strong>${lang === 'marathi' ? 'पाऊस' : 'Rainfall'}:</strong> ${translateValue(item.rainfall_requirement)}</div>
                    <div><strong>${lang === 'marathi' ? 'माती' : 'Soil'}:</strong> ${translateValue(item.soil_type)}</div>
                    <div><strong>pH:</strong> ${item.soil_ph}</div>
                    <div><strong>${lang === 'marathi' ? 'सूर्यप्रकाश' : 'Sunlight'}:</strong> ${translateValue(item.sunlight_requirement)}</div>
                </div>
            </div>

            <div class="detail-section">
                <h2><i class="fas fa-seedling"></i> ${lang === 'marathi' ? 'लागवड माहिती' : 'Cultivation'}</h2>
                <div class="info-grid">
                    <div><strong>${lang === 'marathi' ? 'पेरणी हंगाम' : 'Sowing Season'}:</strong> ${translateValue(item.sowing_season)}</div>
                    <div><strong>${lang === 'marathi' ? 'कापणी (दिवस)' : 'Harvest Days'}:</strong> ${item.harvest_time_days}</div>
                    <div><strong>${lang === 'marathi' ? 'अंतर' : 'Spacing'}:</strong> ${item.plant_spacing}</div>
                    <div><strong>${lang === 'marathi' ? 'बियाणे दर' : 'Seed Rate'}:</strong> ${item.seed_rate}</div>
                </div>
            </div>

            <div class="detail-section">
                <h2><i class="fas fa-tint"></i> ${lang === 'marathi' ? 'सिंचन आणि खत' : 'Irrigation & Fertilizer'}</h2>
                <p><strong>${lang === 'marathi' ? 'सिंचन' : 'Irrigation'}:</strong> ${translateValue(item.irrigation_requirement)}</p>
                <p><strong>${lang === 'marathi' ? 'खत' : 'Fertilizer'}:</strong> ${translateValue(item.fertilizer_requirement)}</p>
                <p><strong>${lang === 'marathi' ? 'सेंद्रिय खत' : 'Organic Manure'}:</strong> ${item.organic_manure}</p>
            </div>

            <div class="detail-section">
                <h2><i class="fas fa-bug"></i> ${lang === 'marathi' ? 'कीड आणि रोग' : 'Pests & Diseases'}</h2>
                <p><strong>${lang === 'marathi' ? 'कीड' : 'Pests'}:</strong> ${translateArray(item.common_pests).join(', ')}</p>
                <p><strong>${lang === 'marathi' ? 'रोग' : 'Diseases'}:</strong> ${translateArray(item.common_diseases).join(', ')}</p>
                <p><strong>${lang === 'marathi' ? 'प्रतिबंध' : 'Prevention'}:</strong> ${translateValue(item.basic_prevention)}</p>
            </div>

            <div class="detail-section">
                <h2><i class="fas fa-chart-line"></i> ${lang === 'marathi' ? 'उत्पन्न' : 'Yield & Market'}</h2>
                <p><strong>${lang === 'marathi' ? 'सरासरी उत्पादन' : 'Average Yield'}:</strong> ${item.average_yield}</p>
                <p><strong>${lang === 'marathi' ? 'बाजार उपयोग' : 'Market Use'}:</strong> ${translateValue(item.market_use)}</p>
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
