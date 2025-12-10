const db = require("../mysql");

class ClienteDAO{
    constructor(){}
    async buscarTudo(){
        const sql = "SELECT * FROM cliente";
                                                    
        const [resultado] = await db.query(sql);

        return resultado;
    }

    async buscarCodigo(codigoProduto, codigoCliente){
        const sql = "select * from Pedido where codigoProduto = ? and codigoCliente = ?";
    
        const [resultado] = await db.query(sql, [codigoProduto, codigoCliente]);
    
        return resultado;
    }

    async criar(codigoProduto, codigoCliente, status, cep){
        const sql = "insert into Produto(codigoProduto, codigoCliente, status, cep) values(?, ?, ?, ?)";
    
        const [resultado] = await db.query(sql, [codigoProduto, codigoCliente, status, cep]);
    
        return resultado;
    } 

    async update(codigoProduto, codigoCliente, dados) {
        const columns = Object.keys(dados).map(key => `${key} = ?`).join(', ');
        const values = [...Object.values(dados), codigoProduto, codigoCliente];

        const sql = `UPDATE pedido SET ${columns} WHERE codigoProduto = ? AND codigoCliente = ?`;

        const [resultado] = await db.query(sql, values);
        
        return resultado.affectedRows > 0; // linhas afetadas no banco de dados
    }

    async delete(codigoProduto, codigoCliente){
        const sql = "delete from pedido where codigoProduto = ? AND codigoCliente = ?";
    
        const [resultado] = await db.query(sql, [codigoProduto, codigoCliente]);
    
        return resultado.affectedRows > 0;
    }
}




