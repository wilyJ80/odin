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
	const player1Turn = (x, y) => positions[x][y] = player1.marker;
	const player2Turn = (x, y) => positions[x][y] = player2.marker;

	return { player1Turn, player2Turn, positions };
}

// create players
const player1 = createPlayer('Player 1', 'O');
const player2 = createPlayer('Player 2', 'X');
// gameloop: players take turns
// player 1 fills a position
// player 2 fills another
// winning condition is checked
// player in winning position wins
