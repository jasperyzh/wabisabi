(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(288, 505, Phaser.AUTO, 'phaser-bird3');

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  

  game.state.start('boot');
};
},{"./states/boot":6,"./states/gameover":7,"./states/menu":8,"./states/play":9,"./states/preload":10}],2:[function(require,module,exports){
'use strict';

var Bird = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'bird', frame);

  this.anchor.setTo(0.5, 0.5);
  this.animations.add('flap');
  this.animations.play('flap', 12, true);
  this.name = 'bird';
  this.alive = false;

  this.game.physics.arcade.enable(this);

  this.body.allowGravity = false;
  this.checkWorldBounds = true;
  this.outOfBoundsKill = true;

  this.flapSound = this.game.add.audio('flap');
};

Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.update = function() {
	if(this.angle < 90 && this.alive){
		this.angle += 2.5;
	}

},

Bird.prototype.flap = function(){
  this.flapSound.play();

	this.body.velocity.y = -400;

	this.game.add.tween(this).to({angle: -40}, 100).start();
}

module.exports = Bird;

},{}],3:[function(require,module,exports){
'use strict';

var Ground = function(game, x, y, width, height) {
	Phaser.TileSprite.call(this, game, x, y, width, height, 'ground');

  	this.autoScroll(-200, 0);
  	
	this.game.physics.arcade.enableBody(this);
  	this.body.allowGravity = false;
  	this.body.immovable = true;
};

Ground.prototype = Object.create(Phaser.TileSprite.prototype);
Ground.prototype.constructor = Ground;

Ground.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Ground;

},{}],4:[function(require,module,exports){
'use strict';

var Pipe = function(game, x, y, frame) {
	  Phaser.Sprite.call(this, game, x, y, 'pipe', frame);
	  this.anchor.setTo(0.5, 0.5);
	  this.game.physics.arcade.enableBody(this);

	  this.body.allowGravity = false;
	  this.body.immovable = true;
};

Pipe.prototype = Object.create(Phaser.Sprite.prototype);
Pipe.prototype.constructor = Pipe;

Pipe.prototype.update = function() {
  
};

module.exports = Pipe;

},{}],5:[function(require,module,exports){
'use strict';
var Pipe = require('./pipe');

var PipeGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);

  this.topPipe = new Pipe(this.game, 0, 0, 0);
  this.bottomPipe = new Pipe(this.game, 0, 440, 1);
  this.add(this.topPipe);
  this.add(this.bottomPipe);

  this.hasScored = false;
  this.setAll('body.velocity.x', -200);
};

PipeGroup.prototype = Object.create(Phaser.Group.prototype);
PipeGroup.prototype.constructor = PipeGroup;

PipeGroup.prototype.update = function(){
	this.checkWorldBounds();
};

PipeGroup.prototype.checkWorldBounds = function(){
	if(!this.topPipe.inWorld){
		this.exists = false;
	}
};

PipeGroup.prototype.reset = function(x, y){
	this.topPipe.reset(0,0);
	this.bottomPipe.reset(0,440);
	this.x = x;
	this.y = y;
	this.setAll('body.velocity.x', -200);
	this.hasScored = false;
	this.exists = true;
};


module.exports = PipeGroup;
},{"./pipe":4}],6:[function(require,module,exports){

'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};

module.exports = Boot;

},{}],7:[function(require,module,exports){
'use strict';
function GameOver() {}

GameOver.prototype = {
  preload: function () {

  },
  create: function () {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.titleText = this.game.add.text(this.game.world.centerX,100, 'Game Over!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.congratsText = this.game.add.text(this.game.world.centerX, 200, 'You Win!', { font: '32px Arial', fill: '#ffffff', align: 'center'});
    this.congratsText.anchor.setTo(0.5, 0.5);

    this.instructionText = this.game.add.text(this.game.world.centerX, 300, 'Click To Play Again', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionText.anchor.setTo(0.5, 0.5);
  },
  update: function () {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};
module.exports = GameOver;

},{}],8:[function(require,module,exports){

'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
      this.background = this.game.add.sprite(0, 0, 'background');

      this.ground = this.game.add.tileSprite(0, 400, 335, 112, 'ground');
      this.ground.autoScroll(-100, 0);

      this.titleGroup = this.game.add.group();
      this.title = this.game.add.sprite(30,100, 'title');
      this.titleGroup.add(this.title);

      this.bird = this.game.add.sprite(200, 140, 'bird');
      this.titleGroup.add(this.bird);

      this.bird.animations.add('flap');
      this.bird.animations.play('flap', 12, true);

      this.titleGroup.x = 30;
      this.titleGroup.y = 0;

      this.game.add.tween(this.titleGroup).to({y:15}, 350, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

      this.startButton = this.game.add.button(this.game.width/2, 300, 'startButton', this.startClick, this);
      this.startButton.anchor.setTo(0.5,0.5);
  },
  update: function() {
  },
  startClick: function(){
  	this.game.state.start('play');
  }
};

module.exports = Menu;

},{}],9:[function(require,module,exports){
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
},{"../prefabs/bird":2,"../prefabs/ground":3,"../prefabs/pipe":4,"../prefabs/pipeGroup":5}],10:[function(require,module,exports){

'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.asset = this.add.sprite(this.width/2, this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(this.asset);

    this.load.image('background', 'assets/background.png');
    this.load.image('ground', 'assets/ground.png');
    this.load.image('title', 'assets/title.png');
    this.load.image('startButton', 'assets/start-button.png');
    this.load.image('instructions', 'assets/instructions.png');  
    this.load.image('getReady', 'assets/get-ready.png');

    this.load.bitmapFont('flappyfont', 'assets/fonts/flappyfont/flappyfont.png', 'assets/fonts/flappyfont/flappyfont.fnt');

    this.load.audio('score', 'assets/score.wav');
    this.load.audio('flap', 'assets/flap.wav');
    this.load.audio('pipeHit', 'assets/pipe-hit.wav');
    this.load.audio('groundHit', 'assets/ground-hit.wav');
    
    this.load.spritesheet('pipe', 'assets/pipes.png', 54, 320, 2);
    this.load.spritesheet('bird', 'assets/bird.png', 34, 24, 3);
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('play');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;

},{}]},{},[1])