const colorInput = document.getElementById('color-input');
const hexCode = document.getElementById('hex-code');
const rgbaCode = document.getElementById('rgba-code');

colorInput.addEventListener('input', updateColorInfo);

function updateColorInfo() {
    const selectedColor = colorInput.value;
    hexCode.textContent = selectedColor;
    
    // Convert the selected color to RGBA
    const rgbaColor = hexToRGBA(selectedColor);
    rgbaCode.textContent = `rgba(${rgbaColor.r}, ${rgbaColor.g}, ${rgbaColor.b}, ${rgbaColor.a})`;
}

function hexToRGBA(hex) {
    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    const a = 1; // You can set the alpha value here (e.g., 0.5 for 50% opacity)
    
    return { r, g, b, a };
}
