let playerWins = 0,
computerWins = 0;
let currentRound = 0;

function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);

	if (choice === 0) {
		return "Rock";
	} else if (choice === 1) {
		return "Paper";
	} else if (choice === 2) {
		return "Scissors";
	}
}

function playRound(playerSelection, computerSelection) {
	// Testing using Regex
	const rockRegex = /rock/i;
	const paperRegex = /paper/i;
	const scissorsRegex = /scissors/i;

	// Regex test: player chooses rock
	if (rockRegex.test(playerSelection)) {
		if (rockRegex.test(computerSelection)) {
			return "TIE!";
		} else if (paperRegex.test(computerSelection)) {
			return "You lose! Paper beats Rock!";
		} else if (scissorsRegex.test(computerSelection)) {
			return "You win! Rock beats Scissors!";
		}
	}

	// Regex test: player chooses paper
	if (paperRegex.test(playerSelection)) {
		if (rockRegex.test(computerSelection)) {
			return "You win! Paper beats Rock!";
		} else if (paperRegex.test(computerSelection)) {
			return "TIE!";
		} else if (scissorsRegex.test(computerSelection)) {
			return "You lose! Scissors beat Paper!";
		}
	}

	// Regex test: player chooses scissors
	if (scissorsRegex.test(playerSelection)) {
		if (rockRegex.test(computerSelection)) {
			return "You lose! Rock beats Scissors!";
		} else if (paperRegex.test(computerSelection)) {
			return "You win! Scissors beats Paper!";
		} else if (scissorsRegex.test(computerSelection)) {
			return "TIE!";
		}
	}

	// Player input did not match any of the valid options
	console.log("Matching error: player input not valid!");
}

function game() {
	/* let count = 0;
	while (count < 5) {
		console.log("Round " + (count + 1)); */

	// playerChoice changed to work with event listener
	// let playerChoice = prompt("Rock, Paper, Scissors?");

	const rockBtn = document.createElement("button");
	const paperBtn = document.createElement("button");
	const scissorsBtn = document.createElement("button");

	rockBtn.textContent = "ROCK";
	paperBtn.textContent = "PAPER";
	scissorsBtn.textContent = "SCISSORS";

	document.body.appendChild(rockBtn);
	document.body.appendChild(paperBtn);
	document.body.appendChild(scissorsBtn);

	const buttons = document.querySelectorAll("button");

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			if (currentRound < 5) {

				const computerChoice = getComputerChoice();
				const playerChoice = button.textContent;
				const result = playRound(playerChoice, computerChoice);
				// console.log(result);

				const resultDiv = document.createElement("div");
				resultDiv.textContent = result;
				document.body.appendChild(resultDiv);

				if (result.startsWith("You win")) {
					playerWins++;
				} else if (result.startsWith("You lose")) {
					computerWins++;
				}

				currentRound++;

				if (currentRound === 5) {

					const finalResultDiv = document.createElement('div');
					// Final game outcome
					if (playerWins > computerWins) {
						finalResultDiv.textContent = "Congrats! You win the game!";
					} else if (computerWins > playerWins) {
						finalResultDiv.textContent = "Sorry. The machine wins. Try again.";
					}

					document.body.appendChild(finalResultDiv);
				}
			}
		});
	});

	// let result = playRound(playerChoice, computerChoice);
	// }
}

game();
