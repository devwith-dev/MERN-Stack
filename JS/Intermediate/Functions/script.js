// Ways to declare functions

// 1. Function Declaration

// function fnName (parameters) {
//   ---code--
// }

// 2. Function expression

// let fnName = function (parameter) {
//   --code--
// };

// 3. Arrow Declaration

// const fname = () =>{
//     --code--
// }

function sayHello() {
  console.log("Hello, Welcome Inside the Function");
}

sayHello();

const greeting = () => {
  console.log("Good Morning");
};

greeting();

var name2 = "Chad";
console.log(name2);
const welcome = () => {
  name2 = "bob";
};
welcome();
console.log(name2);

const parameter = (a, b, c) => {
  return a + b + c;
};

console.log(parameter(2, 9, 6));
console.log(parameter("Hello ", "My Name is ", "Dev"));
 
