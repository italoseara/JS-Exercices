// TODO: Create a function to Mark and John with their mass, height and BMI
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

// Calculate the BMI
Mark.calcBMI();
John.calcBMI();

// To know who has the highest BMI
if (Mark.BMI > John.BMI) {
    console.log('Mark has the highest BMI');
} else if (John.BMI > Mark.BMI) {
    console.log('John has the highest BMI');
} else {
    console.log('They have the same BMI');
}
