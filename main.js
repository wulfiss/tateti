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

    function checkGame(arr){
            if (arr[0] !== "" && arr[0] == arr[1] && arr[0] == arr[2]){
                return alert(`${arr[0]} WINS!`);
            }else if(arr[3] !== "" && arr[3] == arr[4] && arr[3] == arr[5]){
                return alert(`${arr[3]} WINS!`);
            }else if(arr[6] !== "" && arr[6] == arr[7] && arr[6] == arr[8]){
                return alert(`${arr[6]} WINS!`);
            }else if(arr[0] !== "" && arr[0] == arr[3] && arr[0] == arr[6]){
                return alert(`${arr[0]} WINS!`);
            }else if(arr[1] !== "" && arr[1] == arr[4] && arr[1] == arr[7]){
                return alert(`${arr[1]} WINS!`);
            }else if(arr[2] !== "" && arr[2] == arr[5] && arr[2] == arr[8]){
                return alert(`${arr[2]} WINS!`);
            }else if(arr[0] !== "" && arr[0] == arr[4] && arr[0] == arr[8]){
                return alert(`${arr[0]} WINS!`);
            }else if(arr[2] !== "" && arr[2] == arr[4] && arr[2] == arr[6]){
                return alert(`${arr[2]} WINS!`);
            }else{
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
        checkGame(ArrBoard);
    })

})();