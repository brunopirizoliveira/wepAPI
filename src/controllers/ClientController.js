const mongoose = require('mongoose');
const Client = mongoose.model("Client");

module.exports = {
    async listAll(req, res) {
        const client = await Client.find();
        return res.json(client);
    },

    async insert(req, res) {
        const client = await Client.create(req.body);
        return res.json(client);
    }
};