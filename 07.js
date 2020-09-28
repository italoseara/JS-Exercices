(function () {

var question1, question2, question3, questions;
var score = 0;
var exit = false;

var Question = function (question, answers, correctAnswer) {
    
    console.log(question);
    for (var i = 0; i < answers.length; i++) {
        console.log(i + ': ' + answers[i]);
    }

    answer = prompt('Select the correct answer (type \'exit\' to quit)')

    if (answer === 'exit') {
        exit = true;
        console.log('-----------------------------------')
        console.log('Your final score is: ' + score)

    } else {

        if (answers[answer] === correctAnswer) {
            score += 1;
            console.log('Correct!');

        } else {
            console.log('Wrong :(');
        };

        console.log('Now, your score is: ' + score)
    }
    console.log('-----------------------------------')
};

questions = [
Question.bind(this, 'What\'s your name?', ['Idk', 'Italo', 'Nothing'], 'Italo'),
Question.bind(this, 'Do you like minecraft?', ['For sure', 'What is minecraft?'], 'For sure'),
Question.bind(this, 'What do you like to do?', ['To play', 'To program', 'Both'], 'Both')
];

while (!exit) {
    questions[Math.floor(Math.random() * questions.length)]()
};
})();
