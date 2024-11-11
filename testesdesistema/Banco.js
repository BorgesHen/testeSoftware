const Conta = require('./Conta');

class Banco {
    constructor() {
        this.contas = [];
    }

    criarConta(saldoInicial = 0) {
        const novaConta = new Conta(saldoInicial);
        this.contas.push(novaConta);
        return novaConta;
    }

    transferir(origem, destino, valor) {
        origem.sacar(valor);
        destino.depositar(valor);
    }
}

module.exports = Banco;
