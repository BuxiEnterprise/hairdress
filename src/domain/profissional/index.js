const { sequelize } = require('../../models')
const Professional = sequelize.model('professional')
module.exports = {
    async createProfessional(dadosDoProfissional){
        const professional = await Professional.create(dadosDoProfissional)
        return professional
    }
}