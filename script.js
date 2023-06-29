

//Player object store players
function Player(playerOneName, playerTwoName) {
    // const board = Gameboard();

    const players = [
      {
        name: playerOneName,
        token: "X"
      },
      {
        name: playerTwoName,
        token: "O"
      }
    ];

    let activePlayer = players[0];
    let inactivePlayer = players[1];

    const switchPlayerTurn = () => {
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
      inactivePlayer = inactivePlayer === players[1] ? players[0] : players[1];
    };

    const getActivePlayer = () => activePlayer;

    const getInactivePlayer = () => inactivePlayer;

    
    return {
      getActivePlayer,
      getInactivePlayer,
      switchPlayerTurn,
      players
    };
};

const Gameboard = (() => {
  const player = Player('Treya', 'Beau');
  const playerTurn = document.querySelector('.turn');
  const gameboard = document.querySelectorAll('.space');
  const gameContainer = document.querySelector('.gameboard-container');

  // const activePlayer = player.getActivePlayer();
  // const inactivePlayer = player.getInactivePlayer();

  playerTurn.textContent = `${player.getActivePlayer().name}'s turn: ${player.getActivePlayer().token}`;

  // gameContainer.addEventListener('click', player.switchPlayerTurn());
  
    gameboard.forEach(function (element, index) {
      element.addEventListener('click', () => {
        
        playerTurn.textContent = `${player.getInactivePlayer().name}'s turn: ${player.getInactivePlayer().token}`;
        gameboard[index].textContent = player.getActivePlayer().token;
        player.switchPlayerTurn();
      }, {once: true})
    })

  return gameboard;
})();

// const Game = () => {
//   const game = Gameboard();
//   const board = buildBoard();
//   const switchTurn = switchPlayerTurn();



//   const newTurn = () => {
//     const gameContainer = document.querySelector('.gameboard-container');
//     gameContainer.addEventListener('click', game.switchPlayerTurn);
//   }

//   newTurn();
// }





//Game object to control flow of the game

//JS function that to render contents of the gameboard to the webpage.

