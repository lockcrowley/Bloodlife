import Sequelize, { Model } from 'sequelize';

class Hemocenter extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        latitude: Sequelize.FLOAT,
        longitude: Sequelize.FLOAT,
        about: Sequelize.STRING,
        instructions: Sequelize.STRING,
        opening_hours: Sequelize.STRING,    
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Hemocenter;
