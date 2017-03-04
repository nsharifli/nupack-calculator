# nupack-calculator
Nulogy Apprenticeship Coding Exercise

### Description

Library contains calculateMarkup() function that takes an object as an argument. 
The argument object describes the job details that contains: 
* "price" - base price, positive number;
* "numPeople" - number of workers required for job, an integer greater than or equal zero;
* "material" - type of material, one of "DRUGS", "FOOD", "ELECTRONICS", "OTHER". 

### Setup and Running
Library depends on:
* node.js > v0.12
To run the test cases run following command:
```bash
node test-cases.js
```

### Example usage: 
```javascript
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
```
### Reflections
##### Assumptions:
* The price cannot be less than $0.
* Number of workers needed can be 0 and more.

##### Design decisions
* Markup rates are defined within dictionary; they are not hard-coded within function. Hence in the future if any markup rate needs to be changed, it is sufficient to change it in the dictionary.
