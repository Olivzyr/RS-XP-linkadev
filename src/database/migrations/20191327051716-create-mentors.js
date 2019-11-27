module.exports = {
  // Quando a migration for executada vai criar as tabelas abaixo
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mentors', {
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
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },


      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      /**
       * Colunas para o relacionamento
       */

      student_id: {
        type: Sequelize.INTEGER,
        references: { model: 'students', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
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
    return queryInterface.dropTable('mentors');
  },
};
