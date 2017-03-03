// Markup calculator library

// Library contains calculateMarkup() function that takes an object as an argument. 
// The argument object describes the job details that contains: 
// * "price" - base price, positive number;
// * "numPeople" - number of workers required for job, an integer greater than or equal zero;
// * "material" - type of material, one of "DRUGS", "FOOD", "ELECTRONICS", "OTHER". 

// Example usage: 
/*

var NuPackCalculator = require("./nupack-calculator");

var result = NuPackCalculator.calculateMarkup({
    price: 1299.99,
    numPeople: 3,
    material: NuPackCalculator.FOOD
});

var result = NuPackCalculator.calculateMarkup({
    price: 12456.95,
    numPeople: 4,
    // For materials other than drugs, food and electronics, please use OTHER as material type.
    material: NuPackCalculator.OTHER
});

*/



// MATERIAL TYPES AND MARKUPS
// Markups are also added depending on the types of materials involved:
// * If pharmaceuticals are involved, there is an immediate 7.5% markup
// * For food, there is a 13% markup
// * Electronics require a 2% markup
// * Everything else, there is no markup

exports.DRUGS = "DRUGS";
exports.FOOD = "FOOD";
exports.ELECTRONICS = "ELECTRONICS";
exports.OTHER = "OTHER";

var markupDict = {
    DRUGS: 0.075,
    FOOD: 0.13,
    ELECTRONICS: 0.02,
    OTHER: 0,
    FLAT: 0.05,
    PERWORKER: 0.012
}



exports.calculateMarkup = function(job) {
    if (isNaN(job.price) || job.price <= 0) {
        throw "price should be a positive number!";
    }

    if (isNaN(job.numPeople) || job.numPeople < 0 || !Number.isInteger(job.numPeople)) {
        throw "numPeople should be an integer greater than or equal to zero!";
    }

    if (job.material !== exports.DRUGS && 
        job.material !== exports.FOOD && 
        job.material !== exports.ELECTRONICS && 
        job.material !== exports.OTHER) {
        throw "material should be either DRUGS, FOOD, ELECTRONICS or OTHER!";
    }

    // Without exception, there is a flat markup on all jobs of 5%
    // The flat markup is calculated first and then all other markups are calculated on top of the base price plus flat markup.
    var flatPrice = job.price * (1 + markupDict.FLAT);
    // For each person that needs to work on the job, there is a markup of 1.2%
    var workerMarkup = flatPrice * markupDict.PERWORKER * job.numPeople;
    // Material markup is calculated for each type
    var materialMarkup = flatPrice * markupDict[job.material];
    // Final price is calculated by adding flat price and markups and rounded to 2 decimal places.
    var finalPrice = flatPrice + workerMarkup + materialMarkup;
    finalPrice = Math.round(finalPrice * 100) / 100;
    return finalPrice;
}






