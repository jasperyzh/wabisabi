class BasicButton extends Phaser.GameObjects.Sprite {

    constructor(config) {

        
        //check if config contains a scene
        if (!config.scene) {
            console.log('missing scene');
            return;
        }
        //check if config contains a key
        if (!config.key) {
            console.log("missing key!");
            return;
        }
        //if there is no up property assume 0
        if (!config.up) {
            config.up = 0;
        }
        //if there is no down in config use up
        if (!config.down) {
            config.down = config.up;
        }
        //if there is no over in config use up
        if (!config.over) {
            config.over = config.up;
        }

        if (!config.x) {
            config.x = 0;
        }
        if (!config.y) {
            config.y = 0;
        }

        //call the constructor of the parent
        //set at 0,0 in case there is no x and y
        //in the config
        super(config.scene, config.x, config.y, config.key, config.up);

        //add this to the scene
        config.scene.add.existing(this);

        //make interactive and set listeners
        this.setInteractive();
        this.on('pointerdown', this.onDown, this);
        this.on('pointerup', this.onUp, this);
        this.on('pointerover', this.onOver, this);
        this.on('pointerout', this.onUp, this);
    }

    onDown() {
        console.log('button is down');
        // this.setFrame(this.config.down);
    }
    onOver() {
        console.log('button is onOver');
        // this.setFrame(this.config.over);
    }
    onUp() {
        console.log('button is onUp');
        // this.setFrame(this.config.up);
    }
}

export default BasicButton;