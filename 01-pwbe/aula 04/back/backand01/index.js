const express = require("express");

//corpo
const raiz = (req,res)=>{
    res.send("Back End ativo!");
}

const interacao = (req,res)=>{
    let nome = req.query.nome;
    let idade = req.query.idade;
    res.send(`Olá ${nome}, você tem ${idade} anos`);
    
}


//confiuracao http
const app = express();
app.get("/",raiz);
app.get("/interacao",interacao);


//teste no console
app.listen(3000,()=>{
    console.log("Respondendo na porta 3000");
});