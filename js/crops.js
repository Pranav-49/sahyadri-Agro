// ==========================================
// CROP DATA RENDERING
// ==========================================

let cropsData = [];

// Load crops data from JSON
async function loadCropsData() {
  try {
    const response = await fetch('./assets/data/crops.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    cropsData = data.crops;
    return cropsData;
  } catch (error) {
    console.error('Error loading crops data:', error);
    return [];
  }
}

// Render crop list on crops.html
async function renderCropList() {
  const container = document.getElementById('crop-grid');
  if (!container) return;

  showLoading('crop-grid');

  const crops = await loadCropsData();

  if (crops.length === 0) {
    showError('crop-grid', t('noCropsFound'));
    return;
  }

  const lang = getCurrentLanguage();

  container.innerHTML = crops.map(crop => `
    <a href="crop-details.html?crop=${crop.id}" class="crop-card">
      <img src="${crop.image}" alt="${crop.nameMr}" onerror="this.onerror=null; this.style.display='none';">
      <div class="crop-info">
        <div class="crop-name-mr">${lang === 'marathi' ? crop.nameMr : crop.nameEn}</div>
        <div class="crop-name-en">${lang === 'marathi' ? crop.nameEn : crop.nameMr}</div>
      </div>
    </a>
  `).join('');
}

// Get crop by ID
function getCropById(id) {
  return cropsData.find(crop => crop.id === id);
}

// Render individual crop details
async function renderCropDetails() {
  const container = document.getElementById('crop-details-container');
  if (!container) return;

  showLoading('crop-details-container');

  // Get crop ID from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const cropId = urlParams.get('crop');

  if (!cropId) {
    showError('crop-details-container', 'Crop not found');
    return;
  }

  // Load crops data if not already loaded
  if (cropsData.length === 0) {
    await loadCropsData();
  }

  const crop = getCropById(cropId);

  if (!crop) {
    showError('crop-details-container', 'Crop not found');
    return;
  }

  const lang = getCurrentLanguage();
  const cropName = lang === 'marathi' ? crop.nameMr : crop.nameEn;

  // Render crop header
  container.innerHTML = `
    <div class="crop-header">
      <img src="${crop.image}" alt="${cropName}" onerror="this.onerror=null; this.style.display='none';">
      <h1>${cropName}</h1>
      <p>${lang === 'marathi' ? crop.nameEn : crop.nameMr}</p>
    </div>
    
    <!-- Info Badges -->
    <div class="info-badges">
      <span class="badge">
        <i class="fas fa-calendar"></i>
        <span data-lang="season">${t('season')}</span>: <span data-lang="${crop.season}">${t(crop.season)}</span>
      </span>
      <span class="badge">
        <i class="fas fa-clock"></i>
        <span data-lang="duration">${t('duration')}</span>: ${crop.duration} <span data-lang="days">${t('days')}</span>
      </span>
    </div>
    
    <!-- Overview Card -->
    <div class="card">
      <div class="card-title">
        <i class="fas fa-info-circle"></i>
        <span data-lang="overview">${t('overview')}</span>
      </div>
      <div class="detail-row">
        <div class="detail-icon"><i class="fas fa-mountain"></i></div>
        <div class="detail-content">
          <h4 data-lang="soilType">${t('soilType')}</h4>
          <p>${crop.soilType}</p>
        </div>
      </div>
    </div>
    
    <!-- Growth Stages -->
    <div class="card">
      <div class="card-title">
        <i class="fas fa-seedling"></i>
        <span data-lang="growthStages">${t('growthStages')}</span>
      </div>
      <div class="stage-list">
        ${crop.stages.map(stage => `
          <div class="stage-item">
            <img src="${stage.image}" alt="${t(stage.name)}" onerror="this.onerror=null; this.style.display='none';">
            <div class="stage-title" data-lang="${stage.name}">${t(stage.name)}</div>
            <div class="stage-days">${stage.days} <span data-lang="days">${t('days')}</span></div>
          </div>
        `).join('')}
      </div>
    </div>
    
    <!-- Nutrition Requirements -->
    <div class="card">
      <div class="card-title">
        <i class="fas fa-flask"></i>
        <span data-lang="nutritionRequirements">${t('nutritionRequirements')}</span>
      </div>
      <table class="nutrition-table">
        <thead>
          <tr>
            <th data-lang="nitrogen">${t('nitrogen')}</th>
            <th>${crop.nutrition.n}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-lang="phosphorus">${t('phosphorus')}</td>
            <td>${crop.nutrition.p}</td>
          </tr>
          <tr>
            <td data-lang="potassium">${t('potassium')}</td>
            <td>${crop.nutrition.k}</td>
          </tr>
          <tr>
            <td data-lang="micronutrients">${t('micronutrients')}</td>
            <td>${crop.nutrition.micro}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- Pests & Diseases -->
    <div class="card">
      <div class="card-title">
        <i class="fas fa-bug"></i>
        <span data-lang="pestsAndDiseases">${t('pestsAndDiseases')}</span>
      </div>
      <div class="pest-list">
        ${crop.pests.map(pest => `
          <div class="pest-card">
            <img src="${pest.image}" alt="${pest.name}" onerror="this.onerror=null; this.style.display='none';">
            <div class="pest-name">${lang === 'marathi' ? pest.nameMr : pest.name}</div>
            <div class="pest-info">
              <strong><span data-lang="stage">${t('stage')}</span>: <span data-lang="${pest.stage}">${t(pest.stage)}</span></strong>
              <strong data-lang="symptoms">${t('symptoms')}:</strong>
              <p>${pest.symptoms}</p>
              <strong data-lang="prevention">${t('prevention')}:</strong>
              <p>${pest.prevention}</p>
              <strong data-lang="solution">${t('solution')}:</strong>
              <p>${pest.solution}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    
    <!-- Disease Identification Images -->
    <div class="card">
      <div class="card-title">
        <i class="fas fa-image"></i>
        <span data-lang="diseaseIdentification">${lang === 'marathi' ? 'रोग ओळख' : 'Disease Identification'}</span>
      </div>
      <div class="disease-gallery">
        ${crop.pests.map(pest => `
          <div class="disease-image-card">
            <img src="./assets/images/diseases/${crop.id}/${pest.name.toLowerCase().replace(/\s+/g, '_')}.jpg" 
                 alt="${lang === 'marathi' ? pest.nameMr : pest.name}" 
                 onerror="this.parentElement.style.display='none';">
            <div class="disease-image-caption">
              <div class="disease-name">${lang === 'marathi' ? pest.nameMr : pest.name}</div>
              <div class="disease-stage"><span data-lang="${pest.stage}">${t(pest.stage)}</span></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Update page title
  document.title = `${cropName} - ${window.shopInfo?.SHOP_NAME || 'Agro Website'}`;

  // ✅ Apply language ONCE at the end
  applyLanguage();
}

// ✅ SAFE: Only apply language translation when language changes
// DO NOT re-render the entire page to avoid infinite loop
document.addEventListener('languageChanged', () => {
  // Translation is already handled by applyLanguage() in language.js
  // No need to re-render crops here
});

// Export functions
window.loadCropsData = loadCropsData;
window.renderCropList = renderCropList;
window.renderCropDetails = renderCropDetails;
window.getCropById = getCropById;
