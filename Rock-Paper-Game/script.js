let con = document.querySelectorAll(".con");
let tieUpPage = document.querySelector(".tieUp-page");
let computer = document.querySelectorAll(".computer");
let user = document.querySelector(".user");
let machine = document.querySelector(".pc");
let winningPage = document.querySelector(".winning-page");
let winner = document.querySelector(".you-win");
let play = document.querySelector(".playAgain-btn");
let random = Math.floor(Math.random() * 3);
let triangle = document.querySelector(".img-triangle");
let rulebtn = document.querySelector(".rules-btn");
let gameRules = document.querySelector(".game-rules");
let closebtn = document.querySelector(".close-btn");


let userScore = JSON.parse(localStorage.getItem("userScore")) || 0;
let computerScore = JSON.parse(localStorage.getItem("computerScore")) || 0;
let scoreElem = document.getElementById("score");
let scoreElem2 = document.getElementById("score2");
scoreElem.innerText = userScore;
scoreElem2.innerText = computerScore;
function applyUserWinAnimation(element) {
  element.style.animation = "userWinAnimation 1s ease-out";
}

function applyComputerWinAnimation(element) {
  element.style.animation = "computerWinAnimation 1s ease-out";
}

con.forEach((val, index) => {
  val.addEventListener("click", () => {
    user.style.opacity = "1";
    triangle.style.display = "none";
    con.forEach((item) => {
      item.style.visibility = "hidden";
    });
    val.style.visibility = "visible";
    val.classList.add("show");

    setTimeout(() => {
      machine.style.opacity = "1";
      setTimeout(() => {
        con[random].style.visibility = "visible";
        con[random].classList.add("right-show");
      }, 1000);
    }, 500);

    setTimeout(() => {
      if (random === index) {
        winningPage.style.display = "flex";
        winner.innerText = "TIE UP";
      } else if (
        (index === 0 && random === 2) ||
        (index === 1 && random === 0) ||
        (index === 2 && random === 1)
      ) {
        winningPage.style.display = "flex";
        winner.innerText = "You Win!";
        userScore++;
        scoreElem.innerText = userScore;
        localStorage.setItem("userScore", JSON.stringify(userScore));

        applyUserWinAnimation(val);
      } else {
        winningPage.style.display = "flex";
        winner.innerText = "You Lost!";
        computerScore++;
        scoreElem2.innerText = computerScore;
        localStorage.setItem("computerScore", JSON.stringify(computerScore));

        applyComputerWinAnimation(con[random]);
      }
    }, 1500);
  });
});

play.addEventListener("click", () => {
  window.location.reload();
});

rulebtn.addEventListener("click", () => {
  gameRules.style.display = "flex";
});

closebtn.addEventListener("click", () => {
  gameRules.style.display = "none";
});
