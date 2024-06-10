// Importe o modelo do Livro
const Livro = require('../models/Livro');

// Função para buscar todos os livros
async function buscarTodosLivros(req, res) {
    try {
        const livros = await Livro.find();
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Função para buscar um livro pelo ID
async function buscarLivroPorId(req, res) {
    try {
        const livro = await Livro.findById(req.params.id);
        if (livro) {
            res.status(200).json(livro);
        } else {
            res.status(404).json({ message: "Livro não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Função para criar um novo livro
async function criarLivro(req, res) {
    const livro = new Livro(req.body);
    try {
        const novoLivro = await livro.save();
        res.status(201).json(novoLivro);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Função para atualizar um livro
async function atualizarLivro(req, res) {
    try {
        const livro = await Livro.findById(req.params.id);
        if (livro) {
            livro.set(req.body);
            const livroAtualizado = await livro.save();
            res.status(200).json(livroAtualizado);
        } else {
            res.status(404).json({ message: "Livro não encontrado" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Função para excluir um livro
async function excluirLivro(req, res) {
    try {
        const livro = await Livro.findByIdAndDelete(req.params.id);
        if (!livro) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }
        res.status(200).json({ message: 'livro excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



// Exporte as funções do controller
module.exports = {
    buscarTodosLivros,
    buscarLivroPorId,
    criarLivro,
    atualizarLivro,
    excluirLivro
};
