const express = require("express");
const routes = express.Router();
const usuario = require("./usuario");

// Rotas do tipo "Get"
routes.get("/", function (req, res) {
  return res.redirect("/login");
});

routes.get("/login", function (req, res) {
  return res.sendFile(__dirname + "/views/login.html");
});

routes.get("/cadastro", function (req, res) {
  return res.sendFile(__dirname + "/views/cadastro.html");
});

routes.get("/esqueci-senha", function (req, res) {
  return res.sendFile(__dirname + "/views/senha.html");
});

routes.get("/cliente", function (req, res) {
  return res.sendFile(__dirname + "/views/cliente.html");
});

routes.get("/banco", function (req, res) {
  return res.sendFile(__dirname + "/views/banco.html");
});

routes.get("/cartorio", function (req, res) {
  return res.sendFile(__dirname + "/views/cartorio.html");
});

// Rotas do tipo "Post"
routes.post("/login", usuario.post);

module.exports = routes;
