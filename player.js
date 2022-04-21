class Player{
    constructor(player, image){
        this.id = player;
        this.token = image;
        this.win = 0;
        this.loss = 0;
        this.draw = 0;
    }
    increaseWins(){
        this.win++;
    }
}



module.exports = Player;