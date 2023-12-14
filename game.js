var globalScoreFormated = "";
window.onload = function(){
    var gameSettings = {
        playerSpeed: 200,
    }
    var config = {
        width: 256,
        height: 272,
        backgroundColor: 0x000000,
        scene: [Scene1, Scene2, Ending, Start, Controls],
        pixelArt: true,
        physics: {
            default: "arcade",
            arcade:{
                debug: false
            }
        }
    }
    var game = new Phaser.Game(config);
}