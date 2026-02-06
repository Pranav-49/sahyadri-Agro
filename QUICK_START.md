# 🚀 QUICK START GUIDE

## ▶️ Test Your Website Right Now

### Option 1: Double-Click Method (Easiest)
1. Navigate to: `d:\Projects\Agree Portfolio\agro-website\`
2. Double-click `index.html`
3. Your default browser will open the website
4. Click "श्रेणी पहा" to explore categories!

### Option 2: Local Server (Recommended)
```powershell
# Open PowerShell in project folder
cd "d:\Projects\Agree Portfolio\agro-website"

# Start a simple HTTP server (choose one):

# Python 3
python -m http.server 8000

# OR Python 2
python -m SimpleHTTPServer 8000

# OR Node.js (if installed)
npx http-server -p 8000

# Then visit: http://localhost:8000
```

## 🌐 Deploy to GitHub Pages

### Step 1: Initialize Git (if not done)
```powershell
cd "d:\Projects\Agree Portfolio\agro-website"
git init
git add .
git commit -m "Initial commit: Category-based agriculture website"
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `sahyadri-agro` (or your choice)
3. Description: "Agriculture business website with category-based navigation"
4. Public repository
5. **Do NOT** initialize with README (we already have one)
6. Click **Create repository**

### Step 3: Push to GitHub
```powershell
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/sahyadri-agro.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes
7. Your website will be live at:
   ```
   https://YOUR_USERNAME.github.io/sahyadri-agro/
   ```

## 📱 Test on Mobile

### Using Your Phone:
1. Deploy to GitHub Pages (see above)
2. Open the GitHub Pages URL on your phone
3. Test the category navigation
4. Check if everything displays correctly

### Using Browser DevTools:
1. Open website in Chrome
2. Press `F12` to open DevTools
3. Click the mobile device icon (top-left)
4. Select "iPhone 12 Pro" or similar
5. Test the responsive design

## ✅ Verification Checklist

After opening the website, verify:

- [ ] Homepage loads correctly
- [ ] New tagline is visible (Marathi + English)
- [ ] "श्रेणी पहा" button is present
- [ ] Clicking button opens categories page
- [ ] 4 category cards are displayed:
  - [ ] 🥕 तरकारी (Vegetables)
  - [ ] 🌾 पिके (Crops)
  - [ ] 🌸 फुले (Flowers)
  - [ ] 🍎 फळे (Fruits)
- [ ] Clicking a category shows its items
- [ ] Items are in correct sequence
- [ ] Language toggle works (मराठी ↔ English)
- [ ] Mobile view is responsive (420px max width)

## 🎨 Customization Quick Tips

### Change Shop Name:
Edit `index.html` line 33:
```html
<div class="shop-name">Your Shop Name</div>
```

### Change Phone Number:
Edit `index.html` around line 114:
```html
<p class="shop-phone">9420666197</p>
```

Also update in `js/app.js` the `makeCall()` function.

### Add More Items:
Edit `assets/data/categories.json`:
```json
{
  "items": {
    "vegetables": [
      {"id": "new-item", "nameEn": "Name", "nameMr": "नाव", "image": "./assets/images/items/new-item.jpg"}
    ]
  }
}
```

### Change Colors:
Edit `css/style.css` lines 6-18:
```css
:root {
  --primary-green: #YOUR_COLOR;
  --primary-dark: #YOUR_COLOR;
  ...
}
```

## 🖼️ Adding Images

### Priority Items (Add These First):
1. **Onion** - Most searched vegetable
2. **Wheat** - Staple crop
3. **Rose** - Popular flower
4. **Mango** - King of fruits

### Where to Get Images:
- **Free Stock Photos**: Unsplash.com, Pexels.com, Pixabay.com
- **Search**: "[Item name] farming" or "[Item name] agriculture"
- **AI Generate**: Use DALL-E, Midjourney, Stable Diffusion

### How to Add:
1. Download/generate image (300x300px minimum, square)
2. Rename to lowercase (e.g., `onion.jpg`)
3. Save to `assets/images/items/`
4. Refresh website - image appears automatically!

## 📂 File Structure Reference

```
Your Website Root/
├── index.html          ← Homepage (START HERE)
├── categories.html     ← Category selection
├── explore.html        ← Items in category
│
├── assets/
│   ├── data/
│   │   └── categories.json  ← Edit items here
│   │
│   └── images/
│       ├── categories/     ← 4 images ✅
│       └── items/          ← Add item images here
│
├── css/
│   └── style.css       ← Edit colors/styles
│
└── js/
    ├── categories.js   ← Category logic
    └── language.js     ← Language switching
```

## 🆘 Troubleshooting

### Website Not Loading?
- Check if you're opening `index.html` directly
- Try using a local server instead

### Images Not Showing?
- Images have fallback placeholders - this is normal
- Add real images to `assets/images/items/` folder

### Categories Not Appearing?
- Check browser console (F12 → Console tab)
- Verify `assets/data/categories.json` exists

### Language Not Switching?
- Clear browser cache (Ctrl+Shift+Del)
- Check if `assets/data/languages.json` exists

## 📞 Need Help?

1. Check `README.md` for detailed documentation
2. See `IMAGE_GUIDE.md` for image help
3. Review `IMPLEMENTATION_SUMMARY.md` for what was built

## 🎉 You're All Set!

Your agriculture website is ready to use. Open `index.html` and start exploring!

**Next Steps:**
1. ✅ Test the website locally
2. ✅ Deploy to GitHub Pages
3. ✅ Share the link with farmers
4. ⏳ Gradually add real images

---

**Need to start NOW?**  
Just double-click `index.html` - it's that simple! 🚀
