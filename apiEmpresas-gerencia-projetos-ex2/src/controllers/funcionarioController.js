// IMPORTANDO OS CARGOS
const Funcionario = require('../models/funcionario')

//  BUSCAR TODOS
async function buscarTodos(req, res) {
    res.json(await Funcionario.find().populate(['cargo', 'departamento']))
}

// BUSCAR POR ID
async function buscarPorId(req, res) {
    const funcionario = await Funcionario.findById(req.params.id).populate(['cargo', 'departamento'])
    if (funcionario) {
        res.json(funcionario)
    } else {
        res.status(404).json({ mensagem: "Funcionário não encontrado" })
    }
}

// CRIAR 
async function criar(req, res) {
    const funcionario = new Funcionario(req.body)
    const funcionarioCriado = await funcionario.save()
    res.status(201).json(funcionarioCriado)
}

// ATUALIZAR CARGO
async function atualizar(req, res) {
    const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (funcionarioAtualizado) {
        res.json({
            mensagem: "Funcionário atualizado",
            funcionarioAtualizado
        })
    } else {
        res.status(404).json({ mensagem: "Funcionário não encontrado" })
    }
}

// EXCLUIR CARGO
async function excluir(req, res) {
    const funcionarioExcluido = await Funcionario.findByIdAndDelete(req.params.id)
    if (funcionarioExcluido) {
        res.json(
            {
                mensagem: "Funcionário excluido com sucesso!",
                funcionarioExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Funcionário não encontrado!" })
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