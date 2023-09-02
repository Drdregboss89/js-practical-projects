/** @format */

// let today = new Date();
// let hour = "";

// if ((hour) => 6 && hour < 12) {
//   console.log("good morning");
// } else if ((hour) => 12 && hour < 5) {
//   console.log("good day");
// }
function playGame(selectMove) {
  if (selectMove === "Paper") {
    const computerMove = rock();
    let result = "";

    if (computerMove === "Rock") {
      outcome = "Tie";
    } else if (computerMove === "Scissor") {
      outcome = "you win";
    } else if (computerMove === "Paper") {
      outcome = "you loose";
    } else if (selectMove === "Rock") {
      const computerMove = rock();
      let result = ``;

      if (computerMove === "Rock") {
        result = "Tie";
      } else if (computerMove === "Scissor") {
        result = "you win";
      } else if (computerMove === "Paper") {
        result = "You Loose";
      }
    }
    alert(
      `You select ${selectMove}. computer select ${computerMove} ${outcome}`
    );
  }
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
