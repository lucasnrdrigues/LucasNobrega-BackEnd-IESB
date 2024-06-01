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
    }

    // timestamps cria duas variáveis, uma para armazenar a criação do registro e uma para data de atualização
}, { timestamps: true })

//CRIANDO MODELO PRA COLLECTION (entidade/model)
const Projeto = mongoose.model('projeto', shema)

// EXPORTANDO MÓDULO
module.exports = Projeto