var markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI, isMarkHigher;

markMass = 57;
markHeight = 1.82;
markBMI = markMass / (markHeight ** 2);

johnMass = 62;
johnHeight = 1.79;
johnBMI = johnMass / (johnHeight ** 2);

isMarkHigher = markBMI > johnBMI;

console.log("is Mark's BMI higher than John's?", isMarkHigher);
