(function tictactoe(){

    const boardData = (boardSize = 3) => {
        const dashboardArr = [];
        let board = boardSize * boardSize;

        for(let i = 0; i < board; i++){
            dashboardArr.push('');
        }

        return(dashboardArr);
    }
    

    const displayRender = () =>{

        let createGrid = (board, boardSize = 3) => {
            let divs = boardSize * boardSize;
            board.style.setProperty('grid-template-columns', `repeat(${boardSize}, 1fr)`);

            for(let i = 0; i < divs; i++){
                let boardDiv = document.createElement('div');
                boardDiv.setAttribute('class', 'divBoard');
                boardDiv.setAttribute('data-key', `${i}`);
                board.appendChild(boardDiv);
            }
        }

        return{createGrid}

    }
/*


canvas.style.setProperty('grid-template-columns', `repeat(${$slider.value}, 1fr)`);

    const displayControler = (() =>{
        
        let boardRender = (arr, board) =>{
            for(i = 0; i < arr.length; i++){
                board[`data-handler = "${i}"`].textContent = arr[i];
            }
        }

        return{boardRender}

    })();
*/

    let dashboardDiv = document.querySelector('.dashboardDiv');
    let boxDiv = document.querySelectorAll('.box');
    console.log(boardData());

    displayRender().createGrid(dashboardDiv);

    dashboardDiv.addEventListener('click', (e) =>{
        console.log(e.target.id);
        console.log(e.target.getAttribute('data-handler'));

        console.log(dashboardArr);
        //displayControler.boardRender(dashboardArr, boxDiv);
    })

})();


/*
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();
  
  calculator.add(3,5); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476
  */