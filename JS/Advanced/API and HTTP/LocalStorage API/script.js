const inputEl = document.querySelector("#input");
const buttonEl = document.querySelector("#delete");
const outputEl = document.querySelector("#list-container");
const form = document.querySelector("form");

localStorage.setItem("firstname", "dev");

//Get Item

const getItems = () => {
  let items;
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  console.log(items);
  //display to DOM
  let output;
  const allItems = items.map((item) => {
    return `
    <li id="item">
        <span>${item.title}</span>
        <button onclick="removeItem('${item.id}')" id="delete">X</button>
    </li>    
    `;
  });
  output = allItems.join("");
  outputEl.innerHTML = output;
};

// remove item

const removeItem = (id) => {
  let items;
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  items = items.filter((item) => {
    return item.id !== +id;
  });
  localStorage.setItem("items", JSON.stringify(items));
  getItems();
};

//? Add item and save it into local storage

const addTask = (e) => {
  e.preventDefault();
  //check if input feild is empty
  if (inputEl.value == "") {
    alert("Please Enter An Item");
  }

  //get the item
  const item = inputEl.value;
  if (item) {
    let items;
    if (localStorage.getItem("items") === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem("items"));
    }
    items.unshift({
      id: Date.now(),
      title: item,
    });
    //save to storage
    localStorage.setItem("items", JSON.stringify(items));
    getItems();
    //empty input feild after adding
    inputEl.value = "";
  }
};

//event listiner
form.addEventListener("submit", addTask);
