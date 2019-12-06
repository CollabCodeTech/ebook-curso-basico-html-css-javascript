const $person = document.querySelector('.player-container.-person');
const $shotContainer = $person.querySelector('.shot-container');
const $iconShots = $person.querySelectorAll('.icon-container > .icon-shot');
let $shotPlayerActive = $person.querySelector('.shot-player.-active');

$iconShots.forEach(($iconShot) => {
  $iconShot.addEventListener('click', function() {
    const $element = this;
    const id = $element.getAttribute('data-ref');
    const $shotPlayer = $shotContainer.querySelector(id); 

    $shotPlayerActive.classList.remove('-active');
    $shotPlayer.classList.add('-active');
    $shotPlayerActive = $shotPlayer;
  });
});