const axios = require('axios');
const Dev = require('../models/Dev');
s

module.exports = {
    async store(req, res,){
        const { username } = req.body;

        const response = await axios.get(`https://api.github.com/users/${username}`);
        return res.json(response.data);
    }
}