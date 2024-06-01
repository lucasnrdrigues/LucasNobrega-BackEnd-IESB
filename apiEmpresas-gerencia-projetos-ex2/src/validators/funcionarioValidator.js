// IMPORTANDO BIBLIOTECA YUP
const yup = require('yup')

// CRIANDO UM ESQUEMA DE VALIDAÇÃO
// DENTRO DE SHAPE, FICA O CORPO/ESTRUTURA DO OBJETO
// VERIRIFICANDO SE O DEPARTAMENTO TEM NOME E DESCRIÇÃO
const schema = yup.object().shape({
    nome: yup
        .string("Campo precisa ser uma String")
        .required("Campo obrigatório"),

    cpf: yup
        .string("Campo precisa ser uma String")
        .required("Campo obrigatório"),

    email: yup
        .string("Campo precisa ser uma String")
        .email("Email inválido")
        .required("Campo obrigatório"),

    telefone: yup
        .string("Campo precisa ser uma String")
        .required("Campo obrigatório"),

    dataContratacao: yup
        .date("Data inválida")
        .required("Campo obrigatório"),

    dataNascimento: yup
        .date("Data inválida")
        .required("Campo obrigatório"),

    genero: yup.
        string("Campo precisa ser uma String")
        .required("Campo obrigatório"),

    cargo: yup.
        string("Campo precisa ser uma String"),

    departamento: yup.
        string("Campo precisa ser uma String")
})

function validarFuncionario(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const erros = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })
            res.status(400).json({
                mensagem: "Falha na valdiação dos campos",
                erros
            })
        })
}

module.exports = {
    validarFuncionario
}