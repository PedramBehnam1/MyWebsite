'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('photos', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: DataTypes.STRING,
      image: {type: DataTypes.STRING, allowNull: false},
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('photos');
    
  }
};
