document.addEventListener('DOMContentLoaded', () => {
  const gameArena = document.getElementById('outer');
  let chance = true;
  let cellVal = Array(9).fill(undefined);
  gameArena.addEventListener('click', (event) => {
    let cell = event.target;
    let cellNumber = cell.getAttribute("data-cell");
    if(cell.getAttribute("data-clicked")){
      return;
    }
    cell.setAttribute("data-clicked" , "true");
    if(chance === true){
      cell.textContent = 'X'
      cellVal[cellNumber] = 'X'
    }else{
      cell.textContent = 'O'
      cellVal[cellNumber] = 'O'
    }
    chance = !chance
    console.log(cellVal)
  });
  


  
})
