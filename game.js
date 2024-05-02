var globalScoreFormated = "";
var globalBullets = 10;
var globalShields = 0;
var globalHealth = 5;
var globalHalusky = 1;
var globalBoost = 0;

window.onload = function(){
    var gameSettings = {
        playerSpeed: 200,
    }
    var config = {
        width: 256,
        height: 272,
        backgroundColor: 0x000000,
        scene: [Scene1, Scene2, Scene3, Ending, Start, cutscene, Shop, Shop2, Scene4, finale, Credits],
        pixelArt: true,
        physics: {
            default: "arcade",
            arcade:{
                debug: false
            }
           
        },
        fps:{
            target: 60,
             forceSetTimeOut: true
         }
    }
    var game = new Phaser.Game(config);
}