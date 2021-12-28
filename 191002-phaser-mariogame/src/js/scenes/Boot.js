// import Phaser from 'phaser';
import makeAnimations from "../helpers/animations";

import backgroundClouds from "../../assets/images/clouds.png";
import marioMap from "../../assets/tilemaps/super-mario.json";
import marioTiles from "../../assets/images/super-mario.png";
import marioTiles16bit from "../../assets/images/super-mario-16bit.png";
import mario from "../../assets/images/mario-sprites.png";
import marioSpritesPng from "../../assets/mario-sprites.png";
import marioSpritesJson from "../../assets/mario-sprites.json";
import overworldOgg from "../../assets/music/overworld.ogg";
import overworldMp3 from "../../assets/music/overworld.mp3";
import sfxJson from "../../assets/audio/sfx.json";
import sfxOgg from "../../assets/audio/sfx.ogg";
import sfxMp3 from "../../assets/audio/sfx.mp3";
import fontPng from "../../assets/fonts/font.png";
import fontFnt from "../../assets/fonts/font.fnt";
import attractJson from "../../assets/timeline/attract.json";

export default class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: "boot"
    });
  }

  preload() {
    const progress = this.add.graphics();

    // Register a load progress event to show a load bar
    this.load
      .on("progress", value => {
        progress.clear();
        progress.fillStyle(0xffffff, 1);
        progress.fillRect(
          0,
          this.sys.game.config.height / 2,
          this.sys.game.config.width * value,
          60
        );
      })
      .on("complete", () => {
        // prepare all animations, defined in a separate file
        makeAnimations(this);
        progress.destroy();
        this.scene.start("TitleScene");
      });

    this.load.image("background-clouds", backgroundClouds); // 16-bit later

    // Tilemap with a lot of objects and tile-properties tricks
    this.load.tilemapTiledJSON("map", marioMap);

    // I load the tiles as a spritesheet so I can use it for both sprites and tiles,
    // Normally you should load it as an image.
    this.load.spritesheet("tiles", marioTiles, {
      frameWidth: 16,
      frameHeight: 16,
      spacing: 2
    });

    // Support for switching between 8-bit and 16-bit tiles
    this.load.spritesheet("tiles-16bit", marioTiles16bit, {
      frameWidth: 16,
      frameHeight: 16,
      spacing: 2
    });

    // Spritesheets with fixed sizes. Should be replaced with atlas:
    this.load.spritesheet("mario", mario, {
      frameWidth: 16,
      frameHeight: 32
    });

    // Beginning of an atlas to replace the spritesheets above. Always use spriteatlases. I use TexturePacker to prepare them.
    // Check rawAssets folder for the TexturePacker project I use to prepare these files.
    this.load.atlas("mario-sprites", marioSpritesPng, marioSpritesJson);

    // Music to play. It's not properly edited for an continous loop, but game play experience isn't really the aim of this repository either.
    this.load.audio("overworld", [overworldOgg, overworldMp3]);

    // Sound effects in a audioSprite.
    this.load.audioSprite("sfx", sfxJson, [sfxOgg, sfxMp3], {
      instances: 4
    });

    this.load.bitmapFont("font", fontPng, fontFnt);

    // This json contain recorded gamep
    this.load.json("attract", attractJson);
  }
}
