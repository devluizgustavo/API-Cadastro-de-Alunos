import User from "../models/User";

//Criar CRUD
class UserController {
  //Inserir Usuário
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //Listar todos os usuários
  async index(req, res) {
    try {
      const all_users = await User.findAll();
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
      return res.json(find_user);
    } catch (e) {
      return res.json(null);
    }
  }

  //Atualizar um usuário
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ["ID não foi enviado."] });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({ errors: ["Usuário não existe."] });
      }

      const new_dados = await user.update(req.body);
      return res.json(new_dados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //Deletar um usuário
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ["ID não foi enviado."] });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({ errors: ["Usuário não existe."] });
      }

      await user.destroy();
      return res.json({msg: ["Usuário deletado."], user: [user]});
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
