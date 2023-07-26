// Math Functions(objects) in JS

// Math.abs(x)

let x = -1;
console.log(Math.abs(x));

// Math.round(x)

let y = 10.19999;
console.log(Math.round(y));

// Math.ceil()

let z = 10.4;
console.log(Math.ceil(z));

// Math.floor()

console.log(Math.floor(z));

// Math.sqrt()

console.log(Math.sqrt(4));

// Math.pow()

console.log(Math.pow(2, 3));

// Math.min()

console.log(Math.min(2, 3, 23, 3, 1));

// Math.max()

console.log(Math.max(2, 3, 23, 3, 1));

// Math.random() b/w 1 & 0

console.log(Math.random());

// get random number bewteen a range
// Math.random() * (max - min + 1) + min

console.log(Math.floor(Math.random() * (100 - 1 + 1) + 1));


const maxNum = (n1,n2) =>{
    return Math.max(n1,n2);
}

console.log(maxNum(4,5));