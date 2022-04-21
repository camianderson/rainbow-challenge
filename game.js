var Player = require('./player.js')

class Game{
    constructor(playerOne){
        // A way to keep track of the data for the game board
        this.board = {top1: "", top2: "", top3: "", mid1: "",mid2: "",mid3:  "" , bottom1: "", bottom2: "", bottom3: ""};
        // A way to keep track of which player’s turn it currently is
        this.turn = playerOne;
        // Two Player instances
        this.p1 = new Player("Player 1", "🌈");
        this.p2 = new Player("Player 2", "🦄");
        this.tie = false;
        this.hasWinner = false;
        this.winner;
        

    }
    // A way to reset the Game’s board to begin a new game
    resetTheGame(){
        if(this.tie === true || this.hasWinner === true){
            this.board = {top1: "", top2: "", top3: "", mid1: "",mid2: "",mid3:  "" , bottom1: "", bottom2: "", bottom3: ""};
        }
    }
    // A way to check the Game’s board data for win conditions
    winConditions(){
        if(this.board.top1 === this.p1.token && this.board.top2 === this.p1.token && this.board.top3 === this.p1.token){
            this.p1.increaseWins();
            this.hasWinner = true;
            this.winner = this.p1;
        } else if(this.board.mid1 === this.p1.token && this.board.mid2 === this.p1.token && this.board.mid3 === this.p1.token){
            this.p1.increaseWins();
            this.hasWinner = true;
            this.winner = this.p1;
         } else if(this.board.bottom1 === this.p1.token && this.board.bottom2 === this.p1.token && this.board.bottom3 === this.p1.token){
            this.p1.increaseWins();
            this.hasWinner = true;
            this.winner = this.p1;
         } else if(this.board.top1 === this.p1.token && this.board.mid2 === this.p1.token && this.board.bottom3 === this.p1.token){
            this.p1.increaseWins();
            this.hasWinner = true;
            this.winner = this.p1;
        } else if(this.board.top3 === this.p1.token && this.board.mid2 === this.p1.token && this.board.bottom1 === this.p1.token){
            this.p1.increaseWins();
            this.hasWinner = true;
            this.winner = this.p1;
        } else if(this.board.top1 === this.p1.token && this.board.mid1 === this.p1.token && this.board.bottom1 === this.p1.token){
            this.p1.increaseWins();
            this.hasWinner = true;
            this.winner = this.p1;
        } else if(this.board.top2 === this.p1.token && this.board.mid2 === this.p1.token && this.board.bottom2 === this.p1.token){
            this.p2.increaseWins();
            this.hasWinner = true;
            this.winner = this.p2;
        } else if(this.board.top3 === this.p1.token && this.board.mid3 === this.p1.token && this.board.bottom3 === this.p1.token){
            this.p2.increaseWins();
            this.hasWinner = true;
            this.winner = this.p2;
        } else if(this.board.top1 === this.p2.token && this.board.top2 === this.p2.token && this.board.top3 === this.p2.token){
            this.p2.increaseWins();
            this.hasWinner = true;
            this.winner = this.p2;
        } else if(this.board.mid1 === this.p2.token && this.board.mid2 === this.p2.token && this.board.mid3 === this.p2.token){
            this.p2.increaseWins();
            this.hasWinner = true;
            this.winner = this.p2;
        } else if(this.board.bottom1 === this.p2.token && this.board.bottom2 === this.p2.token && this.board.bottom3 === this.p2.token){
            this.p2.increaseWins();
            this.hasWinner = true;
            this.winner = this.p2;
        } else if(this.board.top1 === this.p2.token && this.board.mid2 === this.p2.token && this.board.bottom3 === this.p2.token){
            this.p2.increaseWins();
            this.hasWinner = true;
            this.winner = this.p2;
        } else if(this.board.top3 === this.p2.token && this.board.mid2 === this.p2.token && this.board.bottom1 === this.p2.token){
            this.p2.increaseWins();
            this.hasWinner = true;
            this.winner = this.p2;
        } else if(this.board.top1 === this.p2.token && this.board.mid1 === this.p2.token && this.board.bottom1 === this.p2.token){
            this.p2.increaseWins();
            this.hasWinner = true;
            this.winner = this.p2;
        } else if(this.board.top2 === this.p2.token && this.board.mid2 === this.p2.token && this.board.bottom2 === this.p2.token){
            this.p2.increaseWins();
            this.hasWinner = true;
            this.winner = this.p2;
        } else if(this.board.top3 === this.p2.token && this.board.mid3 === this.p2.token && this.board.bottom3 === this.p2.token){
            this.p2.increaseWins();
            this.hasWinner = true;
            this.winner = this.p2;
        // A way to detect when a game is a draw (no one has won)
        } else if (this.board['top1'] != "" && this.board['top2'] != "" && this.board['top3'] != "" && this.board['mid1'] != "" && this.board['mid2'] != "" && this.board['mid3'] != ""  && this.board['bottom1'] != "" && this.board['bottom2'] != "" && this.board['bottom3'] != ""){
            this.p1.draw ++;
            this.p2.draw ++;
            this.tie = true;
        }
    }
    changePlayers(){
        if (this.turn === "Player 1"){
            this.turn = this.p2;
        } else {
            this.turn = this.p1;
        }
    }
    addTop1(){
        if(this.turn === this.p1 && this.board['top1'] === ""){
            this.board['top1'] = this.p1.token;
        } else if (this.board['top1'] === ""){
            this.board['top1'] = this.p2.token;
        }
        changePlayers();
    }
    addTop2(){
        if(this.turn === this.p1 && this.board['top2'] === ""){
            this.board['top2'] = this.p1.token;
        } else if (this.board['top2'] === ""){
            this.board['top2'] = this.p2.token;
        }
        changePlayers();
    }
    addTop3(){
        if(this.turn === this.p1 && this.board['top3'] === ""){
            this.board['top3'] = this.p1.token;
        } else if (this.board['top3'] === ""){
            this.board['top3'] = this.p2.token;
        }
        changePlayers();
    }
    addMid1(){
        if(this.turn === this.p1 && this.board['mid1'] === ""){
            this.board['mid1'] = this.p1.token;
        } else if (this.board['mid1'] === ""){
            this.board['mid1'] = this.p2.token;
        }
        changePlayers();
    }
    addMid2(){
        if(this.turn === this.p1 && this.board['mid2'] === ""){
            this.board['mid2'] = this.p1.token;
        } else if (this.board['mid2'] === ""){
            this.board['mid2'] = this.p2.token;
        }
        changePlayers();
    }
    addMid3(){
        if(this.turn === this.p1 && this.board['mid3'] === ""){
            this.board['mid3'] = this.p1.token;
        } else if (this.board['mid3'] === ""){
            this.board['mid3'] = this.p2.token;
        }
        changePlayers();
    }
    addBottom1(){
        if(this.turn === this.p1 && this.board['bottom1'] === ""){
            this.board['bottom1'] = this.p1.token;
        } else if (this.board['bottom1'] === ""){
            this.board['bottom1'] = this.p2.token;
        }
        changePlayers();
    }
    addBottom2(){
        if(this.turn === this.p1 && this.board['bottom2'] === ""){
            this.board['bottom2'] = this.p1.token;
        } else if (this.board['bottom2'] === ""){
            this.board['bottom2'] = this.p2.token;
        }
        changePlayers();
    }
    addBottom3(){
        if(this.turn === this.p1 && this.board['bottom3'] === ""){
            this.board['bottom3'] = this.p1.token;
        } else if (this.board['bottom3'] === ""){
            this.board['bottom3'] = this.p2.token;
        }
        changePlayers();
    }
}

var game1 = new Game();
game1.board = {top1: "🌈", top2: "🌈", top3: "🌈", mid1: "",mid2: "",mid3:  "" , bottom1: "", bottom2: "", bottom3: ""}
game1.winConditions()
console.log(game1.winner)



game1.board = {top1: "", top2: "", top3: "🦄", mid1: "",mid2: "",mid3: "🦄" , bottom1: "", bottom2: "", bottom3: "🦄"}
game1.winConditions()
game1.resetTheGame();
console.log(game1)
console.log(game1.winner)




module.exports = Game;