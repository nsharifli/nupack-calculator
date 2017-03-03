var NuPackCalculator = require("./nupack-calculator");


var runTest = function(testCase) {
    try {
        var result = NuPackCalculator.calculateMarkup(testCase.input);
    }
    catch(exc) {
        if (testCase.error === exc) {
            console.log(testCase.label + ": OK");
        }
        else {
            console.log(testCase.label + ": FAIL. Unexpected error: " + exc);
        }
        return;
    }
    
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


// Input:  $12,456.95, 4 people, books("OTHER")
// Output: $13,707.63

runTest({
    label: "$12,456.95, 4 people, books(\"OTHER\")",
    input: {
        price: 12456.95,
        numPeople: 4,
        material: NuPackCalculator.OTHER
    },
    output: 13707.63
});

// Input:  $1,200.98, 4 people, electronics
// Output: $1,346.78

runTest({
    label: "$1,200.98, 4 people, electronics",
    input: {
        price: 1200.98,
        numPeople: 4,
        material: NuPackCalculator.ELECTRONICS
    },
    output: 1346.78
});

// Input:  $1,200.98, 4 people, foobar
// error: "material should be either DRUGS, FOOD, ELECTRONICS or OTHER!"

runTest({
    label: "$1,200.98, 4 people, foobar",
    input: {
        price: 1200.98,
        numPeople: 4,
        material: NuPackCalculator.foobar
    },
    error: "material should be either DRUGS, FOOD, ELECTRONICS or OTHER!"
});

// Input:  -$5,432.00, 1 person, drugs
// error: "price should be a positive number!"

runTest({
    label: "-$5,432.00, 1 person, drugs",
    input: {
        price: -5432.00,
        numPeople: 1,
        material: NuPackCalculator.DRUGS
    },
    error: "price should be a positive number!"
});

// Input:  $0, 1 person, drugs
// error: "price should be a positive number!"

runTest({
    label: "$0, 1 person, drugs",
    input: {
        price: 0,
        numPeople: 1,
        material: NuPackCalculator.DRUGS
    },
    error: "price should be a positive number!"
});

// Input:  "$1,200.00", 1 person, drugs
// error: "price should be a positive number!"

runTest({
    label: "\"$1,200.00\", 1 person, drugs",
    input: {
        price: "$1,200.00",
        numPeople: 1,
        material: NuPackCalculator.DRUGS
    },
    error: "price should be a positive number!"
});

// Input:  $1,299.99, 0 people, food
// Output: 1542.44

runTest({
    label: "$1,299.99, 0 people, food",
    input: {
        price: 1299.99,
        numPeople: 0,
        material: NuPackCalculator.FOOD
    },
    output: 1542.44
});

// Input:  $1,299.99, 1.3 people, food
// error: "numPeople should be an integer greater than or equal to zero!"

runTest({
    label: "$1,299.99, 1.3 people, food",
    input: {
        price: 1299.99,
        numPeople: 1.3,
        material: NuPackCalculator.FOOD
    },
    error: "numPeople should be an integer greater than or equal to zero!"
});

// Input:  $1,299.99, -2 people, food
// error: "numPeople should be an integer greater than or equal to zero!"

runTest({
    label: "$1,299.99, -2 people, food",
    input: {
        price: 1299.99,
        numPeople: -2,
        material: NuPackCalculator.FOOD
    },
    error: "numPeople should be an integer greater than or equal to zero!"
});

// Input:  $1,299.99, "3" people, food
// error: "numPeople should be an integer greater than or equal to zero!"

runTest({
    label: "$1,299.99, \"3\" people, food",
    input: {
        price: 1299.99,
        numPeople: "3",
        material: NuPackCalculator.FOOD
    },
    error: "numPeople should be an integer greater than or equal to zero!"
});










