// CRIANDO SHEMA
const mongoose = require('mongoose')

// primeira {} é a definição e depois a {} de opções
const shema = new mongoose.Schema({
    nome: {
        // qual tipo do atributo
        type: String,
        // para saber se é obrigatório ou não o atributo, usamos required
        required: true
    },
    descricao: {
        type: String,
        required: true
    }

// timestamps cria duas variáveis, uma para armazenar a criação do registro e uma para data de atualização
},{timestamps:true})

//CRIANDO MODELO PRA COLLECTION (entidade/model)
const Depart = mongoose.model('departamento', shema)

// EXPORTANDO MÓDULO
module.exports=Depart