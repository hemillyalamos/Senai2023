const teste = (req, res) => {
    res.json("Back Respondendo").end();
}

const random = (req, res) => {
    const {limit} = req.query
    randomNumber = Math.floor(Math.random() * limit);
    res.json({ "number": randomNumber });
}
module.exports = {
    teste,
    random
}