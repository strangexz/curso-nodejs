const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const message = `Hola mundo!!! El API REST en Node JS arrancó en el puerto: ${port}`;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./page/index.html"));
});

app.listen(port, () => {
  console.log(message);
});
