import app from "./app";
const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Entre por aqui http://localhost:${port}`);
});
