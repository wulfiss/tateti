(function ticTacToe(){

    const players ={
        
            playerOne: {name: '', marker: 'X', points: 00},       
              
            playerTwo: {name: '', marker: 'O', points: 00},
        
            turn: {turn:'playerOne'},
    }

    let boardArr = [];

    let createGrid = (board, boardSize = 3) => {
        let divs = boardSize * boardSize;
        
        board.style.setProperty('--grid-cols', `repeat(${boardSize}, 1fr)`);//avoid divs resizing
        board.style.setProperty('--grid-rows', `repeat(${boardSize}, 1fr)`);//

        for(let i = 0; i < divs; i++){
            let boardDiv = document.createElement('div');
            boardDiv.setAttribute('class', 'divBoard');
            boardDiv.setAttribute('data-key', `${i}`);
            boardDiv.setAttribute('data-turn', `free`);
            board.appendChild(boardDiv);
        }
    }
    
    function createArr (boardSize = 3) {
        let arr = [];
        for(let i = 0; i < (boardSize * boardSize); i++){
            arr.push('');
        }
        
        return arr;
    }

    const input = () => {
        let playerX = document.querySelector('#pONE');
        let playerO = document.querySelector('#pTWO');
        let $letsPlay = document.querySelector('#letsPlay');
        let $playAgain = document.querySelector('#playAgain');
        let $newGame = document.querySelector('#newGame');
        let $gameBoardDiv = document.querySelector('.game-board');
        let playerNameTurn = document.querySelector('#playerNameTurn');
        let playerWinner = document.querySelector('#winner');
        let pPlayer = document.querySelector('#pPlayer');
        let finishDiv = document.querySelector('.finishDiv');
        let winDiv = document.querySelector('.winDiv');
        let tieDiv = document.querySelector('.tieDiv');
        let startDiv = document.querySelector('.start');
        let $boardSize = document.querySelector('#boardSize');
        let boardSizeShow = document.querySelector('#boardSizeShow');
        return{
            playerX, playerO, $letsPlay,
            $playAgain, $newGame, $gameBoardDiv,
            playerNameTurn, playerWinner, pPlayer,
            winDiv, finishDiv, tieDiv, startDiv,
            $boardSize, boardSizeShow
        }
    }
    //target.dataset.blabla for to use data-bla properties
    function completeArr(target){
        let inx = target.dataset.key;

        if(players['turn']['turn'] == 'playerTwo'){
            boardArr[inx] = 'playerOne';    
        }else if(players['turn']['turn'] == 'playerOne'){
            boardArr[inx] = 'playerTwo';
        }

    }

    function checkGame(arr){
        let squareRoot = Math.sqrt(arr.length);
        let temp = [];
        let result = '';

        function winLose(la){
            if(temp[0] != "" && la == 'win'){
                if(temp.every(el => el === temp[0])){
                    result = temp[0];
                }
            }else if(la == 'tie'){
                result = 'tie';
            }else{
                return false;
            }
        }
                   
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

        return result;
    }

    function playerNames(){
        players['playerOne']['name'] = input()['playerX'].value;
        players['playerTwo']['name'] = input()['playerO'].value;
    }

    function renderSymbols(target){
        
        if(target.dataset.turn == 'free'){
            if(players['turn']['turn'] == 'playerOne'){
                target.textContent = 'X';
                target.dataset.turn = 'used';
                target.style.setProperty('background-color', '#ef4444');
                input()['playerNameTurn'].textContent = players['playerTwo']['name'];
                players['turn']['turn'] = 'playerTwo';
            }else if(players['turn']['turn'] == 'playerTwo'){
                target.textContent = 'O';
                target.dataset.turn = 'used';
                target.style.setProperty('background-color', '#bef264');
                input()['playerNameTurn'].textContent = players['playerOne']['name'];
                players['turn']['turn'] = 'playerOne';
            }
        }else if(target.dataset.turn == 'used'){
            return false;
        }

    }

    function winTiePoints(){
        if(checkGame(boardArr) == 'playerOne'){
            input()['playerWinner'].textContent = players['playerOne']['name'];
            players['playerOne']['points']++;
            input()['finishDiv'].style.display = 'block';
            input()['winDiv'].style.display = 'block';
        }else if(checkGame(boardArr) == 'playerTwo'){
            input()['playerWinner'].textContent = players['playerTwo']['name'];
            players['playerTwo']['points']++;
            input()['finishDiv'].style.display = 'block';
            input()['winDiv'].style.display = 'block';
        }else if(checkGame(boardArr) == 'tie'){
            input()['finishDiv'].style.display = 'block';
            input()['tieDiv'].style.display = 'block';
        }else{
            return false;
        }

    }

    function showAndHide(str){
        if(str == 'new'){
            input()['playerNameTurn'].textContent = players['playerOne']['name'];
            input()['pPlayer'].style.display = 'block';
            input()['$gameBoardDiv'].style.display = 'grid';
            input()['startDiv'].style.display = 'none';
        }else if(str == 'again'){
            input()['finishDiv'].style.display = 'none';
            input()['tieDiv'].style.display = 'none';
            input()['winDiv'].style.display = 'none';
        }
        
    }

    function removeChildFromBoard(board){
        
        while(board.firstChild){
            board.removeChild(board.firstChild);
        }

    }

    const boardDisplay = () =>{
        input()['$gameBoardDiv'].addEventListener('click', (e) => {
            renderSymbols(e.target);
            completeArr(e.target);
            console.log(boardArr);
            winTiePoints();
        })
    }
      
    const letsPlay = () => {
        input()['$boardSize'].addEventListener('input', () =>{
            input()['boardSizeShow'].textContent = `${input()['$boardSize'].value}X${input()['$boardSize'].value}`;
        })

        input()['$letsPlay'].addEventListener('click', (e) => {
            input();
            boardArr = createArr(input()['$boardSize'].value);
            playerNames();         
            boardDisplay();
            showAndHide('new');
            createGrid(input()['$gameBoardDiv'], input()['$boardSize'].value);
        })

        input()['$playAgain'].addEventListener('click', (e) =>{
            removeChildFromBoard(input()['$gameBoardDiv']);
            createGrid(input()['$gameBoardDiv'], input()['$boardSize'].value);
            boardArr = createArr(input()['$boardSize'].value);
            showAndHide('again');
        })

        input()['$newGame'].addEventListener('click', (e) =>{
            window.location.reload();
        })
    }

    letsPlay();
})();
