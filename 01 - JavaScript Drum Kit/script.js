function playSound (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);

  if (!audio) {
    return;
  }

  audio.currentTime = 0; // rewind to start
  audio.play();
  key.classList.add('playing');
}

window.document.addEventListener('keydown', playSound);

function removeTransition (e) {
  if (e.propertyName !== 'transform') {
    return;
  }

  this.classList.remove('playing');
  console.log(e.propertyName);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
