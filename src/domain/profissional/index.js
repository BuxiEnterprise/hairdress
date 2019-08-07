const { sequelize } = require('../../models')
const Professional = sequelize.model('professional')
module.exports = {
    async createProfessional(dadosDoProfissional){
        try{
            const professional = await Professional.findOne(dadosDoProfissional)
            if(professional.email) throw "email ja existe";
            if(professional.cpf) throw "cpf ja existe";
            if(!professional){
                professional = await Professional.create(dadosDoProfissional)
                console,log("aqui executo")
                return professional
            }
            return professional;
            
        }catch(err){
            console.log(err.message)
        }finally{
            const professional = await Professional.create({
                name: 'vitinho',
                email:'godofredo@gmail',
                cpf:'4545151515'
            })

            return professional
        }
    },
    // async findProfessional(dadosDoProfissional){
    //     const professional = await Professional.findOne(dadosDoProfissional)
    //     // console.log('cpf',cpf,"email",email,'datauser', professional)
    //     return professional
    // }
}