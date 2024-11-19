// Array Destructuring

const myArray = ["value1", "value2", "value3","value4","value5","value6"];

// let arr1 = myArray[0];
// let arr2 = myArray[1];

// console.log(arr1)


let[arr1, ,arr3,...allArr]=myArray;
// dual comma to skip element
console.log(allArr)