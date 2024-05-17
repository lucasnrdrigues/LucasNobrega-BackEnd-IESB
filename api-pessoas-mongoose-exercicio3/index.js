// imports
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

// configurações
const PORT = 3000;
const app = express();

// conexão com o banco
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
    .then(() => console.log("Conectado ao banco Mongo!"))
    .catch(err => console.log("Erro ao conectar ao banco Mongo: ", err));

// middlewares
app.use(express.json());

// models
const Pessoa = mongoose.model('Pessoa', { nome: String });

// rotas
app.post('/pessoas', async (req, res) => {
    try {
        const pessoa = new Pessoa(req.body);
        const pessoaCriada = await pessoa.save();
        res.status(201).json(pessoaCriada);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/pessoas', async (req, res) => {
    try {
        const pessoas = await Pessoa.find();
        res.json(pessoas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/pessoas/:id', async (req, res) => {
    try {
        const pessoa = await Pessoa.findById(req.params.id);
        if (!pessoa) {
            return res.status(404).json({ error: "Pessoa não encontrada" });
        }
        res.json(pessoa);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/pessoas/:id', async (req, res) => {
    try {
        const pessoa = await Pessoa.findByIdAndDelete(req.params.id);
        if (!pessoa) {
            return res.status(404).json({ error: "Pessoa não encontrada" });
        }
        res.json({ mensagem: "Pessoa excluída com sucesso!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/pessoas/:id', async (req, res) => {
    try {
        const pessoaAtualizada = await Pessoa.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pessoaAtualizada) {
            return res.status(404).json({ error: "Pessoa não encontrada" });
        }
        res.json(pessoaAtualizada);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// start
app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});
