// dot notation vs bracket notation 

let key = "bike collection"


let car = {
    model : "Civic Type R",
    "is exhaust" : "Yes",
    "car collection" : ["BMW","Toyota","Dodge"]
}

// string object element only access through the bracket notation
// console.log(car.is exhaust)   // invalid
console.log(car["is exhaust"])  // valid


car[key] = ["ZX6R","S1000RR"]
console.log(car["bike collection"])