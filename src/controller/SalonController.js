const Salon = require('../model/Salon');

module.exports = {
    async Index (req, res){
        const client = await Salon.find().where(name='leonardo');
        return res.json(client);
    },
    async Store (req, res){
        const {name,price} = req.body;
        const client = await Salon.create({
            name,
            price
        });

        return res.json(client); 
    },
    async srcName(req, res){
        const client = await Salon.where(name=req.params);
        console.log(client);
        return res.json(client);
    },
};