// Calculate the average score of each team

var averageJohn = (89 + 120 + 103) / 3;
var averageMike = (116 + 94 + 123) / 3;
var averageMary = (97 + 134 + 105) / 3;

// to know and print who won the game

if (averageJohn > averageMike && averageJohn > averageMary) {
    console.log('John won the game with', averageJohn, 'points!');

} else if (averageMike > averageJohn && averageMike > averageMary) {
    console.log('Mike won the game with', averageMike, 'points!');

} else if (averageMary > averageJohn && averageMary > averageMike){
    console.log('Mary won the game with', averageMary, 'points!');
    
} else if (averageMary === averageJohn && averageMary != averageMike) {
    console.log('Mary and John drew with', averageMary);

} else if (averageJohn === averageMike && averageJohn != averageMary) {
    console.log('John and Mike drew with', averageJohn);

} else if (averageMike === averageMary && averageMike != averageJohn) {
    console.log('Mike and Mary drew with', averageMary)

} else {
    console.log('Both draw with', averageJohn);
}

// Logs
console.log('\nMary:', averageMary);
console.log('John:', averageJohn);
console.log('Mike:', averageMike);
