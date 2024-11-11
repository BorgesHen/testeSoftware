const Banco = require('./Banco');

test('Transferência entre contas deve ajustar os saldos corretamente', () => {
    const banco = new Banco();
    const conta1 = banco.criarConta(300);
    const conta2 = banco.criarConta(100);

    banco.transferir(conta1, conta2, 50);

    expect(conta1.getSaldo()).toBe(250);
    expect(conta2.getSaldo()).toBe(150);
});
