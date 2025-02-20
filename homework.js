//Homework
let name = "Admin";
let password = "tajnasifra";

if (name == "Admin" && password == "tajnaSifra"){
    console.log("Welcome back!");
}else if(name == "Toma" && password == "tajnaSifra"){
    console.log("Welcome Tomo!");
}else{
    console.log("Wrong name or password");
}

//Exercise
let content = "video";
if(content == "video"){
    console.log("19+ video: https://www.youtube.com/watch?v=jNQXAC9IVRw&ab_channel=jawed");
}else{
    console.log("24 award-winning website: https://shorturl.at/q3v7U");
}

let currentAge = 28;
if (currentAge >= 18){
    console.log("User is adult.");
}else{
    console.log("User is kid.")
}

let numbers = [15, 22, 28, 41, 6, 42]
if(numbers[0]+numbers[numbers.length-1] > 50){
    console.log("Number is bigger than 50");
}else{
    console.log("Number is smaller than 51");
}

let fruit = "Mango";
if(fruit == "Apple"){
    console.log("The fruit is an apple.");
}else if(fruit == "Banana"){
    console.log("The fruit is a banana.");
}else{
    console.log("The fruit is unknown.");
}