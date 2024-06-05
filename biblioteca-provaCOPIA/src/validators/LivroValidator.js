const yup = require('yup');

const livroSchema = yup.object().shape({
    titulo: yup.string().required("O título do livro é obrigatório."),
    autor: yup.string().required("O autor do livro é obrigatório."),
    genero: yup.string().required("O gênero do livro é obrigatório."),
    isbn: yup.string().required("O ISBN do livro é obrigatório."),
    numeroPaginas: yup.number().integer().positive().required("O número de páginas do livro é obrigatório.")
});

function validarLivro(req, res, next) {
    livroSchema.validate(req.body)
        .then(() => next())
        .catch(err => res.status(400).json({ message: err.message }));
}

module.exports = {
    validarLivro
};
