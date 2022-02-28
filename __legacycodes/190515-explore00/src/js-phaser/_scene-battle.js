import Hero from './_sprite-hero';
import Enemy from './_sprite-enemy';


class BattleScene extends Phaser.Scene {
    constructor() {
        super('BattleScene');
    }
    preload() {
        this.load.spritesheet('player', 'assets/sprites/RPG_assets.png', {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.image('dragonblue', 'assets/sprites/dragonblue.png');
        this.load.image('dragonorrange', 'assets/sprites/dragonorrange.png');
    }
    create() {
        this.cameras.main.setBackgroundColor('rgba(40, 200, 40, 0.5)');

        // load actors; add containers
        this.battleLoad();

        this.index = -1;

        this.scene.launch('BattleUI');

        // try it at 3.16
        // this.input.on('pointerup', this.enableFullScreen, this);

    }
    battleLoad() {
        // player character - warrior
        var warrior = new Hero(this, 250, 50, 'player', 1, 'Warrior', 100, 20);
        this.add.existing(warrior);

        // player character - mage
        var mage = new Hero(this, 250, 100, 'player', 4, 'Mage', 80, 8);
        this.add.existing(mage);

        var dragonblue = new Enemy(this, 50, 50, 'dragonblue', null, 'Dragon', 50, 3);
        this.add.existing(dragonblue);

        var dragonOrange = new Enemy(this, 50, 100, 'dragonorrange', null, 'Dragon2', 50, 3);
        this.add.existing(dragonOrange);

        // array with heroes
        this.heroes = [warrior, mage];
        // array with enemies
        this.enemies = [dragonblue, dragonOrange];
        // array with both parties, who will attack
        this.units = this.heroes.concat(this.enemies);
    }
    nextTurn() {
        this.index++;
        console.log('next turn! Turn ' + this.index);
        // if there are no more units, we start again from the first one
        if (this.index >= this.units.length) {
            this.index = 0;
        }
        if (this.units[this.index]) {
            // if its player hero
            if (this.units[this.index] instanceof Hero) {
                this.events.emit('PlayerSelect', this.index);
            } else { // else if its enemy unit
                // pick random hero
                var r = Math.floor(Math.random() * this.heroes.length);
                // call the enemy's attack function 
                this.units[this.index].attack(this.heroes[r]);
                // add timer for the next turn, so will have smooth gameplay
                this.time.addEvent({
                    delay: 3000,
                    callback: this.nextTurn,
                    callbackScope: this
                });
            }
        }
    }
    receivePlayerSelection(action, target) {
        if (action == 'attack') {
            console.log(this.units, this.enemies);
            this.units[this.index].attack(this.enemies[target]);
        }
        console.log('ATTACK NOW!!');
        this.time.addEvent({
            delay: 3000,
            callback: this.nextTurn,
            callbackScope: this
        });
    }

    // try it at 3.16
    enableFullScreen() {
        console.log('FULL SCREEN!');
        if (this.scale.isFullScreen) {
            this.scale.stopFullScreen();
        } else {
            this.scale.startFullScreen();
        }
    }
}
export default BattleScene;