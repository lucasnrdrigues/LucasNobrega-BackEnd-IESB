//Configurações iniciais da API
const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors');
//CORS é um mecanismo de segurança implementado pelos navegadores da web que controla as solicitações HTTP entre diferentes origens (domínios).

//Conectando ao banco de dados
const DBConnect = require('./database/connection')
DBConnect()

//Middleware para transformar dados em json
app.use(express.json())

// Middleware para permitir requisições de origens diferentes
app.use(cors());

// Codando a parte da segurança da API
const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)

const { checkToken } = require('./validators/AutenticacaoValidator')

const routes = require('./routes/routes')
app.use(checkToken, routes)


// Startando a aplicação
app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})