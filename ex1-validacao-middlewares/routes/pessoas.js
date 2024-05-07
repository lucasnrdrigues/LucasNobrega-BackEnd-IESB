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


// intermediarios - middlewares para validação das pessoas
function validarPessoa(req, res, next) {
    const id = req.params.id
    const pessoa = listaPessoas.find(pessoaPesquisa => pessoaPesquisa.id == id)
    const index = listaPessoas.findIndex(pessoaPesquisa => pessoaPesquisa.id == id)
    if (pessoa) {
        res.pessoa = pessoa
        res.index = index
        return next()
    }
    return res.status(404).json({ mensagem: "pessoa não encontrada!" })
    
}

//Middlewares para validar os atributos
function validarAtributos(req, res, next) {
    const dadosPessoa = req.body

    if (!dadosPessoa.nome || !dadosPessoa.idade || !dadosPessoa.email || !dadosPessoa.telefone) {
        return res.status(404).json({ mensagem: "Todos os campos são obrigatórios!" })
    }
    return next()
}



// READ -> Buscar todos as pessoas
router.get('/pessoas', (req, res) => {
    res.json(listaPessoas)
})

// READ -> Busca de pessoas por id
router.get('/pessoas/:id', validarPessoa, (req, res) => {
    res.json(res.pessoa)
})

// CREATE -> Criar uma nova pessoa
router.post('/pessoas', validarAtributos, (req, res) => {

    const dadosPessoa = req.body

    const novaPessoa = {
        id: listaPessoas.length + 1,
        nome: dadosPessoa.nome,
        idade: dadosPessoa.idade,
        email: dadosPessoa.email,
        telefone: dadosPessoa.telefone
    }

    listaPessoas.push(novaPessoa)

    res.status(200).json(
        {
            mensagem: "Pessoa adicionada com sucesso!",
            novaPessoa
        }
    )
})

// UPDATE -> Atualizar uma pessoa
router.put('/pessoas/:id', validarPessoa, validarAtributos, (req, res) => {

    const novosDados = req.body

    const pessoaAtualizada = {
        id: res.pessoa.id,
        nome: novosDados.nome,
        idade: novosDados.idade,
        email: novosDados.email,
        telefone: novosDados.telefone
    }

    listaPessoas[res.index] = pessoaAtualizada

    res.json({
        mensagem: "Pessoa atualizada com sucesso!",
        pessoaAtualizada
    })
})

// DELETE -> Deletar uma pessoa
router.delete('/pessoas/:id', validarPessoa,(req, res) => {
    listaPessoas.splice(res.index, 1)
    res.json({ mensagem: "pessoa excluida com sucesso!" })
})







module.exports = router
