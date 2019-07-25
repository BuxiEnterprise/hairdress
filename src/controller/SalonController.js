const Salon = require('../model/Salon');

module.exports = {
    async Store (req, res){
       
        const client = await Salon.create({
            name,
            price
        });
       
        return res.json(client); 
    
    }
        
};