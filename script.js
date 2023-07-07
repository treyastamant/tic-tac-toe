//Player object store players
function Player(playerOneName, playerTwoName) {

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
  let counter = 0;

  playerTurn.textContent = `${player.getActivePlayer().name}'s turn: ${player.getActivePlayer().token}`;
  
  

  const checkForWinner = () => {
    let winner = "";
    //row 1 check
    if (gameboard[0].dataset.token === gameboard[1].dataset.token  && gameboard[1].dataset.token === gameboard[2].dataset.token) {
      playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
      return winner = player.getInactivePlayer().name;
    }

    //row 2 check
    if (gameboard[3].dataset.token === gameboard[4].dataset.token && gameboard[4].dataset.token === gameboard[5].dataset.token) {
      playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
      return winner = player.getInactivePlayer().name;
    }

    //row 3 check 
    if (gameboard[6].dataset.token === gameboard[7].dataset.token && gameboard[7].dataset.token === gameboard[8].dataset.token) {
      playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
      return winner = player.getInactivePlayer().name;
    }

    //col 1 check 
    if (gameboard[0].dataset.token === gameboard[3].dataset.token && gameboard[3].dataset.token === gameboard[6].dataset.token) {
      playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
      return winner = player.getInactivePlayer().name;
    }

    //col 2 check
    if (gameboard[1].dataset.token === gameboard[4].dataset.token && gameboard[4].dataset.token === gameboard[7].dataset.token) {
      playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
      return winner = player.getInactivePlayer().name;
    }

    //col 3 check 
    if (gameboard[2].dataset.token === gameboard[5].dataset.token && gameboard[5].dataset.token === gameboard[8].dataset.token) {
      playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
      return winner = player.getInactivePlayer().name;
    }

    //dia 1 check
    if (gameboard[0].dataset.token === gameboard[4].dataset.token && gameboard[4].dataset.token === gameboard[8].dataset.token) {
      playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
      return winner = player.getInactivePlayer().name;
    }

    //dia 2 check
    if (gameboard[2].dataset.token === gameboard[4].dataset.token && gameboard[4].dataset.token === gameboard[6].dataset.token) {
      playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
      return winner = player.getInactivePlayer().name;
    }

    // if (counter === 9) {
    //   playerTurn.textContent = "That's a tie!"
    //   return winner = 'tie';
    // }

    return winner;
  }

  gameboard.forEach(function (element, index) {
    element.addEventListener('click', function addClickEvent() {
      if (checkForWinner() !== "") {
          gameboard[index].textContent = "";
      } else {
        
        if (counter < 9) {
        gameboard[index].setAttribute('data-token', player.getActivePlayer().token);
        playerTurn.textContent = `${player.getInactivePlayer().name}'s turn: ${player.getInactivePlayer().token}`;
        gameboard[index].textContent = player.getActivePlayer().token;
        player.switchPlayerTurn();
        checkForWinner();
        counter++;
        } 
        if (counter === 9 && checkForWinner() === "") {
          player.switchPlayerTurn();
          gameboard[index].setAttribute('data-token', player.getActivePlayer().token);
          gameboard[index].textContent = player.getActivePlayer().token;
          
          playerTurn.textContent = "That's a tie!"
        }
      }
    }, {once: true});
    
  })
})();