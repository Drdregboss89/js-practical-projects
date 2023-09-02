/** @format */

// let today = new Date();
// let hour = "";

// if ((hour) => 6 && hour < 12) {
//   console.log("good morning");
// } else if ((hour) => 12 && hour < 5) {
//   console.log("good day");
// }
const score = {
  wins: 0,
  loses: 0,
  ties: 0,
};

function playGame(selectMove) {
  const computerMove = rock();
  let result = "";

  if (selectMove === "Paper") {
    if (computerMove === "Rock") {
      result = "you loose";
    } else if (computerMove === "Scissor") {
      result = "you Win";
    } else if (computerMove === "Paper") {
      result = "Its a Tie";
    }
  } else if (selectMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Scissor") {
      result = "you win";
    } else if (computerMove === "Paper") {
      result = "You Loose";
    }
  } else if (selectMove === "Scissor") {
    if (computerMove === "Rock") {
      result = "you Loose";
    } else if (computerMove === "Scissor") {
      result = "its a Tie";
    } else if (computerMove === "Paper") {
      result = "you Win";
    }
  }

  if (result === 'you Win') {
    score.win = +;
  }else if (result === 'you Loose') {
    score.loses =+
  }

  alert(`You select ${selectMove}. computer select ${computerMove}. ${result}`);
}

function rock() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = " Scissor";
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = " Paper";
  }
  return computerMove;
}
