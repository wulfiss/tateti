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
    
    function checkNCompleteArr(target){
        let inx = target.dataset.key;

        if(players['turn']['turn'] == 'playerTwo'){
            boardArr[inx] = 'playerOne';    
        }else if(players['turn']['turn'] == 'playerOne'){
            boardArr[inx] = 'playerTwo';
        }
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
            checkNCompleteArr(e.target);
            console.log(boardArr);
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