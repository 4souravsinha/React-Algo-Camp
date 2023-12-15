document.addEventListener("DOMContentLoaded", function (event) {
  let gameInterval;
  let gameSpeed = 500;
  const gameArena = document.getElementById("game-arena");
  const borderWidth = parseInt(
    getComputedStyle(gameArena).getPropertyValue("border-left-width")
  );
  const arenaSize = gameArena.offsetWidth - borderWidth;
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
    {
      x: 100,
      y: 200,
    },
    {
      x: 80,
      y: 200,
    },
  ];
  let dx = 0;
  let dy = 0;

  document.addEventListener("keydown", (event) => {
    if (!gameStarted) return;
    const key = event.key;
    const movingOnXAxis = dx != 0;
    const movingOnYAxis = dy != 0;
    switch (key) {
      case "ArrowUp":
        if (movingOnYAxis) return;
        dx = 0;
        dy = -20;
        console.log("up");
        break;
      case "ArrowDown":
        if (movingOnYAxis) return;
        dx = 0;
        dy = 20;
        console.log("down");
        break;
      case "ArrowLeft":
        if (movingOnXAxis) return;
        dx = -20;
        dy = 0;
        console.log("left");
        break;
      case "ArrowRight":
        if (movingOnXAxis) return;
        dx = 20;
        dy = 0;
        console.log("right");
        break;
    }
  });

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

  function updateSnake() {
    if (dx == 0 && dy == 0) return;
    const newHead = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(newHead);
    snake.pop();
  }

  function generateFood() {
    const foodElement = document.getElementsByClassName("food")[0];
    const maxX = arenaSize - foodElement.offsetWidth;
    const maxY = arenaSize - foodElement.offsetWidth;
    let randomX, randomY;
    do {
      randomX = Math.round((Math.random() * maxX) / 20) * 20;
      randomY = Math.round((Math.random() * maxY) / 20) * 20;
    } while (snake.some((snakeCell) => snakeCell.x === randomX && snakeCell.y === randomY));
    food = {
      x: randomX,
      y: randomY,
    };
  }

  function drawFoodAndSnake() {
    //erase everything that's already there
    gameArena.innerHTML = ``;
    updateSnake();
    snake.forEach((snakeCell, index) => {
      const snakeElement = drawDiv(snakeCell.x, snakeCell.y, "snake");
      if (index === 0) {
        snakeElement.style.borderRadius = "50%";
      }
      gameArena.appendChild(snakeElement);
    });

    let foodElement = drawDiv(food.x, food.y, "food");
    gameArena.appendChild(foodElement);
  }

  function snakeEatsFood() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
      score++;
      generateFood();
      let newx, newy;
      if (dx == 20) {
        newx = snake[snake.length - 1].x - dx;
        newy = snake[snake.length - 1].y;
      } else if (dx == -20) {
        newx = snake[snake.length - 1].x + dx;
        newy = snake[snake.length - 1].y;
      } else if (dy == 20) {
        newx = snake[snake.length - 1].x;
        newy = snake[snake.length - 1].y - dy;
      } else if (dy == -20) {
        newx = snake[snake.length - 1].x;
        newy = snake[snake.length - 1].y + dy;
      }
      snake.push({
        x: newx,
        y: newy,
      });
      
      gameSpeed -= 10;
      gameSpeed = Math.max(gameSpeed, 100);
      clearInterval(gameInterval);
      gameLoop();
    }
  }

  function isGameOver() {
    for (let i = 1; i < snake.length; i++) {
      if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
        return true;
      }
    }
    const isHittingLeftWall = snake[0].x < 0;
    const isHittingRightWall = snake[0].x >= arenaSize;
    const isHittingTopWall = snake[0].y < 0;
    const isHittingBottomWall = snake[0].y >= arenaSize;
    if (isHittingLeftWall || isHittingRightWall || isHittingTopWall || isHittingBottomWall) {
      return true;
    }
    return false;
  }

  function gameLoop() {
    console.log(gameSpeed)
    gameInterval = setInterval(() => {
      if (isGameOver()) {
        clearInterval(gameInterval);
        gameStarted = false;
        alert("Game Over");
        window.location.reload()
        return;
      }
      snakeEatsFood();
      displayScoreBoard();
      drawFoodAndSnake();
    }, gameSpeed);
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
        runGame();
      }
    });
  }
  startGame();
});
