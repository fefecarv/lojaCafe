const db = require("../mysql");

class EstoqueDAO{
    constructor(){}
    async buscarTudo(){
        const sql = "SELECT * FROM estoque";
                                                    
        const [resultado] = await db.query(sql);

        return resultado;
    }

    async buscarCodigo(codigo){
        const sql = "SELECT * FROM estoque WHERE codigo = ?";
    
        const [resultado] = await db.query(sql, [codigo]);
    
        return resultado;
    }

    async criar(codigo, qtdProduto, codigoProduto){
        const sql = "INSERT INTO estoque(codigo, qtdProduto, codigoProduto) values(?, ?, ?)";
    
        const [resultado] = await db.query(sql, [codigo, qtdProduto, codigoProduto]);
    
        return resultado;
    } 

    async update(codigo, dados) {
        const columns = Object.keys(dados).map(key => `${key} = ?`).join(', ');
        const values = [...Object.values(dados), codigo];

        const sql = `UPDATE estoque SET ${columns} WHERE codigo = ?`;

        const [resultado] = await db.query(sql, values);
        
        return resultado.affectedRows > 0; 
    }

    async delete(codigo){
        const sql = "DELETE FROM estoque WHERE codigo = ?";
    
        const [resultado] = await db.query(sql, [codigo]);
    
        return resultado.affectedRows > 0;
    }
}

