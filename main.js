const tictactoe = () => { 

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
                game()['pass'] = true;
            } else {
                game()['pass'] = false;
            }
        }


        return{createGrid, XOArrRender, XOBoardRender}

    }

    function inputBoard(){
        let gameBoardDiv = document.querySelector('.game-board');

        return{
            gameBoardDiv
        }

    }

    function XO(){
        if(game()['pass'] == true){
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
        let squareRoot = Math.sqrt(arr.length);
        let temp = [];

        function winLose(la){
            if(temp[0] != "" && la == 'win'){
                if(temp.every(el => el === temp[0])){
                    alert(`${temp[0]} WINS!!!`);
                }
            }else if(la == 'tie'){
                alert("IT'S A TIE!!!");
            }else{
                return false
            }
        }

        if (game()['pass'] == true){
            
            for(let y = 0; y < arr.length; (y += squareRoot)){
                for (let x = y; x < (y + squareRoot); x++){
                    temp.push(arr[x]);
                    }
                winLose('win');
                temp = [];
            }

            for(let x = 0; x < squareRoot; x++){
                for(let y = x; y < arr.length; (y += squareRoot)){
                    temp.push(arr[y]);
                    }
                winLose('win');
                temp = [];
            }

            for(let x = 0; x < arr.length; (x += (squareRoot + 1))){
                temp.push(arr[x]);
            }
            winLose('win');
            temp = [];

            for(let x = (squareRoot - 1); x < (arr.length - 1); (x += (squareRoot - 1))){
                temp.push(arr[x]);
            }
            winLose('win');
            temp = [];
            
            if((arr.every((el => el != "")))){
                winLose('tie');
            }

        }else{
            return false;
        }
    }
    
    function game(){
        let pass = true;
        let symbol = "O";

        displayRender().createGrid(inputBoard()["gameBoardDiv"]);

        const ArrBoard = ["", "", "", "", "", "", "", "", ""];      

        inputBoard()["gameBoardDiv"].addEventListener('click', (e) =>{
            XO();
            displayRender().XOBoardRender(e.target, symbol);
            displayRender().XOArrRender(ArrBoard, (e.target.getAttribute('data-key')), symbol);
            checkGame(ArrBoard);
        })
    }

    (function letsPlay(){
        
        function input(){
            let body = document.querySelector('body');
            let pOne = document.querySelector('pONE');
            let pTwo = document.querySelector('pTWO');

            return{
                body
            }
        }

        function startGame(){
            
        }

        input()['body'].addEventListener('click', (e) =>{
            if(e.target.id == "letsPlay"){
                console.log('lalala');
                game();
            }
        })

        return{
            input
        }


    })()


};