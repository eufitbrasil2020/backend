module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("fcpa", {
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
    return queryInterface.dropTable("fcpa");
  }
};
