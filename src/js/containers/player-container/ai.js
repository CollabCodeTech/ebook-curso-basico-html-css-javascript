(function () {
  const $person = document.querySelector('.player-container.-person');
  const $iconShots = $person.querySelectorAll('.icon-container > .icon-shot');

  const $ai = document.querySelector('.player-container.-ai');
  const $shotPlayers = $ai.querySelectorAll('.shot-container > .shot-player');
  let $shotPlayersActive = $ai.querySelector('.shot-container > .shot-player.-active')

  $iconShots.forEach(function ($iconShot) {
    $iconShot.addEventListener('click', function() {
      const playRandom = getRandomIntInclusive(0, 2);

      $shotPlayersActive.classList.remove('-active');
      $shotPlayers[playRandom].classList.add('-active');
      $shotPlayersActive = $shotPlayers[playRandom];
    });
  });

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
})();

