// Create an array of numbers and create a for loop that prints out
// the numbers in the array

const numbers = [5, 10, 6, 14, 414, 35, 64];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Create an array of strings and then print it
// The strings should be in the following format
// "This is string number: " + i
// Example: “This is string number: 1"

const str = ["eefefe", "efuef", "jbfue", "eufe", "rht"];
for (let i = 0; i < str.length; i++) {
  console.log(`This is string number ${i + 1} : ${str[i]}`);
}

// write a function to revrese an array
// this function would take an arrya and return the array in reverse order

const arry2 = ["Derek", "Blake", "Dave", "lionel"];

const reverse = (arr) => {
  return arr.reverse();
};
console.log("Before", arry2);
console.log("After", reverse(arry2));

// Write a function that takes an array of numbers and returns the average
// of all the numbers, th result must be in 2 decimal places and add a $ sign
// in front of the result

const num = [65, 5, 78, 14, 45, 155, 48, 15];

const average = (ar) => {
  let sum1 = ar.reduce(function (acc, currentval) {
    return acc + currentval;
  }, 0);
  return sum1 / ar.length;
};

console.log(`The Average is = $${average(num)}`);

// Create a function to remove all duplicates from an array and return the
// clean array

const num2 = [10, 20, 50, 10, 45, 45, 84, 94, 50];

const removeDuplicates = (ar) => {
  let duplicates = ar.filter(function (el, idx) {
    return ar.indexOf(el) === idx;
  });
  return duplicates;
};

console.log(removeDuplicates(num2));

// Write a function that takes an array of words and returns a new array with only the words
// that are three letters or shorter

const words = ["ecc","efefe","efueuf","nd","dwdwdw","ded"];

const len = (arr) => {
    return arr.filter(function(el){
        return el.length <= 3;
    })
}

console.log(len(words));
