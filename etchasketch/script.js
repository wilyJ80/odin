const container = document.querySelector(".container");

function createGrid(dimensions = 16) {
	for (let i = 0; i < dimensions; i++) {
		const row = document.createElement("div");
		row.classList.add("row");

		for (let j = 0; j < dimensions; j++) {
			const box = document.createElement("div");
			box.classList.add("box");
			row.appendChild(box);
		}

		container.appendChild(row);
	}
}

createGrid();

const boxes = document.querySelectorAll(".box");

for (const box of boxes) {
	box.addEventListener("mouseover", () => {
		box.style.backgroundColor = "#00f";
	});
}

const button = document.createElement("button");
button.textContent = "Generate";
container.appendChild(button);

button.addEventListener("click", () => {
	for (;;) {
		const noOfSquaresPerGrid = prompt(
			"Number of squares per side for the new grid?",
		);

		if (noOfSquaresPerGrid <= 100) {
			alert("Valid noOfSquaresPerGrid");
			break;
		}

		alert("Invalid grid size: needs to be <= 100");
	}
});

// Remove existing grid
// Add ?x? grid without changing the amount of pixels used
