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
  let dx = [0 , -20 , 20 , 0 , 0]; 
  let dy = [0 , 0 , 0 , -20 , 20]; 
  let direction = 0;


  function startGame(){
    const scoreBoard = document.createElement("div");
    scoreBoard.id = "score-board";
    document.body.insertBefore(scoreBoard, gameArena);

    const startButton = document.createElement("button");
    startButton.id = "start-btn";
    startButton.innerHTML = "Start Game";
    document.body.appendChild(startButton);

    
  }
  startGame();
});
