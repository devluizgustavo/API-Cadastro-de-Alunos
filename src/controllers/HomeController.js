import Aluno from "../models/Aluno";
class HomeController {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: 'Maria',
        sobrenome: 'Clara',
        email: 'mariaclaratxs@gmail.com',
        idade: 23,
        peso: 72,
        altura: 1.73,
      });
      return res.json(novoAluno);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new HomeController();
