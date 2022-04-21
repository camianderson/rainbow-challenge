var Player = require('./player.js')

class Game{
    constructor(){
        // A way to keep track of the data for the game board
        this.board = {top1: "", top2: "", top3: "", mid1: "",mid2: "",mid3:  "" , bottom1: "", bottom2: "", bottom3: ""};
        // A way to keep track of which player’s turn it currently is
        this.turn = "Player 1";
        this.p1 = new Player("Player 1", "🌈");
        this.p2 = new Player("Player 2", "🦄");
        

    }
    // A way to reset the Game’s board to begin a new game
    resetTheGame(){
        this.board = {top1: "", top2: "", top3: "", mid1: "",mid2: "",mid3:  "" , bottom1: "", bottom2: "", bottom3: ""};
    }
    // A way to check the Game’s board data for win conditions
    winConditions(){
        if(this.board.top1 === this.p1.token && this.board.top2 === this.p1.token && this.board.top3 === this.p1.token){
           this.p1.win++;
           this.p2.loss++;
        // } else if(this.board.mid1 === p1.token && this.board.mid2 === p1.token && this.board.mid3 === p1.token){
        //    p1.win++;
        //    p2.loss++;
        // } else if(this.board.bottom1 === p1.token && this.board.bottom2 === p1.token && this.board.bottom3 === p1.token){
        //     p1.win++;
        //     p2.loss++;
        // } else if(this.board.top1 === p1.token && this.board.mid2 === p1.token && this.board.bottom3 === p1.token){
        //     p1.win++;
        //     p2.loss++;
        // } else if(this.board.top3 === p1.token && this.board.mid2 === p1.token && this.board.bottom1 === p1.token){
        //     p1.win++;
        //     p2.loss++;
        // } else if(this.board.top1 === p1.token && this.board.mid1 === p1.token && this.board.bottom1 === p1.token){
        //     p1.win++;
        //     p2.loss++;
        // } else if(this.board.top2 === p1.token && this.board.mid2 === p1.token && this.board.bottom2 === p1.token){
        //     p1.win++;
        //     p2.loss++;
        // } else if(this.board.top3 === p1.token && this.board.mid3 === p1.token && this.board.bottom3 === p1.token){
        //     p1.win++;
        //     p2.loss++;
        // } else if(this.board.top1 === p2.token && this.board.top2 === p2.token && this.board.top3 === p2.token){
        //    p2.win++;
        //    p1.loss++;
        // } else if(this.board.mid1 === p2.token && this.board.mid2 === p2.token && this.board.mid3 === p2.token){
        //    p2.win++;
        //    p1.loss++;
        // } else if(this.board.bottom1 === p2.token && this.board.bottom2 === p2.token && this.board.bottom3 === p2.token){
        //     p2.win++;
        //     p1.loss++;
        // } else if(this.board.top1 === p2.token && this.board.mid2 === p2.token && this.board.bottom3 === p2.token){
        //     p2.win++;
        //     p1.loss++;
        // } else if(this.board.top3 === p2.token && this.board.mid2 === p2.token && this.board.bottom1 === p2.token){
        //     p2.win++;
        //     p1.loss++;
        // } else if(this.board.top1 === p2.token && this.board.mid1 === p2.token && this.board.bottom1 === p2.token){
        //     p2.win++;
        //     p1.loss++;
        // } else if(this.board.top2 === p2.token && this.board.mid2 === p2.token && this.board.bottom2 === p2.token){
        //     p2.win++;
        //     p1.loss++;
        // } else if(this.board.top3 === p2.token && this.board.mid3 === p2.token && this.board.bottom3 === p2.token){
        //     p2.win++;
        //     p1.loss++;
        // A way to detect when a game is a draw (no one has won)
        } else {
            this.p1.draw ++;
            this.p2.draw ++;
        }

    }
}

// Two Player instances
var p1 = new Player("Player 1", "🌈");
var p2 = new Player("Player 2", "🦄");

var game1 = new Game();
game1.board = {top1: "🌈", top2: "🌈", top3: "🌈", mid1: "",mid2: "",mid3:  "" , bottom1: "", bottom2: "", bottom3: ""}
game1.winConditions();
console.log(game1)


module.exports = Game;