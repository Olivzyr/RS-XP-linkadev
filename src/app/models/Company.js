import Sequelize, { Model } from 'sequelize';

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        about: Sequelize.STRING,
        documentValue: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  // Gerando o relacionamento entre tabelas
  static associate(models) {
    this.belongsTo(models.DocumentType, { foreignKey: 'document_type_id' });
  }
}

export default Company;
