// Js is a interpreted language, it will execute line by line and it will not wait for the previous line to execute before moving to the next line. This is called hoisting. In hoisting, variable declarations are moved to the top of the scope, but their assignments are not. So, when we try to access a variable before it is declared, it will return undefined.

// console.log("Hello World!");
// console.log(a);
// var a = 10;
// console.log(a);

// Dynamic Language
// let number = 5;
// number = "Hello";
// console.log(number);

// const a = 1;
// console.log(a);

// Data Types in JavaScript
// 1. Primitive Data Types
// a. Number
// b. String
// c. Boolean

// 2. Non-Primitive Data Types
// a. Object
// b. Array
// c. Function

// let firstname = "kaushinder";
// let age = 25;
// let isStudent = false;

// console.log(firstname + " is " + age + " years old and is a student: " + isStudent);

// if(isStudent) {
//     console.log(firstname + " is a student.");
// } else {
//     console.log(firstname + " is not a student.");
// }

// let sum = 0;
// for(let i = 0; i <= 100; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// let arr = [1, 2, 3, 4, 5];
// let largest = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }
// console.log(largest);

// let person = ["kaushinder", "singh", "raghav"];
// for(let i = 0; i < person.length; i++) {
//     console.log(person[i]);
// }

// let person = ["kaushinder", "sachin", "priya"];
// let gender = ["male", "male", "female"];
// for(let i=0; i < person.length; i++) {
//     if(gender[i] == "male"){
//         console.log(person[i] + " is a male.");
//     }
// }

// const user1 = {
//     name: "kaushinder",
//     gender: "male"
// }
// console.log(user1.name + " is a " + user1.gender + " user.");
// console.log(user1["name"] + " is a " + user1["gender"] + " user.");

// const user2 = [{
//     name: "kaushinder",
//     gender: "male"
// },{
//     name: "priya",
//     gender: "female"
// },
// {    name: "sachin",
//     gender: "male"
// }];

// for(let i = 0; i < user2.length; i++) {
//     if(user2[i]["gender"] === "male") {
//         console.log(user2[i].name + " is a male.");
//     }
// }

// function sum(a, b) {
//   return a + b;
// }
// const result1 = sum(5, 10);
// const result2 = sum(20, 30);
// console.log(result2);

// function sum(num1, num2, fnToCall) {
//   let result = num1 + num2;
//   fnToCall(result);
// }

// function displayResult(data) {
//   console.log("Result of the sum is: " + data);
// }

// function displayResultPassive(data) {
//   console.log("sum's result is: " + data);
// }

// const ans = sum(1, 2, displayResult);
// const ans1 = sum(1,2, displayResultPassive);

// function calculateArithmetic(a, b, arithmeticFinalFunction) {
//   const ans = arithmeticFinalFunction(a, b);
//   return ans;
// }

// function sum(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }

// const value = calculateArithmetic(10, 5, sub);
// console.log(value);


// function greet() {
//   console.log("Hello World!");
// }

// function greetAlient(){
//     console.log("Hello Alient!");
// }

function calculateSum(){
    return sum(10, 20);
}

function sum(a, b) {
    let res =  a + b;
    return console.log(res);
    ;
}

setTimeout(calculateSum, 2 * 1000);

// setTimeout(greet, 2 * 1000);
// setInterval(greetAlient, 4 * 1000);


