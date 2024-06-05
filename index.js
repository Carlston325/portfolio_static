const numberOfButtons = document.querySelectorAll(".btn").length;

for (var i = 0; i < numberOfButtons; i++) {
  document
    .querySelectorAll(".btn")
    [i].addEventListener("mouseover", function () {
      this.classList.add("btnHighlight");
    });

  document
    .querySelectorAll(".btn")
    [i].addEventListener("mouseout", function () {
      this.classList.remove("btnHighlight");
    });
}
