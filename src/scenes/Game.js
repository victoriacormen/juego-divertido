export default class Game extends Phaser.Scene {
    constructor() {
        super("Game")
    }
    preload() { }
    create() {
        this.add.text(400,300, "Esta es la primera pantalla", {
            fontSize: "45px",
            fill: "#EFEFEF"
        }).setOrigin(0.5)
    }
    update() { }
}