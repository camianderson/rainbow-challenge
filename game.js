class Game {
    constructor(){
        this.board = {top1: null, top2: null, top3: null, mid1: null, mid2: null, mid3: null, bottom1: null, bottom2: null, bottom3: null};
        this.p1 = new Player('Player 1', '🌈');
        this.p2 = new Player('Player 2', '🦄');
        this.turn = this.p1;
        this.winner;
    }

    resetTheGame(){
        this.board = {top1: null, top2: null, top3: null, mid1: null, mid2: null, mid3: null, bottom1: null, bottom2: null, bottom3: null};
        playerTurn.innerText = `${this.winner.token} WON!!` ;
        window.setTimeout(reDrawSite, 2500);
    }

    checkIfIsADraw(){
        if(this.board['top1']!== null && this.board['top2']!== null && this.board['top3']!== null && this.board['mid1']!== null && this.board['mid2']!== null && this.board['mid3']!== null && this.board['bottom1']!== null && this.board['bottom2']!== null && this.board['bottom3']!== null){
            this.board = {top1: null, top2: null, top3: null, mid1: null, mid2: null, mid3: null, bottom1: null, bottom2: null, bottom3: null};
        playerTurn.innerText = 'It is a DRAW!';
        window.setTimeout(reDrawSite, 2500);
        }
    }

    winConditions(){
        if(this.board.top1 === this.p1.token && this.board.top2 === this.p1.token && this.board.top3 === this.p1.token){
            this.p1.increaseWins();
            this.winner = this.p1;
            this.resetTheGame();
        } else if(this.board.mid1 === this.p1.token && this.board.mid2 === this.p1.token && this.board.mid3 === this.p1.token){
            this.p1.increaseWins();
            this.winner = this.p1;
            this.resetTheGame();
         } else if(this.board.bottom1 === this.p1.token && this.board.bottom2 === this.p1.token && this.board.bottom3 === this.p1.token){
            this.p1.increaseWins();
            this.winner = this.p1;
            this.resetTheGame();
         } else if(this.board.top1 === this.p1.token && this.board.mid2 === this.p1.token && this.board.bottom3 === this.p1.token){
            this.p1.increaseWins();
            this.winner = this.p1;
            this.resetTheGame();
        } else if(this.board.top3 === this.p1.token && this.board.mid2 === this.p1.token && this.board.bottom1 === this.p1.token){
            this.p1.increaseWins();
            this.winner = this.p1;
            this.resetTheGame();
        } else if(this.board.top1 === this.p1.token && this.board.mid1 === this.p1.token && this.board.bottom1 === this.p1.token){
            this.p1.increaseWins();
            this.winner = this.p1;
            this.resetTheGame();
        } else if(this.board.top2 === this.p1.token && this.board.mid2 === this.p1.token && this.board.bottom2 === this.p1.token){
            this.p1.increaseWins();
            this.winner = this.p1;
            this.resetTheGame();
        } else if(this.board.top3 === this.p1.token && this.board.mid3 === this.p1.token && this.board.bottom3 === this.p1.token){
            this.p1.increaseWins();
            this.winner = this.p1;
            this.resetTheGame();
        } else if(this.board.top1 === this.p2.token && this.board.top2 === this.p2.token && this.board.top3 === this.p2.token){
            this.p2.increaseWins();
            this.winner = this.p2;
            this.resetTheGame();
        } else if(this.board.mid1 === this.p2.token && this.board.mid2 === this.p2.token && this.board.mid3 === this.p2.token){
            this.p2.increaseWins();
            this.winner = this.p2;
            this.resetTheGame();
        } else if(this.board.bottom1 === this.p2.token && this.board.bottom2 === this.p2.token && this.board.bottom3 === this.p2.token){
            this.p2.increaseWins();
            this.winner = this.p2;
            this.resetTheGame();
        } else if(this.board.top1 === this.p2.token && this.board.mid2 === this.p2.token && this.board.bottom3 === this.p2.token){
            this.p2.increaseWins();
            this.winner = this.p2;
            this.resetTheGame();
        } else if(this.board.top3 === this.p2.token && this.board.mid2 === this.p2.token && this.board.bottom1 === this.p2.token){
            this.p2.increaseWins();
            this.winner = this.p2;
            this.resetTheGame();
        } else if(this.board.top1 === this.p2.token && this.board.mid1 === this.p2.token && this.board.bottom1 === this.p2.token){
            this.p2.increaseWins();
            this.winner = this.p2;
            this.resetTheGame();
        } else if(this.board.top2 === this.p2.token && this.board.mid2 === this.p2.token && this.board.bottom2 === this.p2.token){
            this.p2.increaseWins();
            this.winner = this.p2;
            this.resetTheGame();
        } else if(this.board.top3 === this.p2.token && this.board.mid3 === this.p2.token && this.board.bottom3 === this.p2.token){
            this.p2.increaseWins();
            this.winner = this.p2;
            this.resetTheGame();
        } 
    }

    changePlayers(){
        if (this.turn === this.p1){
            this.turn = this.p2;
        } else {
            this.turn = this.p1;
        }
    }

    addTop1(){
        if(this.turn === this.p1 && this.board['top1'] === null){
            this.board['top1'] = this.p1.token;
            this.changePlayers();
        } else if (this.board['top1'] === null){
            this.board['top1'] = this.p2.token;
            this.changePlayers();
        }
    }

    addTop2(){
        if(this.turn === this.p1 && this.board['top2'] === null){
            this.board['top2'] = this.p1.token;
            this.changePlayers();
        } else if (this.board['top2'] === null){
            this.board['top2'] = this.p2.token;
            this.changePlayers();
        }
    }

    addTop3(){
        if(this.turn === this.p1 && this.board['top3'] === null){
            this.board['top3'] = this.p1.token;
            this.changePlayers();
        } else if (this.board['top3'] === null){
            this.board['top3'] = this.p2.token;
            this.changePlayers();
        }
    }

    addMid1(){
        if(this.turn === this.p1 && this.board['mid1'] === null){
            this.board['mid1'] = this.p1.token;
            this.changePlayers();
        } else if (this.board['mid1'] === null){
            this.board['mid1'] = this.p2.token;
            this.changePlayers();
        }
    }

    addMid2(){
        if(this.turn === this.p1 && this.board['mid2'] === null){
            this.board['mid2'] = this.p1.token;
            this.changePlayers();
        } else if (this.board['mid2'] === null){
            this.board['mid2'] = this.p2.token;
            this.changePlayers();
        }
    }

    addMid3(){
        if(this.turn === this.p1 && this.board['mid3'] === null){
            this.board['mid3'] = this.p1.token;
            this.changePlayers();
        } else if (this.board['mid3'] === null){
            this.board['mid3'] = this.p2.token;
            this.changePlayers();
        }
    }

    addBottom1(){
        if(this.turn === this.p1 && this.board['bottom1'] === null){
            this.board['bottom1'] = this.p1.token;
            this.changePlayers();
        } else if (this.board['bottom1'] === null){
            this.board['bottom1'] = this.p2.token;
            this.changePlayers();
        }
    }

    addBottom2(){
        if(this.turn === this.p1 && this.board['bottom2'] === null){
            this.board['bottom2'] = this.p1.token;
            this.changePlayers();
        } else if (this.board['bottom2'] === null){
            this.board['bottom2'] = this.p2.token;
            this.changePlayers();
        }
    }

    addBottom3(){
        if(this.turn === this.p1 && this.board['bottom3'] === null){
            this.board['bottom3'] = this.p1.token;
            this.changePlayers();
        } else if (this.board['bottom3'] === null){
            this.board['bottom3'] = this.p2.token;
            this.changePlayers();
        }
    }
}