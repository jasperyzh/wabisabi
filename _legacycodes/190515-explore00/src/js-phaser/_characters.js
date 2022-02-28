

class Characters {
	constructor(){
		
	}
	preload(){
        this.load.image('player', 'assets/sprites/player.png');
	}
	create(){
		this.generatePlayer(100, 100);
	}
	generatePlayer(x, y){
        this.player = this.physics.add.sprite(x, y, 'player');
	}
}
export default Characters;