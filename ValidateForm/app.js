var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirm = document.querySelector("#confirm-password");
var form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.add("error");
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmptyError = true;
      showError(input, "Error");
    } else {
      showSuccess(input);
    }
  });

  return isEmptyError;
}

function checkEmail(input) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let isEmailError = regexEmail.test(input.value.trim());
  if (isEmailError) {
    showSuccess();
  } else {
    showError(input, "Email Invalid");
  }
  return isEmailError;
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, `Phải có ít nhất ${min} kí tự`);
    return true;
  }

  if (input.value.length > max) {
    showError(input, `Không được lớn hơn ${max} kí tự`);
    return true;
  }

  showSuccess(input);
  return false;
}

function checkMatchPassword(passwordInput, cfPasswordInput) {
  if (passwordInput.value !== cfPasswordInput.value) {
    showError(cfPasswordInput, "MK không trùng khớp");
    return true;
  }

  return false;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isEmptyError = checkEmptyError([username, email, password, confirm]);
  let isEmailError = checkEmail(email);

  let isUsernameLengthError = checkLengthError(username, 10, 20);
  let isPasswordLengthError = checkLengthError(password, 10, 20);
  let isMatchError = checkMatchPassword(password, confirm);

  if (
    isEmptyError ||
    isEmailError ||
    isUsernameLengthError ||
    isPasswordLengthError ||
    isMatchError
  ) {
    //do nothing
  } else {
    //logic, call API, ...
  }
});
