'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('djs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clubs_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'clubs',
          key: 'id'
        }
      },
      url_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      biography: {
        allowNull: true,
        type: Sequelize.STRING
      },
      soundcloud: {
        allowNull: true,
        type: Sequelize.STRING
      },
      facebook: {
        allowNull: true,
        type: Sequelize.STRING
      },
      instagram: {
        allowNull: true,
        type: Sequelize.STRING
      },
      spotify: {
        allowNull: true,
        type: Sequelize.STRING
      },
      beatport: {
        allowNull: true,
        type: Sequelize.STRING
      },
      mixcloud: {
        allowNull: true,
        type: Sequelize.STRING
      },
      youtube: {
        allowNull: true,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('djs');
  }
};