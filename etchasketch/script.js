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
// How to leave pixelated trail on divs:
// 2.1 mousemove event listener?
// 2.2 get correct mouse coordinates at div
// 2.3 create dot div
// 2.4 adjust its dimensions
// 2.5 append this child
