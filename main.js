(function tictactoe(){

    const ArrBoard = ["", "", "", "", "", "", "", "", ""];
    

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

        function XOArrRender(arr, key, symbol){

            if(arr[key] == ""){
                arr[key] = symbol;
            }
        }

        function XOBoardRender(target, symbol){

            if (target.textContent == ""){
                target.textContent = symbol;
                pass = true;
            } else {
                pass = false;
            }
        }


        return{createGrid, XOArrRender, XOBoardRender}

    }

    function input(){
        let gameBoardDiv = document.querySelector('.game-board');

        return{
            gameBoardDiv
        }

    }

    function XO(){
        if(pass == true){
            if (symbol == "X"){
                symbol = "O";
            } else if (symbol == "O"){
                symbol = "X";
            }
        } else{
            return false;
        }
    }
    

    displayRender().createGrid(input()["gameBoardDiv"]);

    let symbol = "O";
    let pass = true;

    input()["gameBoardDiv"].addEventListener('click', (e) =>{
        XO();
        displayRender().XOBoardRender(e.target, symbol);
        displayRender().XOArrRender(ArrBoard, (e.target.getAttribute('data-key')), symbol);
        console.log(ArrBoard);
    })

})();