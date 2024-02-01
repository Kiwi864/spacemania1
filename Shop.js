class Shop extends Phaser.Scene {
    constructor(){
        super("Shop");
         
        this.gameConfig = config;
        
        
    }
    create(){
        this.shopbg = this.add.tileSprite(0,0, config.width, config.height, "shopijk");
        this.shopbg.setOrigin(0,0);
        this.musik = this.sound.add("shopm", {volume: 0.25});
        var musicConfig = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.musik.play(musicConfig);
    }
}