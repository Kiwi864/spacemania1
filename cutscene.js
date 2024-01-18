var config = {
    width: 256,
    height: 272,
    backgroundColor: '#4488aa',
}
class cutscene extends Phaser.Scene {
    constructor(){
        super("cutscene");
        this.gameConfig = config;
      
    }
    create(){
        this.background = this.add.tileSprite(0,0, config.width, config.height, "backgroundcut");
        this.background.setOrigin(0,0);
        this.character3 = this.add.sprite(-80, 230, "character1");
        this.character1 = this.add.sprite(-100, 220, "character2");
        this.character2 = this.add.sprite(-90, 240, "character3");
        this.character4 = this.add.sprite(-120, 210, "character4");
      
        this.characters = this.physics.add.group();
        this.characters.add(this.character1);
        this.characters.add(this.character2);
        this.characters.add(this.character3);
        this.characters.add(this.character4);
        this.time.addEvent({
            delay: 250,
            callback: this.CharacterAnimation,
            callbackScope: this,
            loop: true
        });
        this.cut = this.sound.add("cutsound");
        this.cut.on("complete",function(){this.startNextSound();}, this);
        var musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.cut.play(musicConfig)
        console.log("cut");
        this.time.addEvent({
            delay: 250,
            callback: this.moveShip,
            callbackScope: this,
            loop: true,
            args: [this.characters, 4] 
        });
        this.time.addEvent({
            delay: 1000,
            callback: this.dialogueStart,
            callbackScope: this,
            loop: true,
            
        });
    }
    startNextSound(){
        this.nextSound = this.sound.add("sirens");
        this.emergency = this.sound.add("emergency");
        this.emergency.setLoop(true);
       
        this.emergency.play();
        this.nextSound.play();
        
    }
    moveShip(characters, speed){
        characters.children.iterate(function (child) {
            child.x += speed;
        });
       
    }
    CharacterAnimation(){
        this.characters.children.iterate(function (child) {
            switch (child.texture.key) {
                case "character1":
                    child.setTexture("character2");
                    break;
                case "character2":
                    child.setTexture("character3");
                    break;
                case "character3":
                    child.setTexture("character4");
                    break;
                case "character4":
                    child.setTexture("character1");
                    break;
            }
        });
    }
    dialogueStart() {
        this.background.destroy();
        this.character1.destroy();
        this.character2.destroy();
        this.character3.destroy();
        this.character4.destroy();
        this.sound.stopAll();
    
        this.time.delayedCall(1000, () => {
            this.dialog = this.add.tileSprite(0, 170, config.width, 96, "dialogue");
            this.dialog.setOrigin(0, 0);
            this.phone = this.add.sprite(40, 220, "phone");
            this.phonedialog = this.add.bitmapText(82, 176, "pixelFont", "    Good Evening mr ", 19);
            this.phonedialog2 = this.add.bitmapText(82, 193, "pixelFont", "Sergej Govic. We need to ", 19);
            this.phonedialog3 = this.add.bitmapText(82, 210, "pixelFont", "inform you that 4 robots ", 19);
            this.phonedialog4 = this.add.bitmapText(82, 227, "pixelFont", "escaped the facility this ", 19);
            this.phonedialog5 = this.add.bitmapText(82, 244, "pixelFont", "                evening. ", 19);
    
            this.time.delayedCall(5000, () => {
                this.phonedialog.destroy();
                this.phonedialog2.destroy();
                this.phonedialog3.destroy();
                this.phonedialog4.destroy();
                this.phonedialog5.destroy();
                this.phonedialog6 = this.add.bitmapText(82, 193, "pixelFont", "We need you to bring supply", 19);
                this.phonedialog7 = this.add.bitmapText(82, 210, "pixelFont", "to the station Kalna Roztoka", 19);
            });
        });
    }
}