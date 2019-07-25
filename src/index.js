const express = require('express');
const mongo = require('mongoose');

const app = express();

mongo.connect('mongodb+srv://leonardo:2585963741@cluster0-9rqra.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(8080);