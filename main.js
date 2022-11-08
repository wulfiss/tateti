(function ticTacToe(){

    const players ={
        
            playerOne: {name: '', marker: 'X', points: 00},       
              
            playerTwo: {name: '', marker: 'O', points: 00},
        
            turn: {turn:'playerOne'},
    }
    
    const boardArr = ['', '', '', '', '', '', '', '', '']

    const input = () => {
        let playerX = document.querySelector('#pONE');
        let playerO = document.querySelector('#pTWO');
        let $letsPlay = document.querySelector('#letsPlay');
        let $playAgain = document.querySelector('#playAgain');
        let $newGame = document.querySelector('#newGame');
        let $gameBoardDiv = document.querySelector('.game-board');
        let playerNameTurn = document.querySelector('#playerNameTurn');
        return{
            playerX, playerO, $letsPlay,
            $playAgain, $newGame, $gameBoardDiv,
            playerNameTurn
        }
    }
    
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
                result ='tie';
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
                input()['playerNameTurn'].textContent = players['playerTwo']['name'];
                players['turn']['turn'] = 'playerTwo';
            }else if(players['turn']['turn'] == 'playerTwo'){
                target.textContent = 'O';
                target.dataset.turn = 'used';
                input()['playerNameTurn'].textContent = players['playerOne']['name'];
                players['turn']['turn'] = 'playerOne';
            }
        }else if(target.dataset.turn == 'used'){
            return false;
        }

    }

    const boardDisplay = () =>{
        input()['$gameBoardDiv'].addEventListener('click', (e) => {
            renderSymbols(e.target);
            completeArr(e.target);
            console.log(boardArr);
            console.log(checkGame(boardArr));
        })
    }

    
    const letsPlay = () => {
        input()['$letsPlay'].addEventListener('click', (e) => {
            input();
            playerNames();         
            boardDisplay();
            input()['playerNameTurn'].textContent = players['playerOne']['name'];
        })
    }

    letsPlay();
})();