let eKey = document.querySelector(".card.key p:last-child");
let eLocation = document.querySelector(".card.location p:last-child");
let eWhich = document.querySelector(".card.which p:last-child");
let eCode = document.querySelector(".card.code p:last-child");
let alert = document.querySelector(".alert");
let result = document.querySelector(".result");
let box = document.querySelector(".box");

document.addEventListener("keydown", function (event) {
  eKey.innerText = event.key;
  eLocation.innerText = event.location;
  eWhich.innerText = event.which;
  eCode.innerText = event.code;
  result.innerText = event.which;

  alert.classList.add("hide");
  box.classList.remove("hide");
});
