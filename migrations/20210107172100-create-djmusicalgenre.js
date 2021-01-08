'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('djmusicalgenres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      djs_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'djs',
          key: 'id'
        }
      },
      musicalgenres_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'musicalgenres',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('djmusicalgenres');
  }
};