
import Unit from './_sprite-unit';

class Hero extends Unit{
    constructor(scene, x, y, texture, frame, type, hp, damage){
        super(scene, x, y, texture, frame, type, hp, damage);

        this.flipX = true;

        this.setScale(2);
    }
}
export default Hero;