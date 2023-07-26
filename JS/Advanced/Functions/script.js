//? High Order Function V/S FUnction as First Class Citizen

//! Functions as a first class citizen

// Functions returning function

function addTwoNums() {
  return function (a, b) {
    return a + b;
  };
}

// invoke
const ans = addTwoNums();
console.log(ans(2, 2));

// another way of calling this function

const answer = addTwoNums()(2, 2);
console.log(answer);

// Assign function to a variable

function sayHello() {
  console.log("Hello There !");
}

const result = sayHello;

result();
sayHello();

// Store function in an Array

function sayHi() {
  console.log("Hi");
}

const array = [sayHello, sayHi];

//! High Order Functions (HOF) - functions accepting functions as arguments

// 1. reduce()
// 1. find()
// 1. filter()
// 1. map ()

// Calc Bill

const calcBill = function (qty, price) {
  return qty * price;
};

// Display Bill

const displayBill = function (calcBillfn) {
  console.log(calcBillfn);
};

displayBill(calcBill(2, 5));

//! Function Returning a function

function addTwoNum() {
  return function () {
    console.log("Inner Function Called");
  };
}

const firstfn = addTwoNum();

console.log(typeof firstfn);

const secondfn = firstfn();

console.log(secondfn);

addTwoNum()();

const add = (a) => {
  return (b) => a + b;
};

let firstFn = add(2);

let seconfFn = firstFn(3);

console.log(seconfFn);

// OR

console.log(add(2)(3));

//! IIFE - Immediately Invoked Function Expression

function logHello() {
  console.log("Hello Normal Function");
}

// using IIFE

(function IIFE() {
  console.log("I an an IIFE");
  logHello();
})();

(() => console.log("I an an IIFE number 2"))();
