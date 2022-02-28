(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(640, 480, Phaser.AUTO, 'drunk-fish');

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

  this.game.physics.arcade.enableBody(this);
  
  this.body.allowGravity = false;

  this.checkWorldBounds = true;
  this.outOfBoundsKill = true;

  this.flapSound = this.game.add.audio('flap');
};

Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.update = function() {
	if (this.alive){
		if(this.body.velocity.y < -100 && this.angle > -90){
			this.angle -= 2.5;
		}else if(this.body.velocity.y > 100 && this.angle < 90){
			this.angle += 2.5;
		}
	}
};

Bird.prototype.render = function() {
	this.game.debug.body(this);
};
Bird.prototype.flapUp = function() {
	this.flapSound.play();

	this.body.velocity.y = -getVelocity(Global.Score);
	console.log(Global.Score);
	this.game.add.tween(this).to({angle: -40}, 100).start();
};
Bird.prototype.flapDown = function() {
	this.flapSound.play();

	this.body.velocity.y = getVelocity(Global.Score);

	this.game.add.tween(this).to({angle: 40}, 100).start();
};

function getVelocity(score){
	var speed = 260;

	if(score > 10){
		speed = 280;
	} else if (score > 20){
		speed = 300;
	}
	return speed;
}
module.exports = Bird;

},{}],3:[function(require,module,exports){
'use strict';

var Ground = function(game, x, y, width, height) {
  Phaser.TileSprite.call(this, game, x, y, width, height, 'ground');

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
  
  // write your prefab's specific update code here
  
};

module.exports = Pipe;

},{}],5:[function(require,module,exports){
'use strict';

var Pipe = require('./pipe');

var PipeGroup = function(game, parent) {
	
  Phaser.Group.call(this, game, parent);

  this.topPipe = new Pipe(this.game, 0, 0, 0);
  this.add(this.topPipe);

  this.bottomPipe = new Pipe(this.game, 0, 440, 1);
  this.add(this.bottomPipe);

  this.hasScored = false;

  this.setAll('body.velocity.x', -200);
};

PipeGroup.prototype = Object.create(Phaser.Group.prototype);
PipeGroup.prototype.constructor = PipeGroup;

PipeGroup.prototype.reset = function(x, y) {
	this.topPipe.reset(0,0);
	this.bottomPipe.reset(0,440);
	this.x = x;
	this.y = y;
	this.setAll('body.velocity.x', -200);
	this.hasScored = false;
	this.exists = true;
}
PipeGroup.prototype.checkWorldBounds = function() {
	if (!this.topPipe.inWorld){
		this.exists = false;
	}
}
PipeGroup.prototype.update = function(){
	this.checkWorldBounds();
}
module.exports = PipeGroup;

},{"./pipe":4}],6:[function(require,module,exports){
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
    preload: function() {},
    create: function() {

        this.background = this.game.add.sprite(0, 0, 'background');

        this.ground = this.game.add.tileSprite(0, 400, 335, 112, 'ground');
        this.ground.autoScroll(-200, 0);

        this.titleGroup = this.game.add.group();

        this.title = this.game.add.sprite(0, 0, 'title');
        this.titleGroup.add(this.title);

        this.bird = this.game.add.sprite(200, 5, 'bird');
        this.titleGroup.add(this.bird);

        this.bird.animations.add('flap');
        this.bird.animations.play('flap', 12, true);

        this.titleGroup.x = 30;
        this.titleGroup.y = 100;

        this.game.add.tween(this.titleGroup).to({y:115}, 350, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

        this.startButton = this.game.add.button(this.game.width/2, 300, 'startButton', this.startClick, this);
        this.startButton.anchor.setTo(0.5, 0.5);


        /*
        var style = {
            font: '65px Arial',
            fill: '#ffffff',
            align: 'center'
        };
        this.sprite = this.game.add.sprite(this.game.world.centerX, 138, 'yeoman');
        this.sprite.anchor.setTo(0.5, 0.5);

        this.titleText = this.game.add.text(this.game.world.centerX, 300, '\'Allo, \'Allo!', style);
        this.titleText.anchor.setTo(0.5, 0.5);

        this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Click anywhere to play "Click The Yeoman Logo"', {
            font: '16px Arial',
            fill: '#ffffff',
            align: 'center'
        });
        this.instructionsText.anchor.setTo(0.5, 0.5);

        this.sprite.angle = -20;
        this.game.add.tween(this.sprite).to({
            angle: 20
        }, 1000, Phaser.Easing.Linear.NONE, true, 0, 1000, true);*/
    },
    update: function() {
        if (this.game.input.activePointer.justPressed()) {
            this.game.state.start('play');
        }
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
},{"../prefabs/bird":2,"../prefabs/ground":3,"../prefabs/pipeGroup":5}],10:[function(require,module,exports){
'use strict';

function Preload() {
    this.asset = null;
    this.ready = false;
}
Preload.prototype = {
    preload: function() {
        this.asset = this.add.sprite(this.width / 2, this.height / 2, 'preloader');
        this.asset.anchor.setTo(0.5, 0.5);
        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.setPreloadSprite(this.asset);
        this.load.image('background', 'assets/background.png');
        this.load.image('ground', 'assets/ground.png');
        this.load.image('title', 'assets/title.png');
        this.load.image('startButton', 'assets/start-button.png');

        this.load.image('instructions', 'assets/instructions.png');
        this.load.image('getReady', 'assets/get-ready.png');

        this.load.bitmapFont('flappyFont', 'assets/fonts/flappyfont/flappyfont.png', 'assets/fonts/flappyfont/flappyfont.fnt');

        this.load.spritesheet('pipe', 'assets/pipes.png', 54, 320, 2);

        this.load.spritesheet('bird', 'assets/bird.png', 34, 24, 3);

        this.load.audio('score', 'assets/score.wav');
        this.load.audio('flap', 'assets/flap.wav');
        this.load.audio('pipeHit', 'assets/pipe-hit.wav');
        this.load.audio('groundHit', 'assets/ground-hit.wav');
    },
    create: function() {
        this.asset.cropEnabled = false;
    },
    update: function() {
        if (!!this.ready) {
            this.game.state.start('play');
        }
    },
    onLoadComplete: function() {
        this.ready = true;
    }
};
module.exports = Preload;
},{}]},{},[1])