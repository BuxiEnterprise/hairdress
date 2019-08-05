const express = require('express');
// const Sequelize = require('sequelize');
const body = require('body-parser');

const app = express();

// const sequelize = new Sequelize('postgres','postgres','postgres',{
//     host:'localhost',
//     dialect:'postgres'
// })

// const Model = Sequelize.Model 
// class Professional extends Model{}
// Professional.init({
//   nome:{type:Sequelize.STRING(60)},
//   cpf:{type:Sequelize.STRING(15),unique:true},
//   email:{type:Sequelize.STRING(60),unique:true}},
//   {
//     sequelize, modelName:'professional'
// })


// sequelize.sync({force:true}).then(()=>{
//   console.log("criou as tabelas")
// })

// Professional.sync({force:true}).then(()=>{
//   return Professional.create({id:2,nome:"Bahianao",cpf:"45424923897",email:"leonardo.ventura98@outlook.com"})
// })

// Professional.findAll().then(user => {
//   console.log("all useers:", JSON.stringify(user,null,4))
// })

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

app.use(body.json(),require('./routes'));

app.listen(3636);