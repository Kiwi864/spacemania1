var config = {
    width: 256,
    height: 272,
    backgroundColor: '#4488aa',
}
class Controls extends Phaser.Scene {
    constructor(){
        super("controls");
        this.gameConfig = config;
      
    }
    create(){
        this.shut = this.add.bitmapText(45,146, "pixelFont", "SHOOTING - SPACEBAR ", 18);
        this.movement = this.add.bitmapText(45,146, "pixelFont", "MOVEMENT -ARROWS ", 18);
    }
}