// Lay toan bo img trong div image
const images = document.querySelectorAll(".image img");

const prev = document.querySelector(".control-prev");
const next = document.querySelector(".control-next");
const close = document.querySelector(".close");

const gallery = document.querySelector(".gallery");
const gallaryImg = document.querySelector(".gallery-inner img");

let currentIndex = 0;

function showGallery() {
  if (currentIndex === 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }

  if (currentIndex === images.length - 1) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }
  gallery.classList.add("show");
  gallaryImg.src = images[currentIndex].src;
}

images.forEach((item, index) => {
  item.addEventListener("click", function () {
    currentIndex = index;
    showGallery();
  });
});

close.addEventListener("click", function () {
  gallery.classList.remove("show");
});

//Bắt sự kiện bàn phím
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }
});

prev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery();
  }
});

next.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGallery();
  }
});
