import "@babel/polyfill";
import express from "express";

const app = express();
const port = 3000;

app.get("/consultas", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(require("./consultas.json"));
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () =>
  console.log(`La aplicación está ejecutando en el puerto ${port}!`)
);