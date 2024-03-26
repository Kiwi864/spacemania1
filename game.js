var globalScoreFormated = "";
var globalBullets = 5;
var globalShields = 0;
var globalHealth = 3;
var globalHalusky = 3;
var globalBoost = 0;

window.onload = function(){
    var gameSettings = {
        playerSpeed: 200,
    }
    var config = {
        width: 256,
        height: 272,
        backgroundColor: 0x000000,
        scene: [Scene1, Scene2, Scene3, Ending, Start, cutscene, Shop, Shop2, Scene4],
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