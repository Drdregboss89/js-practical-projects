/** @format */

// let today = new Date();
// let hour = "";

// if ((hour) => 6 && hour < 12) {
//   console.log("good morning");
// } else if ((hour) => 12 && hour < 5) {
//   console.log("good day");
// // }
// let score = JSON.parse(localStorage.getItem("score")) || {
//   wins: 0,
//   loses: 0,
//   ties: 0,
// }; /* short cut for using the if statement for setting default value*/
// /*if (!score shortcut for if score === null) {
//   score{
//     wins = 0,
//     loses = 0,
//     ties=0
//   }
// }*/

// updateScore();

// function playGame(selectMove) {
//   const computerMove = rock();
//   let result = "";

//   if (selectMove === "Paper") {
//     if (computerMove === "Rock") {
//       result = "you Loose";
//     } else if (computerMove === "Scissor") {
//       result = "you Win";
//     } else if (computerMove === "Paper") {
//       result = "Its a Tie";
//     }
//   } else if (selectMove === "Rock") {
//     if (computerMove === "Rock") {
//       result = "Its a Tie";
//     } else if (computerMove === "Scissor") {
//       result = "you Win";
//     } else if (computerMove === "Paper") {
//       result = "you Loose";
//     }
//   } else if (selectMove === "Scissor") {
//     if (computerMove === "Rock") {
//       result = "you Loose";
//     } else if (computerMove === "Scissor") {
//       result = "Its a Tie";
//     } else if (computerMove === "Paper") {
//       result = "you Win";
//     }
//   }

//   if (result === "you Win") {
//     score.wins += 1;
//   } else if (result === "you Loose") {
//     score.loses += 1;
//   } else if (result === "Its a Tie") {
//     score.ties += 1;
//   }

//   localStorage.setItem("score", JSON.stringify(score));

//   document.querySelector('.js-result').innerHTML = result;
//   document.querySelector('.js-move')
//   .innerHTML = `You : ${selectMove}  ${computerMove} : Computer`;

//   updateScore();

//   // alert(`You select ${selectMove}. computer select ${computerMove}. ${result}
//   //  Wins : ${score.wins} Loses : ${score.loses} Ties :${score.ties}`);
// }

// function updateScore() {
//   document.querySelector(
//     `.js-score`)
//       .innerHTML = `Wins : ${score.wins} Loses : ${score.loses} Ties :${score.ties}`;
// }

// function rock() {
//   const randomNumber = Math.random();
//   let computerMove = "";

//   if (randomNumber > 0 && randomNumber < 1 / 3) {
//     computerMove = "Rock";
//   } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
//     computerMove = " Scissor";
//   } else if (randomNumber > 2 / 3 && randomNumber < 1) {
//     computerMove = " Paper";
//   }
//   return computerMove;
// }




let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/
let isAutoplaying = false;
let intervalId;

 function autoPlay() {

  if (!isAutoplaying) {

     intervalId = setInterval(function(){
    const computerMove = rock();
    playGame(computerMove);
  } , 1000)

     isAutoplaying = true;

  } else {

    clearInterval(intervalId);
  isAutoplaying = false;
  }

  
 }

document.querySelector('.js-rock').addEventListener('click',() => {
  playGame('rock');
});

document.querySelector('.js-paper').addEventListener('click',() =>{
  playGame('paper');
});

document.querySelector('.js-scissor').addEventListener('click',() =>{
  playGame('scissors');
});

document.body.addEventListener('keydown',(event) => {

 if (event.key === 'r') {
  playGame('rock')
 }else if (event.key === 'p') {
  playGame('paper')
 } else if (event.key == 's') {
  playGame('scissors')
 }
})




 function playGame(selectMove) {
   const computerMove = rock();

   let result = '';

   if (selectMove === 'scissors') {
     if (computerMove === 'rock') {
       result = 'You lose.';
     } else if (computerMove === 'paper') {
       result = 'You win.';
     } else if (computerMove === 'scissors') {
       result = 'Tie.';
     }

   } else if (selectMove === 'paper') {
     if (computerMove === 'rock') {
       result = 'You win.';
     } else if (computerMove === 'paper') {
       result = 'Tie.';
     } else if (computerMove === 'scissors') {
       result = 'You lose.';
     }
    
   } else if (selectMove === 'rock') {
     if (computerMove === 'rock') {
       result = 'Tie.';
     } else if (computerMove === 'paper') {
       result = 'You lose.';
     } else if (computerMove === 'scissors') {
       result = 'You win.';
     }
   }

   if (result === 'You win.') {
     score.wins += 1;
   } else if (result === 'You lose.') {
     score.loses += 1;
   } else if (result === 'Tie.') {
     score.ties += 1;
   }

   localStorage.setItem('score', JSON.stringify(score));

   updateScoreElement();

   document.querySelector('.js-result').innerHTML = result;
   document.querySelector('.js-moves').innerHTML = `You ${selectMove} ::
 ${computerMove}
 Computer`;
 }

 function updateScoreElement() {
 document.querySelector('.js-score')
     .innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
 }

 function rock() {
   const randomNumber = Math.random();

   let computerMove = '';
   if (randomNumber >= 0 && randomNumber < 1 / 3) {
     computerMove = 'rock';
   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
     computerMove = 'paper';
   } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
     computerMove = 'scissors';
   }

   return computerMove;
}
