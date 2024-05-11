//
const mongoose = require('mongoose') 
require('dotenv').config() //Estamos usando o dotenv para usarmos variáveis de ambiente para que não joguemos nossos usuário e senha no gitHub

//Puxando as variáveis de ambiente com a biblioteca dotenv
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

//Fazendo a conexão com o banco de dados e jogando dentro de uma função
function main() {
    /* DE INÍCIO O LINK ERA ASSIM: 
    mongodb+srv://lucasnr1912:<password>@meubanco.vrjoqyd.mongodb.net/?retryWrites=true&w=majority&appName=MeuBanco 
    */
    mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?
    retryWrites=true&w=majority&appName=MeuBanco`)
    .then(() => console.log('Conectado ao banco Mongo!')) //função caso dê certo
    .catch(err => console.log('Erro ao conectar ao banco Mongo!', err)) //função caso de errado
}

//Exportando a função main
module.exports = main