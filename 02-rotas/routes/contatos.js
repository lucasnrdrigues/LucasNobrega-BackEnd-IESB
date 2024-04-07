const express = require('express')

const router = express.Router()

// banco de dados local
let listaContatos = ["Maria", "João", "Rafael"]

// CRUD
// ROTAS
// READ - BUSCAR A LISTA DE CONTATOS
router.get('/contatos', (req, res) => {
    res.json(listaContatos)
})

// CREATE - CRIAR UM CONTATO
router.post('/contatos', (req, res) => {
    const contato = req.body
    listaContatos.push(contato.nome)
    res.json({ mensagem: "Contato criado com sucesso!"})
})

/*
Lá no postman coloque o contéudo a seguir para fazer o teste
{
    "nome" : "Lucas"
}
*/
 
module.exports = router