const ProdutoDAO = require("../database/DAO/ProdutoDAO");

(async ()=>{
    let produto = new ProdutoDAO();

    let resultado = await produto.buscarTudo();

    console.log("resultado: ", resultado);
})