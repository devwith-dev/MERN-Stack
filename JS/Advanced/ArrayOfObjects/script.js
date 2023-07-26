// Array Of Objects

// Mutation - change in data

const arr = [1, 2, 3, 4, 5];

// adding new data to original data (mutation)

arr.push(6);

console.log(arr);

// Array Methods without mutation

//1. ForEach();

const students = [
  { name: "John", age: 20 },
  { name: "Mary", age: 21 },
  { name: "Peter", age: 30 },
  { name: "Sally", age: 25 },
];

students.forEach((user) => {
  console.log("Name:", user.name);
  console.log("Age:", user.age);
});

//2. map() - creates a new array not affecting the original data

const newStudent = students.map((user) => {
  return user;
});

newStudent.push({ name: "Chris", age: 18 });
console.log(newStudent);

// The original array is unaffected
console.log(students);

//3. filter()

const students2 = [
  { name: "John", age: 20, debt: true },
  { name: "Mary", age: 21, debt: false },
  { name: "Peter", age: 30, debt: false },
  { name: "Sally", age: 25, debt: true },
];

const debtStudents = students2.filter((student) => student.debt == true);

const ageStudents = students2.filter((student) => student.age < 25);

console.log(debtStudents);

console.log(ageStudents);

// 4. reduce()

const products = [
  { name: "banana", price: 1 },
  { name: "orange", price: 2 },
  { name: "apple", price: 3 },
  { name: "pear", price: 4 },
];

let sum = products.reduce(function(total, product){
    return total + product.price;
},0)

console.log(sum);