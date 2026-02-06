# 🚀 GitHub Pages Deployment Checklist

## ✅ Pre-Deployment Verification

### 1. File Structure Check
- [x] `index.html` exists in root (7774 bytes)
- [x] `css/style.css` exists (15878 bytes)
- [x] `js/app.js` exists
- [x] `js/categories.js` exists
- [x] `js/language.js` exists
- [x] `assets/data/categories.json` exists
- [x] `assets/data/languages.json` exists
- [x] `assets/images/items/` contains 56 images

### 2. Path Verification
✅ All paths use forward slashes (`/`) not backslashes (`\`)
✅ All paths are relative (no absolute paths)
✅ All filenames match exactly (case-sensitive)

---

## 🔧 Common GitHub Pages Issues & Fixes

### Issue 1: CSS Not Loading
**Cause**: Incorrect path or case sensitivity
**Fix**: Ensure CSS link is exactly:
```html
<link rel="stylesheet" href="css/style.css">
```

### Issue 2: JavaScript Not Working
**Cause**: Incorrect paths or missing files
**Fix**: Check all script tags use forward slashes:
```html
<script src="js/language.js"></script>
<script src="js/app.js"></script>
<script src="js/categories.js"></script>
```

### Issue 3: Images Not Displaying
**Cause**: Incorrect image paths or case mismatch
**Fix**: Use relative paths with `./`:
```javascript
image: "./assets/images/items/tomato.jpg"
```

### Issue 4: JSON Data Not Loading
**Cause**: Fetch path incorrect or CORS
**Fix**: Use relative paths:
```javascript
fetch('./assets/data/categories.json')
fetch('./assets/data/languages.json')
```

---

## 📋 Deployment Steps

### Step 1: Verify All Files Are Committed
```bash
git status
# Should show: "nothing to commit, working tree clean"
# Or show files that need to be committed
```

### Step 2: Add Any Uncommitted Files
```bash
# Add specific files
git add css/style.css
git add js/categories.js
git add assets/data/categories.json
git add assets/data/languages.json

# OR add all files
git add .
```

### Step 3: Commit Changes
```bash
git commit -m "Complete website with CSS and all 56 images"
```

### Step 4: Push to GitHub
```bash
git push origin main
```

### Step 5: Enable GitHub Pages (if not already enabled)
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes

### Step 6: Access Your Site
Your site will be at:
```
https://[USERNAME].github.io/[REPOSITORY-NAME]/
```

---

## 🔍 Troubleshooting After Deployment

### If CSS is Still Not Loading:

1. **Check Browser Console** (Press F12)
   - Look for 404 errors
   - Note the exact path it's trying to load

2. **Verify File Was Pushed**
   - Go to GitHub repository
   - Navigate to `css/style.css`
   - Confirm file exists and has content

3. **Check Case Sensitivity**
   - GitHub Pages is case-sensitive!
   - `Style.css` ≠ `style.css`
   - `CSS/style.css` ≠ `css/style.css`

4. **Hard Refresh Your Browser**
   - Chrome/Edge: `Ctrl + Shift + R`
   - Firefox: `Ctrl + F5`
   - Safari: `Cmd + Shift + R`

5. **Check Repository Name in URL**
   - If repo is `agro-website`, URL should be:
   - `https://username.github.io/agro-website/`
   - NOT `https://username.github.io/` (that's username.github.io repo only)

---

## ✅ Files to Verify on GitHub

After pushing, check these files exist on GitHub:

1. **Root Directory:**
   - `index.html`
   - `categories.html`
   - `explore.html`
   - `crops.html`
   - `crop-details.html`

2. **CSS Directory:**
   - `css/style.css` (should be ~16KB)

3. **JS Directory:**
   - `js/app.js`
   - `js/language.js`
   - `js/categories.js`
   - `js/crops.js`

4. **Assets Directory:**
   - `assets/data/categories.json`
   - `assets/data/languages.json`
   - `assets/images/items/` (56 files)
   - `assets/images/categories/` (4 files)
   - `assets/images/logo.png`

---

## 🎯 Quick Fix Commands

### If CSS file wasn't pushed:
```bash
git add css/style.css
git commit -m "Add CSS styling"
git push origin main
```

### If data files weren't pushed:
```bash
git add assets/data/*.json
git commit -m "Add data files"
git push origin main
```

### If images weren't pushed:
```bash
git add assets/images/items/*
git add assets/images/categories/*
git commit -m "Add all item images"
git push origin main
```

### Force push everything (use carefully):
```bash
git add .
git commit -m "Complete website deployment"
git push -f origin main
```

---

## 📱 Testing Checklist

After deployment, test these features:

- [ ] Homepage loads with green styling
- [ ] New tagline is visible and styled
- [ ] "श्रेणी पहा" button has gradient background
- [ ] Category cards have hover effects
- [ ] Clicking category navigates to items page
- [ ] Items display in grid with images
- [ ] Language toggle button works
- [ ] Back button navigation works
- [ ] Mobile responsive (test on phone)
- [ ] All images load correctly

---

## 🆘 Still Not Working?

### Option 1: Check File Size on GitHub
- Click on `css/style.css` on GitHub
- It should show ~16KB
- If it shows 0 bytes or error, the file didn't upload

### Option 2: Clone Fresh and Check
```bash
cd /some/other/directory
git clone https://github.com/USERNAME/REPO-NAME.git
cd REPO-NAME
# Check if css/style.css exists and has content
```

### Option 3: Use GitHub's Raw URL
Visit this URL directly:
```
https://raw.githubusercontent.com/USERNAME/REPO-NAME/main/css/style.css
```
You should see the CSS content. If you don't, the file isn't on GitHub.

---

## 📞 Contact Info

If you're still stuck, you can:
1. Check GitHub Actions tab for deploy errors
2. Look at GitHub Pages build logs
3. Verify your repository is public (not private)

---

**Last Updated**: February 6, 2026

---

## ✨ Success Indicators

When everything is working:
- ✅ Green header with gradient
- ✅ Styled category cards with shadows
- ✅ Hover effects on cards
- ✅ Images load smoothly
- ✅ Font Awesome icons display
- ✅ Responsive on mobile

**Your site should look professional and polished!**
