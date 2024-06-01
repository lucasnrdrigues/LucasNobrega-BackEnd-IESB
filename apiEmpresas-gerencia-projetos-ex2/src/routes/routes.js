// IMPORTS
const express = require('express')

// CRIANDO ROTEADOR
const router = express.Router()

// IMPORTANDO O CONTROLLER "Controlador de Cargo" (INTEREDIÁRIO)
const cargoControlle = require('../controllers/cargoController')
// IMPORTANDO O CONTROLLER "Controlador de Departamento" (INTEREDIÁRIO)
const departControlle = require('../controllers/departController')
// IMPORTANDO O CONTROLLER "Controlador de Funcionarios" (INTEREDIÁRIO)
const funcionarioControlle = require('../controllers/funcionarioController')
// IMPORTANDO O CONTROLLER "Controlador de Projetos" (INTEREDIÁRIO)
const projetoControlle = require('../controllers/projetoController')
// IMPORTANDO O CONTROLLER "Controlador de Tarefas" (INTEREDIÁRIO)
const tarefaControlle = require('../controllers/tarefaController')


// IMPORTANDO VALIDADORES (INTERMEDIÁRIO)
const { validarCargo } = require('../validators/CargoValidator')
const { validarDepart } = require('../validators/DepartValidator')
const { validarId } = require('../validators/idValidator')
const { validarFuncionario } = require('../validators/funcionarioValidator')
const { validarProjeto } = require('../validators/projetoValidator')
const {validarTarefa} = require('../validators/tarefaValidator')


// ROTAS
// Usando o cargoController de cada método dos cargos
router.get('/cargos', cargoControlle.buscarTodos)
router.post('/cargos', validarCargo, cargoControlle.criar)
router.get('/cargos/:id', validarId, cargoControlle.buscarPorId)
router.put('/cargos/:id', validarId, validarCargo, cargoControlle.atualizar)
router.delete('/cargos/:id', validarId, cargoControlle.excluir)

// Usando o cargoController de cada método dos departamentos
router.get('/departamentos', departControlle.buscarTodos)
router.post('/departamentos', validarDepart, departControlle.criar)
router.get('/departamentos/:id', validarId, departControlle.buscarPorId)
router.put('/departamentos/:id', validarId, validarDepart, departControlle.atualizar)
router.delete('/departamentos/:id', validarId, departControlle.excluir)

// Usando o cargoController de cada método dos funcionarios
router.get('/funcionarios', funcionarioControlle.buscarTodos)
router.post('/funcionarios', validarFuncionario, funcionarioControlle.criar)
router.get('/funcionarios/:id', validarId, funcionarioControlle.buscarPorId)
router.put('/funcionarios/:id', validarId, validarDepart, funcionarioControlle.atualizar)
router.delete('/funcionarios/:id', validarId, funcionarioControlle.excluir)

// Usando o cargoController de cada método dos projetos
router.get('/projetos', projetoControlle.buscarTodos)
router.post('/projetos', validarProjeto, projetoControlle.criar)
router.get('/projetos/:id', validarId, projetoControlle.buscarPorId)
router.put('/projetos/:id', validarId, validarProjeto, projetoControlle.atualizar)
router.delete('/projetos/:id', validarId, projetoControlle.excluir)

// Usando o cargoController de cada método dos tarefas
router.get('/tarefas', tarefaControlle.buscarTodos)
router.post('/tarefas', validarTarefa, tarefaControlle.criar)
router.get('/tarefas/:id', validarId, tarefaControlle.buscarPorId)
router.put('/tarefas/:id', validarId, validarTarefa, tarefaControlle.atualizar)
router.delete('/tarefas/:id', validarId, tarefaControlle.excluir)


// EXPORTANDO MÓDULO
module.exports = router