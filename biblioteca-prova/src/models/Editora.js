const mongoose = require('mongoose');

const editoraSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Editora = mongoose.model('Editora', editoraSchema);

module.exports = Editora;
