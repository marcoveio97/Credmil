const express = require("express");
const routes = express.Router();
const cadastro = require("./controller/cadastro");
const login = require("./controller/login");

// Rotas do tipo "Get"
routes.get("/", function (req, res) {
  return res.redirect("/login");
});

routes.get("/login", function (req, res) {
  return res.render("login");
});

routes.get("/cadastre-se", function (req, res) {
  return res.render("cadastro");
});

routes.get("/esqueci-senha", function (req, res) {
  return res.render("senha");
});

routes.get("/banco", function (req, res) {
  return res.render("banco/index");
});

routes.get("/cartorio", function (req, res) {
  return res.render("cartorio/index");
});

routes.get("/cliente", function (req, res) {
  return res.render("cliente/index");
});

routes.get("/cliente/enviar-proposta", function (req, res) {
  return res.render("cliente/enviarProposta");
});

routes.get("/cliente/central-documentos", function (req, res) {
  return res.render("cliente/centralDocumentos");
});

routes.get("/cliente/acompanhar-financiamento", function (req, res) {
  return res.render("cliente/acompanharFinanciamento");
});

// Rotas do tipo "Post"
routes.post("/login", cadastro.post);

routes.post("/cliente", login.post);

// Rotas do tipo "Put"
routes.put("/login", cadastro.put);

module.exports = routes;
