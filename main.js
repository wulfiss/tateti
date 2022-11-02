(function ticTacToe(){

    const input = () => {
        let playerOne = document.querySelector('#pONE');
        let playerTwo = document.querySelector('#pTWO');
        let $letsPlay = document.querySelector('#letsPlay');
        let $playAgain = document.querySelector('#playAgain');
        let $newGame = document.querySelector('#newGame');
        let $gameBoardDiv = document.querySelector('#game-board');

        return{
            playerOne, playerTwo, $letsPlay,
            $playAgain, $newGame, $gameBoardDiv
        }
    }

    

    

})()