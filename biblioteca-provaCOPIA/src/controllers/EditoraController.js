const Editora = require('../models/Editora');
const { atualizar } = require('./AutorController');

// Controlador para lidar com as operações relacionadas às editoras
// Função para criar uma nova editora
async function criarEditora(req, res) {
    try {
        const editora = new Editora(req.body);
        await editora.save();
        res.status(201).json(editora);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Função para obter todas as editoras
async function buscarTodasEditoras(req, res) {
    try {
        const editoras = await Editora.find();
        res.status(200).json(editoras);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Função para obter uma editora por Id
async function buscarEditoraPorId(req, res) {
    try {
        const editora = await Editora.findById(req.params.id);
        if (!editora) {
            return res.status(404).json({ message: 'Editora não encontrada' });
        }
        res.status(200).json(editora);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Função para atualizar uma editora existente
async function atualizarEditora(req, res) {
    try {
        const editora = await Editora.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!editora) {
            return res.status(404).json({ message: 'Editora não encontrada' });
        }
        res.status(200).json(editora);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Função para excluir uma editora
async function excluirEditora(req, res) {
    try {
        const editora = await Editora.findByIdAndDelete(req.params.id);
        if (!editora) {
            return res.status(404).json({ message: 'Editora não encontrada' });
        }
        res.status(200).json({ message: 'Editora excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    criarEditora,
    buscarTodasEditoras,
    buscarEditoraPorId,
    atualizarEditora,
    excluirEditora
};
