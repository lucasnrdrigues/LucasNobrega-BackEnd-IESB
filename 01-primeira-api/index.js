// Importanto módulo do express
const express = require('express')

// Cria uma aplicação express
const app = express()

// Construindo a lógica(o contrato da minha api)
app.get("/hello", (req, res) => {         //get é o método, "/hello" é a rota, e sempre que chegar uma requisição nessa rota ele irá fazer o que está no bloco
    res.send("Hello World!")
})

app.get("/nome", (req, res) => {        
    res.send("Olá Lucas Nóbrega Rodrigues!")     //get é o método, "/nome" é a rota, sempre que chegar uma requisição nesse endereço, ele irá devolver o que está no código
})

app.post("/teste", (req, res) => {        
    res.send("Teste POST está OK!")     //get é o método, "/nome" é a rota, sempre que chegar uma requisição nesse endereço, ele irá devolver o que está no código
})                                         //Se rodar esse no navegador não vai funcionar, pois o navegador usa o método GET sempre



// Startar a aplicação e pedir para ela ficar escutando na porta 3000
app.listen(3000, () => {        //Assim que acontece algo ele imprime algo - Função de call back, essa função sem nada é chamada também de "anônima"
    console.log("Api iniciando! Rodando em http://localhost:3000")
})
