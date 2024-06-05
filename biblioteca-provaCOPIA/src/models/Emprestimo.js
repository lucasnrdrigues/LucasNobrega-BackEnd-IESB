const mongoose = require('mongoose');

const emprestimoSchema = new mongoose.Schema({
    livro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Livro',
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    dataEmprestimo: {
        type: Date,
        default: Date.now
    },
    dataDevolucao: {
        type: Date
    },
    status: {
        type: String,
        enum: ['em andamento', 'devolvido', 'atrasado'],
        default: 'em andamento'
    }
}, { timestamps: true });

const Emprestimo = mongoose.model('Emprestimo', emprestimoSchema);

module.exports = Emprestimo;
