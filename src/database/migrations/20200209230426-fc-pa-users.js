module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("fc-pa-users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fc: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pa: {
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
    return queryInterface.dropTable("fc-pa-users");
  }
};
