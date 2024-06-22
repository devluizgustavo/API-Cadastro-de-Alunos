import User from "../models/User";

//Criar CRUD
class UserController {
  //Inserir Usuário
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //Listar todos os usuários
  async index(req, res) {
    try {
      const all_users = await User.findAll({
        attributes: ["id", "nome", "email"],
      });
      return res.json(all_users);
    } catch (e) {
      return res.json({ errors: ["Não existe usuários."] });
    }
  }

  //Mostrar um usuário
  async show(req, res) {
    try {
      const find_user = await User.findByPk(req.params.id);
      if (!find_user) {
        return res.json({ errors: ["Usuário não existe."] });
      }
      const { id, nome, email } = find_user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  //Atualizar um usuário
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({ errors: ["Usuário não existe."] });
      }

      const new_dados = await user.update(req.body);
      const { id, nome, email } = new_dados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //Deletar um usuário
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({ errors: ["Usuário não existe."] });
      }

      await user.destroy();
      return res.json({ msg: ["Usuário deletado."], user: [user] });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
