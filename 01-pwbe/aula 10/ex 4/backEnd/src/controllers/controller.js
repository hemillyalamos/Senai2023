const teste = (req, res) => {
    res.json("Back Respondendo").end();
}

const nome = (req, res) => {
    const nomes = [
        "Ana Silva",
        "Pedro Santos",
        "Mariana Oliveira",
        "Rafael Costa",
        "Bianca Rodrigues"
    ]
    randomNome = Math.floor(Math.random() * nomes.length);
    res.json({ "nome": nomes[randomNome] }).end();
}

module.exports = {
    teste,
    nome
}