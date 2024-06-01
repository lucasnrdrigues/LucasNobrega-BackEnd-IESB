// IMPORTS
const express = require('express')

// CONFIGURAÇÃO
const PORT = 3000
const app = express()

// IMPORTANDO A FUNÇÃO DE CONEXÃO COM O BD
const DBconnect = require('./database/connection')
DBconnect()

// MIDDLEWARES
app.use(express.json())

// IMPORTANDO AS ROTAS
const routes = require('./routes/routes')
app.use(routes)

// START
app.listen(PORT, () => {
    console.log(`aplicação rodando na porta ${PORT}`)
})