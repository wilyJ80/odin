const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
	const box = document.createElement("div");
	box.classList.add("box");
	container.appendChild(box);
}

// 1. Set up hover effect event on divs

// 2. Set up event: leave pixelated trail on divs
