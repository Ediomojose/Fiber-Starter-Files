// Form validation
const formBody = document.querySelector("#signupForm");
formBody.addEventListener("submit", function formValidation (event) {
  event.preventDefault();
  let nameField = document.forms.regForm.name.value;
  let emailField = document.forms.regForm.email.value;
  let passcodeField = document.forms.regForm.passcode.value;

  // JS reGex(Regular Expression) for email validation
  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

  // JS reGex(Regular Expression) for name validation
  let regName = /\d+$/g;

  if (nameField == "" || regName.test(nameField)) {
    document.querySelector(".invalidNameText").innerHTML =
      "Please enter your name properly.";
    nameField.focus();
    return false;
  } else {
    document.querySelector(".invalidNameText").innerHTML = "";
  }

  if (emailField == "" || !regEmail.test(emailField)) {
    document.querySelector(".invalidEmailText").innerHTML =
      "Please enter a valid email address.";
    emailField.focus();
    return false;
  } else {
    document.querySelector(".invalidEmailText").innerHTML = "";
  }

  if (passcodeField == "") {
    document.querySelector(".invalidPasscodeText").innerHTML =
      "Please enter your password.";
    return false;
  } else {
    document.querySelector(".invalidPasscodeText").innerHTML = "";
  }

  if (passcodeField.length <= 8) {
    document.querySelector(".invalidPasscodeText").innerHTML =
      "Password should be more than 8 character long";
    passcodeField.focus();
    return false;
  } else {
    document.querySelector(".invalidPasscodeText").innerHTML = "";
  }

  return true;
});
