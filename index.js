function submitForm(event) {
  event.preventDefault();

  var isValid = validateForm();

  if (isValid) {
    alert("Thank you for signing up!");
    document.getElementById("signupForm").reset();
  }
}

function validateForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  var firstNameError = document.getElementById("firstNameError");
  var lastNameError = document.getElementById("lastNameError");
  var emailError = document.getElementById("emailError");
  var phoneNumberError = document.getElementById("phoneNumberError");
  var passwordError = document.getElementById("passwordError");
  var confirmPasswordError = document.getElementById("confirmPasswordError");

  var isValid = true;

  firstNameError.innerHTML = "";
  lastNameError.innerHTML = "";
  emailError.innerHTML = "";
  phoneNumberError.innerHTML = "";
  passwordError.innerHTML = "";
  confirmPasswordError.innerHTML = "";

  if (password.trim() === "") {
    passwordError.innerHTML = "Password is required.";
    isValid = false;
  } else if (confirmPassword.trim() === "") {
    confirmPasswordError.innerHTML = "Confirm Password is required.";
    isValid = false;
  } else if (password !== confirmPassword) {
    passwordError.innerHTML = "The passwords do not match.";
    isValid = false;
  }

  if (firstName.trim() === "") {
    firstNameError.innerHTML = "First Name is required.";
    isValid = false;
  }

  if (lastName.trim() === "") {
    lastNameError.innerHTML = "Last Name is required.";
    isValid = false;
  }

  var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!emailRegex.test(email)) {
    emailError.innerHTML = "Invalid Email Address.";
    isValid = false;
  }

  var phoneNumberRegex = /^\d{10}$/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    phoneNumberError.innerHTML = "Invalid Phone Number.";
    isValid = false;
  }

  return isValid;
}
