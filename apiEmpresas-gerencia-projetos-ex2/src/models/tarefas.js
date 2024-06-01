// CRIANDO SHEMA
const mongoose = require('mongoose')

// primeira {} é a definição e depois a {} de opções
const shema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    }, descricao: {
        type: String,
        required: true
    }, dataInicio: {
        type: Date,
        required: true
    }, dataFim: {
        type: Date,
        required: true
    }, funcionario: {
        type: mongoose.Types.ObjectId,
        ref: 'funcionario',
        required: false
    }, projeto: {
        type: mongoose.Types.ObjectId,
        ref: 'projeto',
        required: false
    }

    // timestamps cria duas variáveis, uma para armazenar a criação do registro e uma para data de atualização
}, { timestamps: true })

//CRIANDO MODELO PRA COLLECTION (entidade/model)
const Tarefa = mongoose.model('tarefa', shema)

// EXPORTANDO MÓDULO
module.exports = Tarefa