const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
const count = document.getElementById("count");

let currCount;

inc.addEventListener("click", function () {
  currCount = parseInt(count.innerHTML);
  console.log(typeof currCount);
  count.innerHTML = currCount + 1;
});

dec.addEventListener("click", function () {
  currCount = parseInt(count.innerHTML);
  if (currCount > 0) count.innerHTML = currCount - 1;
});

reset.addEventListener("click", function () {
  count.innerHTML = 0;
});
