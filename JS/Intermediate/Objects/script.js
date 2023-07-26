// Creating an Object in JavaScript

//1. Using Object constructor function

const person = new Object();

person.name = "John";
person.age = 30;
person.city = "NY";
person.isMarried = true;
person.hobbies = ["Basketball", "Cooking", "Dancing"];

// OR we can also declare object by,

const person2 = new Object({
  name: "Doe",
  age: 25,
  city: "Paris",
  isMarried: false,
  Hobbies: ["Dancing", "Singing"],
});

//2. Object Literal Syntax (Simple and Mostly Used)

const person3 = {
  name: "Mike",
  age: 27,
};

person3.city = "NY";
person3.isMarried = true;
person3.hobbies = ["Basketball", "Cooking", "Dancing"];

// Accessing Object Properties

// 1.

//console.log(person3.age);

//console.log(person2.city);

// 2.

//console.log(person["name"]);

//console.log(person["hobbies"]);

// deleting object properties

delete person.city;
delete person2["name"];

// Adding Methods to an Object

const person4 = {
  firstName: "Dave",
  lastName: "Schwepper",
  age: 25,
  isAdmin: true,
  status: false,
  city: "Paris",
  isMarried: false,
  Hobbies: ["Dancing", "Singing"],
};

person4.fullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

// person4.fullName();

// Iterating over Object properties

// 1. Using for..in loop

for (const key in person4) {
  if (Object.hasOwnProperty.call(person4, key)) {
    const element = person4[key];
    // console.log(key+": "+element);
  }
}

// 2. Using object.keys

const myKeys = Object.keys(person4);

// foreach loop
myKeys.forEach((element) => {
  //console.log(element);
});

// 3. Using object.values

const myValues = Object.values(person4);

myValues.forEach((element) => {
  //console.log(element);
});

// 4. Using object.entries

const myEntries = Object.entries(person4);

myEntries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
