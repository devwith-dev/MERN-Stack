console.log("Buy Hamburger");
console.log("Buy Pizza");
alert("Welcome, wait for me");
// The Buy Tea line will only execute when the alter line has been completely executed
console.log("Buy Tea");

// SetTimeout (CallBack Function, time in ms)

setTimeout(() => {
  console.log("After Time Out");
}, 3000);

//OR

const msg = ()=> {
    console.log("Hello");
}

setTimeout(msg, 3000);