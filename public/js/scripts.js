const currentPage = location.pathname;
const menuItens = document.querySelectorAll(".menuLateral a");

for (item of menuItens) {
  if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  }
}

function mascara_cpf() {
  const cpf = document.getElementById("cpf");
  if (cpf.value.length == 3 || cpf.value.length == 7) {
    cpf.value += ".";
  } else if (cpf.value.length == 11) {
    cpf.value += "-";
  }
}
