const express = require('express')
const router = express.Router()

const listaPessoas = [
    {
        id: 1,
        nome: "João",
        idade: 20,
        email: "Joao@gmail.com",
        telefone: "61000000000"
    },
    {
        id: 2,
        nome: "Pedro",
        idade: 23,
        email: "Pedro@gmail.com",
        telefone: "61000000000"
    },
    {
        id: 3,
        nome: "Lucas",
        idade: 20,
        email: "Lucas@gmail.com",
        telefone: "61000000000"
    }
]

// READ -> Buscar todos as pessoas
router.get('/pessoas', (req, res) => {
    res.json(listaPessoas)
})

// READ -> Busca de pessoas por id
router.get('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const pessoaEncontrada = listaPessoas.find(pessoaPesquisa => pessoaPesquisa.id == id)
    if (pessoaEncontrada) {
        return res.json(pessoaEncontrada)
    }
    return res.status(404).json({ mensagem: "pessoa não encontrada!" })
})

// CREATE -> Criar uma nova pessoa
router.post('/pessoas', (req, res) => {
    const dadosPessoa = req.body

    if (!dadosPessoa.nome || !dadosPessoa.idade) {
        return res.status(400).json({ mensagem: "nome e idade são obrigatórios!" })
    }

    const novaPessoa = {
        id: listaPessoas.length + 1,
        nome: dadosPessoa.nome,
        idade: dadosPessoa.idade,
        email: dadosPessoa.email,
        telefone: dadosPessoa.telefone
    }

    listaPessoas.push(novaPessoa)

    res.status(201).json(
        {
            mensagem: "Pessoa adicionada com sucesso!",
            novaPessoa
        }
    )
})

// UPDATE -> Atualizar uma pessoa
router.put('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    if (!novosDados.nome || !novosDados.idade) {
        return res.status(400).json({ mensagem: "nome e idade são obrigatórios!" })
    }

    const index = listaPessoas.findIndex(pessoaPesquisa => pessoaPesquisa.id == id)

    if (index == -1) {
        return res.status(404).json({ mensagem: "Pessoa não encontrada!" })
    }

    const pessoaAtualizada = {
        id: Number(id),
        nome: novosDados.nome,
        idade: novosDados.idade,
        email: novosDados.email,
        telefone: novosDados.telefone
    }

    listaPessoas[index] = pessoaAtualizada

    res.json({
        mensagem: "Pessoa atualizada com sucesso!",
        pessoaAtualizada
    })
})

// DELETE -> Deletar uma pessoa
router.delete('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoaPesquisa => pessoaPesquisa.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "pessoa não encontrada!" })
    }
    listaPessoas.splice(index, 1)
    res.json({ mensagem: "pessoa excluida com sucesso!" })
})







module.exports = router
