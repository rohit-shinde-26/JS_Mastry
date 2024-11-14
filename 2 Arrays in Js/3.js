// Premitive vs reference data types


// Premitive data types
// Premitive data types has stack memory
let num1 = 7;
let num2 = num1;

console.log(num1)  // 7
console.log(num2)  // 7

num1++;

console.log(num1)  // 8
console.log(num2)  // 7


// Reference data types has heap memory
let arr1 = ["item1","Item2"]
let arr2 = arr1;


console.log(arr1)   // [ 'item1', 'Item2' ]
console.log(arr2)   // [ 'item1', 'Item2' ]

arr1.push("newItem")

console.log(arr1)  // [ 'item1', 'Item2', 'newItem' ]
console.log(arr2)  // [ 'item1', 'Item2', 'newItem' ]