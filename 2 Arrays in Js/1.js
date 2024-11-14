// Introduction to arrays 

// It is ordered collection of items
const fruits = ["Banana","Mango","Apple"]


fruits[1]="Grapes"

console.log(fruits)

// numbers in array
let nums = [1,4,6,8,3,2]

// mixed value in an array
let mixed = ["Ram", 22,true,87.77]

console.log(Array.isArray(mixed))  // Array.isArray is used to check it is array or not

console.log(typeof nums)  // Always remember arrays type of always object

let myObj = {};
console.log(typeof myObj)  // Object