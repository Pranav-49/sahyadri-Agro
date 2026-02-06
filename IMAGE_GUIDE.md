# Sahyadri Agriculture Website - Image Handling Guide

## Current Status

The website is configured to work **without requiring all images to be present**. Images are handled gracefully with intelligent fallbacks.

## Image Structure

### Categories (4 images) ✓ Generated
- `/assets/images/categories/vegetables.jpg`
- `/assets/images/categories/crops.jpg`
- `/assets/images/categories/flowers.jpg`
- `/assets/images/categories/fruits.jpg`

### Items (56 images total)
Located in `/assets/images/items/`:

**Vegetables (16):** tomato ✓, brinjal ✓, chilli ✓, capsicum, ladyfinger, spinach, coriander, cabbage, cauliflower, cucumber, drumstick, carrot, garlic, ginger, beetroot, bittergourd

**Crops (15):** sugarcane, corn, wheat, jowar, onion, groundnut, greengram, blackgram, lemon, soybean, greenpeas, mothbean, pigeonpea, chickpea, cotton

**Flowers (11):** rose, marigold, sunflower, jasmine, lavender, chrysanthemum, tulip, gerbera, hibiscus, lotus, safflower

**Fruits (14):** mango, papaya, watermelon, coconut, sapota, dragonfruit, amla, jamun, banana, pomegranate, grapes, guava, custardapple, ber

## How Image Fallback Works

The website handles missing images intelligently:

1. **Primary**: Tries to load from `/assets/images/items/{name}.jpg`
2. **Fallback**: If image fails, shows placeholder with item name
3. **No Breaking**: Website works perfectly even if images are missing

## Adding Real Images

To add real agricultural images:

1. Find high-quality images for each item (300x300px minimum, square ratio recommended)
2. Name them exactly as shown above (lowercase, no spaces)
3. Save as `.jpg` format
4. Place in `/assets/images/items/` directory

## Image Sources  (Recommended)

- **Unsplash**: https://unsplash.com/s/photos/agriculture
- **Pexels**: https://www.pexels.com/search/farming/
- **Pixabay**: https://pixabay.com/images/search/agriculture/
- **AI Generation**: Use DALL·E, Midjourney, or Stable Diffusion

## Priority Items to Add Images

If adding images gradually, prioritize these popular items:
1. Tomato ✓
2. Onion
3. Chilli ✓
4. Rice/Wheat
5. Sugarcane
6. Cotton
7. Rose
8. Marigold
9. Mango
10. Banana

## File Naming Convention

```
Item Name → Filename
-----------------------
Tomato → tomato.jpg
Bell Pepper (Capsicum) → capsicum.jpg
Lady finger (Okra) → ladyfinger.jpg
Green Gram (Moong) → greengram.jpg
```

**Rules:**
- All lowercase
- No spaces (use camelCase or remove spaces)
- .jpg extension
- Square aspect ratio (1:1) recommended
- Minimum 300x300px

## Development Note

The website is **fully functional** and **GitHub Pages ready** as-is. Images enhance the experience but are not required for the site to work.
