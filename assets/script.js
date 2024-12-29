document.body.addEventListener('keydown', (event) => {
    playSound(event.code.toLowerCase());
});

let elementsArray = document.querySelectorAll('.key');
elementsArray.forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        // console.log(event.target.value) // Q W S D C
        // console.log(`key${event.target.value}`.toLowerCase());
        let key = `key${event.target.value}`.toLowerCase();
        playSound(key);
    })
})

document.querySelector('.play').addEventListener('click', () => {
    let song = document.querySelector('.composition').value;
    // console.log("música", song);

    if(song !== '') {
        let songArray = song.split(''); // generate an array
        // console.log(songArray);
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`input[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        // console.log(keyElement);
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;    

    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}