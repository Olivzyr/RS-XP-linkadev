import Sequelize, { Model } from 'sequelize';

class DocumentType extends Model {
  static init(sequelize) {
    super.init(
      {
        type: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default DocumentType;
