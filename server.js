import app from "./app.js";
const port = 3000;
app.listen(port, () => {
  console.log();
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Entre por aqui http://localhost:${port}`);
});
