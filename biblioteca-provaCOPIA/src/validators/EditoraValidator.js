const yup = require('yup');

const editoraSchema = yup.object().shape({
    nome: yup.string().required("O nome da editora é obrigatório."),
    endereco: yup.string().required("O endereço da editora é obrigatório."),
    email: yup.string().email("O email da editora é inválido.").required("O email da editora é obrigatório."),
    telefone: yup.string().required("O telefone da editora é obrigatório."),
    site: yup.string().required("O site da editora é obrigatório.")
});

function validarEditora(req, res, next) {
    editoraSchema.validate(req.body)
        .then(() => next())
        .catch(err => res.status(400).json({ message: err.message }));
}

module.exports = {
    validarEditora
};
