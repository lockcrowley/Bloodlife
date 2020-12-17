import Sequelize from 'sequelize';

import User from '../models/User';
import Hemocenter from '../models/Hemocenter';
import Info from '../models/Info';


import databaseConfig from '../config/database';

const models = [User, Hemocenter, Info];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
