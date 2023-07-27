const color = document.getElementById("color");
const button = document.getElementById("btn");

const colors = ["Red", "Green", "Blue", "Grey","#00FFFF","#FFDAB9","#6A5ACD","#B0C4DE","#FFFACD"];

button.addEventListener("click", function () {
  const randomNumber = getRandomNum();
  document.body.style.backgroundColor = colors[randomNumber];
  color.innerHTML = colors[randomNumber];
});

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
