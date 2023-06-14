const teste = (req, res) => {
   res.json("backend Respondendo").end();
}

const operacao = (req, res) => {
   const {vali, valii} = req.query
   const {operacao} = req.params
   let resultado = 0

   if(operacao == "somar"){
       resultado = Number(vali) + Number(valii);
   }else if(operacao == "dividir"){
       resultado = Number(vali) / Number(valii);

   }else if(operacao == "multiplicar"){
       resultado = Number(vali) * Number(valii);

   }else if(operacao == "subtrair"){
       resultado = Number(vali) - Number(valii);
   }

   res.json({"resultado" : resultado}).status(200).end()
}

module.exports = {
   teste,
   operacao
}