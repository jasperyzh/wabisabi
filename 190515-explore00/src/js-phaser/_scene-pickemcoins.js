
import Characters from '../modules/_characters';

class SceneTown extends Phaser.Scene {
    constructor() {
        super('PickEmCoins');

        // var zone;
    }
    preload() {
        // this.load.setBaseURL('http://labs.phaser.io');
        this.load.image('coin', 'assets/sprites/coin.png');
    }
    addActors(){
        var player = new Characters();
        

    }
    addElements(){
        this.coin = this.physics.add.sprite(300, 300, 'coin');
    }
    addHud(){
        this.score = 0;
        let style = { font: '20px Arial', fill: '#fff' };
        this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);
    }
    addControl(){
        this.arrow = this.input.keyboard.createCursorKeys();
        this.input.on('pointerup', this.clickHandler, this);
        this.input.once('pointerup', this.clickHandler, this);
        this.events.on('chatsubo', this.clickHandler, this);
    }
    create() {
        this.physics.world.enable([this.player]);
        this.player.setVelocity(0, 0);
        this.player.setBounce(1, 1);
        this.player.setCollideWorldBounds(true);

        addActors();
        addElements();
        addHud();
        addControl();

        var group = this.physics.add.group({
            key: 'block',
            frameQuantity: 4,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            velocityX: 120,
            velocityY: 60
        });

        this.createZone(this.zone);
        this.physics.add.overlap(group, this.zone);
        this.physics.add.overlap(this.player, this.zone);

        this.zone.on('enterzone', () => console.log('enterzone'));
        this.zone.on('leavezone', () => console.log('leavezone'));
    }
    addCollision() {
        // Change the position x and y of the coin randomly
        this.coin.x = Phaser.Math.Between(100, 600);
        this.coin.y = Phaser.Math.Between(100, 300);

        // Increment the score by 10
        this.score += 10;

        // Display the updated score on the screen
        this.scoreText.setText('score: ' + this.score);

        // Create a new tween 
        this.tweens.add({
            targets: this.player, // on the player 
            duration: 200, // for 200ms 
            scaleX: 1.2, // that scale vertically by 20% 
            scaleY: 1.2, // and scale horizontally by 20% 
            yoyo: true, // at the end, go back to original scale 
        });
    }
    update() {
        // If the player is overlapping with the coin
        if (this.physics.overlap(this.player, this.coin)) {
            // Call the new hit() method
            this.addCollision();
        }
            this.player.setVelocity(0,0);
        // Handle horizontal movements
        if (this.arrow.right.isDown) {
            // If the right arrow is pressed, move to the right
            this.player.setVelocity(130, 0);
        } else if (this.arrow.left.isDown) {
            // If the left arrow is pressed, move to the left
            // this.player.x -= 3;
            this.player.setVelocity(-130, 0);
        }
        // Do the same for vertical movements
        if (this.arrow.down.isDown) {
            // this.player.y += 3;
            this.player.setVelocity(0, 130);
        } else if (this.arrow.up.isDown) {
            // this.player.y -= 3;
            this.player.setVelocity(0, -130);
        }

        if (this.score >= 50) {
            this.events.emit('chatsubo');
        }
        var touching = this.zone.body.touching;
        var wasTouching = this.zone.body.wasTouching;

        if (touching.none && !wasTouching.none) {
            this.zone.emit('leavezone');
        } else if (!touching.none && wasTouching.none) {
            this.zone.emit('enterzone');
        }
        this.zone.body.debugBodyColor = this.zone.body.touching.none ? 0x00ffff : 0xffff00;
    }
    createZone(zone) {
        this.zone = this.add.zone(300, 200).setSize(200, 200);
        this.physics.world.enable(this.zone);
        this.zone.body.setAllowGravity(false);
        this.zone.body.moves = false;
    }
    clickHandler() {
        // this.scene.start('TownSceneB');
    }
}

export default SceneTown;