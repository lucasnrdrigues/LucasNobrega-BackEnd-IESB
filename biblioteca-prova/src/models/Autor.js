const mongoose = require('mongoose');

const autorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    biografia: {
        type: String
    },
    generosLiterarios: {
        type: [String]
    }
}, { timestamps: true });

const Autor = mongoose.model('Autor', autorSchema);

module.exports = Autor;
