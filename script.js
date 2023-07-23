//player factory function
const createPlayer = (name, token) => {
  return {name, token}
}

//gameBoard object
const gameBoard = (() => {
  const container = document.querySelector('.gameboard-container');
  let board = [];

  const createBoard = () => {
    for (i = 1; i < 10; i++) {
      board.push(i);
      const cell = document.createElement('div');
      container.appendChild(cell);
      cell.className = i;
      cell.addEventListener('click', () => {
        cell.textContent = cell.className;   
        console.log(gameFlow().getActivePlayer());
        console.log(gameFlow().getInactivePlayer()); 
        gameFlow().switchPlayerTurn(); 
      }, {once:true})
    }
  }

    const startGame = document.querySelector('.new-game');
  startGame.addEventListener('click', () => {
    container.innerHTML = "";
    board = [];
    createBoard();
    console.log(board)
  })
  })();

  const gameFlow = () => {
    const playerOne = createPlayer('Treya', 'X');
    const playerTwo = createPlayer('Cameron', 'O');

    let activePlayer = playerOne;
    let inactivePlayer = playerTwo;

    const getActivePlayer = () => activePlayer;

    const getInactivePlayer = () => inactivePlayer;

    const switchPlayerTurn = () => {
      activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
      inactivePlayer = inactivePlayer === playerTwo ? playerOne : playerTwo;
    }

    return {
      getActivePlayer,
      getInactivePlayer,
      switchPlayerTurn
    };
  }

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