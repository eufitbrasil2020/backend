module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "fcpa_id", {
      type: Sequelize.INTEGER,
      references: { model: "fcpa", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: true
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn("users", "fcpa_id");
  }
};
