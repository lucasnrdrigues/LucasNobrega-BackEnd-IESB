const express = require('express')
const router = express.Router()

const CargoControler = require('../controllers/CargoController.js')

//cargo
router.post('/cargos', CargoControler.criar) //nosso controle já está pronto, ent não precisa usar o "(req, res)" aqui







module.exports = router