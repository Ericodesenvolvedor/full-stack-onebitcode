const board = document.getElementById('board');
const squares = document.querySelectorAll('.square');
const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');
const winnerDisplay = document.getElementById('winner');

let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];

function handleSquareClick(event) {
  const index = parseInt(event.target.dataset.square);
  
  if (boardState[index] !== '') {
    return;
  }

  boardState[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  event.target.classList.add('clicked');

  if (checkWinCondition()) {
    winnerDisplay.textContent = `O jogador ${currentPlayer} venceu!`;
    winnerDisplay.style.display = 'block';
    squares.forEach(square => square.removeEventListener('click', handleSquareClick));
    return;
  }

  if (checkTieCondition()) {
    winnerDisplay.textContent = 'Empatou!';
    winnerDisplay.style.display = 'block';
    squares.forEach(square => square.removeEventListener('click', handleSquareClick));
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinCondition() {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticais
    [0, 4, 8], [2, 4, 6] // Diagonais
  ];

  return winCombinations.some(combination => {
    console.log(boardState[combination[0]])
    return boardState[combination[0]] !== '' && // Verifica se a primeira célula não está vazia
           combination.every(index => boardState[index] === currentPlayer); // Verifica se todas as células da combinação são do jogador atual
  });
}

function checkTieCondition() {
  return boardState.every(cell => cell !== '');
}

function resetGame() {
  squares.forEach(square => {
    square.textContent = '';
    square.classList.remove('clicked');
    square.addEventListener('click', handleSquareClick);
  });
  currentPlayer = 'X';
  boardState = ['', '', '', '', '', '', '', '', ''];
  winnerDisplay.style.display = 'none';
}

function startGame() {
  squares.forEach(square => square.addEventListener('click', handleSquareClick));
}

startGame();