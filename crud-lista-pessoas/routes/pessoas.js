const express = require('express')
const router = express.Router()

const listaPessoas = [
    {
        id: 1,
        nome: "João",
        idade: 19,
        email: "Joao@gmail.com"
    },
    {
        id: 2,
        nome: "Pedro",
        idade: 23,
        email: "Pedro@gmail.com"
    },
    {
        id: 3,
        nome: "Lucas",
        idade: 20,
        email: "Lucas@gmail.com"
    }
]

// READ -> Buscar todas as pessoas
router.get('/pessoas', (req, res) => {
    res.json(listaPessoas)
})

// READ -> Busca de produto por id
router.get('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const pessoaEncontrada = listaPessoas.find(pessoaPesquisa => pessoaPesquisa.id == id)
    res.json(pessoaEncontrada)
})

// CREATE -> Adicionar uma pessoa
router.post('/pessoas', (req, res) => {
    const dadosPessoa = req.body

    const novaPessoa = {
        id: listaPessoas.length + 1,
        nome: dadosPessoa.nome,
        idade: dadosPessoa.idade,
        email: dadosPessoa.email
    }

    listaPessoas.push(novaPessoa)

    res.json(
        {
            mensagem: "Pessoa adicionada com sucesso!"
        }
    )
})

// UPDATE -> Atualizar pessoa por id
router.put('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)

    const pessoaAtualizada = {
        id: Number(id),
        nome: novosDados.nome,
        idade: novosDados.idade,
        email: novosDados.email
    }

    listaPessoas[index] = pessoaAtualizada

    res.json({
        mensagem: "Pessoa atualizada com sucesso!"
    })
})

// DELETE -> Deletar produto
router.delete('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    listaPessoas.splice(index, 1)
    res.json({mensagem: "Pessoa excluida com sucesso!"})
})







module.exports = router