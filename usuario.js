const fs = require("fs");
const data = require("./data.json");

// Post
exports.post = function (req, res) {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Por favor, preencha todos os campos.");
    }
  }

  let {
    nome,
    sobrenome,
    CPF,
    nascimento,
    email,
    confirmaEmail,
    senha,
    confirmaSenha,
  } = req.body;

  const id = Number(data.usuarios.length + 1);
  const cpf = validaCPF(CPF);

  function validaCPF(cpf) {
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

    if (!validaPrimeiroDigito(cpf)) {
      return false;
    }

    if (!validaSegundoDigito(cpf)) {
      return false;
    }

    return cpf;
  }

  function validaPrimeiroDigito(cpf) {
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

    return true;
  }

  function validaSegundoDigito(cpf) {
    let soma = 0;

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

    return true;
  }

  if (cpf == false) {
    return res.send("CPF inválido...");
  } else if (senha != confirmaSenha) {
    return res.send("Senhas não coincidem...");
  } else if (email != confirmaEmail) {
    return res.send("E-mails não coincidem...");
  } else {
    data.usuarios.push({
      id,
      nome,
      sobrenome,
      cpf,
      nascimento,
      email,
      confirmaEmail,
      senha,
      confirmaSenha,
    });
  }

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) {
      return res.send("Erro de gravação de arquivo...");
    }

    return res.redirect("/login");
  });
};

// Put
exports.put = function (req, res) {
  const { email } = req.body;
  const usuarios = data.usuarios;

  const usuarioEncontrado = encontreUsuario(usuarios, email);

  function encontreUsuario(usuarios, email) {
    for (let usuario of usuarios) {
      if (usuario.email == email) {
        return usuario;
      }
    }
  }

  const usuario = {
    ...usuarioEncontrado,
    ...req.body,
  };

  for (let i = 0; i < data.usuarios.length; i++) {
    if (data.usuarios[i].email == usuario.email) {
      data.usuarios[i] = usuario;
    }
  }

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) {
      return res.send("Erro na gravação!");
    }

    return res.redirect("/login");
  });
};
