
const imageEditorPanel = document.getElementById('image-editor-panel');
const textEditorPanel = document.getElementById('text-editor-panel');
const asideContainer = document.getElementById('principal-aside-container');
const memeContainer = document.getElementById('container-meme');
const downloadButton = document.getElementById('download-button');

const imgButton = document.getElementById('image-button');
const textButton = document.getElementById('text-button');
const lightButton = document.getElementById('light-button');
const darkButton = document.getElementById('dark-button');
const asideCloseButton = document.getElementById('aside-button');


// Botones del header

imgButton.addEventListener('click', ()=>{
    asideContainer.style.display = 'block';
    imageEditorPanel.classList.remove('display-none')
    textEditorPanel.classList.add('display-none');
})

textButton.addEventListener('click', ()=>{
    asideContainer.style.display = 'block';
    textEditorPanel.classList.remove('display-none');
    imageEditorPanel.classList.add('display-none');
})

lightButton.addEventListener('click', ()=>{
    lightButton.classList.add('display-none')
    darkButton.classList.remove('display-none')
    document.body.classList.add('dark-mode')
})
darkButton.addEventListener('click', ()=>{
    lightButton.classList.remove('display-none')
    darkButton.classList.add('display-none')
    document.body.classList.remove('dark-mode')
})


// Boton cerrar barra lateral

asideCloseButton.addEventListener('click', ()=>{
    asideContainer.style.display ='none';
})

// ajustando el tamaño del contenedor del meme, ajustando el tamaño de letra y el padding de top y bottom text, ocultando aside cuando el width sea menor a 1100px
window.addEventListener('resize', ()=>{
    if(window.innerWidth > 1300){
        asideContainer.style.display = 'block';
    }
});

const tamaño = () =>{
    if(window.innerWidth > 1100){
        return
    } else{
        const memeContainerSize = (memeContainer.getBoundingClientRect().width) / 16;
        memeContainer.style.height = `${memeContainerSize}rem`;

        const windowSize = window.innerWidth / 10
        const textSize = Math.round(windowSize * 0.4);
        const paddSize = Math.round(windowSize * 0.3);
        
        topTextBox.style.fontSize = `${textSize}px`;
        bottomTextBox.style.fontSize = `${textSize}px`;
        topTextBox.style.padding = `${paddSize}px 40px`
        bottomTextBox.style.padding = `${paddSize}px 40px`;

        fontSize.value = textSize;
        fontSpacing.value = paddSize;
    };
;}
    
window.addEventListener('resize', tamaño)
    

// window.onload = tamaño;