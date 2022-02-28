'use strict';


var Bird = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'bird', frame);

  this.anchor.setTo(0.5, 0.5);

  this.animations.add('flap');
  this.animations.play('flap', 12, true);

  this.name = 'bird';

  this.alive = false;

  this.game.physics.arcade.enableBody(this);
  
  this.body.allowGravity = false;

  this.checkWorldBounds = true;
  this.outOfBoundsKill = true;

  this.flapSound = this.game.add.audio('flap');
};

Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.update = function() {
	if (this.alive){
		if(this.body.velocity.y < -100 && this.angle > -90){
			this.angle -= 2.5;
		}else if(this.body.velocity.y > 100 && this.angle < 90){
			this.angle += 2.5;
		}
	}
};

Bird.prototype.render = function() {
	this.game.debug.body(this);
};
Bird.prototype.flapUp = function() {
	this.flapSound.play();

	this.body.velocity.y = -getVelocity(Global.Score);
	console.log(Global.Score);
	this.game.add.tween(this).to({angle: -40}, 100).start();
};
Bird.prototype.flapDown = function() {
	this.flapSound.play();

	this.body.velocity.y = getVelocity(Global.Score);

	this.game.add.tween(this).to({angle: 40}, 100).start();
};

function getVelocity(score){
	var speed = 260;

	if(score > 10){
		speed = 280;
	} else if (score > 20){
		speed = 300;
	}
	return speed;
}
module.exports = Bird;
