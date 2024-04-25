var config = {
    width: 256,
    height: 272,
    backgroundColor: '#4488aa',
}
class Credits extends Phaser.Scene {
    constructor(){
        super("credits");
        this.gameConfig = config;
        this.allowTypewrite8 = true;
        this.dialogik = 1;
    }
    create(){
        this.shop = this.add.sprite(128,106, "finalshop");
        this.shop.setScale(0.6);
        this.cut = this.sound.add("credits");
       
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
        

        this.phonedialog = this.add.bitmapText(22,202, "pixelFont", "After the death of Stuhleck 008", 19);
        this.phonedialog2 = this.add.bitmapText(35,222, "pixelFont", "lady Paka sold her shop to ", 19);
        this.phonedialog3 = this.add.bitmapText(20,242, "pixelFont", "experience life for the first time ", 19);
        this.time.addEvent({
            delay: 100,
            callback: async () => {
                this.phonedialog.destroy();
                this.phonedialog2.destroy();
                this.phonedialog3.destroy();
                this.shop.destroy();
                this.shop = this.add.sprite(128,106, "sergo");
                this.shop.setScale(0.5);
                this.phonedialog = this.add.bitmapText(22,202, "pixelFont", "After the death of Stuhleck 008", 19);
                this.phonedialog2 = this.add.bitmapText(30,222, "pixelFont", "Sergej Govic became a mayor ", 19);
                this.phonedialog3 = this.add.bitmapText(80,242, "pixelFont", "of a small village ", 19);
            },
            callbackScope: this,
        });
        this.time.addEvent({
            delay: 200,
            callback: async () => {
                this.phonedialog.destroy();
                this.phonedialog2.destroy();
                this.phonedialog3.destroy();
                this.shop.destroy();
                this.shop = this.add.sprite(128,106, "strass");
                this.shop.setScale(0.5);
             
                this.phonedialog = this.add.bitmapText(22,202, "pixelFont", "After the death of Stuhleck 008", 19);
                this.phonedialog2 = this.add.bitmapText(50,222, "pixelFont", "Station Kalna Roztoka ", 19);
                this.phonedialog3 = this.add.bitmapText(55,242, "pixelFont", "has been abandoned", 19);
            },
            callbackScope: this,
        });
        this.time.addEvent({
            delay: 300,
            callback: async () => {
                this.phonedialog.destroy();
                this.phonedialog2.destroy();
                this.phonedialog3.destroy();
                this.shop.destroy();
                this.phonedialog = this.add.bitmapText(20,96, "pixelFont", "SPACE MANIA", 50);
                this.phonedialog2 = this.add.bitmapText(56,130, "pixelFont", "Thanks for playing!", 20);
                this.phonedialog3 = this.add.bitmapText(20,294, "pixelFont", "MADE BY: Samuel Tamas\nCODE: Samuel Tamas\nDESIGN: Samuel Tamas, Ansimuz\nIDEA: Samuel Tamas, Ansimuz\nMUSIC:\n    LIBET'S DELAY\n     By Caretaker\n \n    THE HINDSIGHT\n     By Jorn Lavoll\n \n  ", 20);
                this.phonedialog4 = this.add.bitmapText(56,328, "pixelFont", "", 20);
                this.text = this.physics.add.group();
                this.text.add(this.phonedialog);
                this.text.add(this.phonedialog2);
                this.text.add(this.phonedialog3);
                this.text.add(this.phonedialog4);
               /* this.text.add(this.phonedialog5);
                this.text.add(this.phonedialog6); 
                this.text.add(this.phonedialog7); */
            },
            callbackScope: this,
        });
        this.time.addEvent({
            delay: 2000,
            callback: async () => {
               this.moveText(this.phonedialog, 1);
               this.moveText(this.phonedialog2, 1);
               this.moveText(this.phonedialog3, 0.5);
               this.moveText(this.phonedialog4, 0.5);
               /*this.moveText(this.phonedialog5, 0.5);
               this.moveText(this.phonedialog6, 0.5);
               this.moveText(this.phonedialog7, 0.5);*/
            },
            callbackScope: this,
        });
    
        
       
    }
    moveText(text, speed){
        this.time.addEvent({
            delay: 10,
            callback: () => {
                text.y -= speed;
            },
            loop: true
        });
        
           
    }
    
}