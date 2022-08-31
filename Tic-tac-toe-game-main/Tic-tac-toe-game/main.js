game_div = document.querySelectorAll(".game-square")
h2 = document.querySelector("h2")

const playerOne = 'X';
const playerTwo = 'O';
var game_table = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

startGame();

function startGame() {
  game_div.forEach((cell, index) => {
    cell.innerHTML = '';
    cell.addEventListener('click', handleClick.bind(null, cell, index));
  });
};


function handleClick(cell, index) {
  const cellValue = cell.innerHTML;
  if (cellValue === '') {
    if (h2.innerHTML === 'Player 1') {
      cell.innerHTML = playerOne;
      h2.innerHTML = 'Player 2';
      game_table[Math.floor(index / 3)][index % 3] = playerOne;
    } else {
      cell.innerHTML = playerTwo;
      h2.innerHTML = 'Player 1';
      game_table[Math.floor(index / 3)][index % 3] = playerTwo;
    }
  }
  cell.removeEventListener('click', handleClick);

  checkWinner()
}

// check
function checkWinner() {
    // check for rows
    for (let i = 0; i < 3; i++) {
      if (game_table[i][0] === game_table[i][1] && game_table[i][0] === game_table[i][2] && game_table[i][0] !== '') {
        showResult(game_table[i][0]);
        return;
      }
    }
    // check for columns
    for (let i = 0; i < 3; i++) {
      if (game_table[0][i] === game_table[1][i] && game_table[0][i] === game_table[2][i] && game_table[0][i] !== '') {
        showResult(game_table[0][i]);
        return;
      }
    }
    // check for diagonals
    if (game_table[0][0] === game_table[1][1] && game_table[0][0] === game_table[2][2] && game_table[0][0] !== '') {
      showResult(game_table[0][0]);
      return;
    }
    if (game_table[0][2] === game_table[1][1] && game_table[0][2] === game_table[2][0] && game_table[0][2] !== '') {
      showResult(game_table[0][2]);
      return;
    }
    
    var count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (game_table[i][j] != '') {
          count++;
        }
      }
    }
    if (count == 9) {
      showResult('Tie');
      return;
    }
  }

  function showResult(symbol) {
    if (symbol === playerOne) {
        h2.innerHTML = 'Player 1 Win!';
    } else if (symbol === playerTwo) {
        h2.innerHTML = 'Player 2 Win!';

    } else {
        h2.innerHTML = 'Tie!';
    }
    // h2.style.display = 'flex';
  }

  function restartGame() {
    h2.style.display = 'none';
    h2.innerHTML = 'Player 1';

    game_table = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];

    startGame();
  }
