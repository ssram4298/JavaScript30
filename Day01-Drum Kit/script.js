function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;     //Stop function if wrong key is selected
    audio.currentTime = 0;  //Rewind the audio to the start
    audio.play()
    key.classList.add('playing');

    audio.addEventListener('ended', () => {
        key.classList.remove('playing');
    });
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);