
class Bullet extends Phaser.GameObjects.Image {

    constructor(){
        this.speed = Phaser.Math.GetSpeed(400, 1);
    }
    fire(x, y){
        this.setPosition(x, y - 10);
        this.setActive(true);
        this.setVisible(true);
    }
    update(time, delta){
        this.y -= this.speed * delta;
        if(this.y < - 50){
            this.setActive(false);
            this.setVisible(false);
        }
    }
}

export default Bullet;