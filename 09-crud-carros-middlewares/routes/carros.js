const express = require('express')

const router = express.Router()


let listaCarros = [
    {
        id: 1,
        marca: "Fiat",
        modelo: "Marea BOMBA",
        cor: "Vermelho",
        valor: 30000.00
    },
    {
        id: 2,
        marca: "Honda",
        modelo: "Civic",
        cor: "Preto",
        valor: 120000.00
    }
]


//Existem middlewares "globais", ou seja, do próprio express, esse que vamos criar são nossos próprios
//CRIANDO OS MIDDLEWARES PRÓPRIOS DE VALIDAÇÃO
function validarCarro(req, res, next){
    const id = req.params.id //Pois é um padrão na busca dos carros em algumas requisições lá embaixo
    /*A função find() é chamada nessa coleção. Ela recebe uma função de callback que é executada para cada elemento da coleção. Essa função de callback compara o id do carro com o id que veio na requisição. Quando encontra um carro cujo id corresponde ao id da requisição, a função find() retorna esse carro e o armazena na constante carro. Se nenhum carro for encontrado com o id especificado, carro será undefined.
Em resumo, esse código busca na lista de carros (listaCarros) o carro que tem o mesmo id que foi passado na requisição HTTP e o armazena na variável carro. */
    const carro = listaCarros.find(carro => carro.id == id) 
    const index = listaCarros.findIndex(carro => carro.id == id) 

    //Se o carro existir
    if(carro){
        res.carro = carro //poderia ser "req.carro também, nós precisamos guardar no res ou req"
        res.index = index
        return next()
    }

    //Se o carro não existir
    res.status(404).json({mensagem: "Carro não encontrado!"})
}

//Middleware para validar atributos
function validarAtributos(req, res, next){

    const dados = req.body
    if(!dados.marca || !dados.modelo || !dados.cor || !dados.valor){
        return res.status(400).json({mensagem: "Marca, modelo cor e valor são obrigatórios !"})
    }

    next()
}


// READ -> Buscar todos os carros
router.get('/carros', (req, res) => {
    res.json(listaCarros)
})

// READ -> Busca de carro por id
// A função que valida o carro, não precisamos daquela lógica toda para buscar o carro
router.get('/carros/:id', validarCarro,(req, res) => {
    res.json(res.carro)
})

// CREATE -> Cadastro de carro
router.post('/carros', validarAtributos, (req, res) => {
    const dados = req.body

    const carro = {
        id: Math.round(Math.random() * 1000),
        marca: dados.marca,
        modelo: dados.modelo,
        cor: dados.cor,
        valor: dados.valor
    }

    listaCarros.push(carro)

    res.json({
        mensagem: "Carro cadastrado com sucesso!",
        carro: carro
    })
})


// UPDATE -> Atualização de carro
router.put('/carros/:id', validarCarro, validarAtributos, (req, res) => {

    const dados = req.body

    const carroAtualizado = {
        id: Number(id),
        marca: dados.marca,
        modelo: dados.modelo,
        cor: dados.cor,
        valor: dados.valor
    }

    listaCarros[index] = carroAtualizado

    res.json({
        mensagem: "Carro atualizado com sucesso!",
        carro: carroAtualizado
    })
})


// DELETE -> Excluir um carro
router.delete('/carros/:id', validarCarro, (req, res) => {

    //OBS:Excluímos a lógica de verificar se o carro existe, estamos usando a função "validarCarro"
    listaCarros.splice(index, 1)
    res.json({ mensagem: "Carro excluído com sucesso!" })
})

// READ -> Buscar todos os carros de uma determinada cor
router.get('/carros/cor/:cor', (req, res) => {
    const cor = req.params.cor
    const carros = listaCarros.filter(carro => carro.cor.toLowerCase() == cor.toLowerCase())
    res.json(carros)
})

// READ -> Buscar o valor somado(total) de todos os carros de uma determinada cor
router.get('/carros/cor/:cor/valor', (req, res) => {
    const cor = req.params.cor
    const carros = listaCarros.filter(carro => carro.cor.toLowerCase() == cor.toLowerCase())

    let valorTotal = 0
    carros.forEach(carro => {
        valorTotal = valorTotal + carro.valor
    })

    res.json({
        quantidade: carros.length,
            valor: valorTotal
        })
})


module.exports = router