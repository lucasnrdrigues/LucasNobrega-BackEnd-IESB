//COMANDO INICIAIS PARA COMEÇAR UM PROJETO
//npm init
//npm install express
//npm install nodemon
//fazer script "start" para nodemon

// Importanto módulo do express
const express = require('express')

// Cria uma aplicação express
const app = express()

//Criando os middlewares(intermediários)
app.use((req, res, next) => { //o "app.use" faz com que toda requisição que chegar, antes de chegar na aplicação, ele irá fazer o que está dentro do bloco
    console.log("REQUISIÇÃO BATEU NO INTERMEDIÁRIO")
    const data = new Date().toISOString() //imprime a data de quando foi feito a requisição
    console.log(`Data: ${data}`)
    next() // método que repassa para o próximo intermediário
}) 

// Configurando intermediário que transforma o corpo da requisição em JSON
app.use(express.json())



// Construindo a lógica(o contrato da minha api)
app.get("/hello", (req, res) => {         //get é o método, "/hello" é a rota, e sempre que chegar uma requisição nessa rota ele irá fazer o que está no bloco
    res.send("Hello World!")
})


app.get("/nome", (req, res) => {        
    res.send("Olá, Lucas Nóbrega Rodrigues!")     //get é o método, "/nome" é a rota, sempre que chegar uma requisição nesse endereço, ele irá devolver o que está no código
})


app.post("/teste", (req, res) => {        
    res.send("Teste POST está OK!")     //get é o método, "/nome" é a rota, sempre que chegar uma requisição nesse endereço, ele irá devolver o que está no código
})                                         //Se rodar esse no navegador não vai funcionar, pois o navegador usa o método GET sempre


//CRIE UMA CHAMADA PARA O RECURSO "/ALUNO"
//DEVOLVA NA RESPOSTA O SEU NOME JUNTO COM A SUA MATRÍCULA
app.get("/aluno", (req, res) => {
    res.send("NOME: Lucas Nóbrega Rodrigues \n MATRÍCULA: 23114290219")
})


//Formas de pegar informação
// Primeira forma - Path para: /aluno/{valor matrícula}

//Depois de pessoa você irá me passar o parâmetro nome(coloque dois pontos antes do nomes)
//Lá no PostMan no lugar do nome coloque "Lucas"
//Para ele conseguir achar você tem que colocar exatamente igual aos parâmetros, ou seja, você tem q enviar "Lucas" e depois alguma idade, não precisa usar os dois pontos no POstman!
//Se o parâmetro fosse só ":nome", aí só precisaria do nome
app.get("/pessoa/:nome/:idade", (req, res) => {
    console.log(req.params) //req.params nos permite acessar o nome que o usuário colocar, nesse caso irá devolver "Lucas"

    const nomePessoa = req.params.nome //Vai pegar só o parâmetro nome
    const idadePessoa = req.params.idade //Vai pegar só o parâmetro idade

    let mais18 = null

    if(idadePessoa >= 18){
        mais18 = "Maior de idade"
    } else {
        mais18 = "Menor de idade"
    }

    res.send(`Olá, ${nomePessoa}! Tudo bem? \n Você é ${mais18}`)
})

//Segunda forma QUERY PARAM
// /pessoa?chave=valor
// Exemplo: /pessoa?nome=Lucas

//Usando Vários parâmetros usa-se o "&"
// /pessoa?chave=valor&chave=valor -> Você precisa passar isso na URL!
//Exemplo: /pessoa?nome=Lucas&

app.get("/pessoa", (req, res) => {
    //OBS: os códigos a seguir segue a mesma lógica do de cima!
    const nomePessoa = req.query.nome //Vai pegar só o parâmetro nome
    const idadePessoa = req.query.idade //Vai pegar só o parâmetro idade

    let mais18 = null

    if(idadePessoa >= 18){
        mais18 = "Maior de idade"
    } else {
        mais18 = "Menor de idade"
    }

    res.send(`Olá, ${nomePessoa}! Tudo bem? \n Você é ${mais18}`)
})


app.get("/notas", (req, res) => {
    console.log(req.query)
    
    const nota1 = parseFloat(req.query.nota1)
    const nota2 = parseFloat(req.query.nota2)
    const nota3 = parseFloat(req.query.nota3)
    const nota4 = parseFloat(req.query.nota4)

    const media = (nota1 + nota2 + nota3 + nota4)/4
    
    if(media >= 7){
        //res.send("Sua média aritmética: " + media + "\n Você está APROVADO") 
        res.send(`Sua média aritmética: ${media} \n Você está APROVADO`) 
    } else {
        //res.send("Sua média aritmética: " + media + "\n Você está REPROVADO")
        res.send(`Sua média aritmética: ${media} \n Você está REPROVADO`) 
    }
})

//Segunda resolução
app.get("/exercicio1", (req, res) => {

})

//Para testar, use o "POST" e monte um body no formato JSON no postman
// Você deve configurar a aplicação para que ela possa entender que está rodando o JSON nela
app.post("/nome", (req, res) => {
    console.log(req.body)
    
    res.send("OK")
})

//TERCEIRA FORMA DE FAZER REQUISIÇÃO
//Fazendo esse exercício usando o método POST
//Lá no postman você cria o body no formato JSON
app.post("/notas", (req, res) => {
    console.log(req.body)
    
    const nota1 = req.body.nota1
    const nota2 = req.body.nota2
    const nota3 = req.body.nota3
    const nota4 = req.body.nota4

    const media = (nota1 + nota2 + nota3 + nota4)/4
    
    const mensagem  = media >= 7 ? "Aprovado" : "Reprovado"
    
    const resposta = {
            media,
            mensagem
        }
    
    res.json(resposta)

})








// Startar a aplicação e pedir para ela ficar escutando na porta 3000
app.listen(3000, () => {        //Assim que acontece algo ele imprime algo - Função de call back, essa função sem nada é chamada também de "anônima"
    console.log("Api iniciando! Rodando em http://localhost:3000")
})
