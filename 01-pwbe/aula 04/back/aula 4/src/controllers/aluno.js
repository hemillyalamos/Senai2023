const criar = (require, response) => {
    response.send("criar").status(200).end();
}
const listar = (require, response) => {
    response.send("Listar").status(200).end();
}
const atualizar = (require, response) => {
    response.send("Atualizar").status(200).end();
}
const apagar = (require, response) => {
    request.send("apagar").status(200).end();
}

module.exports ={
    criar,
    listar,
    atualizar,
    apagar,
}