# 🌾 Sahyadri Agriculture Business Website

> **"प्रत्येक शेतकऱ्याच्या शिवारात, सह्याद्रीचा विश्वास...!!"**
>
> **"Trust of Sahyadri in every farmer's field…!!"**

A modern, mobile-first agriculture business website built for Sahyadri Krushi Seva Kendra. Features category-based crop exploration, bilingual content (Marathi + English), and full GitHub Pages compatibility.

## ✨ Features

### 🎯 Core Functionality
- **Category-Based Navigation**: Browse by Vegetables, Crops, Flowers, and Fruits
- **Bilingual Support**: Seamless switching between Marathi and English
- **56 Agricultural Items**: Comprehensive coverage across 4 categories
- **Mobile-First Design**: Optimized for 420px width, responsive on all devices
- **GitHub Pages Ready**: Pure HTML/CSS/JavaScript, no backend required

### 📱 User Experience
- Clean, farmer-friendly UI with earth tones and green accents
- Smooth animations and transitions
- Touch-optimized buttons (44px minimum)
- Image fallback system - works without all images
- Fast loading and offline-capable

### 🎨 Design Highlights
- Premium gradient category cards with icons
- Bilingual tagline display (Marathi first, English below)
- Swipeable shop image slider
- Click-to-call and WhatsApp integration
- Google Maps integration

## 📂 Project Structure

```
agro-website/
├── index.html              # Homepage with shop info
├── categories.html         # Category selection page
├── explore.html           # Items within a category
├── crop-details.html      # Legacy crop details (preserved)
├── crops.html             # Legacy crop list (preserved)
│
├── assets/
│   ├── data/
│   │   ├── categories.json    # ✨ NEW: Category & item data
│   │   ├── crops.json         #Legacy crop data
│   │   └── languages.json     # Bilingual translations
│   │
│   └── images/
│       ├── categories/        # ✨ NEW: 4 category images
│       ├── items/             # ✨ NEW: 56 item images
│       ├── crops/             # Legacy crop images
│       ├── shop/              # Shop photos
│       └── logo.png           # Shop logo
│
├── css/
│   └── style.css          # Complete styling with category cards
│
├── js/
│   ├── categories.js      # ✨ NEW: Category & item rendering
│   ├── crops.js           # Legacy crop rendering
│   ├── language.js        # Language switching logic
│   └── app.js             # Core app functions
│
├── IMAGE_GUIDE.md         # Image handling documentation
└── README.md              # This file
```

## 🗂️ Content Structure

### Categories (4)
1. **तरकारी (Vegetables)** - 16 items
2. **पिके (Crops)** - 15 items
3. **फुले (Flowers)** - 11 items
4. **फळे (Fruits)** - 14 items

### Items (56 Total)

#### 🥕 Vegetables (तरकारी) - 16 Items
1. Tomato – टोमॅटो
2. Brinjal – वांगी
3. Chilli – मिरची
4. Capsicum – ढोबळी मिरची
5. Ladyfinger – भेंडी
6. Spinach – पालक
7. Coriander – कोथिंबीर
8. Cabbage – कोबी
9. Cauliflower – फुलकोबी
10. Cucumber – काकडी
11. Drumstick – शेवगा
12. Carrot – गाजर
13. Garlic – लसूण
14. Ginger – आले
15. Beetroot – बीट
16. Bitter Gourd – कारले

#### 🌾 Crops (पिके) - 15 Items
1. Sugarcane – ऊस
2. Corn – मका
3. Wheat – गहू
4. Jowar – ज्वारी
5. Onion – कांदा
6. Groundnut – भुईमूग
7. Green Gram – मूग
8. Black Gram – उडीद
9. Lemon – लिंबू
10. Soybean – सोयाबीन
11. Green Peas – वाटाणा
12. Moth Bean – मटकी
13. Pigeon Pea – तूर
14. Chickpea – हरभरा
15. Cotton – कापूस

#### 🌸 Flowers (फुले) - 11 Items
1. Rose – गुलाब
2. Marigold – झेंडू
3. Sunflower – सूर्यफूल
4. Jasmine – मोगरा
5. Lavender – लॅव्हेंडर
6. Chrysanthemum – शेवंती
7. Tulip – ट्युलिप
8. Gerbera Daisy – जर्बेरा
9. Hibiscus – जास्वंद
10. Lotus – कमळ
11. Safflower – करडई

#### 🍎 Fruits (फळे) - 14 Items
1. Mango – आंबा
2. Papaya – पपई
3. Watermelon – टरबूज
4. Coconut – नारळ
5. Sapota – चिकू
6. Dragon Fruit – ड्रॅगन फळ
7. Amla – आवळा
8. Jamun – जांभूळ
9. Banana – केळी
10. Pomegranate – डाळिंब
11. Grapes – द्राक्षे
12. Guava – पेरू
13. Custard Apple – सीताफळ
14. Ber – बोर

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pranav-49/sahyadri-agro.git
   cd sahyadri-agro
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in any browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **No build process required!**
   - Pure HTML/CSS/JavaScript
   - Works directly in browser
   - No dependencies to install

### GitHub Pages Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

3. **Access your site**
   ```
   https://[username].github.net/[repository-name]
   ```

## 🖼️ Image Handling

The website includes an intelligent image fallback system:

### Current Status
- ✅ **4 Category images** generated (vegetables, crops, flowers, fruits)
- ✅ **3 Item images** generated (tomato, brinjal, chilli)
- ⏳ **53 Item images** pending (use fallback placeholders)

### How It Works
1. **Primary**: Loads from `/assets/images/items/{name}.jpg`
2. **Fallback**: Shows placeholder with item name if image missing
3. **No breaking**: Website works perfectly without all images

### Adding Images
See [IMAGE_GUIDE.md](./IMAGE_GUIDE.md) for detailed instructions on:
- Recommended image sources
- File naming conventions
- Priority items to add first
- Size and format specifications

## 🔧 Customization

### Update Shop Information
Edit `/assets/info.txt` or directly in `index.html`:
```html
<p class="shop-owner">Your Name</p>
<p class="shop-phone">Your Phone</p>
<p class="shop-address">Your Address</p>
```

### Modify Categories or Items
Edit `/assets/data/categories.json`:
```json
{
  "categories": [...],
  "items": {
    "vegetables": [...],
    "crops": [...],
    ...
  }
}
```

### Change Colors
Edit CSS variables in `/css/style.css`:
```css
:root {
  --primary-green: #2d7a3e;
  --primary-dark: #1a4d2e;
  --accent-orange: #ff9800;
  ...
}
```

### Add/Edit Translations
Edit `/assets/data/languages.json`:
```json
{
  "marathi": {
    "newKey": "मराठी मजकूर"
  },
  "english": {
    "newKey": "English Text"
  }
}
```

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (iOS 12+)
- ✅ Mobile browsers
- ✅ Progressive Web App capable

## 🎯 Key Requirements Met

✅ Category-based exploration (not direct crop listing)  
✅ New bilingual tagline  
✅ Exact item sequence maintained  
✅ 4 categories with proper icons  
✅ 56 items across all categories  
✅ Image fallback system  
✅ GitHub Pages deployable  
✅ Mobile-first responsive design  
✅ Marathi + English everywhere  
✅ Clean farmer-friendly UI  
✅ No backend dependency  

## 📝 Shop Information

**सह्याद्री कृषी सेवा केंद्र**  
**Sahyadri Krushi Seva Kendra**

- **Owner**: शिवरत्न प्रकाश कोरे (B.Sc. Agriculture)
- **Location**: Shop No. 9, Sahyadri Krushi Kendra, Shemraj Shopping, Kem, Karmala, Solapur - 413223
- **Phone**: 9420666197
- **Hours**: 7 AM to 10 PM
- **Services**: Fertilizers, Pesticides, Herbicides, Seeds

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on mobile (420px width)
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Font Awesome for icons
- Swiper.js for image slider
- Google Fonts for typography
- AI image generation for category images

---

**Built with ❤️ for farmers by the Sahyadri Agriculture team**

*"प्रत्येक शेतकऱ्याच्या शिवारात, सह्याद्रीचा विश्वास...!!"*
