(function ticTacToe(){

    const players ={
        
           playerOne: {name: '',
            marker: 'X',
            point: 00},       
              
            playerTwo: {name: '',
            marker: 'O',
            pointer: 00},
        
            turn: {turn:'playerOne'},
    }
    
    const input = () => {
        let playerX = document.querySelector('#pONE');
        let playerO = document.querySelector('#pTWO');
        let $letsPlay = document.querySelector('#letsPlay');
        let $playAgain = document.querySelector('#playAgain');
        let $newGame = document.querySelector('#newGame');
        let $gameBoardDiv = document.querySelector('.game-board');

        return{
            playerX, playerO, $letsPlay,
            $playAgain, $newGame, $gameBoardDiv
        }
    }
    

    function playerNames(){
        players['playerOne']['name'] = input()['playerX'].value;
        players['playerTwo']['name'] = input()['playerO'].value;
    }

    const boardDisplay = () =>{
        input()['$gameBoardDiv'].addEventListener('click', (e) => {
            if(e.target.dataset.turn == 'free'){
                e.target.textContent = 'X';
                e.target.dataset.turn = 'used';
            }else if(e.target.dataset.turn == 'used'){
                return false;
            }/*
            console.log(e.target.getAttribute('data-key'));
            console.log(e.target.dataset.turn);
            e.target.dataset.turn = false;
            console.log(e.target.dataset.turn);
            */
        })
    }

    
    const letsPlay = () => {
        input()['$letsPlay'].addEventListener('click', (e) => {
            input();
            playerNames();
            console.log(players.playerOne.name);
            console.log(players.playerTwo.name);
            console.log(players.turn);
            
            boardDisplay();
        })
    }

    letsPlay();
})();