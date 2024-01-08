const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
	const box = document.createElement("div");
	box.classList.add("box");
	container.appendChild(box);
}

// 1. Set up hover effect event on divs
const boxes = document.querySelectorAll(".box");

for (const box of boxes) {
	box.addEventListener("mouseenter", () => {
		box.style.background = "lightblue";
	});

	box.addEventListener("mouseleave", () => {
		box.style.background = "";
	});
}

// 2. Set up event: leave pixelated trail on divs
