const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#messageText");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const messageError = document.querySelector("#messageError");
const button = document.querySelector("#submit");
const successMessage = document.querySelector("#message");

var nameErrorInForm = "";
var emailErrorInForm = "";
var subjectErrorInForm = "";
var messageErrorInForm = "";

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
  if (subject.value.trim().length > 15) {
    subjectError.style.display = "none";
    subjectErrorInForm = false;
  } else {
    subjectError.style.display = "block";
    subjectErrorInForm = true;
  }
  if (message.value.trim().length > 25) {
    messageError.style.display = "none";
    messageErrorInForm = false;
  } else {
    messageError.style.display = "block";
    messageErrorInForm = true;
  }
}

function submitForm(event) {
  event.preventDefault();
  formValidation();
  if (!emailErrorInForm && !nameErrorInForm && !subjectErrorInForm && !messageErrorInForm) {
    successMessage.innerHTML = "<p class=success>Message sent!</p>";
    form.reset();
  } else if (emailErrorInForm || nameErrorInForm || subjectErrorInForm || messageErrorInForm) {
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