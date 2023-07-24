//player factory function
const createPlayer = (name, token) => {
  return {name, token}
}

//gameBoard object
const gameBoard = (() => {
  const container = document.querySelector('.gameboard-container');
  const turnMessage = document.querySelector(".turn");
  const startGame = document.querySelector('.start-game');
  const createPlayerForm = document.querySelector('.create-players');
  const newGame = document.querySelector('.new-game');
  const playerOneInput = document.querySelector('#player-one');
  const playerTwoInput = document.querySelector('#player-two');
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
          turnMessage.textContent = "🫱🏻‍🫲🏾 Tie Game 🫱🏾‍🫲🏻"
        }
        //check for winner
        if (gameFlow.checkWinner().winner === "X") {
          turnMessage.textContent = '🎉 ' + gameFlow.getInactivePlayer().name + ' won!! 🎉';
          turnMessage.classList.add('winner');
          gameFlow.checkWinner().winningCells.forEach(element => {
            let winningCells = document.getElementById(element);
            winningCells.classList.add('winner');
          });
        }
        if (gameFlow.checkWinner().winner === "O") {
          turnMessage.textContent = '🎉 ' + gameFlow.getInactivePlayer().name + ' won!! 🎉';
          turnMessage.classList.add('winner');
          gameFlow.checkWinner().winningCells.forEach(element => {
            let winningCells = document.getElementById(element);
            winningCells.classList.add('winner');
          });
          
        }
      }, {once:true})
    }
  }
  
  //start game btn
  startGame.addEventListener('click', () => {
    if (playerOneInput.value != "" && playerTwoInput.value != "") {
      xCells.length = 0;
      oCells.length = 0;
      board.length = 0;
      createBoard();
      gameFlow.createPlayers();
      turnMessage.classList.remove('hidden');
      newGame.classList.remove('hidden');
      createPlayerForm.classList.add('hidden');
      turnMessage.textContent = `${gameFlow.getActivePlayer().name}'s turn: ${gameFlow.getActivePlayer().token}`;
    }
    else {
      playerOneInput.classList.add('empty');
      playerTwoInput.classList.add('empty');
    }
  })

  //new game btn
  newGame.addEventListener('click', () => {
    container.innerHTML = "";
    turnMessage.classList.add('hidden');
    newGame.classList.add('hidden');
    turnMessage.classList.remove('winner');
    createPlayerForm.classList.remove('hidden');
    turnMessage.textContent = `${gameFlow.getActivePlayer().name}'s turn: ${gameFlow.getActivePlayer().token}`;
    playerOneInput.value = "";
    playerTwoInput.value = "";
    playerOneInput.classList.remove('empty');
    playerTwoInput.classList.remove('empty');
  })

  return {
    board,
    xCells,
    oCells
  }
  })();

  const gameFlow = (() => {
    let playerOne;
    let playerTwo;
    let activePlayer;
    let inactivePlayer;

    const createPlayers = () => {
    playerOne = createPlayer(document.querySelector('#player-one').value, "X");
    playerTwo = createPlayer(document.querySelector('#player-two').value, 'O');

    activePlayer = playerOne;
    inactivePlayer = playerTwo;

    return playerOne, playerTwo, activePlayer, inactivePlayer;
  }

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
      let winningCells;
      //winning conditions
      const w1 = [1, 2, 3];
      const w2 = [4, 5, 6];
      const w3 = [7, 8, 9];
      const w4 = [1, 4, 7];
      const w5 = [2, 5, 8];
      const w6 = [3, 6, 9];
      const w7 = [1, 5, 9];
      const w8 = [3, 5, 7];

      const winningConditions = [w1, w2, w3, w4, w5, w6, w7, w8];

      winningConditions.forEach(element => {
        if (element.every(i => gameBoard.xCells.includes(i))) {
          winner = 'X';
          winningCells = element;
        }
      });

      winningConditions.forEach(element => {
        if (element.every(i => gameBoard.oCells.includes(i))) {
          winner = 'O';
          winningCells = element;
        }
      });

      return {winner, winningCells}
    }

    return {
      getActivePlayer,
      getInactivePlayer,
      switchPlayerTurn,
      checkWinner,
      resetPlayers,
      playerOne,
      playerTwo,
      createPlayers
    };
  })();
