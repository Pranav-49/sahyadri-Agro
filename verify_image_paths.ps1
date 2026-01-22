# Image Path Verification Script
# This script verifies that all disease image paths match the expected format

Write-Host "Verifying Disease Image Paths..." -ForegroundColor Green
Write-Host

# Get all disease images
$images = Get-ChildItem "assets\images\diseases" -Recurse -File

Write-Host "Found $($images.Count) disease images:" -ForegroundColor Cyan
Write-Host

# Create a mapping of expected paths based on crops.json
$expectedPaths = @{
    "banana" = @("panama_wilt.jpg")
    "tomato" = @("fruit_borer.jpg")
    "cotton" = @("bollworm.jpg")
    "sugarcane" = @("early_shoot_borer.jpg", "red_rot.jpg")
    "onion" = @("thrips.jpg")
    "wheat" = @("aphids.jpg")
    "chilli" = @("thrips.jpg")
    "brinjal" = @("fruit_&_shoot_borer.jpg")
    "jowar" = @("shoot_fly.jpg", "stem_borer.jpg")
    "bajra" = @("downy_mildew.jpg")
    "pomegranate" = @("fruit_borer.jpg", "bacterial_blight.jpg")
    "chickpea" = @("pod_borer.jpg")
    "tur" = @("wilt_disease.jpg")
    "grapes" = @("downy_mildew.jpg")
    "soybean" = @("leaf_miner.jpg")
    "maize" = @("fall_armyworm.jpg")
    "safflower" = @("aphids.jpg")
    "groundnut" = @("leaf_spot.jpg")
    "moong" = @("yellow_mosaic_virus.jpg")
    "udid" = @("pod_borer.jpg")
    "lemon" = @("citrus_canker.jpg")
    "custardapple" = @("mealy_bug.jpg")
    "ber" = @("fruit_fly.jpg")
    "sunflower" = @("head_rot.jpg")
    "motki" = @("pod_borer.jpg")
}

$allGood = $true

foreach ($crop in $expectedPaths.Keys | Sort-Object) {
    $cropPath = "assets\images\diseases\$crop"
    
    foreach ($expectedFile in $expectedPaths[$crop]) {
        $fullPath = Join-Path $cropPath $expectedFile
        
        if (Test-Path $fullPath) {
            Write-Host "✓ $crop/$expectedFile" -ForegroundColor Green
        } else {
            Write-Host "✗ MISSING: $crop/$expectedFile" -ForegroundColor Red
            $allGood = $false
        }
    }
}

Write-Host
if ($allGood) {
    Write-Host "SUCCESS! All disease images are correctly placed! ✓" -ForegroundColor Green
    Write-Host
    Write-Host "GitHub Pages Path Format:" -ForegroundColor Yellow
    Write-Host "  ./assets/images/diseases/[crop_id]/[disease_name].jpg" -ForegroundColor Cyan
    Write-Host
    Write-Host "Example:" -ForegroundColor Yellow
    Write-Host "  ./assets/images/diseases/banana/panama_wilt.jpg ✓" -ForegroundColor Cyan
    Write-Host
    Write-Host "Your images will work on GitHub Pages!" -ForegroundColor Green
} else {
    Write-Host "WARNING: Some images are missing!" -ForegroundColor Red
    Write-Host "Please add the missing images to the correct folders." -ForegroundColor Yellow
}

Write-Host
Write-Host "Testing website locally..." -ForegroundColor Yellow
Write-Host "Open: http://localhost or file:///d:/Projects/Agree%20Portfolio/agro-website/index.html"
Write-Host "Navigate to: Crops → Any Crop → Scroll to 'रोग ओळख' section"
