import Sequelize, { Model } from 'sequelize';

class Challenge extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        company: Sequelize.STRING,
        detail: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Challenge;
