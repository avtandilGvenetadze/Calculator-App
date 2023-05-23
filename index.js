const firstPart = document.querySelector(".first-part");
const toggle = document.querySelector(".tw-toggle");
const input = document.querySelector(".input");
const buttonContainer = document.querySelector(".button-container");
const blueScreen = document.getElementById("first-theme-id");
const whitescreen = document.getElementById("second-theme-id");
const darkBlueScreen = document.getElementById("third-theme-id");
blueScreen.addEventListener("input", function () {
  document.body.style.backgroundColor = "rgba(230, 230, 230, 1)";
  firstPart.style.color = " rgba(54, 54, 44, 1)";
  toggle.style.backgroundColor = "rgba(210, 205, 205, 1)";
  input.classList.remove("dark-input");
  input.classList.add("white-input");
  buttonContainer.classList.remove("button-container-dark");
  buttonContainer.classList.add("button-container-white");
});
whitescreen.addEventListener("input", function () {
  document.body.style.backgroundColor = "rgba(58, 70, 99, 1)";
  firstPart.style.color = " rgba(255, 255, 255, 1)";
  toggle.style.backgroundColor = "rgba(36, 45, 68, 1)";
  input.classList.remove("dark-input");
  buttonContainer.classList.remove("button-container-dark");
  input.classList.remove("white-input");
  buttonContainer.classList.remove("button-container-white");
});
darkBlueScreen.addEventListener("input", function () {
  document.body.style.backgroundColor = "rgba(23, 6, 42, 1)";
  firstPart.style.color = "rgba(255, 229, 61, 1)";
  toggle.style.backgroundColor = "rgba(30, 9, 54, 1)";
  input.classList.remove("white-input");
  input.classList.add("dark-input");
  buttonContainer.classList.remove("button-container-white");
  buttonContainer.classList.add("button-container-dark");
});
const equal = document.querySelector(".equal-button");
const numbers = document.querySelectorAll(".number");
const signs = document.querySelectorAll(".signs");
const reset = document.querySelector(".RESET-button");
const delet = document.querySelector(".delete-button");
equal.addEventListener("click", function () {
  input.value = eval(input.value);
});
numbers.forEach(function (e) {
  e.addEventListener("click", function () {
    input.value += e.textContent;
    let lastMember = input.value.slice(-1);
    myarray.push(lastMember);

    handleZero();
  });
});
signs.forEach(function (e) {
  e.addEventListener("click", function () {
    input.value += e.textContent;
    handleSigns();
  });
});
reset.addEventListener("click", function () {
  input.value = null;
  myarray = [];
});
delet.addEventListener("click", function () {
  input.value = input.value.slice(0, -1);
  myarray.pop();
});
let myarray = [];

function handleSigns() {
  let lastMember = input.value.slice(-1);
  myarray.push(lastMember);
  console.log(myarray);
  const signsArray = ["*", "/", "+", "-"];
  for (let i = 0; i < 4; i++) {
    if (myarray[myarray.length - 2] == signsArray[i]) {
      input.value =
        input.value.slice(0, input.value.length - 2) +
        input.value.slice(input.value.length - 1);
    }
  }
}
function handleZero() {
  const signsArray = ["*", "/", "+", "-"];
  for (let i = 0; i < signsArray.length; i++) {
    if (input.value.includes(`${signsArray[i]}0`)) {
      input.value = input.value + ".";
    }
  }
  if (myarray[0] == "0") {
    input.value = input.value + ".";
  }
}
