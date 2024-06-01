// IMPORTANDO BIBLIOTECA YUP
const yup = require('yup')

// CRIANDO UM ESQUEMA DE VALIDAÇÃO
// DENTRO DE SHAPE, FICA O CORPO/ESTRUTURA DO OBJETO
// VERIRIFICANDO SE O OBJETO TEM NOME, DESCRICAO E SALARIO
const schema = yup.object().shape({
    nome: yup
    .string("Campo nome precisa ser uma String")
    .required("Campo nome é obrigatório"),

    descricao: yup
    .string("Campo descricao precisa ser um texto"),

    salario: yup
    .number("Campo salario precisa ser numérico")
    .min(1412, "Campo salário precisa ser maior que o salário mínimo")
    .required()
})

function validarCargo(req, res, next) {
    schema
    .validate(req.body, { abortEarly: false })
    .then(() => next())
    .catch(err => res.status(400).json({mensagem: "Erro na validação dos campos", erro: err.errors}
    ))
}

module.exports = {
    validarCargo
}