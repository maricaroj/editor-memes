
const imageEditorPanel = document.getElementById('image-editor-panel');
const textEditorPanel = document.getElementById('text-editor-panel');
const asideContainer = document.getElementById('principal-aside-container');
const memeContainer = document.getElementById('container-meme');

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

asideCloseButton.addEventListener('click', ()=>{
    asideContainer.style.display ='none';
})

window.addEventListener('resize', ()=>{
        const windowSize = (memeContainer.getBoundingClientRect().width) / 16;
        console.log(windowSize);
        memeContainer.style.height = `${windowSize}rem`;
})

window.addEventListener('resize', ()=>{
    if(window.innerWidth > 1100){
        return
    } else{
        console.log(window.innerWidth);
        const windowSize = window.innerWidth / 10
        const textSize = Math.round(windowSize * 0.4);
        console.log(textSize);
        const paddSize = Math.round(windowSize * 0.3);
        console.log(paddSize);
    
        
        topTextBox.style.fontSize = `${textSize}px`;
        bottomTextBox.style.fontSize = `${textSize}px`;
        topTextBox.style.padding = `${paddSize}px 50px`
        bottomTextBox.style.padding = `${paddSize}px 50px`;
        fontSize.value = textSize;
        fontSpacing.value = paddSize;
    };
});