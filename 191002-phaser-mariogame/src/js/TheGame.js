/**
 * mini-game
 * @reference https://github.com/nkholski/phaser3-es6-webpack
 *
 * @reference https://rexrainbow.github.io/phaser3-rex-notes/docs/site/index.html
 *
 * @reference https://labs.phaser.io/index.html
 *
 */
import "phaser";
import Boot from "./scenes/Boot";
import Title from "./scenes/Title";
import GameScene from "./scenes/GameScene";

export default class TheGame {
  constructor() {
    this.insertGame("theGame");
  }

  insertGame(id) {
    document.querySelector('.main').insertAdjacentHTML("afterbegin", `<div id="${id}"></div>`);
    this.bootGame(id);
  }

  bootGame(id) {
    const config = {
      type: Phaser.WEBGL,
      pixelArt: true,
      roundPixels: true,
      parent: id,
      width: 400,
      height: 240,
      physics: {
        default: "arcade",
        arcade: {
          gravity: {
            y: 800
          },
          debug: true
        }
      },
      scene: [new Boot(), new Title(), new GameScene()]
    };

    const game = new Phaser.Game(config);
  }
}
