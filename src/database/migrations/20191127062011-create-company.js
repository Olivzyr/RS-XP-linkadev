module.exports = {
  // Quando a migration for executada vai criar as tabelas abaixo
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('company', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      about: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      document_value: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      /**
       * Foreign Key Document Type
       */
      document_type_id: {
        type: Sequelize.INTEGER,
        references: { model: 'document_type', key: 'id' },
        onUpdate: 'CASCADE',
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  // Rollback da migration
  down: queryInterface => {
    return queryInterface.dropTable('company');
  },
};
