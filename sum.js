// 1. Erstelle eine Funktion in [`sum.js`](./sum.js), die eine beliebige Anzahl von Zahlen annimmt und die Summe ihrer Addition zurückgibt
// z.B.\
// `console.log(sum(1)) ---> 1`\
//  `console.log(sum(1, 15)) ---> 16`\
// `console.log(sum(25, 25, 20)) ---> 70`


// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...args) => {

    summe=0;
    for(i=0; i<args.length; i++){
        summe+=args[i];
    }
    return summe;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70