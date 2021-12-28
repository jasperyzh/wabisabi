import './scss/_dice.scss';
import {
    inherits
} from 'util';

// import './js/_dice.js';
(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function (ans) {
        if (ans == this.correct) {
            console.log('correct answer!');
        } else {
            console.log('Wrong answer, try again!');
        }
    }
    var q1 = new Question('What is the most popular spectator sport in Australia?',
        [
            'Australian Rules Football',
            'test1',
            'test2',
        ],
        0
    );

    var q2 = new Question('Who was the first person to climb Mount Everest?',
        [
            'Abraham Lincoln',
            'Sir Edmund Hillary',
            'Archduke Franz Ferdinand',
        ],
        1
    );
    var q3 = new Question('In which state was the first oil well drilled in the United States?',
        [
            'Washington',
            'Michigan',
            'Pennsylvania',
        ],
        2
    );

    var q4 = new Question('What phrase, often used in typing practice, includes every letter in the English alphabet?',
        [
            'The quick brown fox jumps over the lazy dog.',
            'test',
            'test'
        ],
        0
    );

    var questions = [q1, q2, q3];

    function nextQuestion() {


        var getQuestion = Math.floor(Math.random() * questions.length);

        questions[getQuestion].displayQuestion();

        var answer = prompt('Please select the correct answer');

        if (answer !== 'exit') {
            questions[getQuestion].checkAnswer( parseInt(answer) );
            nextQuestion();
        }
    }
    nextQuestion();

})();

/* 
var scores = {
    score: 0,
    currentScore: function () {
        console.log('Your current score is: ' + this.score);
    }
}

function init() {
    shootQuiz(allQuiz);
    scores.currentScore();

    // get answer
    // var user_answer = prompt('What is the answer? (A, B, or C?)');

    // if (user_answer != null && user_answer.toLowerCase() == 'a') {
    //     console.log('correkt');
    //     scores.score++;
    //     scores.currentScore();

    //     nextQuiz();
    // } else {
    //     console.log('wronggoo');
    // }

}

var quiz = new Quizes('quest', 'whee');



function shootQuiz(array) {
    console.log(array[0].question);
    console.log(array[0].answer[0]);
    console.log(array[0].answer[1]);
    console.log(array[0].answer[2]);

}

function nextQuiz(array) {}

init(); */