// If else ladder 
// Q with temprature guess the enviornment and print on console 

let temp = +prompt("Enter tempreture")

if(temp>0 && temp<=10){
    console.log("Its too cold");
}
else if(temp>10 && temp<=20){
    console.log("temprature are cold")
}
else if(temp>20 && temp<=30){
    console.log("Temprature is medium")
}
else{
    console.log("Temprature is too hot")
}