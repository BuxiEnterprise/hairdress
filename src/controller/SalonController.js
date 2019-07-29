const Salon = require('../model/Salon');

module.exports = {
    async Index (req, res){
        const client = await Salon.find().sort('-createdAt');
        return res.json(client);
    },
    async Store (req, res){
        const {name,price,schedule} = req.body;
        const client = await Salon.create({
            name,
            price,
            schedule,
        });
        console.log(month, '-',client);
        // return res.json(client); 
    },
    async srcName(req, res){
        const client = await Salon.find(req.params);
        return res.json(client);
    },
};