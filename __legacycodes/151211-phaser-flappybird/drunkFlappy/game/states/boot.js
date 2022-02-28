'use strict';

function Boot() {}
Boot.prototype = {
    preload: function() {
        this.load.image('preloader', 'assets/preloader.gif');
    },
    create: function() {
        this.game.input.maxPointers = 1;
        this.game.state.start('preload');

        this.game.scale.windowConstraints.bottom = "visual";
    }
};
module.exports = Boot;