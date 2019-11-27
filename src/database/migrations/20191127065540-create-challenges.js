module.exports = {
  // Quando a migration for executada vai criar as tabelas abaixo
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('challenges', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      detail: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      /**
        * Colunas referente a data de criação e atualização das informações
        */
       created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },
  // Rollback da migration
  down: queryInterface => {
    return queryInterface.dropTable('challenges');
  },
};
