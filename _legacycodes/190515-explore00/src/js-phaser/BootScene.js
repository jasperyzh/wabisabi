


import Bullet from './_image-bullet';
import Player from './_sprite-player';
import BasicButton from './_sprite-button';

import TextButton from './_text-button';




class BootScene extends Phaser.Scene {
	constructor() {
		super({
			key: 'BootScene'
		});


	}
	preload() {
		// preloader
		// const progress = this.add.graphics();
		this.load.image('coin', 'assets/sprites/coin.png');
		this.load.image('logo', 'assets/sprites/phaser3-logo-x2.png');
		this.load.image('rain', 'assets/sprites/thalion-rain.png');
		this.load.image('ship', 'assets/sprites/ship.png');

		this.load.spritesheet("buttons", "assets/sprites/buttons.png", {
			frameWidth: 100,
			frameHeight: 25
		});
	}
	create() {
		// get canvas width/height/other details
		this.getSys();

		// this.createBackground();

		// this.createTitle();

		// add a simple sprite; random location width canvas
		this.createCoin(
			Phaser.Math.Between(10, this.getWidth),
			Phaser.Math.Between(10, this.getHeight)
		);

		// this.createButton();
		this.createTextbutton();

		// RPG world
		// this.scene.start('WorldMap');
		this.scene.start('BattleScene');

		// draw basic graphic shapes
		// this.createDrawGraphicLine();

		// add sprite - player ship
		// this.createPlayerShip();

		// let coin is still callable within this scope
		// console.log(this.coin);

		// resize canvas?
		this.events.on('resize', this.resizeCanvas, this);

	}
	update() {

	}
	createPlayerShip() {
		let ship = this.add.sprite(300, 300, 'ship');

		ship.alpha = .5;
		ship.angle = 30;
		ship.setScale(.4);
		ship.displayWidth = 80;
		ship.scaleY = ship.scaleX;
	}


	createDrawGraphicLine() {
		this.graphics = this.add.graphics();
		this.graphics.lineStyle(4, 0xff0000);
		this.graphics.moveTo(100, 100);
		this.graphics.lineTo(100, 300);

		let rect = this.add.graphics();
		rect.lineStyle(6, 0xff00ff);
		rect.fillStyle(0xffccdd, .3);
		rect.strokeRect(100, 200, 50, 60);
		rect.fillRect(140, 180, 50, 60);

		let circle = this.add.graphics();
		circle.lineStyle(3, 0xccccff);
		circle.fillStyle(0xff00ff, .3);
		circle.strokeCircle(200, 50, 60);
		circle.fillCircle(200, 50, 60);

		this.graphics.strokePath();
	}
	createTextbutton() {
		this.clickCount = 0;
		this.clickCountText = this.add.text(100, 200, '');

		this.incrementButton = new TextButton(this, 100, 100, 'Increase Count', {
			fill: '#0f0'
		}, () => this.incrementClickCount());

		this.decrementButton = new TextButton(this, 100, 150, 'Decrease Count', {
			fill: '#0f0'
		}, () => this.decrementClickCount());

		this.add.existing(this.incrementButton);
		this.add.existing(this.decrementButton);
	}
	incrementClickCount() {
		this.clickCount++;
		this.updateClickCountText();
	}
	decrementClickCount() {
		this.clickCount--;
		this.updateClickCountText();
	}
	updateClickCountText() {
		this.clickCountText.setText(`Button has been clicked ${this.clickCount} times.`);
	}

	createBackground() {
		this.bg = this.add.tileSprite(0, 0, this.getWidth, this.getHeight, 'rain').setOrigin(0);
	}
	createTitle() {
		this.titleCard = this.add.sprite(this.getWidth / 2, this.getHeight / 2, 'logo');
	}
	createCoin(x, y) {
		this.coin = this.physics.add.sprite(x, y, 'coin');
	}

	getSys() {
		// get current scene details
		// console.log(this);

		// get current scene width/height; however this will not change upon any canvas resizing
		this.getWidth = this.sys.game.config.width;
		this.getHeight = this.sys.game.config.height;
	}

	resizeCanvas() {
		// on resize, adjust the width and height
		this.width = this.sys.game.config.width;
		this.height = this.sys.game.config.height;

		this.cameras.resize(this.width, this.height);

		// resize the element position
		if (this.bg) {
			this.bg.setSize(this.width, this.height);
		}
		if (this.titleCard) {
			this.titleCard.setPosition(this.width / 2, this.height / 2);
		}
	}

	createButton() {
		this.button = new BasicButton({
			'scene': this,
			'key': 'buttons',
			'up': 0,
			'over': 1,
			'down': 2,
			'x': 100,
			'y': 100
		});
		// this.button.on('pointerdown',this.onPressed,this);
	}
	// onPressed(){
	// 	console.log('hello, button is pressed');
	// }

}



export default BootScene;