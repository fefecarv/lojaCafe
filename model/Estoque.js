export class Estoque { 

    /**
     * método construtor da classe Estoque
     * 
     * @param {int} qp quantidade do produto (no estoque/'gaveta')
     * @param {int} pc codigo do produto 
     */
    constructor(cc, pc, s, c) { 
        this.qtdProduto = qp;
        this.produtoCodigo = pc;    
    }

    getQtdProduto() {
        return this.qtdProduto;
    }

    getProdutoCodigo() {
        return this.produtoCodigo;
    }

    setQtdProduto(qp) {
        this.qtdProduto = qp;
    }

    setProdutoCodigo(pc) {
        this.produtoCodigo = pc;
    }

}