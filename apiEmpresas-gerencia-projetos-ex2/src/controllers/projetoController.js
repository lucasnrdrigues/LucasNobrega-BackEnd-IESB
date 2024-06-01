// IMPORTANDO OS CARGOS
const Projeto = require('../models/projeto')

//  BUSCAR TODOS
async function buscarTodos(req, res) {
    res.json(await Projeto.find())
}

// BUSCAR POR ID
async function buscarPorId(req, res) {
    const projeto = await Projeto.findById(req.params.id)
    if (projeto) {
        res.json(projeto)
    } else {
        res.status(404).json({ mensagem: "Projeto não encontrado" })
    }
}

// CRIAR 
async function criar(req, res) {
    const projeto = new Projeto(req.body)
    const projetoCriado = await projeto.save()
    res.status(201).json(projetoCriado)
}

// ATUALIZAR CARGO
async function atualizar(req, res) {
    const projetoAtualizado = await Projeto.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (projetoAtualizado) {
        res.json({
            mensagem: "Projeto atualizado",
            projetoAtualizado
        })
    } else {
        res.status(404).json({ mensagem: "Projeto não encontrado" })
    }
}

// EXCLUIR CARGO
async function excluir(req, res) {
    const projetoExcluido = await Projeto.findByIdAndDelete(req.params.id)
    if (projetoExcluido) {
        res.json(
            {
                mensagem: "Projeto excluido com sucesso!",
                projetoExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Projeto não encontrado!" })
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