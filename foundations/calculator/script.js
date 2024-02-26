import { calculate } from "./operate.js";

let display = document.querySelector(".display");
let displayValue = "";
let dataStack = [];
let operationEndFlag;

document.querySelectorAll(".number").forEach((button) => {
	button.addEventListener("click", () => {

		if (operationEndFlag) {
			display.textContent = "0";
			operationEndFlag = !operationEndFlag;
		}
		display.textContent += button.textContent;
		displayValue += parseFloat(button.textContent, 10);
	});
}); 

document.querySelectorAll('.operation').forEach((button) => {
	button.addEventListener("click", () => {

		// operation and number chosen added to stack
		const numberChosen = parseFloat(displayValue);
		dataStack.push(numberChosen);
		const operation = button.textContent;
		dataStack.push(operation);

		// perform calculation
		dataStack = calculate(dataStack);

		// clean display
		displayValue = 0;
		display.textContent = "0";
	});
}); 

document.querySelector('.equals').addEventListener('click', () => {
	// calculate with the rest of stack items
	if (dataStack.length > 0) {
		const numberChosen = parseFloat(displayValue);
		dataStack.push(numberChosen);
	}

	if (dataStack.length === 3) {
		dataStack = calculate(dataStack);
		// display top of data stack
		display.textContent = dataStack[0];
		// clear stack completely
		dataStack = [];
		// next inputs will start fresh in the display value
		displayValue = 0;
		operationEndFlag = true;
	}
});


