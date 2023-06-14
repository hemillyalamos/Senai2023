const tcorpo = document.querySelector("#tcorpo");

const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || []


function preencherCard() {
    pedidos.forEach((e, i) => {
        const dataFormatada = `${new Date(e.data).toLocaleString()}`
        e.produtos.forEach((produto, index) => {
            const card = document.createElement("tr");
            const id = document.createElement("td");
            const data = document.createElement("td");
            const nome = document.createElement("td");
            const preco = document.createElement("td");
            const status = document.createElement("td");
            id.innerHTML = produto.id;
            nome.innerHTML = produto.nome;
            data.innerHTML = e.data;
            preco.innerHTML = produto.preco;
            status.innerHTML = "Pedido no forno";
            card.appendChild(id);
            card.appendChild(data);
            card.appendChild(nome);
            card.appendChild(preco);
            card.appendChild(status);
            tcorpo.appendChild(card);
        })

    })
}

function limparDados(){
    let confirma = confirm("Limpar pedidos?")
    if(confirma == true){
        window.localStorage.removeItem("pedidos");
        window.location.reload();
    }
}