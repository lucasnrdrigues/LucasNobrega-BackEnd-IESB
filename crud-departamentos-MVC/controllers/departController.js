// IMPORTANDO OS DEPARTAMENTOS
const Depart = require('../models/departamento')

async function criar(req, res) {
    const departamento = new Depart(req.body)
    const departCriado = await departamento.save()
    res.status(201).json(departCriado)
}

//  BUSCAR TODOS
async function buscarTodos(req, res) {
    res.json(Depart.find())
}

// BUSCAR POR ID
async function buscarPorId(req, res) {
    const departamento = await Depart.findById(req.params.id)
    if (departamento) {
        res.json(departamento)
    } else {
        res.status(404).json({ mensagem: "Departamento não encontrado" })
    }
}

// ATUALIZAR DEPARTAMENTO
async function atualizar(req, res) {
    const departAtualizado = await Depart.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (departAtualizado) {
        res.json({
            mensagem: "Departamento atualizado",
            departAtualizado
        })
    } else {
        res.status(404).json({ mensagem: "Departamento não encontrado" })
    }
}

// EXCLUIR DEPARTAMENTO
async function excluir(req, res) {
    const departExcluido = await Depart.findByIdAndDelete(req.params.id)
    if (departExcluido) {
        res.json(
            {
                mensagem: "Departamento excluido com sucesso!",
                departExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Departamento não encontrado!" })
    }
}
//  EXPORTANDO FUNÇÃO "CRIAR"
module.exports = {
    buscarTodos,
    criar,
    buscarPorId,
    excluir,
    atualizar
}