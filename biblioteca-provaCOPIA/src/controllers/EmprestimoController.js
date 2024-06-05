
// Importe o modelo de Empréstimo
const Emprestimo = require('../models/Emprestimo');

// Função para buscar todos os empréstimos
async function buscarTodosEmprestimos(req, res) {
    try {
        const emprestimos = await Emprestimo.find();
        res.status(200).json(emprestimos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Função para buscar um empréstimo pelo ID
async function buscarEmprestimoPorId(req, res) {
    try {
        const emprestimo = await Emprestimo.findById(req.params.id);
        if (!emprestimo) {
            return res.status(404).json({ message: 'Empréstimo não encontrado' });
        }
        res.status(200).json(emprestimo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Função para criar um novo empréstimo
async function criarEmprestimo(req, res) {
    try {
        const novoEmprestimo = new Emprestimo(req.body);
        await novoEmprestimo.save();
        res.status(201).json(novoEmprestimo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Função para atualizar um empréstimo
async function atualizarEmprestimo(req, res) {
    try {
        const emprestimo = await Emprestimo.findById(req.params.id);
        if (!emprestimo) {
            return res.status(404).json({ message: 'Empréstimo não encontrado' });
        }
        Object.assign(emprestimo, req.body);
        await emprestimo.save();
        res.status(200).json(emprestimo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Função para excluir um empréstimo
async function excluirEmprestimo(req, res) {
    try {
        const emprestimo = await Emprestimo.findById(req.params.id);
        if (!emprestimo) {
            return res.status(404).json({ message: 'Empréstimo não encontrado' });
        }
        await emprestimo.remove();
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Exporte as funções do controller
module.exports = {
    buscarTodosEmprestimos,
    buscarEmprestimoPorId,
    criarEmprestimo,
    atualizarEmprestimo,
    excluirEmprestimo
};
 