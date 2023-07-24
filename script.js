//player factory function
const createPlayer = (name, token) => {
  return {name, token}
}

//gameBoard object
const gameBoard = (() => {
  const container = document.querySelector('.gameboard-container');
  const turnMessage = document.querySelector(".turn");
  let board = []
  let xCells = []
  let oCells = [];

  const createBoard = () => {
    for (i = 1; i < 10; i++) {
      const cell = document.createElement('div');
      container.appendChild(cell);
      cell.className = "cell";
      cell.setAttribute('id', i)
      cell.addEventListener('click', () => {
        console.log (board)
        if (gameFlow.checkWinner().winner === "") {
          if (gameFlow.getActivePlayer().token === "X") {
            xCells.push(Number(cell.id))
          }
          if (gameFlow.getActivePlayer().token === "O") {
            oCells.push(Number(cell.id))
          }
          board.push(cell.id) 
          turnMessage.textContent = `${gameFlow.getInactivePlayer().name}'s turn: ${gameFlow.getInactivePlayer().token}`;
          cell.textContent = gameFlow.getActivePlayer().token;  
          gameFlow.switchPlayerTurn();
        }
        if (board.length === 9) {
          turnMessage.textContent = "Tie Game"
        }
        //check for winner
        if (gameFlow.checkWinner().winner === "X") {
          turnMessage.textContent = gameFlow.playerOne.name + ' Wins!!';
        }
        if (gameFlow.checkWinner().winner === "O") {
          turnMessage.textContent = gameFlow.playerTwo.name + ' Wins!!';
        }
      }, {once:true})
    }
  }
  
  const startGame = document.querySelector('.new-game');
  startGame.addEventListener('click', () => {
    container.innerHTML = "";
    xCells.length = 0;
    oCells.length = 0;
    board.length = 0;
    createBoard();
    gameFlow.resetPlayers();
    turnMessage.classList.remove('hidden');
    turnMessage.textContent = `${gameFlow.getActivePlayer().name}'s turn: ${gameFlow.getActivePlayer().token}`;
  })

  return {
    board,
    xCells,
    oCells
  }
  })();

  const gameFlow = (() => {
    const playerOne = createPlayer('Treya', 'X');
    const playerTwo = createPlayer('Cameron', 'O');
    let activePlayer;
    let inactivePlayer;

    const resetPlayers = () => {
      activePlayer = playerOne;
      inactivePlayer = playerTwo;

      return activePlayer, inactivePlayer;
    }

    const getActivePlayer = () => activePlayer;

    const getInactivePlayer = () => inactivePlayer;

    const switchPlayerTurn = () => {
      activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
      inactivePlayer = inactivePlayer === playerTwo ? playerOne : playerTwo;
    }

    const checkWinner = () => {
      let winner = "";
      //winning conditions
      const w1 = [1, 2, 3];
      const w2 = [4, 5, 6];
      const w3 = [7, 8, 9];
      const w4 = [1, 4, 7];
      const w5 = [2, 5, 8];
      const w6 = [3, 6, 9];
      const w7 = [1, 5, 9];
      const w8 = [3, 5, 7];
      if (w1.every(i => gameBoard.xCells.includes(i)) ||
      w2.every(i => gameBoard.xCells.includes(i)) ||
      w3.every(i => gameBoard.xCells.includes(i)) ||
      w4.every(i => gameBoard.xCells.includes(i)) ||
      w5.every(i => gameBoard.xCells.includes(i)) ||
      w6.every(i => gameBoard.xCells.includes(i)) ||
      w7.every(i => gameBoard.xCells.includes(i)) ||
      w8.every(i => gameBoard.xCells.includes(i))) {
        // console.log("X wins")
        winner = 'X';
      }
      if (w1.every(i => gameBoard.oCells.includes(i)) ||
      w2.every(i => gameBoard.oCells.includes(i)) ||
      w3.every(i => gameBoard.oCells.includes(i)) ||
      w4.every(i => gameBoard.oCells.includes(i)) ||
      w5.every(i => gameBoard.oCells.includes(i)) ||
      w6.every(i => gameBoard.oCells.includes(i)) ||
      w7.every(i => gameBoard.oCells.includes(i)) ||
      w8.every(i => gameBoard.oCells.includes(i))) {
        winner = 'O';
      }
      return {winner}
    }

    return {
      getActivePlayer,
      getInactivePlayer,
      switchPlayerTurn,
      checkWinner,
      resetPlayers,
      playerOne,
      playerTwo
    };
  })();

// //Player object store players
// const Player = () => {


//     let activePlayer = players[0];
//     let inactivePlayer = players[1];

//     const switchPlayerTurn = () => {
//       activePlayer = activePlayer === players[0] ? players[1] : players[0];
//       inactivePlayer = inactivePlayer === players[1] ? players[0] : players[1];
//     };

//     const getActivePlayer = () => activePlayer;

//     const getInactivePlayer = () => inactivePlayer;

//     return {
//       getActivePlayer,
//       getInactivePlayer,
//       switchPlayerTurn,
//       players
//     };
// };

// const Game = (() => {
  
//   const playerForm = document.querySelector('.create-players');
//   const turnAnnouncer = document.querySelector('.turn');
//   const gameboardContainer = document.querySelector('.gameboard-container');
//   const newGameBtn = document.querySelector('.new-game');
//   const playerButton = document.querySelector('.submit-players');

//   // let playerOneName = "Player One";
//   // let playerTwoName = "Player Two";

//   // console.log(playerOneName)
//   //start game on button click
//   const startGame = () => {
//     Player();
    
//     if (document.querySelector('#player-one').value != "" && document.querySelector('#player-two').value != "") {
//       // console.log(playerOneName, playerTwoName)
//       playerForm.classList.add('hidden');
//       turnAnnouncer.classList.remove('hidden');
//       gameboardContainer.classList.remove('hidden');
//       newGameBtn.classList.remove('hidden');
//       // Gameboard.refreshGameboard();
//       Gameboard.gameController();
//       // Gameboard.checkForWinner();
//     }
//   }

//   playerButton.addEventListener('click', startGame);

//   //new game on button click
//   newGameBtn.addEventListener('click', () => {
//       document.querySelector('#player-one').value = "";
//       document.querySelector('#player-two').value = "";
//       playerForm.classList.remove('hidden');
//       turnAnnouncer.classList.add('hidden');
//       gameboardContainer.classList.add('hidden');
//       newGameBtn.classList.add('hidden');
//       Gameboard.refreshGameboard();
//       // Gameboard.gameController();
//       // Gameboard.checkForWinner();
//     })

//     // return {
//     //   // playerOneName,
//     //   // playerTwoName,
//     //   startGame
//     // }
// })();

// const Gameboard = (() => {
  
//   const playerTurn = document.querySelector('.turn');
//   const space = document.querySelectorAll('.space');
//   let counter = 0;

//   const refreshGameboard = () => {
//     space.forEach((e, index) => {
//       e.textContent = "";
//       e.setAttribute('data-token', index);
//       e.removeEventListener('click', turnControl);
//     })
//   }

//   const turnControl = () => {
//     let player = Player();
//     space.forEach(function (element) {
//       if (checkForWinner() !== "") {
//           element.textContent = "";
//       } else {
//         if (counter < 9) {
//           element.setAttribute('data-token', player.getActivePlayer().token);
//           playerTurn.textContent = `${player.getInactivePlayer().name}'s turn: ${player.getInactivePlayer().token}`;
//           element.textContent = player.getActivePlayer().token;
//           player.switchPlayerTurn();
//           checkForWinner();
//           counter++;
//           console.log(counter);
//         } 
//         if (counter === 9 && checkForWinner() === "") {
//           player.switchPlayerTurn();
//           element.setAttribute('data-token', player.getActivePlayer().token);
//           element.textContent = player.getActivePlayer().token;
//           playerTurn.textContent = "That's a tie!"
//         }
//       }
//     })
//   }

  

//   const gameController = () => {
//     let player = Player();
//     counter = 0;

//     playerTurn.textContent = `${player.getActivePlayer().name}'s turn: ${player.getActivePlayer().token}`;

//     space.forEach(function (element) {
//       element.addEventListener('click', turnControl, {once: true});
//     })
    
      
      
//   }

//   const checkForWinner = () => {
//     console.log("check for winner run")
//     let player = Player();
//     let winner = "";
//     //row 1 check
//     if (space[0].dataset.token === space[1].dataset.token  && space[1].dataset.token === space[2].dataset.token) {
//       playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
//       return winner = player.getInactivePlayer().name;
//     }

//     //row 2 check
//     if (space[3].dataset.token === space[4].dataset.token && space[4].dataset.token === space[5].dataset.token) {
//       playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
//       return winner = player.getInactivePlayer().name;
//     }

//     //row 3 check 
//     if (space[6].dataset.token === space[7].dataset.token && space[7].dataset.token === space[8].dataset.token) {
//       playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
//       return winner = player.getInactivePlayer().name;
//     }

//     //col 1 check 
//     if (space[0].dataset.token === space[3].dataset.token && space[3].dataset.token === space[6].dataset.token) {
//       playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
//       return winner = player.getInactivePlayer().name;
//     }

//     //col 2 check
//     if (space[1].dataset.token === space[4].dataset.token && space[4].dataset.token === space[7].dataset.token) {
//       playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
//       return winner = player.getInactivePlayer().name;
//     }

//     //col 3 check 
//     if (space[2].dataset.token === space[5].dataset.token && space[5].dataset.token === space[8].dataset.token) {
//       playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
//       return winner = player.getInactivePlayer().name;
//     }

//     //dia 1 check
//     if (space[0].dataset.token === space[4].dataset.token && space[4].dataset.token === space[8].dataset.token) {
//       playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
//       return winner = player.getInactivePlayer().name;
//     }

//     //dia 2 check
//     if (space[2].dataset.token === space[4].dataset.token && space[4].dataset.token === space[6].dataset.token) {
//       playerTurn.textContent = `🎉 ${player.getInactivePlayer().name} won! 🎉`;
//       return winner = player.getInactivePlayer().name;
//     }
//     return winner;
//   }

//   return {
//     refreshGameboard,
//     checkForWinner,
//     gameController
//   }
// })();