module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hemocenters', {
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
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      instructions: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      about: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      opening_hours: {
        type: Sequelize.STRING,
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

  down: (queryInterface) => {
    return queryInterface.dropTable('hemocenters');
  }
};
