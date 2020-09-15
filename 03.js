// TODO: Set the variables as an empty array
var tips = new Array
var payments = new Array

// TODO: Create a function to calculate the tip
function tipCalc(bill) {
    if (bill < 50) {
        var tip = 20/100;
    } else if (bill <= 50 && bill <= 200) {
        var tip = 15/100;
    } else {
        var tip = 10/100;
    }
    
    tips.push(tip);
    payments.push(bill + tip);
}

// TODO: Call the function to calculate the tip
tipCalc(124);
tipCalc(48);
tipCalc(268);

// TODO: Log into the console
console.log(tips, payments);