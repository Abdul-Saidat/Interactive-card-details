let inputName = document.getElementsByClassName("input-name");

const nameInput = document.getElementById("nameInput");
const nameError = document.getElementById("nameInput-error");
nameInput.addEventListener("input", function (e) {
  inputName[0].textContent = e.target.value;
});

let inputNumber = document.getElementsByClassName("input-number");

const numberInput = document.getElementById("numberInput");
const numberError = document.getElementById("numberInput-error");

numberInput.addEventListener("input", function (e) {
  inputNumber[0].textContent = e.target.value;
});

numberInput.addEventListener("keydown", (e) => {
  if ((e.key >= "a" && e.key <= "z") || (e.key >= "A" && e.key <= "Z")) {
    e.preventDefault();
    numberError.textContent = "Wrong format, numbers only";

    numberError.style = "font-size: 14px; color: red; border: red;";
  }
});

const expMonth = document.getElementsByClassName("exp-mm");
const monthInput = document.getElementById("monthInput");
monthInput.addEventListener("input", function (e) {
  expMonth[0].textContent = e.target.value;
});

const expYear = document.getElementsByClassName("exp-yy");
const yearInput = document.getElementById("yearInput");
yearInput.addEventListener("input", (e) => {
  expYear[0].textContent = e.target.value;
});

const mobileCvc = document.getElementsByClassName("mobile-cvc");
const cvcInput1 = document.getElementById("cvcInput");
cvcInput1.addEventListener("input", (e) => {
  mobileCvc[0].textContent = e.target.value;
});

const desktopCvc = document.getElementsByClassName("desktop-cvc");
const cvcInput2 = document.getElementById("cvcInput");

cvcInput2.addEventListener("input", (e) => {
  desktopCvc[0].textContent = e.target.value;
});

function validateInput(inputField, errorSpan, message) {
  console.log(inputField, errorSpan, message);
  if (inputField.value.trim() === "") {
    errorSpan.textContent = message;
    errorSpan.style.fontSize = "14px";
    errorSpan.style.display = "block";
    errorSpan.style.color = "red";
    inputField.style.borderColor = "red";
    return false;
  } else {
    errorSpan.textContent = "";
    errorSpan.style.display = "none";
    return true;
  }
}

function clearError(inputField, errorSpan) {
  inputField.addEventListener("input", function () {
    if (inputField.value.trim() !== "") {
      errorSpan.textContent = "";
      errorSpan.style.display = "none";
      inputField.style.borderColor = "initial";
    }
  });
}

const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const displayMessage = document.getElementById("completionMessage");
  const nameInput = document.getElementById("nameInput");
  const nameError = document.getElementById("nameInput-error");

  let isNameValid = validateInput(
    nameInput,
    nameError,
    "Input field can't be empty "
  );
  if (!isNameValid) clearError(nameInput, nameError);

  const numberInput = document.getElementById("numberInput");
  const numberError = document.getElementById("numberInput-error");

  let isNumberValid = validateInput(
    numberInput,
    numberError,
    "Input field can't be empty "
  );
  if (!isNumberValid) clearError(numberInput, numberError);

  const monthInput = document.getElementById("monthInput");
  const monthError = document.getElementById("monthInput-error");

  let isMonthValid = validateInput(monthInput, monthError, "Can't be blank ");
  if (!isMonthValid) clearError(monthInput, monthError);

  const yearInput = document.getElementById("yearInput");
  const yearError = document.getElementById("yearInput-error");

  let isYearValid = validateInput(yearInput, yearError, "Can't be blank ");
  if (!isYearValid) clearError(yearInput, yearError);

  const cvcInput2 = document.getElementById("cvcInput");
  const cvcError = document.getElementById("cvcInput-error");
  let isCvcValid = validateInput(cvcInput2, cvcError, "Can't be blank");
  if (!isCvcValid) clearError(cvcInput2, cvcError);

  const allValid =
    isNameValid && isNumberValid && isMonthValid && isYearValid && isCvcValid;

  if (allValid) {
    form.style.visibility = "hidden";
    form.style.display = "none";
    displayMessage.style.visibility = "visible";
  } else {
  }
});
