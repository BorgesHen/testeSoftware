const puppeteer = require('puppeteer');

test('Simulação de uso do sistema - criar conta, depositar, e sacar', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('file://{CAMINHO_ABSOLUTO_DO_ARQUIVO}/index.html');

    await page.click('#criar-conta');
    let saldoText = await page.$eval('#saldo', el => el.innerText);
    expect(saldoText).toBe('Saldo: R$ 0');

    await page.click('#depositar');
    saldoText = await page.$eval('#saldo', el => el.innerText);
    expect(saldoText).toBe('Saldo: R$ 100');

    await page.click('#sacar');
    saldoText = await page.$eval('#saldo', el => el.innerText);
    expect(saldoText).toBe('Saldo: R$ 50');

    await browser.close();
});
