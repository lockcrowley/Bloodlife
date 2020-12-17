import Sequelize, { Model } from 'sequelize';

class Info extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        name: Sequelize.STRING,
        bloodtype: Sequelize.STRING,
        genre: Sequelize.STRING,
        latitude: Sequelize.FLOAT,
        longitude: Sequelize.FLOAT,
        description: Sequelize.STRING,
        email: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        acceptterms: Sequelize.BOOLEAN,
        hemocenter: Sequelize.STRING,
        location: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Info;
