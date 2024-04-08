const container = document.querySelector(".container");
const button = document.querySelector(".topButton");
const askGridSizeDiv = document.querySelector(".askGridSize");
const input = document.querySelector(".input");
const submitGridSizeButton = document.querySelector(".submitGridSizeButton");
let gridSize = 0;

const openForm = () => {
	// askGridSizeDiv.style.display = "block";
	gridSize = prompt("Please enter desired Grid Size: ");
	if (gridSize <= 100) {
		// gridSize = input.value;
		for (let row = 1; row <= gridSize; row++) {
			const rowContainer = document.createElement("div");
			rowContainer.classList.add("rowContainer");
			container.appendChild(rowContainer);
			for (let column = 1; column <= gridSize; column++) {
				const div = document.createElement("div");
				div.textContent = `${row} x ${column}`;
				div.classList.add("box");
				rowContainer.appendChild(div);
			}
		}
	} else alert("the max grid size allowed is 100, try again");
};

const closeForm = () => {
	askGridSizeDiv.style.display = "none";
	// if (input.value <= 100) {
	// 	gridSize = input.value;
	// 	for (let row = 1; row <= gridSize; row++) {
	// 		const rowContainer = document.createElement("div");
	// 		rowContainer.classList.add("rowContainer");
	// 		container.appendChild(rowContainer);
	// 		for (let column = 1; column <= gridSize; column++) {
	// 			const div = document.createElement("div");
	// 			div.textContent = `${row} x ${column}`;
	// 			div.classList.add("box");
	// 			rowContainer.appendChild(div);
	// 		}
	// 	}
	// } else alert("the max grid size allowed is 100, try again");
};

button.addEventListener("click", openForm);
// submitGridSizeButton.addEventListener("click", closeForm);
