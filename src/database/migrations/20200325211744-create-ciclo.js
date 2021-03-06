module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ciclo", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      dia: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      mes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("ciclo");
  }
};
