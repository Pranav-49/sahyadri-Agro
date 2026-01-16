# Agricultural Information Website

A mobile-first, static website for **Shivraj Krushi Seva Kendra** - An Agricultural Fertilizer, Insecticide & Pesticide business serving farmers in Western Maharashtra.

## 🌾 Overview

This website provides comprehensive agricultural information to farmers in Western Maharashtra (Solapur, Satara, Pune, Latur regions) in their native **Marathi language** with English toggle support.

### Key Features

- ✅ **Mobile-First Design** - Optimized for smartphones (max 420px width)
- ✅ **Bilingual Support** - Marathi (default) + English with localStorage persistence
- ✅ **25+ Crops Database** - Complete information for Western Maharashtra crops
- ✅ **Growth Stages** - Visual guide for each crop's growing phases
- ✅ **Nutrition Requirements** - NPK and micronutrient details
- ✅ **Pest & Disease Management** - Stage-wise pest identification and solutions
- ✅ **Static & Fast** - No backend, works perfectly on GitHub Pages
- ✅ **Click-to-Call & WhatsApp** - Direct farmer contact options

## 📂 Project Structure

```
/agro-website
├── index.html                 # Homepage with shop info
├── crops.html                 # Crop listing page
├── crop-details.html          # Individual crop details
├── README.md                  # This file
│
├── /assets
│   ├── info.txt               # Shop information (editable)
│   ├── /images
│   │   ├── /shop              # Shop photos (3 images)
│   │   ├── /crops             # Crop images (25 folders)
│   │   └── /pests             # Pest/disease images
│   └── /data
│       ├── crops.json         # All crop data
│       └── languages.json     # Marathi + English UI text
│
├── /css
│   └── style.css              # Mobile-first styles
│
└── /js
    ├── app.js                 # Common logic
    ├── crops.js               # Crop rendering
    └── language.js            # Language toggle
```

## 🚀 Quick Start

### Local Testing

1. **Open in browser directly**, or
2. **Use a local server**:
   ```bash
   npx http-server ./ -p 8080
   # Visit: http://localhost:8080
   ```

### GitHub Pages Deployment

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Agricultural website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/agro-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Source: Deploy from **main** branch
   - Root directory: **/ (root)**
   - Click **Save**

3. **Access Your Site**
   - URL: `https://YOUR_USERNAME.github.io/agro-website/`
   - Wait 2-3 minutes for first deployment

## ✏️ Customization Guide

### Update Shop Information

Edit `assets/info.txt`:

```
SHOP_NAME=Your Shop Name (Marathi)
SHOP_NAME_EN=Your Shop Name (English)
PHONE=+919876543210
WHATSAPP=9876543210
ADDRESS=Your Address (Marathi)
ADDRESS_EN=Your Address (English)
...
```

### Add/Edit Crops

Edit `assets/data/crops.json`:

```json
{
  "crops": [
    {
      "id": "cropname",
      "nameEn": "Crop Name",
      "nameMr": "पीक नाव",
      "season": "kharif/rabi/summer",
      "duration": "90-120",
      "soilType": "मातीचा प्रकार",
      "image": "assets/images/crops/cropname/main.jpg",
      "stages": [...],
      "nutrition": {...},
      "pests": [...]
    }
  ]
}
```

### Replace Placeholder Images

1. **Shop Photos**: Replace images in `assets/images/shop/`
   - shop1.jpg, shop2.jpg, shop3.jpg

2. **Crop Images**: For each crop folder in `assets/images/crops/[cropname]/`
   - main.jpg (main crop image)
   - stage1.jpg to stage4.jpg (growth stages)

3. **Pest Images**: Add to `assets/images/pests/`

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (Mobile & Desktop)
- ✅ Safari (iOS & macOS)
- ✅ Firefox
- ✅ Samsung Internet
- ✅ UC Browser

## 📱 Mobile-First Design

- **Max Width**: 420px (centered on larger screens)
- **Touch Targets**: Minimum 44px for all buttons
- **Font Sizes**: Large, readable text (16-28px)
- **Sticky Elements**: Header and footer for easy navigation
- **Optimized Images**: Lazy loading via browser defaults

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Mobile-first responsive design
- **Vanilla JavaScript** - No framework dependencies
- **Google Fonts** - Noto Sans Devanagari (Marathi)
- **Font Awesome 6** - Icons (CDN)
- **Swiper.js** - Image slider (CDN)

## 📊 Included Crops (25 Total)

| English | Marathi | Season |
|---------|---------|--------|
| Sorghum (Jowar) | ज्वारी | Kharif |
| Pearl Millet (Bajra) | बाजरी | Kharif |
| Sugarcane | ऊस | Rabi |
| Pomegranate | डाळिंब | Summer |
| Wheat | गहू | Rabi |
| Chickpea | हरभरा | Rabi |
| Pigeon Pea (Tur) | तूर | Kharif |
| Grapes | द्राक्षे | Summer |
| Soybean | सोयाबीन | Kharif |
| Maize | मका | Kharif |
| Onion | कांदा | Rabi |
| Safflower | करडई | Rabi |
| Groundnut | भुईमूग | Kharif |
| Banana | केळी | Summer |
| Green Gram (Moong) | मूग | Kharif |
| Black Gram (Udid) | उडीद | Kharif |
| Cotton | कापूस | Kharif |
| Tomato | टोमॅटो | Rabi |
| Chilli | मिरची | Kharif |
| Brinjal | वांगी | Kharif |
| Lemon | लिंबू | Summer |
| Custard Apple | सीताफळ | Summer |
| Ber | बोर | Rabi |
| Sunflower | सूर्यफूल | Rabi |
| Moth Bean | मटकी | Kharif |

## 🤝 Support

For farmers needing assistance:
- 📞 **Call**: [Shop Phone from info.txt]
- 💬 **WhatsApp**: Click button on homepage
- 🏪 **Visit**: [Shop Address from info.txt]

## 📄 License

This project is created for educational and agricultural awareness purposes for farmers in Western Maharashtra.

---

**Built with ❤️ for farmers of Maharashtra**

*शेतकऱ्यांसाठी, शेतकऱ्यांद्वारे*
