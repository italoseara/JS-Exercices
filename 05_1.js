// TODO: Create a object with a method to calculate the tip
var tips = {
    tip: [],
    payments: [],
    tipCalc: function () {
        for (i = 0; i < this.bills.length; i++) {
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

// TODO: Set the bill array
tips.bills = [124, 48, 268];

// TODO: Call the function to calculate the tip
tips.tipCalc();


// TODO: Print into the console
console.log(tips.bills, tips.tip, tips.payments);
