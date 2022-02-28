'use strict';

var Bird = require('../prefabs/bird');
var Ground = require('../prefabs/ground');
var PipeGroup = require('../prefabs/pipeGroup');


function Play() {}
Play.prototype = {
    create: function() {
      this.background = this.game.add.sprite(0, 0, 'background');

      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 0;

      this.bird = new Bird(this.game, 100, this.game.height/2);
      this.game.add.existing(this.bird);

      this.pipes = this.game.add.group();
      //this.birdGroup = this.game.add.group(); //not use

      this.instructionGroup = this.game.add.group();
      this.instructionGroup.add(this.game.add.sprite(this.game.width/2, 100, 'getReady'));
      this.instructionGroup.add(this.game.add.sprite(this.game.width/2, 325, 'instructions'));
      this.instructionGroup.setAll('anchor.x', 0.5);
      this.instructionGroup.setAll('anchor.y', 0.5);

      this.ground = new Ground(this.game, 0, 400, 335, 112);
      this.game.add.existing(this.ground);
      this.ground.autoScroll(-200, 0);

      //this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
      this.game.input.keyboard.addKeyCapture([Phaser.KeyCode.UP]);
      this.game.input.keyboard.addKeyCapture([Phaser.KeyCode.DOWN]);

      //this.keyStartGame = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      this.flapKeyUp    = this.input.keyboard.addKey(Phaser.Keyboard.UP);
      this.flapKeyDown  = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);


      //mouse/touch
      /*
      this.game.input.onDown.addOnce(this.startGame, this);
      this.game.input.onDown.add(this.bird.flapUp, this.bird);
      this.game.input.onDown.add(this.bird.flapDown, this.bird);
      this.game.input.onDown.add(this.) upperScreen, lowerScreen input*/

      //this.keyStartGame.onDown.addOnce(this.startGame, this);
      
      this.flapKeyUp.onDown.addOnce(this.startGame, this);
      this.flapKeyDown.onDown.addOnce(this.startGame, this);

      this.flapKeyUp.onDown.add(this.bird.flapUp, this.bird);
      this.flapKeyUp.onDown.add(this.gravityUp, this);

      this.flapKeyDown.onDown.add(this.bird.flapDown, this.bird);
      this.flapKeyDown.onDown.add(this.gravityDown, this);
      
      
      Global.Score = 0;

      this.scoreText = this.game.add.bitmapText(this.game.width/2, 10, 'flappyFont', Global.Score.toString(), 24);
      this.scoreText.visible = false;

      this.scoreSound = this.game.add.audio('score');

    },
    update: function() {
      this.game.physics.arcade.collide(this.bird, this.ground, this.deathHandler, null, this);

      this.pipes.forEach(function(pipeGroup) {
        this.checkScore(pipeGroup);
        this.game.physics.arcade.collide(this.bird, pipeGroup, this.deathHandler, null, this);
      }, this);
    },
    gravityUp: function(){
      this.game.physics.arcade.gravity.y = -150;
    },
    gravityDown: function(){
      this.game.physics.arcade.gravity.y = 150;
    },
    generatePipes: function() {
      var pipeY = this.game.rnd.integerInRange(-100, 100);
      var pipeGroup = this.pipes.getFirstExists(false);
      if(!pipeGroup){
        pipeGroup = new PipeGroup(this.game, this.pipes);
      }
      pipeGroup.reset(this.game.width, pipeY);
    },
    generateBird: function() {
      var bird = this.birdGroup.getFirstExists(false);
      if(!bird){
        bird = new Bird(this.game, x, y);
        this.birdGroup.add(bird);
      }
      bird.reset(x, y);
    },
    deathHandler: function(){
      this.game.state.start('gameover');
    },
    hangOver: function(){
      this.game.input.keyboard.removeKey(Phaser.KeyCode.UP);
      this.game.input.keyboard.removeKey(Phaser.KeyCode.DOWN);
      this.bird.destroy();
      this.pipes.destroy();
    },
    startGame: function(){
      if(!this.bird.alive){ 
        this.bird.alive = true;
        this.bird.body.allowGravity = true;

        //add a timer for pipeGenerator
        this.pipeGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generatePipes, this);
        this.pipeGenerator.timer.start();
        this.instructionGroup.destroy();

        this.scoreText.visible = true;
      }
    },
    checkScore: function(pipeGroup){
      if(pipeGroup.exists && !pipeGroup.hasScored && pipeGroup.topPipe.world.x <= this.bird.world.x){
        pipeGroup.hasScored = true;
        Global.Score++;

        this.scoreText.setText(Global.Score.toString());
        this.scoreSound.play();
      }
    }
};
module.exports = Play;