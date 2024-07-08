import { expect, test } from 'vitest';
import { createPlayer, createBoard, createGame } from './game';

const player1 = createPlayer('Player 1', 'O');
const player2 = createPlayer('Player 2', 'X');

test('turn works', () => {
	const board = createBoard(player1, player2);
	const game = createGame(player1, player2, board);
	game.player1Turn(0, 0);
	expect(game.board.positions).toEqual([
		['O', '', ''],
		['', '', ''],
		['', '', '']
	]);
});

test('turn works', () => {
	const board = createBoard(player1, player2);
	const game = createGame(player1, player2, board);
	game.player1Turn(0, 1);
	expect(game.board.positions).toEqual([
		['', 'O', ''],
		['', '', ''],
		['', '', '']
	]);
});
