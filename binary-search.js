// load vetor with values
const listOfValues = [];
var startValue = 1;
const itemsOfList = 10000000;
for (let index = 0; index < itemsOfList; index++) {
    listOfValues.push(startValue);
    startValue++;
}

// Search value in vetor
const valueSearch = 9999999;

// Variable to left and right search
let searchLeft = 0;
let searchRight = listOfValues.length;

const startDate = new Date();

let iterations = 0;
while (searchLeft <= searchRight) {
    iterations++;
    let midle = Math.floor((searchLeft + searchRight) / 2);

    if (listOfValues[midle] == valueSearch) {
        valueFind = listOfValues[midle];
        break;
    }

    if (listOfValues[midle] > valueSearch) {
        searchRight = midle - 1;
    } else {
        searchLeft = midle + 1;
    }
}

const finallyDate = new Date();

// Aggregate info
console.log(`Find value ${valueSearch}. Number of iterations to find value ${iterations}. Time to search ${finallyDate - startDate}ms`)