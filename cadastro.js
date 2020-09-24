const fs = require("fs");
const data = require("./data.json");

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

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) {
      return res.send("Erro de gravação de arquivo");
    }

    return res.redirect("/login");
  });
};
