const db = require("../mysql");

class ProdutoDAO{
    constructor(){}
    async buscarTudo(){ // async: espera cada linha rodar e depois roda - assincrono
        const sql = "select * from Produto";
                                                    
        const [resultado] = await db.query(sql);

        return resultado;
    }

    async buscarCodigo(codigo){
        const sql = "select * from Produto where codigo = ?";
    
        const [resultado] = await db.query(sql, [codigo]);
    
        return resultado;
    }

    async criarProduto(nome, preco, fotolink, descricao, categoria){
        const sql = "insert into Produto(nome, preco, fotolink, descricao, categoria) values(?, ?, ?, ?, ?)";
    
        const [resultado] = await db.query(sql, [nome, preco, fotolink, descricao, categoria]);
    
        return resultado;
    } 

    async updateProduto(codigo, dados) {
        const columns = Object.keys(dados).map(key => `${key} = ?`).join(', ');
        const values = [...Object.values(dados), codigo];

        const sql = `UPDATE produtos SET ${columns} WHERE codigo = ?`;

        const [resultado] = await db.query(sql, values);
        
        return resultado.affectedRows > 0; // linhas afetadas no banco de dados
    }

    async deleteProduto(codigo){
        const sql = "delete from Produto where codigo = ?";
    
        const [resultado] = await db.query(sql, [codigo]);
    
        return resultado.affectedRows > 0;
    }
}

/**
 * o async vai criar um algoritmo assincrono, onde cada passo será executado após a finalização do
 * anterior. 
 * exemplo: na busca pelo id de um usuário em um banco populado, normalmente o tempo de resposta do 
 * banco é superior a um segundo e a atribuição do valor à variável é imediato, o que faria com que o 
 * js atribuísse 'undefined' e não o dado do banco de dados.
 */


