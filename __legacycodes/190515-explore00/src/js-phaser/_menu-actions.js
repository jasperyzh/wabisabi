import Menu from './_container-menu';

class HeroesMenu extends Menu {
    constructor(x, y, scene){
        super(x, y, scene);
    }
}

class ActionsMenu extends Menu {
    constructor(x, y, scene){
        super(x, y, scene);
        this.addMenuItem('Attack');
        this.addMenuItem('Magic');
    }
    confirm(){
        this.scene.events.emit('SelectEnemies');
    }
}

class EnemiesMenu extends Menu {
    constructor(x, y, scene){
        super(x, y, scene);
    }
    confirm(){
        this.scene.events.emit('Enemy', this.menuItemIndex);
    }
}

export { HeroesMenu, ActionsMenu, EnemiesMenu };