//? Selecting The Element

const h1 = document.querySelector("h1");

//! Keyboard Elements

// Keydown - when the key is pressed down

//the prameter (event) represents the event detais
document.body.addEventListener("keydown", (event) => {
  h1.innerHTML = `You pressed the ${event.key} key`;
});

// keyup - when the key is released

document.body.addEventListener("keyup", (event) => {
    h1.innerHTML = `You released the ${event.key} key`;
  });
