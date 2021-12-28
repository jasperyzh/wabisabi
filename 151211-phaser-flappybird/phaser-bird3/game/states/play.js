  'use strict';

  var Bird = require('../prefabs/bird');
  var Ground = require('../prefabs/ground');
  var PipeGroup = require('../prefabs/pipeGroup');
  var Pipe = require('../prefabs/pipe');
 
  function Play() {}
  
  Play.prototype = {
    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 1200;

      this.background = this.game.add.sprite(0, 0, 'background');

      //default spawn bird
      this.bird = new Bird(this.game, 100, this.game.height/2);
      this.game.add.existing(this.bird);

      //recycle pipes
      this.pipes = this.game.add.group();

      this.ground = new Ground(this.game, 0, 400, 335, 112);
      this.game.add.existing(this.ground);

      //spawn 10 birds
      /*var birdGroup = this.game.add.group();
      for (var i = 0; i < 10; i++){
        var bird = new Bird(this.game, this.game.world.randomX, this.game.world.randomY);
        birdGroup.add(bird);
      }*/

      //keep spacebar from propogating up to the browser
      
      //add keyboard controls
      this.flapKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      this.flapKey.onDown.addOnce(this.startGame, this);
      this.flapKey.onDown.add(this.bird.flap, this.bird);

      // add mouse/touch controls
      this.game.input.onDown.addOnce(this.startGame, this);
      this.game.input.onDown.add(this.bird.flap, this.bird);

      this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
      
      //obstacles: move to a function
      /*this.pipeGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generatePipes, this);
      this.pipeGenerator.timer.start();*/

      this.instructionGroup = this.game.add.group();
      this.instructionGroup.add(this.game.add.sprite(this.game.width/2, 100,'getReady'));
      this.instructionGroup.add(this.game.add.sprite(this.game.width/2, 325,'instructions'));
      this.instructionGroup.setAll('anchor.x', 0.5);
      this.instructionGroup.setAll('anchor.y', 0.5);

      this.pipeGenerator = null;

      //score
      this.score = 0;
      this.scoreText = this.game.add.bitmapText(this.game.width/2, 10, 'flappyfont',this.score.toString(), 24);

      //sound
      this.scoreSound = this.game.add.audio('score');
    },
    update: function() {
        this.game.physics.arcade.collide(this.bird, this.ground, this.deathHandler, null, this);

        this.pipes.forEach(function(pipeGroup) {
          this.checkScore(pipeGroup);
          this.game.physics.arcade.collide(this.bird, pipeGroup, this.deathHandler, null, this);
        }, this);
    },
    shutdown: function(){
      this.game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
      this.bird.destroy();
      this.pipes.destroy();
    },
    startGame: function(){
      this.bird.body.allowGravity = true;
      this.bird.alive = true;

      //add a timer
      this.pipeGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generatePipes, this);
      this.pipeGenerator.timer.start();

      this.instructionGroup.destroy();
    },
    checkScore: function(pipeGroup){
      if(pipeGroup.exists && !pipeGroup.hasScored && pipeGroup.topPipe.world.x <= this.bird.world.x){
        pipeGroup.hasScored = true;
        this.score++;
        this.scoreText.setText(this.score.toString());
        this.scoreSound.play();
      }
    },
    deathHandler: function(){
      this.game.state.start('gameover');
    },
    generatePipes: function(){
      //console.log('generating pipes!');

      var pipeY = this.game.rnd.integerInRange(-100, 100);
      var pipeGroup = this.pipes.getFirstExists(false);
      if(!pipeGroup){
        pipeGroup = new PipeGroup(this.game, this.pipes);
      }
      pipeGroup.reset(this.game.width + pipeGroup.width/2, pipeY);

      /*non-recycle sample
      var pipeGroup = new PipeGroup(this.game);
      pipeGroup.x = this.game.width;
      pipeGroup.y = pipeY;*/
    }
    /*recycle bird sample
    generateBird: function(){
      var bird = this.birdGroup.getFirstExists(false);
      if(!bird){
        bird = new Bird(this.game, x, y);
        this.birdGroup.add(bird);
      }
      bird.reset(x, y);
    }*/

  };
  
  module.exports = Play;