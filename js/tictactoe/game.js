'use strict';

export function createPlayer(name, marker) {
	return { name, marker };
}

export function createGame(player1, player2) {
	const positions = [
		['', '', ''],
		['', '', ''],
		['', '', '']
	];

	const isPositionTaken = (x, y) => positions[x][y] !== '';

	const player1Turn = (x, y) => {
		if (!isPositionTaken(x, y)) {
			positions[x][y] = player1.marker;
		}
	};
	const player2Turn = (x, y) => {
		if (!isPositionTaken(x, y)) {
			positions[x][y] = player2.marker;
		}
	};

	const winningCombinations = [
		// Rows
		[[0, 0], [0, 1], [0, 2]],
		[[1, 0], [1, 1], [1, 2]],
		[[2, 0], [2, 1], [2, 2]],
		// Columns
		[[0, 0], [1, 0], [2, 0]],
		[[1, 0], [1, 1], [1, 2]],
		[[2, 0], [2, 1], [2, 2]],
		// Diagonals
		[[0, 0], [1, 1], [2, 2]],
		[[0, 2], [1, 1], [2, 0]]

	];

	const checkWin = () => {
		if (winningCombinations.some(combination =>
			combination.every(([x, y]) => positions[x][y] === 'O'))) {
			return 1;
		} else if (winningCombinations.some(combination =>
			combination.every(([x, y]) => positions[x][y] === 'O'))) {
			return 2;
		} else {
			return 0;
		}
	}

	return { player1Turn, player2Turn, positions, checkWin };
}

// create players
const player1 = createPlayer('Player 1', 'O');
const player2 = createPlayer('Player 2', 'X');
// gameloop: players take turns
// player 1 fills a position
// player 2 fills another
// winning condition is checked
// player in winning position wins
