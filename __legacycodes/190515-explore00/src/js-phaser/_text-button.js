
class TextButton extends Phaser.GameObjects.Text {

    constructor(scene, x, y, text, style, callback) {
        super(scene, x, y, text, style);

        this.setInteractive({ useHandCursor: true })
        .on('pointerover',  ()=> this.hoverState() )
        .on('pointerout',   ()=> this.restState() )
        .on('pointerdown',  ()=> this.activeState() )
        .on('pointerup',    ()=> {
            this.hoverState();
            callback();
        });
    }
    hoverState(){
        this.setStyle({ fill: '#ff0'});
    }
    restState(){
        this.setStyle({ fill: '#0f0'});
    }
    activeState(){
        this.setStyle({ fill: '#0ff' });
    }
}

export default TextButton;