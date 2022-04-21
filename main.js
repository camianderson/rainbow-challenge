//global variables
var game = new Game();


//query selectors
var player1WinCount = document.querySelector("#player1WinCount");
var player2WinCount = document.querySelector("#player2WinCount");
var playerTurn = document.querySelector("#playerTurn");
var spaces = document.querySelectorAll("td");
var gameBoard = document.querySelector("table");

//event listener
gameBoard.addEventListener("click", displayToken)


//functions

reDrawSite();

function displayToken(event){
    if(event.target.id === "top1"){
        game.addTop1();
        reDrawSite();
        game.winConditions();
    } else if (event.target.id === "top2"){
        game.addTop2();
        reDrawSite();
        game.winConditions();
    } else if (event.target.id === "top3"){
        game.addTop3();
        reDrawSite();
        game.winConditions();
    } else if (event.target.id === "mid1"){
        game.addMid1();
        reDrawSite();
        game.winConditions();
    } else if (event.target.id === "mid2"){
        game.addMid2();
        reDrawSite();
        game.winConditions();
    } else if (event.target.id === "mid3"){
        game.addMid3();
        reDrawSite();
        game.winConditions();
    } else if (event.target.id === "bottom1"){
        game.addBottom1();
        reDrawSite();
        game.winConditions();
    } else if (event.target.id === "bottom2"){
        game.addBottom2();
        reDrawSite();
        game.winConditions();
    } else if (event.target.id === "bottom3"){
        game.addBottom3();
        reDrawSite();
        game.winConditions();
    }
    
}


function reDrawSite(){
    player1WinCount.innerText = game.p1.win + ` Wins`;
    player2WinCount.innerText = game.p2.win + ` Wins`;
    playerTurn.innerText = `It is ${game.turn.token}'s turn`
    for(let i = 0; i < spaces.length; i++){
        spaces[i].innerText = Object.values(game.board)[i]
    }
}