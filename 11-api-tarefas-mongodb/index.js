//imports
const express = require('express')
require('dotenv').config() //importa sem precisar criar uma variável usando o método ".config()", stamos usando o dotenv para usarmos variáveis de ambiente para que não joguemos nossos usuário e senha no gitHub

const mongoose = require('mongoose')

//configurações
const PORT = 3000
const app = express()

// CONEXÃO COM O BANCO DE DADOS
//Pegando as variáveis de ambiente e tornando-as locais
const DB_USER = process.env.DB_USER 
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

/* DE INÍCIO O LINK ERA ASSIM: 
mongodb+srv://lucasnr1912:<password>@meubanco.vrjoqyd.mongodb.net/?retryWrites=true&w=majority&appName=MeuBanco 
*/
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?
retryWrites=true&w=majority&appName=MeuBanco`)
  .then(() => console.log('Conectado ao banco Mongo!')) //função caso dê certo
  .catch(err => console.log('Erro ao conectar ao banco Mongo!', err)) //função caso de errado

//Middlewares
app.use(express.json())

//Modelo da colection no mongoose
const Tarefa = mongoose.model('tarefa', { nome: String}) //cria la no banco de dados a colection

//Rotes

//Criando tarefa
app.post('/tarefas', async (req, res) => { //o "async"essa função vai ser executada de forma assíncrona
    const tarefa = new Tarefa(req.body) //Esse req.body é o objeto que o FrontEnd(Postman) manda: {"nome" : "Lucas"}
    const tarefaCriada = await tarefa.save() //salvando no banco a tarefa
    res.status(201).json(tarefaCriada)
})


// Buscando todas as tarefas
app.get('/tarefas', async (req, res) => {
    const tarefas = await Tarefa.find() //await espera a operação de find ser feita
    res.json(tarefas)
})

//Buscando as tarefas por id
app.get('/tarefas/:id', async (req, res) => {
    const tarefa = await Tarefa.findById(req.params.id)
    res.json(tarefa)
})

//Apagando tarefa
app.delete('/tarefas/:id', async (req, res) => {
    await Tarefa.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Tarefa excluída com sucesso"})
})

//Atualizando tarefa
app.put('/tarefas/:id', async (req, res) => {
    const tarefaAtualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: false}) //esse "new ..." aguarda ele atualizar o objeto no banco para me mandar a resposta
    res.json(tarefaAtualizada)
})

// 
app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})