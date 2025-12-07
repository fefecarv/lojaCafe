export class Pedidos { 

    /**
     * método construtor da classe Pedidos
     * 
     * @param {int} cc codigo cliente
     * @param {int} pc codigo produto
     * @param {Array} s status produto
     * @param {string} c cep
     */
    constructor(cc, pc, s, c) { 
        this.clienteCodigo = cc;
        this.produtoCodigo = pc;    
        this.status = s; 
        this.cep = c;
    }

    getClienteCodigo() {
        return this.clienteCodigo;
    }

    getProdutoCodigo() {
        return this.produtoCodigo;
    }

    getStatus() {
        return this.status;
    }

    getCep() {
        return this.cep;
    }

    setClienteCodigo(cc) {
        this.clienteCodigo = cc;
    }

    setProdutoCodigo(pc) {
        this.produtoCodigo = pc;
    }

    setStatus(s) {
        this.status = s;
    }

     setCep(c) {
        this.cep = c;
    }
}