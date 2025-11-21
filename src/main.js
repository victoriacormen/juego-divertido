import './style.css'
import Phaser from 'phaser'
import Portada from './scenes/Portada.js';
import Instrucciones from './scenes/Instrucciones.js';
import GameOver from './scenes/GameOver.js';
import Game from './scenes/Game.js';

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#333",
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [Game, Portada,Instrucciones,GameOver] // Aquí registras la escena

}
const game = new Phaser.Game(config);