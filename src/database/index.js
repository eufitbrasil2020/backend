import Sequelize from "sequelize";

import User from "../app/models/User";
import FcPaUser from "../app/models/FcPaUser";
import Indicator from "../app/models/Indicator";
import Ciclo from "../app/models/Ciclo";

import databaseConfig from "../config/database";

const models = [User, FcPaUser, Indicator, Ciclo];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
