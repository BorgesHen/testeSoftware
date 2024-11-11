const Conta = require('./Conta');

test('Depósito em uma conta deve aumentar o saldo corretamente', () => {
    const conta = new Conta();
    conta.depositar(100);
    expect(conta.getSaldo()).toBe(100);
});

test('Saque em uma conta deve reduzir o saldo corretamente', () => {
    const conta = new Conta(200);
    conta.sacar(100);
    expect(conta.getSaldo()).toBe(100);
});

test('Saque maior que o saldo deve lançar um erro', () => {
    const conta = new Conta(50);
    expect(() => conta.sacar(100)).toThrow('Saldo insuficiente');
});
