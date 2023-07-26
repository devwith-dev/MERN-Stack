// Ways of creeating Strings

//1. Using String Literal
const myName = "John";
const lastName = "Doe";

//2. Using Constructor
const firstName = new String("JOHN");

console.log(myName, firstName);

// String Concatenation
const result = myName + " " + lastName;

console.log(result);

const result2 = myName.concat(lastName);

console.log(result);

// JS Template Literals

// String Templates
// Back Tick Syntax

const msg2 = `"Good Evening"`;

console.log(msg2);

// Multiline Strings

const text = `
Welcome to our website
try to make sure you
have 
an
account. Thank You
`;
console.log(text);

// Interpolation

const age = 30;

const Welcome = `Your Age is ${age}`;

console.log(Welcome);

// String Length

const length = Welcome.length

console.log(length);