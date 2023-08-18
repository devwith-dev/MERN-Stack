//? Selecting The Elements

const mLeave = document.querySelector(".mLeave");
const mOut = document.querySelector(".mOut");
const mOver = document.querySelector(".mOver");
const mEnter = document.querySelector(".mEnter");
const mUp = document.querySelector(".mUp");
const mMove = document.querySelector(".mMove");
const mClick = document.querySelector(".mClick");
const mDblClick = document.querySelector(".mDblClick");
const mWheel = document.querySelector(".mWheel");
const mDown = document.querySelector(".mDown");
const msgElement = document.querySelector(".msg");
const rightClick = document.querySelector(".mRightClick");

//! Types of Mouse Events

//1. Mouse Leave : When the mouse leaves the selected element

mLeave.addEventListener("mouseleave", function () {
  console.log("Mouse Leave");
  msgElement.innerHTML = "You left the button";
});

//2. Mouse Out
mOut.addEventListener("mouseout", function () {
  msgElement.innerHTML = "You went out from the button";
});

//3. Mouse Over

mOver.addEventListener("mouseover", function () {
  msgElement.innerHTML = "You are over the button";
});

//4. Mouse Enter

mEnter.addEventListener("mouseenter", function () {
  msgElement.innerHTML = "You entered the button area";
});

//5. Mouse up - removed the click from the mouse

mUp.addEventListener("mouseup", function () {
  msgElement.innerHTML = "You went up from the button";
});

//6. Mouse move

mMove.addEventListener("mousemove", function () {
  msgElement.innerHTML = "You moved to the button";
});

//7. Mouse Click

mClick.addEventListener("click", function () {
  msgElement.innerHTML = "You clicked the button";
});

//8. Mouse Double Click

mDblClick.addEventListener("dblclick", function () {
  msgElement.innerHTML = "You Double Clicked the button";
});

//9. Mouse Wheel

mWheel.addEventListener("mousewheel", function () {
  msgElement.innerHTML = "You used the mouse wheel";
});

//10. Mouse Down - clicked on the mouse

mDown.addEventListener("mousedown", function () {
  msgElement.innerHTML = "You went down from the button";
});

//11. Context Menu (right Click)
rightClick.addEventListener("contextmenu", function () {
  msgElement.innerHTML = "You right clicked for context menu";
});

//12. on Copy

const onCopy = () => {
  alert("WARNING!! You cannot copy this");
};
