# GitHub Pages Deployment Script
# This script ensures all files are committed and pushed correctly

Write-Host "`n╔═══════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   GITHUB PAGES DEPLOYMENT HELPER SCRIPT      ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

# Step 1: Verify critical files exist
Write-Host "Step 1: Verifying Files...`n" -ForegroundColor Yellow

$criticalFiles = @(
    "index.html",
    "categories.html",
    "explore.html",
    "css\style.css",
    "js\app.js",
    "js\language.js",
    "js\categories.js",
    "assets\data\categories.json",
    "assets\data\languages.json"
)

$allFilesExist = $true
foreach ($file in $criticalFiles) {
    if (Test-Path $file) {
        $size = (Get-Item $file).Length
        if ($size -gt 0) {
            Write-Host "  ✓ $file ($size bytes)" -ForegroundColor Green
        }
        else {
            Write-Host "  ✗ $file (EMPTY!)" -ForegroundColor Red
            $allFilesExist = $false
        }
    }
    else {
        Write-Host "  ✗ $file (NOT FOUND!)" -ForegroundColor Red
        $allFilesExist = $false
    }
}

if (-not $allFilesExist) {
    Write-Host "`n❌ Some files are missing or empty. Please fix before deploying.`n" -ForegroundColor Red
    exit 1
}

Write-Host "`n✅ All critical files verified!`n" -ForegroundColor Green

# Step 2: Check image count
Write-Host "Step 2: Checking Images...`n" -ForegroundColor Yellow

$itemImages = (Get-ChildItem "assets\images\items" -File -ErrorAction SilentlyContinue | Measure-Object).Count
$categoryImages = (Get-ChildItem "assets\images\categories" -File -ErrorAction SilentlyContinue | Measure-Object).Count

Write-Host "  Items: $itemImages / 56" -ForegroundColor $(if ($itemImages -eq 56) { "Green" } else { "Yellow" })
Write-Host "  Categories: $categoryImages / 4" -ForegroundColor $(if ($categoryImages -eq 4) { "Green" } else { "Yellow" })

# Step 3: Git operations
Write-Host "`nStep 3: Preparing Git Commit...`n" -ForegroundColor Yellow

# Check if git repo exists
if (-not (Test-Path ".git")) {
    Write-Host "  ✗ Not a git repository. Run 'git init' first." -ForegroundColor Red
    exit 1
}

# Show current status
Write-Host "  Current git status:" -ForegroundColor Cyan
git status --short

Write-Host "`n" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  READY TO DEPLOY!" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "  1. git add ." -ForegroundColor White
Write-Host "  2. git commit -m 'Complete website with all styling and images'" -ForegroundColor White
Write-Host "  3. git push origin main" -ForegroundColor White
Write-Host "`nOr run this combined command:" -ForegroundColor Yellow
Write-Host "  git add . && git commit -m 'Deploy complete website' && git push origin main`n" -ForegroundColor Green

Write-Host "After pushing, your site will be at:" -ForegroundColor Cyan
Write-Host "  https://[USERNAME].github.io/[REPO-NAME]/`n" -ForegroundColor White

Write-Host "═══════════════════════════════════════════════════`n" -ForegroundColor Cyan
