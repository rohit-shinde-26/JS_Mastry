// nested if else 
// Q. It is number guessing game where the correct number is 20 if the number is greater then print too high or if it is small then print too small.

let num = 20;
let guess = +prompt("Enter the number")


// for too high 
if(num<guess){
    console.log("Its Too high")
}
// for too low
else if(num>guess){
    console.log("Its Too low")
}
// fow winning
else{
    console.log("Congratulations You Won!!")
}