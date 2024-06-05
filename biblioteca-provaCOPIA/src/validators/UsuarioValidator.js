const yup = require('yup');

const usuarioSchema = yup.object().shape({
    nome: yup.string().required("O nome do usuário é obrigatório."),
    email: yup.string().email("O email do usuário é inválido.").required("O email do usuário é obrigatório."),
    telefone: yup.string().required("O telefone do usuário é obrigatório."),
    endereco: yup.object().shape({
        rua: yup.string().required("A rua do endereço é obrigatória."),
        cidade: yup.string().required("A cidade do endereço é obrigatória."),
        estado: yup.string().required("O estado do endereço é obrigatório."),
        cep: yup.string().required("O CEP do endereço é obrigatório.")
    }),
    dataCadastro: yup.date().default(() => new Date())
});

function validarUsuario(req, res, next) {
    usuarioSchema.validate(req.body)
        .then(() => next())
        .catch(err => res.status(400).json({ message: err.message }));
}

module.exports = {
    validarUsuario
};
