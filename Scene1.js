    class Scene1 extends Phaser.Scene {
        constructor(){
            super("bootGame");
        }
       
        
       preload(){
            this.load.image("background", "assets/images/background.png");
            this.load.image("background2", "assets/images/background2.png");
            this.load.image("dialogue", "assets/images/dialogueM.png");
            this.load.image("backgroundcut", "assets/images/backgroundcut.png");
            this.load.image("shopijk", "assets/images/shopgb.png");
            this.load.image("shopijk2", "assets/images/shopgb2.png");
            this.load.spritesheet("ship", "assets/spritesheets/ship.png",{
                frameWidth: 16,
                frameHeight: 16
            });
            this.load.spritesheet("ship2", "assets/spritesheets/ship2.png",{
                frameWidth: 32,
                frameHeight: 16
            });
            this.load.spritesheet("ship3", "assets/spritesheets/ship3.png",{
                frameWidth: 32,
                frameHeight: 32
            });
            this.load.spritesheet("explosion", "assets/spritesheets/explosion.png",{
                frameWidth: 16,
                frameHeight: 16
            });
            this.load.spritesheet("power-up", "assets/spritesheets/power-up.png",{
                frameWidth: 16,
                frameHeight: 16
            });
            this.load.spritesheet("player", "assets/spritesheets/player.png",{
                frameWidth: 16,
                frameHeight: 24
            });
            this.load.spritesheet("beam", "assets/spritesheets/beam.png",{
                frameWidth: 16,
                frameHeight: 16
            });
           
            this.load.spritesheet("boss", "assets/spritesheets/finalenemy.png",{
                frameWidth: 48,
                frameHeight: 48
            });
            this.load.spritesheet("character1", "assets/spritesheets/maincharacter1.png", {
                frameWidth: 21,
                frameHeight: 43
            });
            this.load.spritesheet("character2", "assets/spritesheets/maincharacter2.png", {
                frameWidth: 21,
                frameHeight: 43
            });
            this.load.spritesheet("character3", "assets/spritesheets/maincharacter3.png", {
                frameWidth: 21,
                frameHeight: 43
            });
            this.load.spritesheet("character4", "assets/spritesheets/maincharacter3.png", {
                frameWidth: 21,
                frameHeight: 43
            });
            this.load.spritesheet("phone", "assets/spritesheets/phone.png", {
                frameWidth: 84,
                frameHeight: 84
            });
            this.load.spritesheet("admiralcak", "assets/spritesheets/sun.png", {
                frameWidth: 54,
                frameHeight: 54
            });
            this.load.spritesheet("ammobox", "assets/spritesheets/ammobox.png", {
                frameWidth: 84,
                frameHeight: 64
            });
            this.load.spritesheet("lukrat", "assets/spritesheets/idk.png", {
                frameWidth: 60,
                frameHeight: 40
            });
            this.load.spritesheet("shield", "assets/spritesheets/shield.png", {
                frameWidth: 84,
                frameHeight: 64
            });
            this.load.spritesheet("boost", "assets/spritesheets/boost.png", {
                frameWidth: 84,
                frameHeight: 64
            });
            this.load.spritesheet("zelezo", "assets/spritesheets/zelezo.png", {
                frameWidth: 60,
                frameHeight: 30
            });
            
            
            
            this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");
            this.load.bitmapFont("pixelFont2", "assets/font/font2.png", "assets/font/font2.xml");
            this.load.bitmapFont("pixelFont3", "assets/font/font3.png", "assets/font/font3.xml");
            this.load.audio("audio_beam", ["assets/sounds/beam.ogg", "assets/sounds/beam.mp3"]);
            this.load.audio("audio_explosion", ["assets/sounds/explosion.ogg", "assets/sounds/explosion.mp3"]);
            this.load.audio("audio_pickup", ["assets/sounds/pickup.ogg", "assets/sounds/pickup.mp3"]);
            this.load.audio("audio_respawn", ["assets/sounds/respawn.ogg", "assets/sounds/respawn.mp3"]);
            this.load.audio("audio_no_ammo", ["assets/sounds/no ammo.ogg", "assets/sounds/no ammo.mp3"]);
            this.load.audio("music", ["assets/sounds/sci-fi_platformer12.ogg", "assets/sounds/sci-fi_platformer12.mp3"]);
            this.load.audio("game_over", ["assets/sounds/game_over.ogg", "assets/sounds/game_over.mp3"]);
            this.load.audio("intro", ["assets/sounds/intro.ogg", "assets/sounds/intro.mp3"]);
            this.load.audio("cutsound", ["assets/sounds/cutscene.ogg", "assets/sounds/cutscene.mp3"]);
            this.load.audio("sirens", ["assets/sounds/sirens.ogg", "assets/sounds/sirens.mp3"]);
            this.load.audio("emergency", ["assets/sounds/emergency.ogg", "assets/sounds/emergency.mp3"]);
            this.load.audio("dialogb", ["assets/sounds/Dramatic_V2.ogg", "assets/sounds/Dramatic_V2.mp3"]);
            this.load.audio("shopm", ["assets/sounds/shop.ogg", "assets/sounds/shop.mp3"]);
        }


    create() {
        this.add.text(20,20, "Loading game...");
        this.scene.start("start");

        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });
        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("power-up",{
                start: 0,
                end: 1
            }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers("power-up",{
                start: 2,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "thrust",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "beam_anim",
            frames: this.anims.generateFrameNumbers("beam"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "character_anim",
            frames: this.anims.generateFrameNumbers("character"),
            frameRate: 5,
            repeat: -1
        });
    
        //this.intro = this.sound.add("intro", {volume: 0})
    }
}
