const topTextBox = document.getElementById('top-text-box');
const bottomTextBox = document.getElementById('bottom-text-box');
const fontColorText = document.getElementById('font-color-text');
const fontBackText = document.getElementById('font-back-text');

const topTextInput = document.getElementById('top-text');
const bottomTextInput = document.getElementById('bottom-text');
const hideTopText = document.getElementById('no-top-text');
const hideBottomText = document.getElementById('no-bottom-text');
const fontType = document.getElementById('font-type');
const fontSize = document.getElementById('font-size');
const alignTextLetf = document.getElementById('left-text-button');  
const alignTextCenter = document.getElementById('center-text-button');  
const alignTextRight = document.getElementById('right-text-button');
const fontColorSelector = document.getElementById('font-color');
const fontBackSelector = document.getElementById('font-back');
const hideBackText = document.getElementById('no-font-back');
const outlineNone = document.getElementById('outline-text-none');
const outlineLight = document.getElementById('outline-text-light');
const outlineDark = document.getElementById('outline-text-dark');
const fontSpacing = document.getElementById('font-spacing');
const lineSpacing = document.getElementById('line-spacing');

// Agregar texto meme
topTextInput.addEventListener('keyup',()=> topTextBox.innerText = topTextInput.value);

bottomTextInput.addEventListener('keyup',()=> bottomTextBox.innerText = bottomTextInput.value);

// Ocultar texto meme
hideTopText.addEventListener('change',()=>{
    if(hideTopText.checked){
        topTextBox.classList.add('display-none');
    } else{
        topTextBox.classList.remove('display-none');
    }
});

hideBottomText.addEventListener('change',()=>{
    if(hideBottomText.checked){
        bottomTextBox.classList.add('display-none');
    } else{
        bottomTextBox.classList.remove('display-none');
    }
});

// Cambiar tipo de funte
fontType.addEventListener('change',()=>{
    topTextBox.style.fontFamily = `${fontType.value}`;
    bottomTextBox.style.fontFamily = `${fontType.value}`;
});

// Cambiar tamaño de fuente
const sizeFont = () =>{
    topTextBox.style.fontSize = `${fontSize.value}px`;
    bottomTextBox.style.fontSize = `${fontSize.value}px`;
}
fontSize.addEventListener('input', sizeFont);

// Alinear texto
alignTextLetf.addEventListener('click',()=>{
    topTextBox.style.textAlign = 'left';
    bottomTextBox.style.textAlign = 'left'; 
});

alignTextCenter.addEventListener('click',()=>{
    topTextBox.style.textAlign = 'center';
    bottomTextBox.style.textAlign = 'center'; 
});

alignTextRight.addEventListener('click',()=>{
    topTextBox.style.textAlign = 'right';
    bottomTextBox.style.textAlign = 'right'; 
});

// Cambiar color de fuente
fontColorSelector.addEventListener('input',()=>{
    const valueColor = fontColorSelector.value;
    topTextBox.style.color = valueColor;
    bottomTextBox.style.color = valueColor;
    fontColorText.innerHTML = valueColor.toUpperCase();
})

// Cambiar color fondo texto meme
fontBackSelector.addEventListener('input',()=>{
    if(!hideBackText.checked){
        const valueBack = fontBackSelector.value;
        topTextBox.style.backgroundColor = valueBack;
        bottomTextBox.style.backgroundColor = valueBack;
        fontBackText.innerHTML = valueBack.toUpperCase();
    }
})

// Fondo transparente
hideBackText.addEventListener('change',()=>{
    if(hideBackText.checked){
        topTextBox.style.backgroundColor = 'transparent';
        topTextBox.style.position = 'absolute';
        topTextBox.style.top = '0';
        bottomTextBox.style.backgroundColor = 'transparent';
        bottomTextBox.style.position = 'absolute';
        bottomTextBox.style.bottom = '0';

    }else{
        topTextBox.style.backgroundColor = `${fontBackSelector.value}`;
        topTextBox.style.position = 'static';
        bottomTextBox.style.backgroundColor = `${fontBackSelector.value}`;
        bottomTextBox.style.position = 'static';
    }
});

// Agregar/Quitar borde de texto
outlineNone.addEventListener('click', ()=>{
    topTextBox.style.webkitTextStroke  = 'transparent';
    bottomTextBox.style.webkitTextStroke = 'transparent';
});

outlineLight.addEventListener('click', ()=>{
    topTextBox.style.webkitTextStroke  = '1px white';
    bottomTextBox.style.webkitTextStroke = '1px white';
});

outlineDark.addEventListener('click', ()=>{
    topTextBox.style.webkitTextStroke  = '2px black';
    bottomTextBox.style.webkitTextStroke = '2px black';
});

// Cambiar espaciado

const spacingFont = () =>{
    topTextBox.style.padding = `${fontSpacing.value}px 40px`;
    bottomTextBox.style.padding = `${fontSpacing.value}px 40px`;
}
fontSpacing.addEventListener('input', spacingFont);

// Cambiar interlineado
lineSpacing.addEventListener('change', ()=>{
    topTextBox.style.lineHeight = `${lineSpacing.value}`;
    bottomTextBox.style.lineHeight = `${lineSpacing.value}`;
});