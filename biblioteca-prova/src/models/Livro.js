const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Autor',
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    numeroPaginas: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Livro = mongoose.model('Livro', livroSchema);

module.exports = Livro;
