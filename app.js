// DARK MODE
// Grab needed DOM Elements

const container = document.querySelector("#container");
const notiBar = document.querySelector("#noti-bar");
const lightSwitch = document.querySelector("#light-dark");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const screen = document.querySelector("#screen");

const keySection = document.querySelector("#cal-keys-section");

// selecting span elements inside #numbers-section div
const numberSection = document.querySelector("#numbers-section");
const numberSpan = numberSection.querySelectorAll(".number");

// selecting undo image so as to invert it
const undoImg = document.querySelector(".undo-img");

// selecting span elements inside #special-keys div
const specialKeys = document.querySelector("#special-keys");
const specialKeysSpan = specialKeys.querySelectorAll(".special");

// selecting span elements inside #math-keys div
const mathKeys = document.querySelector("#math-keys");
const mathKeysSpan = mathKeys.querySelectorAll(".math-key");

(function () {
  // Eventlistener for the light icon
  light.addEventListener("click", () => {
    container.style.backgroundColor = "white";
    notiBar.style.filter = "invert(100)";
    lightSwitch.style.backgroundColor = "#E5E5E5";
    dark.style.opacity = "1.0";
    light.style.opacity = "0.5";
    dark.style.filter = "invert(0)";
    screen.style.color = "black";
    keySection.style.backgroundColor = "#F8F8F8";
    numberSpan.forEach((spans) => {
      spans.style.backgroundColor = "#E9E9E9";
      spans.style.color = "black";
    });

    specialKeysSpan.forEach((spans) => {
      spans.style.backgroundColor = "#E9E9E9";
    });

    mathKeysSpan.forEach((spans) => {
      spans.style.backgroundColor = "#E9E9E9";
    });
    undoImg.style.filter = "invert(0)";
  });

  // Eventlistener for the dark icon
  dark.addEventListener("click", () => {
    container.style.backgroundColor = "black";
    notiBar.style.filter = "invert(0)";
    lightSwitch.style.backgroundColor = "#1B1616";
    light.style.opacity = "1.0";
    dark.style.opacity = "0.5";
    dark.style.filter = "invert(100)";
    screen.style.color = "white";
    keySection.style.backgroundColor = "#131212";
    numberSpan.forEach((spans) => {
      spans.style.backgroundColor = "#1a1919";
      spans.style.color = "white";
    });

    specialKeysSpan.forEach((spans) => {
      spans.style.backgroundColor = "#1a1919";
    });

    mathKeysSpan.forEach((spans) => {
      spans.style.backgroundColor = "#1a1919";
    });
    undoImg.style.filter = "invert(100)";
  });
})();

// Creating a class `for the calculator

const calInput = document.querySelector(".cal-input");
const calResult = document.querySelector(".cal-result");
calInput.innerText = "";


numberSpan.forEach((number) => {
  number.addEventListener("click", () => {
    calInput.innerText += number.innerText;
    // cal.appendNumber();
    console.log("r5hh");
  });
});

mathKeysSpan.forEach((operand) => {
    operand.addEventListener("click", () => {
      calInput.innerText += operand.innerText;
    });
});