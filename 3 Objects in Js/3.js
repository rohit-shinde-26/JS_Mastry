// Iterate Object

let myObj = {
    name : "Ram",
    age : 22,
    "car collection" : ["Mustang","GTR","Supra"]
}

// for in loop

for(let key in myObj){
    console.log(`${key} : ${myObj[key]}`)
}


// for of loop 

for(let key of Object.keys(myObj)){
    console.log(myObj[key])
}

console.log(typeof (Object.keys(myObj)));  // prints object
const val = Array.isArray((Object.keys(myObj)));  
console.log(val); // true