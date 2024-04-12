const express = require('express')
const router = express.Router()

//Bando de dados local
const listaTarefas = ["descricaoTarefa1", "descricaoTarefa2"]

//READ -> buscando todas as tarefas
router.get('/tarefas', (req, res) => {
    if(listaTarefas == 0){
        res.json('Você não tem nenhuma tarefa.')
    } else {
        res.json(listaTarefas)
    }
})

//READ -> Buscar tarefas por id
router.get('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.json(listaTarefas[id])
})

//CREATE -> Criar uma tarefa
router.post('/tarefas', (req, res) => {
    const tarefa = req.body
    listaTarefas.push(tarefa.descricao) //Usamos esse .descricao porque no corpo da requisição no POSTMAN a gente "cria" a propiedade "descricao"

    //Confirmando
    res.json({mensagem : "Tarefa criada com sucesso !"})
})

//DELETE -> Deletar um contato
router.delete('/tarefas', (req, res) => {
    const id = parseInt(req.query.id)
    listaTarefas.splice(id, 1)

    //Confirmando
    res.json({mensagem : 'Contato excluído com sucesso !'})
})


//UPDATE -> Atualizando uma tarefa
router.put('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const tarefaAtualizada = req.body

    listaTarefas[id] = tarefaAtualizada.descricao  //Usamos esse .descricao porque no corpo da requisição no POSTMAN a gente "cria" a propiedade "descricao"
    res.json({mensagem: 'Tarefa atualizada com sucesso !'})
})

module.exports = router