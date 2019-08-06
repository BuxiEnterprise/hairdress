'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('professionals', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      nome: {
        type:Sequelize.STRING(50),
        allowNull:false      
      },
      cpf: {
        type:Sequelize.STRING(15),
        allowNull:false,
        unique:true
      },
      email: {
        type:Sequelize.STRING(50),
        allowNull:false,
        unique:true
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('professionals');
  }
};