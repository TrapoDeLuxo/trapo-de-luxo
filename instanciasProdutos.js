
        window.onload = function() {
            const nomeProduto = localStorage.getItem("nomeProdutoOrigem");
            const precoProduto = localStorage.getItem("precoProdutoOrigem");
            const imgProduto = localStorage.getItem("backgroundImageProduto");
            const linkVendedor = localStorage.getItem("linkVendedor");

            document.getElementById("nomeProdutoDestino").textContent = nomeProduto;
            document.getElementById("precoProdutoDestino").textContent = precoProduto;
            document.getElementById("imageDestino").src = imgProduto;

            //const contatarLink = document.querySelector(".contatar a");
            //contatarLink.href = linkVendedor;

        };



//function message() {
//    window.location.href = 'https://w.app/e3xdyg';  
//}

// BOTOES

function catalogoBtn(){
    window.location.href = "catalogo.html"
}


function contatoBtn(){
    window.location.href = "contato.html"
}

function sobreBtn(){
    window.location.href = "sobre.html"
}