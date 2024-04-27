const express = require('express')
const app = express()

// middleware
app.use(express.json())

// rotas
const funcionariosRouter = require('./routes/funcionarios')
app.use(funcionariosRouter)

//Porta
app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})
