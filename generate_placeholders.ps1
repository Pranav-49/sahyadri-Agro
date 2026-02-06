# Script to create placeholder images for all agricultural items
# This creates simple colored placeholders with item names

$items = @(
    # Vegetables
    @{name="capsicum"; display="Capsicum"},
    @{name="ladyfinger"; display="Ladyfinger"},
    @{name="spinach"; display="Spinach"},
    @{name="coriander"; display="Coriander"},
    @{name="cabbage"; display="Cabbage"},
    @{name="cauliflower"; display="Cauliflower"},
    @{name="cucumber"; display="Cucumber"},
    @{name="drumstick"; display="Drumstick"},
    @{name="carrot"; display="Carrot"},
    @{name="garlic"; display="Garlic"},
    @{name="ginger"; display="Ginger"},
    @{name="beetroot"; display="Beetroot"},
    @{name="bittergourd"; display="Bitter Gourd"},
    
    # Crops
    @{name="sugarcane"; display="Sugarcane"},
    @{name="corn"; display="Corn"},
    @{name="wheat"; display="Wheat"},
    @{name="jowar"; display="Jowar"},
    @{name="onion"; display="Onion"},
    @{name="groundnut"; display="Groundnut"},
    @{name="greengram"; display="Green Gram"},
    @{name="blackgram"; display="Black Gram"},
    @{name="lemon"; display="Lemon"},
    @{name="soybean"; display="Soybean"},
    @{name="greenpeas"; display="Green Peas"},
    @{name="mothbean"; display="Moth Bean"},
    @{name="pigeonpea"; display="Pigeon Pea"},
    @{name="chickpea"; display="Chickpea"},
    @{name="cotton"; display="Cotton"},
    
    # Flowers
    @{name="rose"; display="Rose"},
    @{name="marigold"; display="Marigold"},
    @{name="sunflower"; display="Sunflower"},
    @{name="jasmine"; display="Jasmine"},
    @{name="lavender"; display="Lavender"},
    @{name="chrysanthemum"; display="Chrysanthemum"},
    @{name="tulip"; display="Tulip"},
    @{name="gerbera"; display="Gerbera"},
    @{name="hibiscus"; display="Hibiscus"},
    @{name="lotus"; display="Lotus"},
    @{name="safflower"; display="Safflower"},
    
    # Fruits
    @{name="mango"; display="Mango"},
    @{name="papaya"; display="Papaya"},
    @{name="watermelon"; display="Watermelon"},
    @{name="coconut"; display="Coconut"},
    @{name="sapota"; display="Sapota"},
    @{name="dragonfruit"; display="Dragon Fruit"},
    @{name="amla"; display="Amla"},
    @{name="jamun"; display="Jamun"},
    @{name="banana"; display="Banana"},
    @{name="pomegranate"; display="Pomegranate"},
    @{name="grapes"; display="Grapes"},
    @{name="guava"; display="Guava"},
    @{name="custardapple"; display="Custard Apple"},
    @{name="ber"; display="Ber"}
)

$outputDir = "assets\images\items"

foreach ($item in $items) {
    $filename = "$outputDir\$($item.name).jpg"
    
    # Check if file doesn't exist
    if (-not (Test-Path $filename)) {
        # Use placeholder.com to generate images
        $url = "https://via.placeholder.com/300x300/2d7a3e/ffffff?text=$([System.Web.HttpUtility]::UrlEncode($item.display))"
        
        try {
            Invoke-WebRequest -Uri $url -OutFile $filename -ErrorAction Stop
            Write-Host "Created placeholder for: $($item.display)" -ForegroundColor Green
        }
        catch {
            Write-Host "Failed to create: $($item.display)" -ForegroundColor Red
        }
    }
    else {
        Write-Host "Already exists: $($item.display)" -ForegroundColor Yellow
    }
}

Write-Host "`nPlaceholder generation complete!" -ForegroundColor Cyan
