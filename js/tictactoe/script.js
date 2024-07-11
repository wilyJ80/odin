'use strict';

import { createPlayer, createGame } from "./game.js";

const player1 = createPlayer('Player 1', 'O');
const player2 = createPlayer('Player 2', 'X');
const game = createGame(player1, player2);
let currentPlayer = player1;

const status = document.querySelector('#status');
status.textContent = `${currentPlayer.name}'s turn`;

const updateBoard = () => {
	const board = document.querySelector('#board');
	game.positions.forEach((row, rowIndex) => {
		row.forEach((marker, colIndex) => {
			const positionId = `pos_${rowIndex * 3 + colIndex}`; // Calculate position ID
			const positionDiv = document.getElementById(positionId);
			positionDiv.textContent = marker; // Update marker in the corresponding grid cell
		});
	});
};

const positions = document.querySelectorAll('.positions');
positions.forEach((position, index) => {
	position.addEventListener('click', () => {
		const rowIndex = Math.floor(index / 3);
		const colIndex = index % 3;

		if (!game.positions[rowIndex][colIndex]) {
			if (currentPlayer === player1) {
				game.player1Turn(rowIndex, colIndex);
				if (game.checkWin(player1.marker)) {
					status.textContent = `${player1.name} wins!`;
					return;
				}
				currentPlayer = player2;
			} else {
				game.player2Turn(rowIndex, colIndex);
				if (game.checkWin(player2.marker)) {
					status.textContent = `${player2.name} wins!`;
					return;
				}
				currentPlayer = player1;
			}
			updateBoard();
			status.textContent = `${currentPlayer.name}'s turn`;
		}
	})
})

// Map grid to array
// Display message
// Player turn
// Check result
// Prompt to replay
updateBoard();
