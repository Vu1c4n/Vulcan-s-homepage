//猜数字游戏——————————————————————————————————————————
let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector(".guesses");
let rightOrWrong = document.querySelector(".rightOrWrong");
let lowOrHigh = document.querySelector(".lowOrHigh");

let guessField = document.querySelector(".guessField");
let guessSubmit = document.querySelector(".guessSubmit");

let round = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (round === 1) {
    guesses.textContent = "Guessed numbers:";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    rightOrWrong.textContent = "Congrats!";
    rightOrWrong.style.backgroundColor = "green";
    lowOrHigh.textContent = "";
    setGameOver();
  } else if (round === 10) {
    rightOrWrong.textContent = "GameOver,you stupid!";
    setGameOver();
  } else {
    rightOrWrong.textContent = "Wrong!";
    rightOrWrong.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHigh.textContent = "should be higher";
    } else if (userGuess > randomNumber) {
      lowOrHigh.textContent = "should be lower";
    }
  }
  round++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Restart the game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  round = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guesses.textContent = "Guessed numbers:";
  rightOrWrong.style.backgroundColor = "white";
  lowOrHigh.textContent = "";
  guessField.focus();
  rightOrWrong.style.backgroundColor = changedColor;
  rightOrWrong.textContent = "";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}