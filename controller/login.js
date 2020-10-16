const data = require("../data.json");

// Post data
exports.post = function (req, res) {
  let { email, senha } = req.body;

  for (let i = 0; i < data.usuarios.length; i++) {
    if (email == data.usuarios[i].email && senha == data.usuarios[i].senha) {
      return res.redirect("/cliente");
    }
  }
  return res.send("Usuário e senha errados...");
};
