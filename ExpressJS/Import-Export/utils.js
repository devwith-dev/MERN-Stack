// console.log("This is the Utils.js File");

//exporting a literal

// module.exports.msg = "Welcome!!!";

//exporting an object

// module.exports = {
//   productName: "MackBook Pro",
//   proce: 1000,
//   desc: "laptop",
// };

//exporting a function

const greet = () => {
  console.log("How are you?");
};

const add = (a, b) => {
  console.log(a + b);
};

// module.exports = greet;

// module.exports = {
//   myGreeting: greet,
//   myAdd: add,
// };

module.exports = {
  greet,
  add,
};
