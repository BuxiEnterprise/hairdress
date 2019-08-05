const professional = require('../model/Salon');

module.exports = {
   async index(req,res){
        console.log(await professional.findAll())
    }
};