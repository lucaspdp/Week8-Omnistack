const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const server = express();


mongoose.connect('mongodb+srv://admin:admin@cluster0-jyby7.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

server.use(cors());

server.use(express.json());
server.use(routes);

server.listen(3333);