var config = {
    width: 256,
    height: 272,
    backgroundColor: '#4488aa',
}


class Ending extends Phaser.Scene {
    constructor(){
        super("koniec");
        this.gameConfig = config;
        
    }
    create(){
        console.log("ending!!!");
        this.gameOver = this.add.bitmapText(70,96, "pixelFont", "GAME OVER", 30);
        this.finalScoreLabel = this.add.bitmapText(70,126, "pixelFont", "SCORE ", 20);
        this.resetLabel = this.add.bitmapText(20,156, "pixelFont", "RELOAD THE PAGE TO START AGAIN ", 20);
        this.game_over = this.sound.add("game_over", {volume: 1});
        var musicConfig = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.game_over.play(musicConfig);
    }
    update(){
        this.finalScoreLabel.text = "SCORE: " + globalScoreFormated;  
    }
}