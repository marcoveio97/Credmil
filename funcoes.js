module.exports = {
  // Função para validação de CPF
  validaCPF: function validaCPF(cpf) {
    cpf = cpf.replace(/\D+/g, "");

    if (
      !cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999"
    ) {
      return false;
    }

    let soma = 0;

    for (let i = 0; i < cpf.length - 2; i++) {
      soma += cpf[i] * (cpf.length - 1 - i);
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
      soma = 0;
    }

    if (soma != cpf[9]) {
      return false;
    }

    soma = 0;

    for (let i = 0; i < cpf.length - 1; i++) {
      soma += cpf[i] * (cpf.length - i);
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
      soma = 0;
    }

    if (soma != cpf[10]) {
      return false;
    }

    return cpf;
  },
};
