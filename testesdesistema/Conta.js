class Conta {
  constructor(saldoInicial = 0) {
      this.saldo = saldoInicial;
  }

  depositar(valor) {
      if (valor <= 0) throw new Error('Valor de depósito deve ser positivo');
      this.saldo += valor;
  }

  sacar(valor) {
      if (valor <= 0) throw new Error('Valor de saque deve ser positivo');
      if (valor > this.saldo) throw new Error('Saldo insuficiente');
      this.saldo -= valor;
  }

  getSaldo() {
      return this.saldo;
  }
}

module.exports = Conta;
