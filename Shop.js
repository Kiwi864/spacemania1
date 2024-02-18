class Shop extends Phaser.Scene {
    constructor(){
        super("Shop");
         
        this.gameConfig = config;
        
        
    }
    create(){
      
        this.shopbg = this.add.tileSprite(0,0, config.width, config.height, "shopijk");
        var graphics = this.add.graphics();
        
    
        graphics.fillStyle("Black");
        graphics.fillRect(0,0,115,20);
       this.lukrat = this.add.sprite(60,235, "lukrat").setInteractive();
        this.lukrat2 = this.add.sprite(140,235, "lukrat").setInteractive();
        this.lukrat3 = this.add.sprite(215,235, "lukrat").setInteractive();
        this.ammobox = this.add.sprite(60,240, "ammobox");
        this.shield = this.add.sprite(140,235, "shield");
        this.boost = this.add.sprite(215,240, "boost");
       this.score = this.add.bitmapText(5,5,"pixelFont3", "SCORE: ", 20);
       this.zelezo = this.add.sprite(215,25, "zelezo").setInteractive();
    

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
       
        this.time.addEvent({
            delay: 3000,
            callback: this.backgroundchange,
            callbackScope: this,
            loop: true,
            
        });
        this.time.addEvent({
            delay: 4000,
            callback: this.backgroundchange2,
            callbackScope: this,
            loop: true,
            
        });
        this.lukrat.on('pointerover', () => {
            this.zelezo.destroy();
            this.lukrat.setScale(1.1);
            this.ammobox.setScale(1.1);
            this.amoo = this.add.bitmapText(180,20, "pixelFont", "AMMOBOX", 16 );
            this.amooo = this.add.bitmapText(175,35, "pixelFont", "This item ", 14 );
            this.amo = this.add.bitmapText(175,50, "pixelFont", "gives you a   ", 14 );
            this.amom = this.add.bitmapText(170,65, "pixelFont", " bonus of 10  ", 14 );
            this.mol = this.add.bitmapText(180,80, "pixelFont", " bullets ", 14 );
            this.a = this.add.bitmapText(165,110, "pixelFont", " COST: 100 points", 14 );
        });
        this.lukrat.on('pointerdown', () => {
            if(globalScoreFormated >= 100){
                globalScoreFormated -= 100
                globalScoreFormated = this.zeroPad(globalScoreFormated, 6);
                globalBullets += 10;
            }
            else {
                this.tweens.add({
                    targets: [this.lukrat, this.ammobox],
                    x: this.lukrat.x + 5, 
                    y: this.lukrat.y + 5,
                    duration: 50, 
                    yoyo: true,
                    repeat: 5, 
                });
                this.lukrat.setTint(0xff0000); 
                this.time.delayedCall(500, () => { 
                    this.lukrat.clearTint();
                });
            }
        });


        this.lukrat.on('pointerout', () => {
            this.zelezo = this.add.sprite(215,25, "zelezo");
            this.lukrat.setScale(1); 
            this.ammobox.setScale(1);
            this.amoo.destroy();
            this.amooo.destroy();
            this.amo.destroy();
            this.amom.destroy();
            this.mol.destroy();
            this.amol.destroy();
            this.a.destroy();
        });

        this.lukrat2.on('pointerover', () => {
            this.zelezo.destroy();
            this.lukrat2.setScale(1.1);
            this.shield.setScale(1.1);
            this.amoo = this.add.bitmapText(180,20, "pixelFont", "SHIELD", 16 );
            this.amooo = this.add.bitmapText(175,35, "pixelFont", "This item ", 14 );
            this.amo = this.add.bitmapText(175,50, "pixelFont", "gives you an   ", 14 );
            this.amom = this.add.bitmapText(170,65, "pixelFont", " invincibility  ", 14 );
            this.mol = this.add.bitmapText(170,80, "pixelFont", " for 1 0 seconds ", 14 );
            this.amol = this.add.bitmapText(158,95, "pixelFont", " (activated with T)", 15 );
            this.a = this.add.bitmapText(165,110, "pixelFont", " COST: 300 points", 14 );
        });

        this.lukrat2.on('pointerdown', () => {
            if(globalScoreFormated >= 300){
                globalScoreFormated -= 300
                globalScoreFormated = this.zeroPad(globalScoreFormated, 6);
               
            }
            else {
                this.tweens.add({
                    targets: [this.lukrat2, this.shield],
                    x: this.lukrat2.x + 5, 
                    y: this.lukrat2.y + 5,
                    duration: 50, 
                    yoyo: true,
                    repeat: 5, 
                });
                this.lukrat2.setTint(0xff0000); 
                this.time.delayedCall(500, () => { 
                    this.lukrat2.clearTint();
                });
            }
        });

        this.lukrat2.on('pointerout', () => {
            this.zelezo = this.add.sprite(215,25, "zelezo");
            this.lukrat2.setScale(1); 
            this.shield.setScale(1);
            this.amoo.destroy();
            this.amooo.destroy();
            this.amo.destroy();
            this.amom.destroy();
            this.mol.destroy();
            this.amol.destroy();
            this.a.destroy();
        });

        this.lukrat3.on('pointerover', () => {
            this.zelezo.destroy();
            this.lukrat3.setScale(1.1);
            this.boost.setScale(1.1);
            this.amoo = this.add.bitmapText(180,20, "pixelFont", "BOOST", 16 );
            this.amooo = this.add.bitmapText(175,35, "pixelFont", "This item ", 14 );
            this.amo = this.add.bitmapText(175,50, "pixelFont", "gives you an   ", 14 );
            this.amom = this.add.bitmapText(170,65, "pixelFont", " speed boost  ", 14 );
            this.amomf = this.add.bitmapText(165,80, "pixelFont", "and auto-rockets ", 14 );
            this.mol = this.add.bitmapText(170,95, "pixelFont", " for 1 0 seconds ", 14 );
            this.amol = this.add.bitmapText(158,110, "pixelFont", " (activated with F)", 15 );
            this.a = this.add.bitmapText(165,125, "pixelFont", " COST: 1000 points", 14 );
        });
        this.lukrat3.on('pointerdown', () => {
            if(globalScoreFormated >= 1000){
                globalScoreFormated -= 1000
                globalScoreFormated = this.zeroPad(globalScoreFormated, 6);
            }  else {
                this.tweens.add({
                    targets: [this.lukrat3, this.boost],
                    x: this.lukrat3.x + 5, 
                    y: this.lukrat3.y + 5,
                    x: this.boost.x + 5,
                    y: this.boost.y + 5, 
                    duration: 50, 
                    yoyo: true,
                    repeat: 5, 
                });
                this.lukrat3.setTint(0xff0000); 
                this.time.delayedCall(500, () => { 
                    this.lukrat3.clearTint();
                });
            }
        });


        this.lukrat3.on('pointerout', () => {
            this.zelezo = this.add.sprite(215,25, "zelezo");
            this.lukrat3.setScale(1); 
            this.boost.setScale(1);
            this.amoo.destroy();
            this.amooo.destroy();
            this.amo.destroy();
            this.amom.destroy();
            this.mol.destroy();
            this.amol.destroy();
            this.a.destroy();
            this.amomf.destroy();
        });
        this.zelezo.on('pointerdown', () => {
            this.sound.stopAll();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
                this.scene.start("level2");
            });
        });
      
    }
    update(){
        this.score.text = "SCORE: " + globalScoreFormated;  
    }

    backgroundchange(){
      
        this.zelezo.destroy();
        this.lukrat.destroy();
        this.lukrat2.destroy();
        this.lukrat3.destroy();
        this.ammobox.destroy();
        this.ammobox.destroy();
        this.boost.destroy();
        this.shopbg.destroy();
        this.shopbg2 = this.add.tileSprite(0,0, config.width, config.height, "shopijk2").setOrigin(0, 0);
        this.createObjects();
    }
    backgroundchange2(){
        
        this.zelezo.destroy();
        this.lukrat.destroy();
        this.lukrat2.destroy();
        this.lukrat3.destroy();
        this.ammobox.destroy();
        this.ammobox.destroy();
        this.score.destroy();
        this.boost.destroy();
        this.shopbg2.destroy();
        this.shopbg = this.add.tileSprite(0,0, config.width, config.height, "shopijk").setOrigin(0, 0);
        this.createObjects();
    }
   
    createObjects(){
        var graphics = this.add.graphics();
        
        graphics.fillStyle("Black");
        graphics.fillRect(0,0,115,20);
        this.zelezo = this.add.sprite(215,25, "zelezo").setInteractive();
        this.lukrat = this.add.sprite(60,235, "lukrat").setInteractive();
        this.lukrat2 = this.add.sprite(140,235, "lukrat").setInteractive();
        this.lukrat3 = this.add.sprite(215,235, "lukrat").setInteractive();
        this.ammobox = this.add.sprite(60,240, "ammobox");
        this.shield = this.add.sprite(140,235, "shield");
        this.boost = this.add.sprite(215,240, "boost");
        this.score = this.add.bitmapText(5,5,"pixelFont3", "SCORE: ", 20);

        this.lukrat.on('pointerover', () => {
            this.zelezo.destroy();
            this.lukrat.setScale(1.1);
            this.ammobox.setScale(1.1);
            this.amoo = this.add.bitmapText(180,20, "pixelFont", "AMMOBOX", 16 );
            this.amooo = this.add.bitmapText(175,35, "pixelFont", "This item ", 14 );
            this.amo = this.add.bitmapText(175,50, "pixelFont", "gives you a   ", 14 );
            this.amom = this.add.bitmapText(170,65, "pixelFont", " bonus of 10  ", 14 );
            this.mol = this.add.bitmapText(180,80, "pixelFont", " bullets ", 14 );
            this.a = this.add.bitmapText(165,110, "pixelFont", " COST: 100 points", 14 );
        });
        this.lukrat.on('pointerdown', () => {
            if(globalScoreFormated >= 100){
                globalScoreFormated -= 100
                globalScoreFormated = this.zeroPad(globalScoreFormated, 6);
                globalBullets += 10;
            }
            else {
                this.tweens.add({
                    targets: [this.lukrat, this.ammobox],
                    x: this.lukrat.x + 5,
                    y: this.lukrat.y + 5, 
                    x: this.ammobox.x + 5,
                    y: this.ammobox.y + 5, 
                    duration: 50, 
                    yoyo: true,
                    repeat: 5, 
                });
                this.lukrat.setTint(0xff0000); 
                this.time.delayedCall(500, () => { 
                    this.lukrat.clearTint();
                });
            }
        });


        this.lukrat.on('pointerout', () => {
            this.zelezo = this.add.sprite(215,25, "zelezo");
            this.lukrat.setScale(1); 
            this.ammobox.setScale(1);
            this.amoo.destroy();
            this.amooo.destroy();
            this.amo.destroy();
            this.amom.destroy();
            this.mol.destroy();
            this.amol.destroy();
            this.a.destroy();
        });

        this.lukrat2.on('pointerover', () => {
            this.zelezo.destroy();
            this.lukrat2.setScale(1.1);
            this.shield.setScale(1.1);
            this.amoo = this.add.bitmapText(180,20, "pixelFont", "SHIELD", 16 );
            this.amooo = this.add.bitmapText(175,35, "pixelFont", "This item ", 14 );
            this.amo = this.add.bitmapText(175,50, "pixelFont", "gives you an   ", 14 );
            this.amom = this.add.bitmapText(170,65, "pixelFont", " invincibility  ", 14 );
            this.mol = this.add.bitmapText(170,80, "pixelFont", " for 1 0 seconds ", 14 );
            this.amol = this.add.bitmapText(158,95, "pixelFont", " (activated with T)", 15 );
            this.a = this.add.bitmapText(165,110, "pixelFont", " COST: 300 points", 14 );
        });
        this.lukrat2.on('pointerdown', () => {
            if(globalScoreFormated >= 300){
                globalScoreFormated -= 300
                globalScoreFormated = this.zeroPad(globalScoreFormated, 6);
               globalShields += 1;
            }
            else {
                this.tweens.add({
                    targets: [this.lukrat2, this.shield],
                    x: this.lukrat2.x + 5, 
                    y: this.lukrat2.y + 5,
                    x: this.shield.x + 5, 
                    y: this.shield.y + 5,
                    duration: 50, 
                    yoyo: true,
                    repeat: 5, 
                });
                this.lukrat2.setTint(0xff0000); 
                this.time.delayedCall(500, () => { 
                    this.lukrat2.clearTint();
                });
            }
        });


        this.lukrat2.on('pointerout', () => {
            this.zelezo = this.add.sprite(215,25, "zelezo");
            this.lukrat2.setScale(1); 
            this.shield.setScale(1);
            this.amoo.destroy();
            this.amooo.destroy();
            this.amo.destroy();
            this.amom.destroy();
            this.mol.destroy();
            this.amol.destroy();
            this.a.destroy();
        });

        this.lukrat3.on('pointerover', () => {
            this.zelezo.destroy();
            this.lukrat3.setScale(1.1);
            this.boost.setScale(1.1);
            this.amoo = this.add.bitmapText(180,20, "pixelFont", "BOOST", 16 );
            this.amooo = this.add.bitmapText(175,35, "pixelFont", "This item ", 14 );
            this.amo = this.add.bitmapText(175,50, "pixelFont", "gives you an   ", 14 );
            this.amom = this.add.bitmapText(170,65, "pixelFont", " speed boost  ", 14 );
            this.amomf = this.add.bitmapText(165,80, "pixelFont", "and auto-rockets ", 14 );
            this.mol = this.add.bitmapText(170,95, "pixelFont", " for 1 0 seconds ", 14 );
            this.amol = this.add.bitmapText(158,110, "pixelFont", " (activated with F)", 15 );
            this.a = this.add.bitmapText(165,125, "pixelFont", " COST: 1000 points", 14 );
        });
        this.lukrat3.on('pointerdown', () => {
            if(globalScoreFormated >= 1000){
                globalScoreFormated -= 1000
                globalScoreFormated = this.zeroPad(globalScoreFormated, 6);
                globalBullets += 10;
            }
            else {
                this.tweens.add({
                    targets: [this.lukrat3, this.boost],
                    x: this.lukrat3.x + 5, 
                    y: this.lukrat3.y + 5,
                    x: this.boost.x + 5, 
                    y: this.boost.y + 5,
                    duration: 50, 
                    yoyo: true,
                    repeat: 5, 
                });
                this.lukrat3.setTint(0xff0000); 
                this.time.delayedCall(500, () => { 
                    this.lukrat3.clearTint();
                });
            }
        });


        this.lukrat3.on('pointerout', () => {
            this.zelezo = this.add.sprite(215,25, "zelezo");
            this.lukrat3.setScale(1); 
            this.boost.setScale(1);
            this.amoo.destroy();
            this.amooo.destroy();
            this.amo.destroy();
            this.amom.destroy();
            this.mol.destroy();
            this.amol.destroy();
            this.a.destroy();
            this.amomf.destroy();
        });
        this.zelezo.on('pointerdown', () => {
            this.sound.stopAll();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
                this.scene.start("level2")
            });
        });
    }
    zeroPad(number, size){
        var stringNumber = String(number);
        while(stringNumber.length < (size || 2)){
            stringNumber = "0" + stringNumber;
        }
        return stringNumber;
    }
}