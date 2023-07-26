// Using new keyword

const myArr = new Array("css", "html", "javascript");

myArr[0] = "java";
myArr[3] = "python";

//iterating over array elements

for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

// Array Methods

// push() - add element to the end of the array

myArr.push("go");
console.log(myArr);

// pop() - remove the last element of the array

myArr.pop();
console.log(myArr);

// unshift() - add element to the start of array

myArr.unshift("go");
console.log(myArr);

//reduce() - it returns a single value, it dosent change the original array

const productQty = [12, 30, 23, 43, 2, 4];

// arr.reduce ( CallbackFunction( acc, currVal, currIdx, array) , initialValule )

// FInd the total qty in the array

let result = productQty.reduce(function (acc, currVal) {
  return acc + currVal;
}, 0);

console.log(result);

// find() - to find anything in array fulfilling the condition provided but only return single value

const agesArr = [10, 50, 20, 10, 60, 40, 20];

// arr.find( CallBack function ( data ) ){
// }

// find age less that 30

const res = agesArr.find(function (age) {
  return age < 30;
});

console.log(res);

// filter() - creates a new array of elements which satisfy the condition provided not just a single element

const marks = [10, 20, 54,55, 51, 45, 10, 65];

// find all marks over 50

console.log(
  marks.filter(function (score) {
    return score > 50;
  })
);
