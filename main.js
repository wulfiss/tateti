(function tictactoe(){

    /*const createArrBoard = (boardSize = 3) => {
        const dashboardArr = [];
        let board = boardSize * boardSize;

        for(let i = 0; i < board; i++){
            dashboardArr.push('');
        }

        return dashboardArr ;
    };*/

    const createArrBoard = ["", "", "", "", "", "", "", "", ""];
    

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

        function XOArrRender(arr, key){
            arr[key] = "X";
        }

        function XOBoardRender(target){
            target.textContent = "X";
        }

        return{createGrid, XOArrRender, XOBoardRender}

    }

    let dashboardDiv = document.querySelector('.dashboardDiv');
    

    displayRender().createGrid(dashboardDiv);

    dashboardDiv.addEventListener('click', (e) =>{
        console.log(e.target.getAttribute('data-key'));
        displayRender().XOBoardRender(e.target);
        let key = e.target.getAttribute('data-key');
        displayRender().XOArrRender(createArrBoard, key);
        console.log(createArrBoard);
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