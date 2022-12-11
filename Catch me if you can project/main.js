const headline = document.querySelector("h1");
const catchMe = document.querySelector(".catch-me");
const score = document.querySelector(".score");
const pointsNextLevel = document.querySelector(".points");
const level = document.querySelector(".level");
const missedClicks = document.querySelector(".missed-clicks");
const timerClock = document.querySelector(".timer");
const backGround = document.querySelector(".background-play1");
const highScore = document.querySelector(".high-score");
const h1 = document.querySelector("h1");
const btnStopGame = document.querySelector(".btn-stop-game");
const mainUsers = document.querySelector(".main-users");
const dateTimeGame = new Date().toLocaleDateString();
console.log(dateTimeGame);

const game = {
  click: 0,
  score: 0,
  demoScore: "",
  pointsNextLevel: 10,
  level: 1,
  missedClicks: 0,
  highScores: [],
  time: 60,
};

function clear() {
  game.click = 0;
  game.score = 0;
  game.demoScore = "";
  game.level = 1;
  game.pointsNextLevel = 10;
  game.missedClicks = 0;
  game.time = 60;
}

catchMe.style.animation = "none";

h1.addEventListener(
  "click",
  function () {
    catchMe.style.left = 0;
    catchMe.style.top = 0;
    catchMe.style.transition = "1s";
    let start = confirm("You want to start the game?");
    if (start == false) {
      window.location.reload();
    }
    if (start == true) {
      catchMe.style.animation = "spin 2s linear infinite";
      console.log(game.time);
      btnStopGame.style.display = "flex";
      h1.innerText = "The game is ON";
      startTimer(true);
      catchMeClick();
      backGroundClick();
      return;
    }
  },
  { once: true }
);

const startTimer = function (start) {
  if (start == true) {
    setInterval(timer, 1000);
  } else return;
};

btnStopGame.addEventListener("click", function () {
  let startAgain = confirm("Do you want to start the gmae again?");
  if (startAgain == true) {
    h1.innerText = "You start again?? such a Loser 😵";
    clear();
    timerClock.innerHTML = "60";
    catchMe.style.animation = "none";
    catchMe.style.left = "0";
    catchMe.style.top = "0";
    catchMe.style.animation = "spin 2s linear infinite";
    display();
  }
});

function timer() {
  game.time--;
  timerClock.innerText = game.time;
  if (game.time == 0) {
    addUserToHighScore1();
  }
}

function backGroundClick() {
  backGround.addEventListener("click", function () {
    game.missedClicks++;
    game.score -= game.level * 1;
    display();
  });
  return;
}

function catchMeClick() {
  catchMe.addEventListener("mouseover", () => {
    x = 300;
    if (game.level == 2) {
      x = 250;
    }
    if (game.level == 3) {
      x = 200;
    }
    if (game.level == 4) {
      x = 150;
    }
    if (game.level == 5) {
      x = 100;
    }
    setTimeout(() => {
      catchMe.style.top = Math.random() * 100 + "%";
      catchMe.style.left = Math.random() * 100 + "%";
    }, x);
  });

  catchMe.addEventListener("click", function () {
    game.click++;
    display();
    points();
    extraTime();
  });
  return;
}

///////////////////// Start Timer /////////////////////

function finishGame() {
  addUserToHighScore1();
  alert(`You finish the game!"`);
  score.innerText = game.score;
  clear();
}

let users = [
  { name: "", score: "", date: "" },
  { name: "", score: "", date: "" },
  { name: "", score: "", date: "" },
  { name: "", score: "", date: "" },
  { name: "", score: "", date: "" },
];
let usersJson = localStorage.usersGame;

if (usersJson) {
  users = JSON.parse(usersJson);
} else {
  localStorage.usersGame = JSON.stringify(users);
}

function addUserToHighScore1() {
  startGamef = true;
  const userName = prompt("What's your name?");
  const newObject = new userPlaying(userName, game.score, dateTimeGame);
  users.push(newObject);
  users.sort((a, b) => b.score - a.score);
  if (users.length > 5) {
    users.pop();
  }
  localStorage.usersGame = JSON.stringify(users);
  display();
  window.location.reload();
}

class userPlaying {
  constructor(name, score, date) {
    this.name = name;
    this.score = score;
    this.date = date;
  }
}

function points() {
  // if (startGamef == true) {
  console.log(game.click);
  // game.click++;
  game.demoScore = 10 * 1;

  if (game.click > 10) {
    game.demoScore = 10 * 2;
    game.level = 2;
    catchMe.style.animation = "spin 1.75s linear infinite";
  }
  if (game.click > 20) {
    game.demoScore = 10 * 3;
    game.level = 3;
    catchMe.style.animation = "spin 1.5s linear infinite";
  }
  if (game.click > 30) {
    game.demoScore = 10 * 4;
    game.level = 4;
    catchMe.style.animation = "spin 1.25s linear infinite";
  }
  if (game.click > 40) {
    game.demoScore = 10 * 4;
    game.level = 5;
    catchMe.style.animation = "spin 1s linear infinite";
  }
  if (game.click > 50) {
    finishGame();
  }
  game.score += game.demoScore;
  deltetPoints();
  display();
  return;
  // }
}

function extraTime() {
  if (game.click == 10) {
    game.time += 10;
  }
  if (game.click == 20) {
    game.time += 10;
  }
  if (game.click == 30) {
    game.time += 10;
  }
  if (game.click == 40) {
    game.time += 10;
  }
}

function deltetPoints() {
  game.pointsNextLevel--;
  if (game.pointsNextLevel == 0) game.pointsNextLevel = 10;
}

function display() {
  score.innerText = game.score;
  pointsNextLevel.innerText = game.pointsNextLevel;
  level.innerText = game.level;
  missedClicks.innerText = game.missedClicks;
}

const div = document.createElement("div");
div.id = "high-score";
highScore.append(div);

function createUserScore(user) {
  for (let i = 0; i < user.length; i++) {
    const p1 = document.createElement("p");
    const windowp = document.createElement("P");
    windowp.className = "window-p";
    p1.id = "number-player";
    p1.innerHTML = `<i class="fa-solid fa-trophy"></i> &nbsp ${i + 1}: ${
      user[i].name
    } &nbsp Score: ${user[i].score}`;
    div.append(p1, windowp);
    windowp.innerHTML = `<i class="fa-solid fa-clock"></i>  &nbsp Date: ${users[i].date}`;
    p1.addEventListener("mouseover", () => {
      windowp.style.display = "block";
    });
    p1.addEventListener("mouseleave", () => {
      windowp.style.display = "none";
    });
  }
}

createUserScore(users);
