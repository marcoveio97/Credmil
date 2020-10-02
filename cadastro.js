const fs = require("fs");
const data = require("./data.json");
const { validaCPF } = require("./funcoes");

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
