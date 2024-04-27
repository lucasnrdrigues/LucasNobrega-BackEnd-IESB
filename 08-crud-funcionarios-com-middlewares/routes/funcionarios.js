const express = require('express')
const router = express.Router()

//Colocando dois funcionários para testar
const listaFuncionarios = [
    {
        id: 1,
        nome: "João",
        email: "Joao@gmail.com",
        telefone: "61000000000",
        cargo: "Tecnico",
        salario: 1000
    },
    {
        id: 2,
        nome: "Lucas",
        email: "Lucas@gmail.com",
        telefone: "61000000000",
        cargo: "Tecnico",
        salario: 1000
    }
]

// READ -> Buscar todos os funcionarios
router.get('/funcionarios', (req, res) => {
    res.json(listaFuncionarios)
})

// READ -> Buscar funcionarios por id
router.get('/funcionarios/:id', (req, res) => {
    const id = req.params.id
    const funcionarioEncontrado = listaFuncionarios.find(funcionarioPesquisa => funcionarioPesquisa.id == id)
    if (funcionarioEncontrado) {
        return res.json(funcionarioEncontrado)
    }
    return res.status(404).json({ mensagem: "NOT_FOUND - Funcionário não encontrado!" })
})

// CREATE -> Criar um novo funcionário
router.post('/funcionarios', (req, res) => {
    const dadosFuncionario = req.body

    if (!dadosFuncionario.nome || !dadosFuncionario.email || !dadosFuncionario.telefone || !dadosFuncionario.cargo || !dadosFuncionario.salario) {
        return res.status(400).json({ mensagem: "BAD_REQUEST - todos os campos são obrigatórios!" })
    }

    const novoFuncionario = {
        id: listaFuncionarios.length + 1,
        nome: dadosFuncionario.nome,
        email: dadosFuncionario.email,
        telefone: dadosFuncionario.telefone,
        cargo: dadosFuncionario.cargo,
        salario: dadosFuncionario.salario
    }

    listaFuncionarios.push(novoFuncionario)

    res.status(201).json(
        {
            mensagem: "Funcionário adicionado com sucesso!",
            novoFuncionario
        }
    )
})

// UPDATE -> Atualizar um funcionário
router.put('/funcionarios/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    if (!novosDados.nome || !novosDados.email || !novosDados.telefone || !novosDados.cargo || !novosDados.salario) {
        return res.status(400).json({ mensagem: "BAD_REQUEST - todos os campos são obrigatórios!" })
    }

    const index = listaFuncionarios.findIndex(funcionarioPesquisa => funcionarioPesquisa.id == id)

    if (index == -1) {
        return res.status(404).json({ mensagem: "NOT_FOUND - funcionário não encontrado!" })
    }

    const funcionarioAtualizado = {
        id: Number(id),
        nome: novosDados.nome,
        email: novosDados.email,
        telefone: novosDados.telefone,
        cargo: novosDados.cargo,
        salario: novosDados.salario
    }

    listaFuncionarios[index] = funcionarioAtualizado

    res.json({
        mensagem: "Funcionário atualizado com sucesso!",
        funcionarioAtualizado
    })
})

// DELETE -> Deletar um funcionário
router.delete('/funcionarios/:id', (req, res) => {
    const id = req.params.id
    const index = listaFuncionarios.findIndex(funcionarioPesquisa => funcionarioPesquisa.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "NOT_FOUND - funcionário não encontrado!" })
    }
    listaFuncionarios.splice(index, 1)
    res.json({ mensagem: "funcionário excluido com sucesso!" })
})

// READ -> Buscar todos os funcionários de um mesmo cargo
router.get('/funcionarios/cargo/:cargo', (req, res) => {
    const cargo = req.params.cargo;
    const funcionariosDoCargo = listaFuncionarios.filter(funcionario => funcionario.cargo.toLowerCase() === cargo.toLowerCase());

    if (funcionariosDoCargo.length > 0) {
        res.json(funcionariosDoCargo);
    } else {
        res.status(404).json({ message: `BAD_REQUEST - Nenhum funcionário encontrado com o cargo "${cargo}"` });
    }
});

// Calculando a média salarial de todos os funcionários
router.get('/funcionarios/salarios/media', (req, res) => {

    const totalSalarios = listaFuncionarios.reduce((total, funcionario) => total + funcionario.salario, 0);
    const mediaSalarial = (totalSalarios / listaFuncionarios.length).toFixed(2);

    res.json({ mediaSalarial });
});





module.exports = router
