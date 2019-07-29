const mongo = require('mongoose');

const SalonSchema = new mongo.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    schedule:{
        type:Date,
        required:true
    },   
},{
        timestamps:true
});

module.exports = mongo.model('Salon', SalonSchema);

