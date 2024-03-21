// Importanto módulo do express
const express = require('express')

// Cria uma aplicação express
const app = express()

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
//Para ele conseguir achar você tem que colocar exatamente igual aos parâmetros, ou seja, você tem q enviar "Lucas" e depois alguma idade!
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
// /pessoa?nome=Lucas

//Usando Vários parâmetros usa-se o "&"
// /pessoa?chave=valor&chave=valor -> Você precisa passar isso na URL!
// /pessoa?nome=Lucas&

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
    
    const nota1 = Number(req.query.nota1)
    const nota2 = Number(req.query.nota2)
    const nota3 = Number(req.query.nota3)
    const nota4 = Number(req.query.nota4)

    const media = (nota1 + nota2 + nota3 + nota4)/4
    
    if(media >= 7){
        res.send("Sua média aritmética: " + media + "\n Você está APROVADO")
    } else {
        res.send("Sua média aritmética: " + media + "\n Você está REPROVADO")
    }
    
})



















// Startar a aplicação e pedir para ela ficar escutando na porta 3000
app.listen(3000, () => {        //Assim que acontece algo ele imprime algo - Função de call back, essa função sem nada é chamada também de "anônima"
    console.log("Api iniciando! Rodando em http://localhost:3000")
})
