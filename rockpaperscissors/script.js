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
			// TIE: replay the round
			playRound(playerSelection, computerSelection);

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
			// TIE: replay the round
			playRound(playerSelection, computerSelection);

		} else if (scissorsRegex.test(computerSelection)) {
			return "You lose! Scissors beat Paper!";
		}
	}

	// Regex test: player chooses scissors
	if (scissorsRegex.test(computerSelection)) {

		if (rockRegex.test(computerSelection)) {
			return "You lose! Rock beats Scissors!";

		} else if (paperRegex.test(computerSelection)) {
			return "You win! Scissors beats Paper!";

		} else if (scissorsRegex.test(computerSelection)) {
			// TIE: replay the round
			playRound(playerSelection, computerSelection);
		}
	}
	
	// Player input did not match any of the valid options
	console.log("Matching error: player input not valid!");
}
