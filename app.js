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
const undoClass = document.querySelector(".undo");
// selecting span elements inside #special-keys div
const specialKeys = document.querySelector("#special-keys");
const specialKeysSpan = specialKeys.querySelectorAll(".special");

// selecting span elements inside #math-keys div
const mathKeys = document.querySelector("#math-keys");
const mathKeysSpan = mathKeys.querySelectorAll(".math-key");

//  grabbing the equal sign
const equals = document.querySelector(".equal");
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
const firstOperand = document.querySelector(".firstOperand");
const operator = document.querySelector(".operator");
const secondOperand = document.querySelector(".secondOperand");
const calResult = document.querySelector(".cal-result");
// calInput.innerText = "";
// const firstOperand_innerText = firstOperand.innerText;
// const operator_innerText = operator.innerText;
// const secondOperand_innerText = secondOperand.innerText;

(function calculate() {
  // Adding numbers to first operand
  numberSpan.forEach((number) => {
    number.addEventListener("click", () => {
      // Added this condition to prevent firstOperand from updating alongside with secondOperand
      // if (
      //   !operator.innerText.includes("+") &&
      //   !operator.innerText.includes("-") &&
      //   !operator.innerText.includes("×") &&
      //   !operator.innerText.includes("÷")) {}

      if (
        (number.innerText == "." && firstOperand.innerText == "") ||
        (number.innerText == "." && firstOperand.innerText.includes(".")) ||
        operator.innerText !== ""
      ) {
        return;
      }
      firstOperand.innerText += number.innerText;
    });
  });

  // Adding numbers to the second operand
  numberSpan.forEach((number) => {
    number.addEventListener("click", () => {
      if (
        operator.innerText.includes("+") ||
        operator.innerText.includes("-") ||
        operator.innerText.includes("×") ||
        operator.innerText.includes("÷")
      ) {
        if (
          (number.innerText == "." && secondOperand.innerText == "") ||
          (number.innerText == "." && secondOperand.innerText.includes("."))
        ) {
          return;
        }
        secondOperand.innerText += number.innerText;
      }
    });
  });

  // Adding operators to the calculator
  mathKeysSpan.forEach((operand) => {
    operand.addEventListener("click", () => {
      let calText = operator.innerText;

      if (firstOperand.innerText == "") {
        return;
      }
      if (operand.innerText == "=") {
        return;
      }
      if (
        calText.includes("+") ||
        calText.includes("-") ||
        calText.includes("×") ||
        calText.includes("÷")
      ) {
        return;
      }
      operator.innerText += operand.innerText;
    });
  });

  // Adding eventlistener to the equal "=" operator

  equals.addEventListener("click", () => {
    if (!operator.innerText == "" && !secondOperand.innerText == "") {
      switch (operator.innerText) {
        case "+":
          calResult.innerText =
            parseFloat(firstOperand.innerText) +
            parseFloat(secondOperand.innerText);
          break;
        case "-":
          calResult.innerText =
            parseFloat(firstOperand.innerText) -
            parseFloat(secondOperand.innerText);
          break;
        case "×":
          calResult.innerText =
            parseFloat(firstOperand.innerText) *
            parseFloat(secondOperand.innerText);
          break;
        case "÷":
          calResult.innerText =
            parseFloat(firstOperand.innerText) /
            parseFloat(secondOperand.innerText);
          break;
        default:
          console.log("error");
          break;
      }
    }
  });

  // Specialkey: adding eventlistenr to each sKey

  specialKeysSpan.forEach((sKey) => {
    sKey.addEventListener("click", () => {
      if (sKey.innerText == "AC") {
        firstOperand.innerText = "";
        operator.innerText = "";
        secondOperand.innerText = "";
        calResult.innerText = "";
      }
    });
  });

  // Adding eventlistener to the undo button

  undoClass.addEventListener("click", () => {
    let allInput = [
      ...firstOperand.innerText,
      ...operator.innerText,
      ...secondOperand.innerText,
      ...calResult.innerText,
    ];

    
    console.log(allInput);
  });
})();
