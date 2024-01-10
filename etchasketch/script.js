const container = document.querySelector(".container");

function createGrid(dimensions = 16) {
	const canvas = document.createElement("div");
	canvas.classList.add("canvas");
	container.appendChild(canvas);

	for (let i = 0; i < dimensions; i++) {
		const row = document.createElement("div");
		row.classList.add("row");

		for (let j = 0; j < dimensions; j++) {
			const box = document.createElement("div");
			box.classList.add("box");
			row.appendChild(box);
		}

		canvas.appendChild(row);
	}

	container.appendChild(canvas);

	const boxes = document.querySelectorAll(".box");

	for (const box of boxes) {
		box.addEventListener("mouseover", () => {
			box.style.backgroundColor = "#00f";
		});
	}
}

createGrid();

const button = document.createElement("button");
button.textContent = "Generate";
container.appendChild(button);

button.addEventListener("click", () => {
	for (;;) {
		const noOfSquaresPerGrid = prompt(
			"Number of squares per side for the new grid?",
		);

		if (noOfSquaresPerGrid <= 100) {
			document.querySelector(".canvas").remove();
			createGrid(noOfSquaresPerGrid);
			break;
		}

		alert("Invalid grid size: needs to be <= 100");
	}
});

// Add ?x? grid without changing the amount of pixels used
