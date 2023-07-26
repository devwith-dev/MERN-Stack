// Manipulating Element Style
// working with CSS Methods (classlist.add/remove/toggle)
// Manipulating element (innerHTML, textContent)

//? 1. Manipulating Elements Style

// STEPS :-

// 1. Select the element

const titleElement = document.querySelector(".title");

//console.log(titleElement.style);

// 2. Set style to element

titleElement.style.color = "white";

// 3. Remove the style Element

// titleElement.style.color = "";

// 4. Check Computed Style

console.log(getComputedStyle(titleElement).color);

// add bg color

titleElement.style.backgroundColor = "red";

// Add padding

titleElement.style.padding = "20px";

// add font size

titleElement.style.fontSize = "60px";

// Selecting the list tags

// const listEl = document.getElementsByTagName("li")
// converting the HTMLCollection to proper array
// const convertedEl = [...listEl];
// or
// const convertedEl2 = Array.from("listEl");

// or we can select using quesrySelectorAll tag

const listElements = document.querySelectorAll("li");
//console.log(listElements);

// looping through the lis and adding css properties

listElements.forEach((li) => {
  // add style to li
  li.style.color = "blue";

  if (li.innerHTML === "JavaScript") {
    // innerHTML to access element content
    li.style.textDecoration = "line-through";
  }
});

//? Working with CSS Methods (classlist.add/remove/toggle)

// classlist.add() - used to add class to an element
// 1. select the element

const headingElement = document.getElementById("heading");

// 2. add css class

headingElement.classList.add("error");

// classlist.remove() - remove class from an element

// headingElement.classList.remove("error");

//? Manipulating element (innerHTML, textContent)

// remove
// 1. Select the element

const codingElement = document.querySelector(".coding");

console.log(codingElement.textContent);
console.log(codingElement.innerHTML);

codingElement.innerHTML = "";

// add content to the page

const taglineElement = document.querySelector(".tagline");

taglineElement.innerHTML = "This is my TagLine";