// IMPORTANDO OS CARGOS
const Tarefa = require('../models/tarefas')

//  BUSCAR TODOS
async function buscarTodos(req, res) {
    res.json(await Tarefa.find().populate(['funcionario', 'projeto']))
}

// BUSCAR POR ID
async function buscarPorId(req, res) {
    const tarefa = await Tarefa.findById(req.params.id).populate(['funcionario', 'projeto'])
    if (tarefa) {
        res.json(tarefa)
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrada" })
    }
}

// CRIAR 
async function criar(req, res) {
    const tarefa = new Tarefa(req.body)
    const tarefaCriada = await tarefa.save()
    res.status(201).json(tarefaCriada)
}

// ATUALIZAR CARGO
async function atualizar(req, res) {
    const tarefaAtualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (tarefaAtualizada) {
        res.json({
            mensagem: "Tarefa atualizada",
            tarefaAtualizada
        })
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrada" })
    }
}

// EXCLUIR CARGO
async function excluir(req, res) {
    const tarefaExcluida = await Tarefa.findByIdAndDelete(req.params.id)
    if (tarefaExcluida) {
        res.json(
            {
                mensagem: "Tarefa excluido com sucesso!",
                tarefaExcluida
            }
        )
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrada!" })
    }
}

//  EXPORTANDO FUNÇÃO "CRIAR"
module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    atualizar,
    excluir
}