// TODO: Create a object with a method to calculate the tip
var tips = {
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

// TODO: Set the bill array
tips.bills = [124, 48, 268];

// TODO: Call the function to calculate the tip
for (i = 0; i < tips.bills.length; i++) {
    tips.tipCalc(tips.bills[i]);
}

// TODO: Print into the console
console.log(tips.bills, tips.tip, tips.payments);
