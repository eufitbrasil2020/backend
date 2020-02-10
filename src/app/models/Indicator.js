import Sequelize, { Model } from "sequelize";

class Indicator extends Model {
  static init(sequelize) {
    super.init(
      {
        sexo: Sequelize.BOOLEAN,
        altura: Sequelize.FLOAT,
        peso: Sequelize.FLOAT,
        imc: Sequelize.FLOAT
      },
      {
        sequelize
      }
    );
  }
}

export default Indicator;
