var content = document.querySelector(".content");
var input = document.querySelector(".content input");
var remove = document.querySelectorAll(".content li i");
var removeAll = document.querySelector(".remove-all");

var tags = ["Toan", "Li"];

function createTags() {
  content.innerHTML = "";
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    content.innerHTML += `<li>
                            ${tag}
                            <i class="fa fa-times" onClick="removeTag(${i})"></i>
                          </li>`;
  }
  content.appendChild(input);
  input.focus();
}

function removeTag(index) {
  tags.splice(index, 1);
  createTags();
}

createTags();

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    tags.push(input.value.trim());
    createTags();
    input.value = "";
  }
});

removeAll.addEventListener("click", function () {
  tags = [];
  createTags();
});
