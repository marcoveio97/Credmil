const express = require("express");
const routes = express.Router();
const cadastro = require("./cadastro");
const login = require("./login");

// Rotas do tipo "Get"
routes.get("/", function (req, res) {
  return res.redirect("/login");
});

routes.get("/login", function (req, res) {
  return res.render("login");
});

routes.get("/cadastro", function (req, res) {
  return res.render("cadastro");
});

routes.get("/esqueci-senha", function (req, res) {
  return res.render("senha");
});

routes.get("/cliente", function (req, res) {
  return res.render("cliente");
});

routes.get("/banco", function (req, res) {
  return res.render("banco");
});

routes.get("/cartorio", function (req, res) {
  return res.render("cartorio");
});

// Rotas do tipo "Post"
routes.post("/login", cadastro.post);

routes.post("/cliente", login.post);

routes.post("/banco", login.post);

routes.post("/cartorio", login.post);

// Rotas do tipo "Put"
routes.put("/login", cadastro.put);

module.exports = routes;
