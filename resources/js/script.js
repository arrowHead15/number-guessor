let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// This generates the new secret target number

const generateTarget = () => Math.floor(Math.random() * 10);

// This determines which guess is closest to the target number

const compareGuesses = (humanGuess, computerGuess, target) => {
  let humanDifference = humanGuess - target;
  let computerDifference = computerGuess - target;
  return Math.abs(humanDifference) <= Math.abs(computerDifference);
};

// This increases the winner's score after each round

const updateScore = winner => {
  winner === 'human' ? humanScore++ : computerScore++;
};

// This updates the round number after each round

const advanceRound = () => currentRoundNumber++;
