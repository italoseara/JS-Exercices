// Set the variables as undefined
var markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI, isMarkHigher;

// set mark's and john's mass, height and calculate the BMI
markMass = 57;
markHeight = 1.82;
markBMI = markMass / (markHeight ** 2);

johnMass = 62;
johnHeight = 1.79;
johnBMI = johnMass / (johnHeight ** 2);

// Compare their BMI
isMarkHigher = markBMI > johnBMI;

// Log into the console
console.log("is Mark's BMI higher than John's?", isMarkHigher);
