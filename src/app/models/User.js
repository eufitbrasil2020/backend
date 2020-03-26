import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        nome: Sequelize.STRING
      },
      {
        sequelize,
        modelName: "user"
      }
    );

    this.addHook("beforeSave", async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Indicator, { foreignKey: "indicator_id" });
    this.belongsTo(models.FcPaUser, { foreignKey: "fcpa_id" });
    this.belongsTo(models.Ciclo, { foreignKey: "ciclo_id" });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
