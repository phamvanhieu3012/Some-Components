const btnOpen = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal");
const modalInner = document.querySelector(".modal-inner");
const btnClose = document.querySelector(".modal-footer button");
const iconClose = document.querySelector(".modal-header ion-icon");
const hide = "hide";

function close() {
  modal.classList.add(hide);
}

btnOpen.addEventListener("click", function () {
  modal.classList.remove(hide);
});

btnClose.addEventListener("click", close);
iconClose.addEventListener("click", close);

window.addEventListener("click", function (e) {
  if (!modalInner.contains(e.target) && !btnOpen.contains(e.target)) {
    close();
  }
});
