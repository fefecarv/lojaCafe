export class Cliente { 

    /**
     * método construtor da classe cliente
     * 
     * @param {string} cpf cpf do cliente 
     * @param {string} n nome cliente
     * @param {string} s senha cliente 
     * @param {string} e email cliente
     * @param {string} end endereço cliente
     * @param {string} cep cep cliente 
     */
    constructor(cpf, n, s, e, end, cep) { 
        this.cpf = cpf;    
        this.nome = n; 
        this.senha = s;
        this.email = e;   
        this.endereco = end; 
        this.cep = cep;
    }

    getCpf() {
        return this.cpf;
    }

    getNome() {
        return this.nome;
    }

    getSenha() {
        return this.senha;
    }

    getEmail() {
        return this.email;
    }

    getEndereco() {
        return this.endereco;
    }

    getCep() {
        return this.cep;
    }

    setCpf(cpf) {
        this.cpf = cpf;
    }

    setNome(n) {
        this.nome = n;
    }

    setSenha(s) {
        this.senha = s;
    }

     setEmail(e) {
        this.email = e;
    }

     setEndereco(end) {
        this.endereco = end;
    }

    setCep(cep){
        this.cep = cep;
    }
}