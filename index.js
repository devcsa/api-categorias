const express = require("express");
const baseSimuladorRoutes = require("./app/routes/baseSimuladorRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("app/views"));
app.use(express.static("public"));

app.use(baseSimuladorRoutes);

app.listen(port, () => {
   console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
