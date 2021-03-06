
class Unit extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, type, hp, damage){
        super(scene, x, y, texture, frame);

        this.type = type;
        this.maxHp = this.hp = hp;
        this.damage = damage; //default damage
    }
    attack(target){
        target.takeDamage(this.damage);
    }
    magic(target){
        target.takeDamage(this.damage * 1.2);
    }
    takeDamage(damage){
        this.hp -=damage;
    }
}
export default Unit;