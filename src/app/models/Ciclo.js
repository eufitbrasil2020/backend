import Sequelize, { Model } from "sequelize";

class Ciclo extends Model {
  static init(sequelize) {
    super.init(
      {
        dia: Sequelize.INTEGER,
        mes: Sequelize.INTEGER,
        ano: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default Ciclo;
