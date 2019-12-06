const $error404 = document.querySelector('.main-container.-error404');
const $game = document.querySelector('.-game');
const $play = $error404.querySelector('.primary-button');

$play.addEventListener('click', function() {
  $error404.classList.remove('-active');
  $game.classList.add('-active');
});