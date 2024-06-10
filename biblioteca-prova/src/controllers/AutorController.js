const Autor = require('../models/Autor');

// Controlador para lidar com as operações relacionadas aos autores

// Função para criar um novo autor
async function criarAutor(req, res) {
    try {
        const autor = new Autor(req.body);
        await autor.save();
        res.status(201).json(autor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Função para obter todos os autores
async function buscarTodosAutores(req, res) {
    try {
        const autores = await Autor.find();
        res.status(200).json(autores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Função para obter um autor por ID
async function buscarAutorPorId(req, res) {
    try {
        const autor = await Autor.findById(req.params.id);
        if (!autor) {
            return res.status(404).json({ message: 'Autor não encontrado' });
        }
        res.status(200).json(autor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Função para atualizar um autor existente
async function atualizarAutor(req, res) {
    try {
        const autor = await Autor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!autor) {
            return res.status(404).json({ message: 'Autor não encontrado' });
        }
        res.status(200).json(autor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Função para excluir um autor
async function excluirAutor(req, res) {
    try {
        const autor = await Autor.findByIdAndDelete(req.params.id);
        if (!autor) {
            return res.status(404).json({ message: 'Autor não encontrado' });
        }
        res.status(200).json({ message: 'Autor excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    criarAutor,
    buscarTodosAutores,
    buscarAutorPorId,
    atualizarAutor,
    excluirAutor
};
