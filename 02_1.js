// Calculate the average score of each team

var averageJohn = (89 + 120 + 103) / 3;
var averageMike = (116 + 94 + 123) / 3;

// to know and print who won the game

if (averageJohn > averageMike) {
    console.log('John won the game with', averageJohn, 'points!');
} else if (averageMike > averageJohn) {
    console.log('Mike won the game with', averageMike, 'points!');
} else {
    console.log('Both draw with', averageJohn);
}

// Logs
console.log('\nMary:', averageMary);
console.log('John:', averageJohn);
console.log('Mike:', averageMike);