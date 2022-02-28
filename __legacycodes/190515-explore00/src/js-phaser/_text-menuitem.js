class MenuItem extends Phaser.GameObjects.Text {
    constructor(x, y, text, scene) {
        super(scene, x, y, text, {
            color: '#ffffff',
            align: 'left',
            fontSize: 15
        });
        
    }
    select(){
        this.setColor('#ff0000');
        // add handcursor?
    }
    deselect(){
        this.setColor('#ffffff');
    }
}

export default MenuItem;