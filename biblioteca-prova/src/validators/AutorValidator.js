const yup = require('yup');

const autorSchema = yup.object().shape({
    nome: yup.string().required("O nome do autor é obrigatório."),
    cpf: yup.string().required("O cpf do autor é obrigatório."),
    biografia: yup.string().required("A biografia do autor é obrigatória."),
    generosLiterarios: yup.array().of(yup.string()).required("Os gêneros literários do autor são obrigatórios.")
});

function validarAutor(req, res, next) {
    autorSchema.validate(req.body)
        .then(() => next())
        .catch(err => res.status(400).json({ message: err.message }));
}

module.exports = {
    validarAutor
};
