(function tictactoe(){

    const dashboardArr = [
        {name: "boxZero", content: " "}, {name: "boxOne", content: " "}, {name: "boxTwo", content: " "},
        {name: "boxThree", content: " "}, {name: "boxFour", content: " "}, {name: "boxFive", content: " "},
        {name: "boxSix", content: " "}, {name: "boxSeven", content: " "}, {name: "boxEight", content: " "},
    ]
    
    let dashboardDiv = document.querySelector('.dashboardDiv');
    let boxDiv = document.querySelector('.box');

    dashboardDiv.addEventListener('click', (e) =>{
        console.log(e.target.id);
        console.log(e.target.getAttribute('data-handler'));
        console.log(dashboardArr);
    })

})();

