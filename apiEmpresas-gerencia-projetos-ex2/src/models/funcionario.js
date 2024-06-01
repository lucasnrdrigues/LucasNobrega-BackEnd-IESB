// CRIANDO SHEMA
const mongoose = require('mongoose')

// primeira {} é a definição e depois a {} de opções
const shema = new mongoose.Schema({
    nome: {
        // qual tipo do atributo
        type: String,
        // para saber se é obrigatório ou não o atributo, usamos required
        required: true
    }, cpf: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true
    }, telefone: {
        type: String,
        required: true
    }, dataContratacao: {
        type: Date,
        required: true
    }, dataNascimento: {
        type: Date,
        required: true
    }, genero: {
        type: String,
        required: true
    }, endereco: {
        cep: String,
        uf: String,
        localidade: String,
        bairro: String,
        numero: String,
        complemento: String
    }, cargo: {
        type: mongoose.Types.ObjectId,
        ref: 'cargo',
        required: false
    }, departamento: {
        type: mongoose.Types.ObjectId,
        ref: 'departamento',
        required: false
    }

    // timestamps cria duas variáveis, uma para armazenar a criação do registro e uma para data de atualização
}, { timestamps: true })

//CRIANDO MODELO PRA COLLECTION (entidade/model)
const Funcionario = mongoose.model('funcionario', shema)

// EXPORTANDO MÓDULO
module.exports = Funcionario