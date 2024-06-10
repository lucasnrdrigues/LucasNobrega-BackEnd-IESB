const express = require('express');
const router = express.Router();

// Importar os controllers
const LivroController = require('../controllers/LivroController');
const UsuarioController = require('../controllers/UsuarioController');
const EmprestimoController = require('../controllers/EmprestimoController');
const AutorController = require('../controllers/AutorController');
const EditoraController = require('../controllers/EditoraController');

// Importar os validators
//Não temos uma importação do arquivo usuário validator, pois já estamos pegando 
const { validarUsuario } = require('../validators/AutenticacaoValidator');
const { validarLivro } = require('../validators/LivroValidator');
const { validarEmprestimo } = require('../validators/EmprestimoValidator');
const { validarAutor } = require('../validators/AutorValidator');
const { validarEditora } = require('../validators/EditoraValidator');

// Rotas de livros
router.get('/livros', LivroController.buscarTodosLivros);
router.get('/livros/:id', LivroController.buscarLivroPorId);
router.post('/livros', validarLivro, LivroController.criarLivro);
router.put('/livros/:id', validarLivro, LivroController.atualizarLivro);
router.delete('/livros/:id', LivroController.excluirLivro);

// Rotas de usuários
router.get('/usuarios', UsuarioController.buscarTodosUsuarios);
router.get('/usuarios/:id', UsuarioController.buscarUsuarioPorId);
//Esse validarUsuário vem do arquivo autenticacaovalidator.js mas o criarUsuario vem do UsuarioController.js
router.post('/usuarios', validarUsuario, UsuarioController.criarUsuario);
router.put('/usuarios/:id', validarUsuario, UsuarioController.atualizarUsuario);
router.delete('/usuarios/:id', UsuarioController.excluirUsuario);

// Rotas de empréstimos
router.get('/emprestimos', EmprestimoController.buscarTodosEmprestimos);
router.get('/emprestimos/:id', EmprestimoController.buscarEmprestimoPorId);
router.post('/emprestimos', validarEmprestimo, EmprestimoController.criarEmprestimo);
router.put('/emprestimos/:id', validarEmprestimo, EmprestimoController.atualizarEmprestimo);
router.delete('/emprestimos/:id', EmprestimoController.excluirEmprestimo);

// Rotas de autores
router.get('/autores', AutorController.buscarTodosAutores);
router.get('/autores/:id', AutorController.buscarAutorPorId);
router.post('/autores', validarAutor, AutorController.criarAutor);
router.put('/autores/:id', validarAutor, AutorController.atualizarAutor);
router.delete('/autores/:id', AutorController.excluirAutor);

// Rotas de editoras
router.get('/editoras', EditoraController.buscarTodasEditoras);
router.get('/editoras/:id', EditoraController.buscarEditoraPorId);
router.post('/editoras', validarEditora, EditoraController.criarEditora);
router.put('/editoras/:id', validarEditora, EditoraController.atualizarEditora);
router.delete('/editoras/:id', EditoraController.excluirEditora);

module.exports = router;
