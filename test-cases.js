var NuPackCalculator = require("./nupack-calculator");


var runTest = function(testCase) {
    var result = NuPackCalculator.calculateMarkup(testCase.input);
    if (result !== testCase.output) {
        console.log(testCase.label + ": FAIL. Expected: " + testCase.output + "; Actual: " + result);
    }
    else {
        console.log(testCase.label + ": OK");
    }

}

// Input:  $1,299.99, 3 people, food
// Output: $1,591.58

runTest({
    label: "$1,299.99, 3 people, food",
    input: {
        price: 1299.99,
        numPeople: 3,
        material: NuPackCalculator.FOOD
    },
    output: 1591.58
});


// Input:  $5,432.00, 1 person, drugs
// Output: $6,199.81

runTest({
    label: "$5,432.00, 1 person, drugs",
    input: {
        price: 5432.00,
        numPeople: 1,
        material: NuPackCalculator.DRUGS
    },
    output: 6199.81
});


// Input:  $12,456.95, 4 people, books
// Output: $13,707.63

runTest({
    label: "$12,456.95, 4 people, books",
    input: {
        price: 12456.95,
        numPeople: 4,
        material: NuPackCalculator.OTHER
    },
    output: 13707.63
});
