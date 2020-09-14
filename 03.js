var Mark = {
    mass: 57,
    height: 1.82,
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
    }
}

var John = {
    mass: 62,
    height: 1.79,
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
    }
}

Mark.calcBMI();
John.calcBMI();

if (Mark.BMI > John.BMI) {
    console.log('Mark has the higher BMI');
} else if (John.BMI > Mark.BMI) {
    console.log('John has the higher BMI');
} else {
    console.log('They have the same BMI');
}
