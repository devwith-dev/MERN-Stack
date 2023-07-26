//-----
//! Single selectors
//-----

//? 1.getElementById

const titleEl = document.getElementById("title");

//? 2.querySelector()

const titleE2 = document.querySelector(".title"); // For class
const titleEl3 = document.querySelector("#title"); // For ID

// console.log(titleE2);

//-----
//! Multiple selectors
//-----

//? 1.getElementsByTagName

const h1 = document.getElementsByTagName("h1");
const allPs = document.getElementsByTagName("p");
//console.log(allPs);

//? 2.getElementsByClassName

const title = document.getElementsByClassName("title");
//console.log(title);

//? 3.getElementsByName()

const nameEl = document.getElementsByName("email");
// console.log(nameEl);

//3.querySelectorAll()

//const titleEls = document.querySelectorAll("#title");
const titleEls = document.querySelectorAll(".title");

titleEls.forEach((el) => {
  console.log(el);
});
