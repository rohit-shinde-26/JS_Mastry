// Object is reference type 
// It comes with ket value pairs 

let info = {
    name : "Ram",
    age : 22,
    gender : "male",
    "his hobbies" : ["Playing Games","Reading books","Trekking"]
}


// access the data
console.log(info)   // print object
console.log(info.name)   // object.name

info.car = "m5 Sport";  // dot notation
console.log(info.car)


info["my bike"] = "ZX6R";
console.log(info["my bike"])   // bracket notation