// Model p/cada aluno
import { Model, Sequelize } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notNull: {
            msg: "Campo nome é obrigatório",
            }
          },
        },
        sobrenome: Sequelize.STRING,
        email: {
          type: Sequelize.STRING,
          unique: {
            msg: "E-mail já existe",
          },
          validate: {
            isEmail: {
              msg: "E-mail inválido",
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            isInt: {
              msg: "Idade precisa ser inteiro."
            }
          },
        },
        peso: Sequelize.FLOAT,
        altura: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
