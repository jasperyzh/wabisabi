class SceneTown extends Phaser.Scene {
    constructor() {
        super('TownScene');
    }
    preload() {
this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
        this.load.image('bg', 'assets/skies/sky4.png');
        this.load.image('crate', 'assets/sprites/crate.png');
    }
    create() {
        // this.add.image(400, 300, 'bg');

        // for (let i = 0; i < 64; i++) {
        //     let x = Phaser.Math.Between(0, 800);
        //     let y = Phaser.Math.Between(0, 600);

        //     this.add.image(x, y, 'crate').setInteractive();
        // }

        // this.input.on('gameobjectup', this.clickHandler, this);

        this.add.image(400, 300, 'sky');

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);


        //  This handler will only be called once, no matter how many times the event fires

        this.input.on('pointerup', this.clickHandler, this);
    }
    clickHandler() {
        //  Disable our box
        // box.input.enabled = false;
        // box.setVisible(false);

        // //  Dispatch a Scene event
        // this.events.emit('addScore');
        this.scene.start('TownSceneB');

        // console.log('clicked scene!');
    }
    // clickHandler(pointer, box) {
    //     //  Disable our box
    //     box.input.enabled = false;
    //     box.setVisible(false);

    //     //  Dispatch a Scene event
    //     this.events.emit('addScore');
    // }
}

export default SceneTown;