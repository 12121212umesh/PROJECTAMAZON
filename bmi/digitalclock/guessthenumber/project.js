// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Select elements
const inputField = document.querySelector("#project1");
const submitButton = document.querySelector(".button button");
const guessesPara = document.querySelectorAll(".button p")[0];
const remainingPara = document.querySelectorAll(".button p")[1];

let previousGuesses = [];
let remainingGuesses = 10;
let gameOver = false;

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (gameOver) return;

  const guess = parseInt(inputField.value);

  if (isNaN(guess)) {
    alert("⚠️ Please enter a valid number.");
  } else if (guess < 1 || guess > 100) {
    alert("🚫 Number must be between 1 and 100.");
  } else {
    checkGuess(guess);
  }

  inputField.value = "";
});

function checkGuess(guess) {
  previousGuesses.push(guess);
  guessesPara.textContent = "Previous guesses: " + previousGuesses.join(", ");

  remainingGuesses--;
  remainingPara.textContent = "Guesses remaining: " + remainingGuesses;

  if (guess === randomNumber) {
    showEndMessage(
      `🎉 Correct! The number was ${randomNumber}. You won in ${
        10 - remainingGuesses
      } attempts.`
    );
  } else if (remainingGuesses === 0) {
    showEndMessage(`❌ Game over! The number was ${randomNumber}.`);
  } else {
    const hint = guess < randomNumber ? "📉 Too low!" : "📈 Too high!";
    alert(hint);
  }
}

function showEndMessage(msg) {
  alert(msg);
  inputField.disabled = true;
  submitButton.disabled = true;
  gameOver = true;

  // Create and show Play Again button
  const playAgainBtn = document.createElement("button");
  playAgainBtn.textContent = "🔁 Play Again";
  playAgainBtn.style.marginTop = "10px";
  document.querySelector(".button").appendChild(playAgainBtn);

  playAgainBtn.addEventListener("click", resetGame);
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  previousGuesses = [];
  remainingGuesses = 10;
  gameOver = false;

  inputField.disabled = false;
  submitButton.disabled = false;
  inputField.value = "";
  guessesPara.textContent = "Previous guesses:";
  remainingPara.textContent = "Guesses remaining: 10";

  // Remove the play again button
  const playAgainBtn = document.querySelector(".button button:last-of-type");
  if (playAgainBtn.textContent.includes("Play Again")) {
    playAgainBtn.remove();
  }
}
