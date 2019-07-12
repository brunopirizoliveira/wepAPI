const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    codigo: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }    
});

mongoose.model('Client', ClientSchema); // Registrar model na aplicação