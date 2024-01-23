const express = require("express");
const fs = require("fs").promises;
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const arquivoJSON = "./categorias/categorias.json";

app.get("/categorias/:nome", async (req, res) => {
   try {
      // Lê o conteúdo do arquivo JSON
      const conteudoJSON = await fs.readFile(arquivoJSON, "utf-8");
      const dadosCategorias = JSON.parse(conteudoJSON);

      const nomeCategoria = req.params.nome;
      const categoria = dadosCategorias.data.find((cat) => cat.name === nomeCategoria);

      if (categoria) {
         res.json(categoria);
      } else {
         res.status(404).json({ mensagem: "Categoria não encontrada" });
      }
   } catch (error) {
      console.error("Erro ao ler o arquivo JSON:", error);
      res.status(500).json({ mensagem: "Erro interno do servidor" });
   }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Servidor rodando na porta ${PORT}`);
});
