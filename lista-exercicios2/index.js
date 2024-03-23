// Configurações iniciais para iniciar um projeto
const express = require("express")
const app = express()
const port = 3000

//Configurar o midleware para trasformar todo corpo em JSON
app.use(express.json())


//







//start da aplicação com a porta definida
// app.listen(port) -> só assim já funciona
// Usamos a função para que quando a aplicação inicia ele mande uma mensagem
app.listen(port, () => {
    console.log("Api iniciando! Rodando em http://localhost:3000")
})