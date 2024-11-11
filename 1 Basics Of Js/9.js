// String Concatination
let string1 = "17";
let string2 = "10";


let name1 = "hari";
let name2 = "om";
console.log(name1 + " " + name2)

let newString = +string1 + +string2;
console.log( newString);
console.log(typeof newString);



// Template String 

let age = 22;
let firstName = "Rohit"

// "my name is Rohit and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

let aboutMe = `my name is ${firstName} and my age is ${age}`

console.log(aboutMe);