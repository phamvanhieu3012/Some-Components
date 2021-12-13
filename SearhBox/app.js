const btnSearch = document.querySelector(".search-box-btn");

//Arrow function k co this
btnSearch.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
  this.previousElementSibling.focus();
});
