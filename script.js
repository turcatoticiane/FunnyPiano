function playSound(elementId) {
    document.querySelector(elementId).play();
}

const soundsList = document.querySelectorAll('button');

for (let i = 0; i < soundsList.length; i++){
    
    const item = soundsList[i];
    const itemId = item.id;

    const idSound = `#${itemId}_sound`;

    item.onclick = function () {
        playSound(idSound);
    }
}