const teste = (req, res) => {
    res.json("Back Respondendo").end();
}

const concatenar = (req, res) => {
    const {nome , sobrenome} = req.body;
    let resultado = nome + " " + sobrenome;

    res.json({"nome_completo":resultado}).status(200).end()
}

module.exports = {
    teste,
    concatenar
}