const textArea = document.querySelector('textarea');
textArea.value += 'Welcome to the echo terminal!\n';

let buffer = '';
const isDigitRegex = /\S/;
const isSpaceRegex = /\s/;
const backspaceRegex = /Backspace/;

textArea.addEventListener("keydown", (event) => {
	event.preventDefault();

	if (event.key === "Enter") {
		// optinally handle empty buffer to avoid skipping two lines
		textArea.value += '\n' + buffer + '\n';
		buffer = '';
		console.log('*** buffer clean');
		textArea.scrollTop = textArea.scrollHeight;

	} else if (isSpaceRegex.test(event.key)) {
		buffer += ' ';
		textArea.value += ' ';
		console.log(buffer);
		textArea.scrollTop = textArea.scrollHeight;

	} else if (backspaceRegex.test(event.key)) {
		buffer = buffer.slice(0, -1);
		textArea.value = textArea.value.slice(0, -1);
		console.log(buffer);
		textArea.scrollTop = textArea.scrollHeight;

	} else if (isDigitRegex.test(event.key) && event.key.length === 1) {
		buffer += event.key;
		textArea.value += event.key;
		console.log(buffer);
		textArea.scrollTop = textArea.scrollHeight;
	}
});

