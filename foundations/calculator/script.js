function add(a, b) {
	return parseInt(a) + parseInt(b);
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

function toPrefixNotation(arr) {
	const tmp = arr[1];
	arr[1] = arr[0];
	arr[0] = tmp;
}

function prefixCalc(arr) {
	if (arr.length == 2) {
		toPrefixNotation(arr);
	} else {
		const result = operate(arr[0], arr[1], arr[2]);
		arr.splice(0, 3, result);
		
	}
}

let display = document.querySelector(".display");
let displayValue = "";
let dataStack = [];

document.querySelectorAll(".number").forEach((button) => {
	button.addEventListener("click", () => {
		display.textContent += button.textContent;
		displayValue += parseInt(button.textContent, 10);
	});
}); 

document.querySelectorAll('.operation').forEach((button) => {
	button.addEventListener("click", () => {

		dataStack.push(displayValue);
		const operation = button.textContent;
		dataStack.push(operation);

		if (operation === '=') {
			dataStack.pop();
			prefixCalc(dataStack);

			display.textContent = dataStack[0];
			displayValue = 0;

		} else {
			prefixCalc(dataStack);
			display.textContent = "0";
			displayValue = 0;
		}
	});
});
