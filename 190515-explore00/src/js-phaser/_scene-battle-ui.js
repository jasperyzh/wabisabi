import {
    HeroesMenu,
    ActionsMenu,
    EnemiesMenu
} from './_menu-actions';

import Message from './_container-message';

class BattleUI extends Phaser.Scene {
    constructor() {
        super('BattleUI');
        // console.log('BattleUI launched!');
    }
    create() {

        // draw the battle menu frame
        this.drawMenuFrame();

        this.addBattleMenu();


        // hook BattleScene
        this.battleScene = this.scene.get('BattleScene');

        // add action for hero and enemy
        this.remapHeroes();
        this.remapEnemies();

        this.currentMenu.select(0);

        this.input.keyboard.on('keydown', this.onKeyInput, this);


        // // listen events from BattleScene
        this.battleScene.events.on("PlayerSelect", this.onPlayerSelect, this);

        // emit from ActionsMenu
        this.events.on("SelectEnemies", this.onSelectEnemies, this);

        // emit from EnemiesMenu
        this.events.on("Enemy", this.onEnemy, this);

        this.battleScene.nextTurn();

        // message - what happen?
        // this.message = new Message(this, this.battleScene.events);
        // this.add.existing(this.message);
    }
    
    addBattleMenu() {
        // add menu
        this.menus = this.add.container();
        this.heroesMenu = new HeroesMenu(195, 153, this);
        this.actionsMenu = new ActionsMenu(100, 153, this);
        this.enemiesMenu = new EnemiesMenu(8, 153, this);

        // the currently selected menu 
        this.currentMenu = this.actionsMenu;

        // add menus to the container
        this.menus.add(this.heroesMenu);
        this.menus.add(this.actionsMenu);
        this.menus.add(this.enemiesMenu);
    }
    remapHeroes() {
        var heroes = this.battleScene.heroes;
        this.heroesMenu.remap(heroes);
    }
    remapEnemies() {
        var enemies = this.battleScene.enemies;
        this.enemiesMenu.remap(enemies);
    }
    onKeyInput(event) {
        if (this.currentMenu) {
            if (event.code === "ArrowUp") {
                this.currentMenu.moveSelectionUp();
            } else if (event.code === "ArrowDown") {
                this.currentMenu.moveSelectionDown();
            } else if (event.code === "ArrowRight" || event.code === "Shift") {
                if (this.previousMenu) {
                    this.currentMenu.deselect();
                    this.currentMenu = this.previousMenu;
                    this.previousMenu = null;
                }
            } else if (event.code === "Space" || event.code === "ArrowLeft") {
                this.currentMenu.confirm();
            }
        }
    }
    onPlayerSelect(id) {
        this.heroesMenu.select(id);
        this.actionsMenu.select(0);
        this.currentMenu = this.actionsMenu;
    }
    onSelectEnemies() {
        this.previousMenu = this.currentMenu;
        this.currentMenu = this.enemiesMenu;
        this.enemiesMenu.select(0);
    }
    onEnemy(index) {
        console.log('targetted enemy: ', index);
        this.heroesMenu.deselect();
        this.actionsMenu.deselect();
        this.enemiesMenu.deselect();
        this.currentMenu = null;
        this.battleScene.receivePlayerSelection('attack', index);
    }

    drawMenuFrame() {
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);
        this.graphics.strokeRect(2, 150, 90, 100);
        this.graphics.fillRect(2, 150, 90, 100);
        this.graphics.strokeRect(95, 150, 90, 100);
        this.graphics.fillRect(95, 150, 90, 100);
        this.graphics.strokeRect(188, 150, 130, 100);
        this.graphics.fillRect(188, 150, 130, 100);
    }
}
export default BattleUI;