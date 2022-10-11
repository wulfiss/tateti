(function tictactoe(){

    const dashboardArr = [
        {name: "boxZero", content: "1"}, {name: "boxOne", content: " "}, {name: "boxTwo", content: " "},
        {name: "boxThree", content: " "}, {name: "boxFour", content: " "}, {name: "boxFive", content: " "},
        {name: "boxSix", content: " "}, {name: "boxSeven", content: " "}, {name: "boxEight", content: " "},
    ]

    const displayControler = (() =>{
        
        let boardRender = (arr, board) =>{
            for(i = 0; i < arr.length; i++){
                board[`data-handler = "${i}"`].textContent = arr[i].content
            }
        }

        return{boardRender}

    })();
    
    let dashboardDiv = document.querySelector('.dashboardDiv');
    let boxDiv = document.querySelectorAll('.box');

    dashboardDiv.addEventListener('click', (e) =>{
        console.log(e.target.id);
        console.log(e.target.getAttribute('data-handler'));

        console.log(dashboardArr);
        displayControler.boardRender(dashboardArr, dashboardDiv);
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