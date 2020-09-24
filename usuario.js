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
    cpf,
    nascimento,
    email,
    confirmaEmail,
    senha,
    confirmaSenha,
  } = req.body;

  const id = Number(data.usuarios.length + 1);

  if (senha == confirmaSenha) {
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
  } else {
    return res.send("Senhas diferentes...");
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

  const usuarioEncontrado = encontreUsuario(usuarios);

  function encontreUsuario(usuarios, foundIndex) {
    for (let usuario of usuarios) {
      if (email == usuario.email) {
        return usuario;
      } else {
        return res.send("E-mail não encontrado...");
      }
    }
  }

  const usuario = {
    ...usuarioEncontrado,
    ...req.body,
  };

  data.usuarios = usuario;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) {
      return res.send("Erro na gravação!");
    }

    return res.redirect("/login");
  });
};
