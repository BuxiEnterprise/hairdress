const Sequelize = require('sequelize')
const Model = Sequelize.Model


class professional extends Model {}
    professional.schema({
        id:{type:Sequelize.INTEGER,primaryKey:true ,autoIncrement:true},
        name:{type:Sequelize.STRING},
        cpf:{type:Sequelize.STRING, unique:true},
        email:{type:Sequelize.STRING,unique:true}
    },{Sequelize, modelName:'professional'})

module.exports = professional.schema({professional})