function playSound(elementId) {
    
    const element = document.querySelector(elementId);

    if(element === null) {
        return alert('Sorry, we do not have this emoji yet');
    }

    if(element.localName === 'audio') {
        element.play();
    }
}

const soundsList = document.querySelectorAll('.item');

for (let i = 0; i < soundsList.length; i++){
    
    const item = soundsList[i];
    const emoji = item.classList[1];

    const idSound = `#${emoji}_sound`;

    item.onclick = function () {
        playSound(idSound);
    }

    item.onkeydown = function(event) {

        console.log(event);
        
        if(event.code === 'Enter' || event.code === 'Space') {
            item.classList.add('active');
        }
    }

    item.onkeyup = function() {
        item.classList.remove('active');
    }

}