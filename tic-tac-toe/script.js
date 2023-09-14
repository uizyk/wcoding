let boxes = document.querySelectorAll('.box');
let wins = document.querySelector('h2');
let body = document.body;
let check = 'x';
let hasWinner = false;
let button = document.createElement('button');
button.setAttribute('onClick', 'window.location.reload()');
button.textContent = 'Play again!';

let counter = 0;
function checkWinner() {
    
    let winPossibilities = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    for (let i = 0; i < winPossibilities.length; i++) {
      let square1 = document.getElementById(winPossibilities[i][0]);
      let square2 = document.getElementById(winPossibilities[i][1]);
      let square3 = document.getElementById(winPossibilities[i][2]);
      if (
        square1.textContent.toLowerCase() === "x" &&
        square2.textContent.toLowerCase() === "x" &&
        square3.textContent.toLowerCase() === "x"
      ) {
        console.log("X wins!");
        square1.classList.add('highlight');
        square2.classList.add('highlight');
        square3.classList.add('highlight');
        hasWinner = true;
        wins.textContent = 'X wins!'
        body.appendChild(button)
        
      } else if (
        square1.textContent.toLowerCase() === "o" &&
        square2.textContent.toLowerCase() === "o" &&
        square3.textContent.toLowerCase() === "o"
      ) {
        console.log("O wins!");
        square1.classList.add('highlight');
        square2.classList.add('highlight');
        square3.classList.add('highlight');
        hasWinner = true;
        wins.textContent = 'O wins!'
        body.appendChild(button)
        
      }
      else if (!hasWinner && counter == 9){
        wins.textContent = 'Draw';
        body.appendChild(button)
      }

    }
  }


    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', function(e){          
            if (!e.target.textContent && !hasWinner){
                e.target.textContent = check;
               check = check == 'x' ? 'o' : 'x';
               counter++;
               console.log(counter);
                checkWinner();    
            }
        })
    }


  
    

  