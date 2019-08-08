const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

server.use(express.json());

mongoose.connect('mongodb+srv://admin:admin@cluster0-jyby7.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser: true
});
server.use(routes);

server.listen(3333);