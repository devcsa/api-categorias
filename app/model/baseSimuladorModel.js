const fs = require("fs").promises;
const baseSimuladorDB = require("../config/database");

const getAll = async () => {
   const baseSimulador = await fs.readFile(baseSimuladorDB, "utf-8");
   const dadosCategorias = JSON.parse(baseSimulador);
   return dadosCategorias;
};

const getOne = async (nomeCategoria) => {
   const baseSimulador = await fs.readFile(baseSimuladorDB, "utf-8");
   const dadosCategorias = JSON.parse(baseSimulador);
   const categoria = dadosCategorias.data.filter((simulador) => simulador.Categoria === nomeCategoria);

   return categoria;
};

module.exports = { getAll, getOne };
