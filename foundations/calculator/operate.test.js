import { operate, calculate } from "./operate.js";

test('1 + 2 = 3', () => {
	expect(operate('+', 1, 2)).toBe(3);
});
test('3 - 2 = 1', () => {
	expect(operate('-', 3, 2)).toBe(1);
});
test('3 * 2 = 6', () => {
	expect(operate('*', 3, 2)).toBe(6);
});
test('6 / 3 = 2', () => {
	expect(operate('/', 6, 3)).toBe(2);
});

test('[1 +] does not change stack', () => {
	expect(calculate([1, '+'])).toStrictEqual([1, '+']);
});
test('[1 + 2] results in 3', () => {
	expect(calculate([1, '+', 2])).toStrictEqual([3]);
});
test('[1 + 2 +] results in 3 +', () => {
	expect(calculate([1, '+', 2, '+'])).toStrictEqual([3, '+']);
});
