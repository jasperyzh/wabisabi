import bouncingPhaserLogo from "../elements/elements";
import marioSpritesPng from "../../assets/mario-sprites.png";
import marioSpritesJson from "../../assets/mario-sprites.json";

export default class Title extends Phaser.Scene {
  constructor() {
    super({
      key: "TitleScene"
    });
  }

  preload() {
    this.load.atlas("mario-sprites", marioSpritesPng, marioSpritesJson);

    /**
     * @done added all assets for the boots
     * @todo create the main menu
     */
  }

  create() {
    // bouncingPhaserLogo.call(this);

    this.anims.create({
      key: "title",
      frames: [
        {
          frame: "title",
          key: "mario-sprites"
        }
      ]
    });

    this.title = this.add.sprite(this.sys.game.config.width / 2, 16 * 5);
    this.title.play("title");
    this.attractMode = this.scene.launch("GameScene");
    // console.log(this.attractMode.stop);
   
    this.scene.bringToTop();
    
    this.registry.set("restartScene", false);
    this.registry.set("attractMode", true);

    let sh = window.screen.availHeight;
    let sw = window.screen.availWidth;

    // let ch = 0;
    // let cw = 0;
    let multiplier = 1;
    if (sh / sw > 0.6) {
      // Portrait, fit width
      multiplier = sw / 400;
    } else {
      multiplier = sh / 240;
    }
    multiplier = Math.floor(multiplier);
    let el = document.getElementsByTagName("canvas")[0];
    el.style.width = 400 * multiplier + "px";
    el.style.height = 240 * multiplier + "px";
    
    this.pressX = this.add.bitmapText(
      16 * 8 + 4,
      8 * 16,
      "font",
      "PRESS X TO START",
      8
    );
    this.blink = 400;

    // keybind
    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.X
    );

    // mouse
    this.input.on("pointerdown", () => {
      this.startGame();
    });
  }

  update(time, delta) {
    if (this.registry.get("restartScene")) {
      this.restartScene();
    }
    this.blink -= delta;
    if (this.blink < 0) {
      this.pressX.alpha = this.pressX.alpha === 1 ? 0 : 1;
      this.blink = 500;
    }

    if (!this.registry.get("attractMode")) {
    }
    if (this.startKey.isDown) {
      this.startGame();
    }
  }

  startGame() {
    this.scene.stop("GameScene");
    this.registry.set("attractMode", false);
    this.scene.start("GameScene");
  }

  restartScene() {
    // this.attractMode.stop();
    this.scene.stop("GameScene");
    this.scene.launch("GameScene");
    this.scene.bringToTop();

    this.registry.set("restartScene", false);
  }
}
