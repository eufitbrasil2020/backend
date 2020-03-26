module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "indicator_id", {
      type: Sequelize.INTEGER,
      references: { model: "indicators", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: true
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn("users", "indicator_id");
  }
};
