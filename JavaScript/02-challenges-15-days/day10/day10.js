let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  //generate comp choice

  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper,scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(userChoice);
    playGame(userChoice);
  });
});

const drawGame = () => {
  msg.innerText = "game was draw, play again";
  msg.style.backgroundColor = "#081b31";
};

const genCompChoice = () => {
  //rock,paper,scissor
  let option = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(
    Math.random() * 3
  ); /*the random number generates random value  
    multiplyig with the value 3 will give range of 0 to 3 and the decimal value are 
    terminated by thr floor function and stireed in the randidx*/

  return option[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `you Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
