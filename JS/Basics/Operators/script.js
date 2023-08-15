// Arethmetic Operators

let num1 = 3;
let num2 = 5;

let sum = num1 + num2;
let mult = num1 * num2;
let sub = num1 - num2;
let div = num1 / num2;
let mod = num1 % num2;

// Increment and Decrement Operators

let x = 3;
let y = x++;

let a = 4;
let z = ++a;

let n = 0;
while (n < 10) {
  console.log(n);
  n++;
}

//teranry operator with multiple conditions
let age = 18;

let result =
  age <= 3
    ? "What a Baby"
    : age <= 28
    ? "What's Up BRO"
    : age <= 100
    ? "Hello There Oldy"
    : "Wow Ancient Boomer";

console.log(result);
