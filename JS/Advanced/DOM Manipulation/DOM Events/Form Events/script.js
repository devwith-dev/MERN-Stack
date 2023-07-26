//Select elements
const pName = document.querySelector(".pName");
const pPrice = document.querySelector(".pPrice");
const pDesc = document.querySelector(".pDesc");
const pQty = document.querySelector(".pQty");
const category = document.querySelector(".category");
const msg = document.querySelector(".msg");
const form = document.querySelector("form");

// Form Event Types

//1. onChange

pName.onchange = () => {
  console.log("onChange has occoured");
};

//2. onSubmit

form.onsubmit = (event) => {
  //prevent the default behavior of the form when we submit it
  event.preventDefault();
  console.log("Submitted");

  // get the values from the input fields
  const pname = pName.value;
  const price = pPrice.value;
  const desc = pDesc.value;
  const qty = pQty.value;
  const cat = category.value;

  console.log({ pname, price, desc, qty, cat });
};

//3. onReset

form.onreset = (event) => {
  //prevent the default behavior of the form when we submit it
  event.preventDefault();
  console.log("Submitted");

  // get the values from the input fields
  pName.value = "";
  pPrice.value = "";
  pDesc.value = "";
  pQty.value = "";
  category.value = "";
  console.log("Resetted");
};

//4. onFocus

pName.onfocus = () => {
  console.log("Focused");
  msg.innerHTML = "You are typing...";
};

//5. onBlur

pName.onblur = () => {
  console.log("Blurred");
  msg.innerHTML = "";
};
