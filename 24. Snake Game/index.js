document.addEventListener("DOMContentLoaded", function (event) {
  const gameArena = document.getElementById("game-arena");
  const arenaSize = gameArena.offsetWidth - gameArena.style.borderWidth;
  let score = 0;
  let gameStarted = false;
  let food = {
    x: 300,
    y: 200,
  };
  let snake = [
    {
      x: 160,
      y: 200,
    },
    {
      x: 140,
      y: 200,
    },
    {
      x: 120,
      y: 200,
    },
  ];
  let dx = [0, -20, 20, 0, 0];
  let dy = [0, 0, 0, -20, 20];
  let direction = 0;

  function displayScoreBoard() {
    const scoreBoard = document.getElementById("score-board");
    scoreBoard.style.display = "block";
    scoreBoard.innerHTML = "Score: " + score;
  }

  function drawDiv(x, y, className) {
    const currDiv = document.createElement("div");
    currDiv.classList.add(className);
    currDiv.style.top = y + "px";
    currDiv.style.left = x + "px";
    return currDiv;
  }

  function drawFoodAndSnake() {
    //erase everything that's already there
    gameArena.innerHTML = ``;
    foodElement = drawDiv(food.x, food.y, "food");
    gameArena.appendChild(foodElement);
  }

  function gameLoop() {
    setInterval(() => {
    displayScoreBoard();
    drawFoodAndSnake();
    }, 1);
  }

  function runGame() {
    gameStarted = true;
    gameLoop();
  }

  function startGame() {
    const scoreBoard = document.createElement("div");
    scoreBoard.id = "score-board";
    document.body.insertBefore(scoreBoard, gameArena);
    scoreBoard.style.display = "none";
    console.log(scoreBoard.style.display);

    const startButton = document.createElement("button");
    startButton.id = "start-btn";
    startButton.innerHTML = "Start Game";
    document.body.appendChild(startButton);

    startButton.addEventListener("click", function () {
      if (startButton.textContent === "Start Game") {
        startButton.textContent = "End Game";
        runGame();
      } else {
        startButton.textContent = "Start Game";
        // endGame();
      }
    });
  }
  startGame();
});
