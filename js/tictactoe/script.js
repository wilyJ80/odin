import { createPlayer, createGame } from "./game.js";

const player1 = createPlayer('Player 1', 'O');
const player2 = createPlayer('Player 2', 'X');
const game = createGame(player1, player2);

const status = document.querySelector('#status');
status.textContent = "Player 1 turn";

// Map grid to array
// Display message
// Player turn
// Check result
// Prompt to replay
