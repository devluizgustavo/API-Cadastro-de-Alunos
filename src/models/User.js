// Model p/cada aluno
import { Model, Sequelize } from "sequelize";
import bcryptjs from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        //Fazer validação dentro do model
        nome: {
          type: Sequelize.STRING,
          defaultValue: "", // Se o campo nome não for enviado, deixe ele vazio.
          validate: {
            //Validações
            len: {
              //(len) --> tamanho
              args: [3, 255], //Argumentos
              msg: "Campo nome deve ter entre 3 e 255 caracteres", //mensagem
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "Email já existe",
          },
          validate: {
            //Validações
            isEmail: {
              msg: "Email inváido",
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        password: {
          type: Sequelize.VIRTUAL, //VIRTUAL --> Campo não existira no DB
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo senha deve ter entre 3 e 50 caracteres",
            },
          },
        },
      },
      {
        sequelize,
      }
    );

    //Hook --> Executar uma ação em determinadas situações
    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
