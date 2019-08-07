const { sequelize } = require('../../models')
const Professional = sequelize.model('professionals')
const Sequelize = require('sequelize')
const op = Sequelize.Op
module.exports = {
    async createProfessional(dadosDoProfissional){

        try{
            let professional = await Professional.findOne({
                [op.or]:[{cpf:dadosDoProfissional.cpf},{email:dadosDoProfissional.email}]
            })
            if(!professional){
                throw new Error("Usuario existente")
                
            }
            professional = await Professional.create(dadosDoProfissional)
            return professional
        }catch(err){
            err.mesage
            return dadosDoProfissional 
        }    
        
    }
}