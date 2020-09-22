function mostrarAtivo(tag) {
  const menuLateral = document.querySelector(".menuLateral");
  const tagA = menuLateral.querySelectorAll("a");

  for (i = 0; i < tagA.length; i++) {
    tagA[i].style.backgroundColor = "";
  }

  tag.style.backgroundColor = "#192436";
}
