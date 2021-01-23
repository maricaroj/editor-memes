const imageMeme = document.getElementById('image-meme');
const backColorMemeText = document.getElementById('background-color-meme');

const urlImage = document.getElementById('url');
const imageBackColor = document.getElementById('back-color');
const blendColorStyle = document.getElementById('back-styles-mode');

const brightnessFilter = document.getElementById('brightness');
const opacityFilter = document.getElementById('opacity');
const contrastFilter = document.getElementById('contrast');
const blurFilter = document.getElementById('blur');
const grayscaleFilter = document.getElementById('grayscale');
const sepiaFilter = document.getElementById('sepia');
const hueFilter = document.getElementById('hue');
const saturateFilter = document.getElementById('saturate');
const invertFilter = document.getElementById('invert');
const resetFiltersButton = document.getElementById('reset-filters-button');

urlImage.addEventListener('keyup', (e)=>{
    e.preventDefault();
    const valueUrl = urlImage.value;
    imageMeme.style.backgroundImage = `url("${valueUrl}")`;
    imageMeme.style.backgroundPosition = 'center';

});

imageBackColor.addEventListener('input', ()=>{
    const valueImageBack = imageBackColor.value;
    imageMeme.style.backgroundColor = valueImageBack;
    backColorMemeText.innerHTML = valueImageBack.toUpperCase();
});

blendColorStyle.addEventListener('change',()=>{  
    imageMeme.style.backgroundBlendMode = blendColorStyle.value;
});


// FILTROS 

const filtrosImagen = () =>{
    imageMeme.style.filter = `brightness(${brightnessFilter.value}) opacity(${opacityFilter.value}) contrast(${contrastFilter.value}%) blur(${blurFilter.value}px) grayscale(${grayscaleFilter.value}%) sepia(${sepiaFilter.value}%) hue-rotate(${hueFilter.value}deg) saturate(${saturateFilter.value}%) invert(${invertFilter.value})`;
};

brightnessFilter.addEventListener('change', filtrosImagen);
opacityFilter.addEventListener('change', filtrosImagen);
contrastFilter.addEventListener('change', filtrosImagen);
blurFilter.addEventListener('change', filtrosImagen);
grayscaleFilter.addEventListener('change', filtrosImagen);
sepiaFilter.addEventListener('change', filtrosImagen);
hueFilter.addEventListener('change', filtrosImagen);
saturateFilter.addEventListener('change', filtrosImagen);
invertFilter.addEventListener('change', filtrosImagen);

resetFiltersButton.addEventListener('click', ()=>{
    brightnessFilter.value = '1';
    opacityFilter.value= '1';
    contrastFilter.value= '100';
    blurFilter.value= '0';
    grayscaleFilter.value = '0';
    sepiaFilter.value = '0';
    hueFilter.value= '0';
    saturateFilter.value = '100';
    invertFilter.value = '0';
    filtrosImagen;
});