// load vetor with values
const listOfValues = [];
var startValue = 0;
const itemsOfList = 10000000;
for (let index = 0; index < itemsOfList; index++) {
    listOfValues.push(startValue);
    startValue++;
}

// Search value in vetor
const valueSearch = 9999999;
var valueFind = -1;
const startDate = new Date();
let iterations = 0;
for (let index = 0; index < listOfValues.length; index++) {
    iterations++;
    if (listOfValues[index] == valueSearch) {
        valueFind = listOfValues[index];
        break;
    }   
}

const finallyDate = new Date();

// Aggregate info
console.log(`Find value ${valueFind}. Number of iterations to find value ${iterations}. Time to search ${finallyDate - startDate}ms`)