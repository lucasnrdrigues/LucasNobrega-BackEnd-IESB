const mongoose = require('mongoose')

//Schema é como vai ser a estrutura do objeto, quais atributos etc
// const schema = new mongoose.Schema({},{}) --- ele espera dois objetos, um é para a definição e a outro é para opções que pode configurar
//O próprio mongoose coloca um ID, não precisa por manualmente
const schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true // ele por default é falso, ou seja, ele é opcional, você tem que passar true para ele ser obrigatório
    },
    descricao: {
        type: String,
        required: false // campo opcional
    },
    salario: {
        type: Number,
        required: true // campo obrigatório
    }
},{timestamps: true}) // "timestamps: true" - quando algum registro for criado/atualizado ele automaticamente cria uma nota dizendo a data!

// Criando o model(entidade)
const Cargo = mongoose.model('cargo', schema)

module.exports = Cargo