import Aluno from "../models/Aluno";

class AlunoController {
  async index(req, res) {
    const row = await Aluno.findAll();
    res.json(row);
  }

  async show(req, res) {
    const row = await Aluno.findByPk(req.params.id);
    res.json(row);
  }

  async store(req, res) {
    const row = await Aluno.create(req.body);
    res.json(row);
  }
}

export default new AlunoController();
