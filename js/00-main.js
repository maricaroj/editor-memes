
// ETIQUETAS HTML
const imageEditorPanel = document.getElementById('image-editor-panel');
const textEditorPanel = document.getElementById('text-editor-panel');
const asideContainer = document.getElementById('principal-aside-container');

// 
const imgButton = document.getElementById('image-button');
const textButton = document.getElementById('text-button');
const lightButton = document.getElementById('light-button');
const darkButton = document.getElementById('dark-button');
const asideCloseButton = document.getElementById('aside-button');




// EVENTOS BOTONES
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

asideCloseButton.addEventListener('click', ()=>{
    asideContainer.style.display ='none';
})

