function mostrarAtivo(tag) {
  const menuLateral = document.querySelector(".menuLateral");
  const tagA = menuLateral.querySelectorAll("a");

  for (i = 0; i < tagA.length; i++) {
    tagA[i].style.backgroundColor = "";
  }

  tag.style.backgroundColor = "#192436";
}

function mascara_cpf() {
  const cpf = document.getElementById("cpf");
  if (cpf.value.length == 3 || cpf.value.length == 7) {
    cpf.value += ".";
  } else if (cpf.value.length == 11) {
    cpf.value += "-";
  }
}
