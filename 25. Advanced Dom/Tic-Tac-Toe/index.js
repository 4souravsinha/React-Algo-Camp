document.addEventListener("DOMContentLoaded", function (event) {
  let player = 0;
  const body = document.body;
  const boxes = document.getElementsByClassName("box");
  //store all the boxes in an array

  const boxesArray = Array.from(boxes);
  function enableBoxClick() {
    boxesArray.map((box) => {
      box.addEventListener("click", function () {
        if (player % 2 === 0 && box.textContent === "") {
          box.textContent = "X";
          player++;
        } else if (box.textContent === "") {
          box.textContent = "O";
          player++;
        }
        setTimeout(function () {
          let letter = player % 2 == 0 ? 'O' : 'X';
          checkGameStatus(letter)
        }, 5);
      });
    });
  }

  function checkGameStatus(team) {
    console.log(team)
    for (let i = 0; i < 9; i += 3) {
      if (boxesArray[i].textContent === team
        && boxesArray[i + 1].textContent === team
        && boxesArray[i + 2].textContent === team) {
        alert(`Team ${team} won`);
        window.location.reload();
      }
    }
    for (let i = 0; i < 3; i++) {
      if (boxesArray[i].textContent === team
        && boxesArray[i + 3].textContent === team
        && boxesArray[i + 6].textContent === team) {
        alert(`Team ${team} won`);
        window.location.reload();
      }
    }
    if (boxesArray[0].textContent === team
      && boxesArray[4].textContent === team
      && boxesArray[8].textContent === team) {
      alert(`Team ${team} won`);
      window.location.reload();
    }
    if (boxesArray[2].textContent === team
      && boxesArray[4].textContent === team
      && boxesArray[6].textContent === team) {
      alert(`Team ${team} won`);
      window.location.reload();
    }
  }

  function play() {
    enableBoxClick();
  }


  function resetGame() {
    window.location.reload()
  }

  function startGame() {
    const button = document.createElement("button");
    button.textContent = "Start"
    button.style.marginLeft = "250px";
    button.addEventListener("click", function () {
      if (button.textContent === 'Start') {
        button.textContent = 'Reset'
        setTimeout(play, 1)
      } else {
        button.textContent = 'Start'
        setTimeout(resetGame, 1)
      }
    })
    body.append(button);

  }

  startGame()

});


