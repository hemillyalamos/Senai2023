const express = require('express');

const app = express();

app.use(express.json())

app.get("/", (request, response)=>{
    let i = 2;
    if(i === 0){

        response.status(200).send("funcionando").end();

    }else{
        response.status(404).end();
    }
})

app.get("/listar", (request, response)=>{
    // let nome = request.query.nome;
    // let matricula = request.query.matricula;

    let {nome, matricula} = request.query;

    console.log(nome, matricula);

    response.status(200).send("LISTANDO").end();
});

app.get("/info/:marca/:modelo", (request, response)=>{
    let {marca, modelo } = request.params;

    console.log(marca, modelo);

    response.status(200).end();
})

app.post("/criar", (request, response)=>{
    let {id, nome, matricula} = request.body;

    console.log(id, nome, matricula);

    response.status(200).end();
});

app.listen(3000, ()=> {
    console.log('rodando na 3000');
});