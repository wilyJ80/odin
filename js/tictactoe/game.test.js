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

test('turn works in another position', () => {
	const game = createGame(player1, player2);
	game.player1Turn(0, 1);
	expect(game.positions).toEqual([
		['', 'O', ''],
		['', '', ''],
		['', '', '']
	]);
});

test('turn works with two players', () => {
	const game = createGame(player1, player2);
	game.player1Turn(0, 1);
	game.player2Turn(0, 0);
	expect(game.positions).toEqual([
		['X', 'O', ''],
		['', '', ''],
		['', '', '']
	]);
});

test('overwriting is not allowed', () => {
	const game = createGame(player1, player2);
	game.player1Turn(0, 1);
	game.player2Turn(0, 0);
	game.player1Turn(0, 0);
	expect(game.positions).toEqual([
		['X', 'O', ''],
		['', '', ''],
		['', '', '']
	]);
});

test('winning condition', () => {
	const game = createGame(player1, player2);
	game.player1Turn(0, 0);
	game.player1Turn(1, 1);
	game.player1Turn(2, 2);
	expect(game.checkWin(player1.marker)).toBe(1);
});

test('draw', () => {
	const game = createGame(player1, player2);
	game.player1Turn(0, 0);
	game.player1Turn(0, 2);
	game.player1Turn(1, 2);
	game.player1Turn(2, 1);
	game.player2Turn(0, 1);
	game.player2Turn(1, 0);
	game.player2Turn(1, 1);
	game.player2Turn(2, 0);
	game.player2Turn(2, 2);
	expect(game.checkWin()).toBe(0);
});

// test.todo('test full game loop');
