const yup = require('yup');

const emprestimoSchema = yup.object().shape({
    livro: yup.string().required("O livro emprestado é obrigatório."),
    usuario: yup.string().required("O usuário que pegou o livro emprestado é obrigatório."),
    dataEmprestimo: yup.date().required("A data de empréstimo é obrigatória."),
    dataDevolucao: yup.date().required("A data de devolução é obrigatória."),
    status: yup.string().required("O status do empréstimo é obrigatório.")
});

function validarEmprestimo(req, res, next) {
    emprestimoSchema.validate(req.body)
        .then(() => next())
        .catch(err => res.status(400).json({ message: err.message }));
}

module.exports = {
    validarEmprestimo
};
