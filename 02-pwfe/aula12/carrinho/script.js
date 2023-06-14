const tcorpo = document.querySelector("#tcorpo");

const produtos = JSON.parse(window.localStorage.getItem("produtos")) || []

function preencherTabela() {
    produtos.forEach((e, i) => {
        const linha = document.createElement("tr");
        const id = document.createElement("td");
        const nome = document.createElement("td");
        const preco = document.createElement("td")
        const excluir = document.createElement("td");
        const enviarDados = document.createElement("td");
        const totalElement = document.getElementById("total");
        id.innerHTML = e.id;
        nome.innerHTML = e.nome;
        preco.innerHTML = e.preco
        excluir.innerHTML = `<button onclick="excluirItem('${i}')">remover items</button>`;
     
        enviarDados.innerHTML = `<button onclick="enviarDados('${i}')">Realizar compra</button>`;
        //    totalElement.innerHTML = "Total: R$ " + calcularTotal();
        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(preco);
        linha.appendChild(enviarDados);
        tcorpo.appendChild(linha)
    })
}
function limparDados(){
    window.localStorage.removeItem("produtos");
    window.location.reload();
}
function excluirItem(i){
     produtos.splice(i, 1)
     window.localStorage.setItem('produtos',JSON.stringify(produtos));
     window.location.reload();
}
function enviarDados(i){
    let confirma = confirm("Realizar compra???")
    if (confirma == true){
        const pedido = {
            data: new Date().toLocaleDateString(),
            produtos: produtos
        }
        pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || []
        pedidos.push(pedido)
        window.localStorage.setItem("pedidos",JSON.stringify(pedidos))
        window.localStorage.setItem("produtos", JSON.stringify(produtos));
        window.location.reload()
    }
}
// function calcularTotal(){
//     let total = 0;

//     produtos.forEach((produto) => {
//         const preco = parseFloat(produto.preco);
//         total += preco;
//     });

//     return total.toFixed(2);
// }
// const totalElement = document.getElementById("total");
// totalElement.textContent = "Total: R$ " + calcularTotal();