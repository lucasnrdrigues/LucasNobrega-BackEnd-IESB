//Configuração inicial
const express = require('express')
const app = express()
const port = 3000

//Configurando os middlewares
app.use(express.json())

//rotas
app.get('/', (req, res) => {
    res.json('Rota principal está OK!')
})

//Rotas importadas:
const tarefasRouter = require('./routers/tarefas')
app.use(tarefasRouter)


//Startando a API
app.listen(port, () => {
    console.log('Aplicação rodando em http://localhost:3000')
})