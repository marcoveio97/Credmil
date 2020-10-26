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

const info = document.querySelector(".info");
const sair = document.querySelector(".sair");

info.addEventListener("click", function() {
  if(sair.classList == "sair") {
    sair.classList.add("active");
  }
  else if (sair.classList == "sair active") {
    sair.classList.remove("active");
  }
});
