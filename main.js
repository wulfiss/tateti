(function ticTacToe(){

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

    const boardDisplay = () =>{
        input()['$gameBoardDiv'].addEventListener('click', (e) => {
            console.log(e.target.getAttribute('data-key'));
        })
    }

    const letsPlay = () => {
        input()['$letsPlay'].addEventListener('click', (e) => {
            input();
            boardDisplay();
        })
    }

    letsPlay();
})();