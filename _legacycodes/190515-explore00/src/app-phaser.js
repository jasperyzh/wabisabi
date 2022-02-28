
import PhaserGame from './src/js-phaser/Simple';

// import SceneTown from './src/js/scene-town';


var phaserGame = new PhaserGame();




import BootScene from './src/js-phaser/BootScene';
import WorldMap from './src/js-phaser/_scene-world';
import BattleScene from './src/js-phaser/_scene-battle';
import BattleUI from './src/js-phaser/_scene-battle-ui';


const config = {
	type: Phaser.WEBGL,
	pixelArt: true,
	roundPixels: true,
	parent: 'canvas',
	width: 480,
	height: 320,
	zoom: 2,

	physics: {
		default: 'arcade',
		arcade: {
			gravity: {
				y: 0
			},
			debug: true
		}
	},
	scene: [
		BootScene,
		WorldMap,
		BattleScene,
		BattleUI
	],
	backgroundColor: '#3498db',

};

const game = new Phaser.Game(config); 