const imageMeme = document.getElementById('image-meme');
const backColorMemeText = document.getElementById('background-color-meme');

const urlImage = document.getElementById('url');
const imageBackColor = document.getElementById('back-color');
const blendColorStyle = document.getElementById('back-styles-mode');

const brightnessFilter = document.getElementById('brightness');
const opacityFilter = document.getElementById('opacity');
const contrastFilter = document.getElementById('contrast');
const blurFilter = document.getElementById('blur');
const greyscaleFilter = document.getElementById('greyscale');
const sepiaFilter = document.getElementById('sepia');
const hueFilter = document.getElementById('hue');
const saturateFilter = document.getElementById('saturation');
const invertFilter = document.getElementById('invert');

urlImage.addEventListener('keyup', ()=>{
    const valueUrl = urlImage.value;
    imageMeme.style.backgroundImage = `url(${valueUrl})`;
    imageMeme.style.backgroundPosition = 'center';

})

imageBackColor.addEventListener('input', ()=>{
    const valueImageBack = imageBackColor.value;
    imageMeme.style.backgroundColor = valueImageBack;
    backColorMemeText.innerHTML = valueImageBack.toUpperCase();
})

blendColorStyle.addEventListener('change',()=>{  
    imageMeme.style.backgroundBlendMode = blendColorStyle.value;
})


// FILTROS 

brightnessFilter.addEventListener('change', ()=>{
    imageMeme.style.filter = `brightness(${brightnessFilter.value})`;
})
opacityFilter.addEventListener('change', ()=>{
    imageMeme.style.filter = `opacity(${opacityFilter.value})`;
})
contrastFilter.addEventListener('change', ()=>{
    imageMeme.style.filter = `contrast(${contrastFilter.value})%`;
})
blurFilter.addEventListener('change', ()=>{
    imageMeme.style.filter = `blur(${blurFilter.value}px)`;
})
greyscaleFilter.addEventListener('change', ()=>{
    imageMeme.style.filter = `greyscale(${greyscaleFilter.value})%`;
})
sepiaFilter.addEventListener('change', ()=>{
    imageMeme.style.filter = `sepia(${sepiaFilter.value})%`;
})
hueFilter.addEventListener('change', ()=>{
    imageMeme.style.filter = `hue-rotate(${hueFilter.value})deg`;
})
saturateFilter.addEventListener('change', ()=>{
    imageMeme.style.filter = `saturate(${saturateFilter.value})%`;
})
invertFilter.addEventListener('change', ()=>{
    imageMeme.style.filter = `invert(${invertFilter.value})`;
})