const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthDisplay]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
// set strength circle color to gray

// Set Password Length
function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;
}

// Set Indicator Color
function setIndicator(color) {
  indicator.style.backgroundColor = color;
  // Shadow
}

// Random Number
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomNumber() {
  return getRndInteger(0, 9);
}

function generateLowerCase() {
  return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase() {
  return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbols() {
  const randNum = getRndInteger(0, symbols.length);
  return symbols.charAt(randNum);
  // return symbols[randNum];
}
function calcStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  let hasSym = false;
  if (uppercaseCheck.checked) hasUpper = true;
  if (lowercaseCheck.checked) hasLower = true;
  if (numbersCheck.checked) hasNum = true;
  if (symbolsCheck.checked) hasSym = true;

  if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
    setIndicator("#0f0");
  } else if (
    (hasLower || hasUpper) &&
    (hasNum || hasSym) &&
    passwordLength >= 6
  ) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}

async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText = "copied";
  } catch (e) {
    copyMsg.innerText = "Failed";
  }

  copyMsg.classList.add("active");

  setTimeout(() => {
    copyMsg.classList.remove("active");
  }, 2000);
}

function handleCheckBoxChange() {
  checkCount = 0;
  allCheckBox.forEach((checkBox) => {
    if (checkBox.checked) {
      checkCounter++;
    }
  });
}

allCheckBox.forEach((checkBox) => {
  checkBox.addEventListener("change", handleCheckBoxChange);
});

inputSlider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

copyBtn.addEventListener("click", () => {
  if (passwordLength > 0) {
    copyContent();
  }
});

generateBtn.addEventListener("click", () => {
  // none of the checkbox are selected
  if (checkCount <= 0) {
    return;
  }

  if (password.length < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }

  // Remove Old Password
  password = "";

//   if (uppercaseCheck.checked) {
//     password += generateUpperCase();
//   }

//   if (lowercaseCheck.checked) {
//     password += generateLowerCase();
//   }

//   if (numbersCheck.checked) {
//     password += generateNumber();
//   }

//   if (symbolsCheck.checked) {
//     password += generateSymbols();
//   }

  let funcArr = [];

  if (uppercaseCheck.checked) {
    funcArr.push(generateUpperCase());
  }

  if (lowercaseCheck.checked) {
    funcArr.push(generateLowerCase());
  }

  if (numbersCheck.checked) {
    funcArr.push(generateNumber());
  }

  if (symbolsCheck.checked) {
    funcArr.push(generateSymbols());
  }

  //   Compulsory Addition
  for(let i=0;i<funcArr.length;i++) {
    password += funcArr[i]();
  }

  //  Additional Addition
  for(let i=0;i<funcArr.length;i++) {
    password += funcArr[i]();
  }
});
