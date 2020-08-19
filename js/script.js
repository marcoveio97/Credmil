const menuLateral = document.querySelector(".menuLateral");
const menuLateralA = menuLateral.querySelectorAll("a");

for (let a of menuLateralA) {
  a.addEventListener("click", function () {
    a.classList.add("active");
  });
}
