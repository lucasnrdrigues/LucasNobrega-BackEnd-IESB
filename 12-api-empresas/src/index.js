//Configs iniciais
const express = require('express')
const app = express()
const PORT = 3000

//Fazendo a conexão
const DBConnect = require('./database/conection')
DBConnect()

//Configurando o middleware
app.use(express.json())

const routes = require('./routes/routes')


//Configurando a porta de "escuta"
app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})