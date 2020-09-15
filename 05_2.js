// TODO: two objects (John and Mark) with a method to calculate the tip
var John = {
    tip: [],
    payments: [],
    tipCalc: function tipCalc(bill) {
        if (bill < 50) {
            var tip = 20/100;
        } else if (bill <= 50 && bill <= 200) {
            var tip = 15/100;
        } else {
            var tip = 10/100;
        }
        this.tip.push(bill * tip);
        this.payments.push((bill * tip) + bill);
    }
}

var Mark = {
    tip: [],
    payments: [],
    tipCalc: function tipCalc(bill) {
        if (bill < 100) {
            var tip = 20/100;
        } else if (bill <= 100 && bill <= 300) {
            var tip = 10/100;
        } else {
            var tip = 25/100;
        }
        this.tip.push(bill * tip);
        this.payments.push((bill * tip) + bill);
    }
}

// TODO: Function to calc the average of the tip
function Average(array) {

    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum / array.length
}

// TODO: set their bills
John.bills = [124, 48, 268];
Mark.bills = [77, 375, 110, 45];

// TODO: Call the function to calculate their bills
for (i = 0; i < John.bills.length; i++) {
    John.tipCalc(John.bills[i]);
}

for (i = 0; i < Mark.bills.length; i++) {
    Mark.tipCalc(Mark.bills[i]);
}

// TODO: Call the function to calculate the average
John.average = Average(John.tip);
Mark.average = Average(Mark.tip);

// TODO: Print who paid the most
if (John.average > Mark.average) {
    console.log("John's family paid the highest tip on the average");
} else if (Mark.average > John.average) {
    console.log("Mark's family paid the highest tip on the average");
} else {
    console.log("Both paid the same tip on the average");
}
