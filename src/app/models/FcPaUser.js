import Sequelize, { Model } from "sequelize";

class FcPaUser extends Model {
  static init(sequelize) {
    super.init(
      {
        fc: Sequelize.INTEGER,
        pa: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default FcPaUser;
