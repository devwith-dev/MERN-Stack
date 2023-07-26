//——Challenge 1:
//Create an object called user which has the following properties:
// Name: "John"
// age:30
// location: "NY"
// Also create a function called printInfo which prints the name and age
// of the user objects.

const user = {
    name : "John",
    age: 30,
    location: "NY",
    printInfo: function(){
        return `${this.name} is ${this.age} years old`
    }
}

console.log(user.printInfo());

//--- Challenge 2:
// write a function that iterates over an object and prints out each key-value pair
// in the format "key : value" on seperate lines

const printObj = (Object) =>{
    for (const key in Object) {
        if (Object.hasOwnProperty.call(Object, key)) {
            const element = Object[key];
            console.log(key+": "+element);
        }
    }
}

printObj(user);