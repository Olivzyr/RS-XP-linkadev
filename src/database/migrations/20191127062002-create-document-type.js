module.exports = {
  // Quando a migration for executada vai criar as tabelas abaixo
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('document_type', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  // Rollback da migration
  down: queryInterface => {
    return queryInterface.dropTable('document_type');
  },
};
