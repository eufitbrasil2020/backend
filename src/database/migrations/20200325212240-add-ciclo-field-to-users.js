module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "ciclo_id", {
      type: Sequelize.INTEGER,
      references: { model: "ciclo", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: true
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn("users", "ciclo_id");
  }
};
