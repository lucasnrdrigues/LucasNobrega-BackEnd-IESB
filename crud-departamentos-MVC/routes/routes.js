// IMPORTANDO O CONTROLLER "Controlador de Cargo" (INTEREDIÁRIO)
const cargoControlle = require('../controllers/cargoController')
// IMPORTANDO O CONTROLLER "Controlador de Departamento" (INTEREDIÁRIO)
const departControlle = require('../controllers/departController')

// IMPORTANDO VALIDADOR DE CARGO (INTERMEDIÁRIO)
const {validarCargo} = require('../validators/CargoValidator')
const {validarDepart} = require('../validators/DepartValidator')


// ROTAS
// Usando o cargoController com a função criar 
// Usando o cargoController de cada método dos cargos
router.post('/cargos', cargoControlle.buscarTodos)
router.post('/cargos', validarCargo, cargoControlle.criar)
router.get('/cargos/:id', cargoControlle.buscarPorId)
router.put('/cargos/:id', validarCargo, cargoControlle.atualizar)
router.delete('/cargos/:id', cargoControlle.excluir)

// Usando o cargoController de cada método dos departamentos
router.post('/departamentos', departControlle.buscarTodos)
router.post('/departamentos', validarDepart, departControlle.criar)
router.get('/departamentos/:id', departControlle.buscarPorId)
router.put('/departamentos/:id', validarDepart, departControlle.atualizar)
router.delete('/departamentos/:id', departControlle.excluir)

// EXPORTANDO MÓDULO
module.exports=router