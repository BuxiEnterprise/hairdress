'use strict';
module.exports = (sequelize, DataTypes) => {
  const professional = sequelize.define('professional', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    nome: {
      type:DataTypes.STRING(50),
      allowNull:false      
    },
    cpf: {
      type:DataTypes.STRING(15),
      allowNull:false,
      unique:true
    },
    email: {
      type:DataTypes.STRING(50),
      allowNull:false,
      unique:true
    }
  }, {});
  professional.associate = function(models) {
    // associations can be defined here
  };
  return professional;
};