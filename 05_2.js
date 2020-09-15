// TODO: two objects (John and Mark) with a method to calculate the tip
var John = {
    tip: [],
    payments: [],
    tipCalc: function () {
        for (i = 0; i < this.bill.length; i++) {
            if (this.bill[i] < 50) {
                var tip = 20/100;
            } else if (this.bill[i] <= 50 && this.bill[i] <= 200) {
                var tip = 15/100;
            } else {
                var tip = 10/100;
            }
            this.tip.push(this.bill[i] * tip);
            this.payments.push((this.bill[i] * tip) + this.bill[i]);
        }
    }
}

var Mark = {
    tip: [],
    payments: [],
    tipCalc: function () {
        for (i = 0; i < this.bill.length; i++) {
            if (this.bill[i] < 100) {
                var tip = 20/100;
            } else if (this.bill[i] <= 100 && this.bill[i] <= 300) {
                var tip = 10/100;
            } else {
                var tip = 25/100;
            }
            this.tip.push(this.bill[i] * tip);
            this.payments.push((this.bill[i] * tip) + this.bill[i]);
        }
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
John.bill = [124, 48, 268];
Mark.bill = [77, 375, 110, 45];

// TODO: Call the function to calculate their bills
John.tipCalc();
Mark.tipCalc();

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
