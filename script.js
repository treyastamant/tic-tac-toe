

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

  playerTurn.textContent = `${player.getActivePlayer().name}'s turn: ${player.getActivePlayer().token}`;
  
    gameboard.forEach(function (element, index) {
      element.addEventListener('click', () => {
        gameboard[index].setAttribute('data-token', player.getActivePlayer().token);
        playerTurn.textContent = `${player.getInactivePlayer().name}'s turn: ${player.getInactivePlayer().token}`;
        gameboard[index].textContent = player.getActivePlayer().token;
        player.switchPlayerTurn();
        GameController();

      }, {once: true})
    })

  return gameboard;
})();

const GameController = () => {
  // const player = Player('Treya', 'Beau');
  const gameboard = document.querySelectorAll('.space');
  const checkForWinner = () => {
    //row 1 check
    if (gameboard[0].dataset.token === gameboard[1].dataset.token  && gameboard[1].dataset.token === gameboard[2].dataset.token) {
      console.log("someone won");
    }

    //row 2 check
    if (gameboard[3].dataset.token === gameboard[4].dataset.token && gameboard[4].dataset.token === gameboard[5].dataset.token) {
      console.log("someone won");
    }

    //row 3 check 
    if (gameboard[6].dataset.token === gameboard[7].dataset.token && gameboard[7].dataset.token === gameboard[8].dataset.token) {
      console.log("someone won");
    }

    //col 1 check 
    if (gameboard[0].dataset.token === gameboard[3].dataset.token && gameboard[3].dataset.token === gameboard[6].dataset.token) {
      console.log("someone won");
    }

    //col 2 check
    if (gameboard[1].dataset.token === gameboard[4].dataset.token && gameboard[4].dataset.token === gameboard[7].dataset.token) {
      console.log("someone won");
    }

    //col 3 check 
    if (gameboard[2].dataset.token === gameboard[5].dataset.token && gameboard[5].dataset.token === gameboard[8].dataset.token) {
      console.log("someone won");
    }

    //dia 1 check
    if (gameboard[0].dataset.token === gameboard[4].dataset.token && gameboard[4].dataset.token === gameboard[8].dataset.token) {
      console.log("someone won");
    }

    //dia 2 check
    if (gameboard[2].dataset.token === gameboard[4].dataset.token && gameboard[4].dataset.token === gameboard[6].dataset.token) {
      console.log("someone won");
    }

  }
  return checkForWinner();
}

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

