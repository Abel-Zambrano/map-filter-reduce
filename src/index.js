import emojipedia from './emojipedia';

console.log(emojipedia);

const summary = emojipedia.map((obj) => {
    return obj.meaning.substring(0,100);
})

console.log(summary);



// const numbers = [3, 56, 2, 48, 5];

// // MAP -Create a new array by doing something with each item in an array.

// const double = x => {
//     return x * 2;
// }

// const doubleNumbers = numbers.map(double)
// console.log(`MAP: ${doubleNumbers}`);

// // forEach alternative

// numbers.forEach(double);

// // FILTER - Create a new array by keeping the items that return true.

// const aboveTen = numbers.filter((num) => {
//     return num > 10;
// });

// console.log(`FILTER: ${aboveTen}`);


// // REDUCE - Accumulate a value by doing something to each item in an array.

// const totalNumbers = numbers.reduce((accumalator, currentNumber) => {
//     return accumalator + currentNumber;
// });

// console.log(`REDUCE: ${totalNumbers}`);


// // Find - find the first item that matches from an array.

// const firstNumber = numbers.find((num) => {
//     return num > 10;
// })

// console.log(`FIND: ${firstNumber}`);


// // FindIndex - find the index of the first item that matches.

// const indexNumber = numbers.findIndex((i) => {
//     return i > 4;
// })

// console.log(`findIndex: ${indexNumber}`);