function add(a, b) {
	return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, a, b) {
	if (operator === "+") {
		return add(a, b);
	}
	if (operator === "-") {
		return subtract(a, b);
	}
	if (operator === "*") {
		return multiply(a, b);
	}
	if (operator === "/") {
		return divide(a, b);
	}
}

function calculate(arr) {
	if (arr.length === 2) {
		return arr;
	} else {
		const a = arr[0];
		const b = arr[2];
		const operator = arr[1];

		const result = operate(operator, a, b);
		arr.splice(0, 3, result);
		return arr;
	}
}

export { operate, calculate };

