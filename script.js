const Gameboard = (() => {
  const gameboard = document.querySelectorAll('.space');

  gameboard.forEach(function (element, index) {
    element.addEventListener('click', () => {
      gameboard[index].textContent = "X";
    })
  })

  return gameboard;
})();




//Player object store players
const Players = (
  playerOneName = 'Player One', 
  playerTwoName = 'Player Two') => {


}

//Game object to control flow of the game

//JS function that to render contents of the gameboard to the webpage.

