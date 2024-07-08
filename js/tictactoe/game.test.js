import { expect, test } from 'vitest';
import { createPlayer, createGame } from './game';

const player1 = createPlayer('Player 1', 'O');
const player2 = createPlayer('Player 2', 'X');

test('turn works', () => {
	const game = createGame(player1, player2);
	game.player1Turn(0, 0);
	expect(game.positions).toEqual([
		['O', '', ''],
		['', '', ''],
		['', '', '']
	]);
});

test('turn works', () => {
	const game = createGame(player1, player2);
	game.player1Turn(0, 1);
	expect(game.positions).toEqual([
		['', 'O', ''],
		['', '', ''],
		['', '', '']
	]);
});
