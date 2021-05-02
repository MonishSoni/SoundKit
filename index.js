window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[ data-key = "${e.keyCode}"]`); //SELECTS AUDIO
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if (!audio) return; //STOP FUNCTION WHEN NO AUDIO
  audio.currentTime = 0; // SET AUDIO TO INITIAL TIME
  audio.play();// PLAYS AUDIO
  key.classList.add('playing');// ADDS PLAYING CLASS TO KEY
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


