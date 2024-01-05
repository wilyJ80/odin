function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);

	if (choice === 0) {
		return "Rock";
	} else if (choice === 1) {
		return "Paper";
	} else if (choice === 2){
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

	let playerWins = 0, computerWins = 0;
	let count = 0;
	while (count < 5) {
		console.log("Round " + (count + 1));

		let playerChoice = prompt("Rock, Paper, Scissors?");
		let computerChoice = getComputerChoice();

		let result = playRound(playerChoice, computerChoice);
		console.log(result);

		if (result.startsWith("You win")) {
			playerWins++;
			count++;

		} else if (result.startsWith("You lose")) {
			computerWins++;
			count++;
		}
	}

	// Final game outcome
	if (playerWins > computerWins) {
		console.log("Congrats! You win the game!");

	} else {
		console.log("Sorry. The machine wins. Try again.");
	}
}

game();
