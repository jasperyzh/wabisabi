
const path = 'http://localhost/masterjs';

init();


function generateDice(diceSide) {
    return Math.floor(Math.random() * diceSide) + 1;
}

/**
 * doms elements
 */
var hudScore1 = document.querySelector('#score-' + activePlayer).textContent = 0;
// var hudScore2 = document.querySelector('#score-2').textContent = dice;

var roundScore1 = document.querySelector('#current-1').textContent = 0;
// var roundScore2 = document.querySelector('#current-2');


document.querySelector('.dice').addEventListener('click', rollDice);
document.querySelector('.btn-roll').addEventListener('click', rollDice);

document.querySelector('.btn-hold').addEventListener('click', nextPlayer);
/**
 * start game - reset everything
 */

/**
 * gameplay
 */
function rollDice() {

    // roll the dice
    var currentRoll = generateDice(6);

    // display dice result
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = path + '/src/images/dice-' + currentRoll + '.png';

    // roundScore
    var roundScore1DOM = document.querySelector('#current-1');
    roundScore += currentRoll;
    roundScoreDOM.textContent = roundScore;
    console.log(roundScore);

    // update current round score
    // updateRoundScore(activePlayer, roundScore);

}

// function updateRoundScore(activePlayer, currentRoundScore) {

//     document.querySelector('#current-' + activePlayer).textContent = currentRoundScore;
// }

function nextPlayer() {
    // save score
    switch (true) {
        case activePlayer == 1:
            scores.player1 = roundScore;
            break;

        case activePlayer == 2:
            scores.player2 = roundScore;
            break;
    }

    // reset
    roundScore = 0;


    // change player
    activePlayer == 1 ? activePlayer = 2 : activePlayer = 1;

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    var scores, roundScore, activePlayer, dice;

    scores = {
        player1: 0,
        player2: 0
    }
    roundScore = 0;
    activePlayer = 1;
    dice = 6;

    document.querySelector('.dice').style.display = "none";
    ddocument.getElementById('').textContent = 0;
}