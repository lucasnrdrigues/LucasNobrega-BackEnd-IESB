//Importando módulo HTTP
const http = require("http")

let contador = 0
console.log("Contador iniciado!")
console.log("Contador de requisições: 0")
//Criando um servidor(backend - api) através do módulo http
//Método Listen starta o servidor e define como vai funcionar, ou seja, ele fica "escutando"
http.createServer((req, res) => {
   
    //Construindo a lógica da API
    // Qualquer requisição que chegue, monta uma resposta e devolve
    contador++
    console.log("contador de requisições: " + contador)
    res.write(`Você é o visitante número: ${contador}`)
    res.end()

//Startando servidor(backend - api) para escutar qualquer comunicação na porta  3000
}).listen(3000)

// Para acessar no navegador use:
//  http://localhost:3000/

// Rode o código antes de entrar na URL

