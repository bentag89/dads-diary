const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const button = document.querySelector("#submit");
const successMessage = document.querySelector("#message");

var nameErrorInForm = "";
var emailErrorInForm = "";

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
function formValidation() {
  if (fullName.value.trim().length > 5) {
    nameError.style.display = "none";
    nameErrorInForm = false;
  } else {
    nameError.style.display = "block";
    nameErrorInForm = true;
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    emailErrorInForm = false;
  } else {
    emailError.style.display = "block";
    emailErrorInForm = true;
  }
}

function submitForm(event) {
  event.preventDefault();
  formValidation();
  if (!emailErrorInForm && !nameErrorInForm) {
    successMessage.innerHTML = "<p class=success>Thank you for subscribing!</p>";
    form.reset();
  } else if (emailErrorInForm || nameErrorInForm) {
    successMessage.innerHTML = "";
  }
}

function error() {
  if (errorInForm === true) {
    formValidation;
  } else {
    submitForm;
  }
}

button.addEventListener("click", submitForm);