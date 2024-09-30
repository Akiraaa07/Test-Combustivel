const calcularCombustivel = require("./combustivel");

test('Deve calcular corretamente o combustível para gasolina', () => {
    const resultado = calcularCombustivel(10000, 'gasolina');
    expect(resultado).toBe('Você precisará de aproximadamente 1 litros de gasolina.');
});

test('Deve calcular corretamente o combustível para etanol', () => {
    const resultado = calcularCombustivel(7000, 'etanol');
    expect(resultado).toBe('Você precisará de aproximadamente 1 litros de etanol.');
});

test('Deve retornar erro para distância inválida', () => {
    const resultado = calcularCombustivel(-500, 'gasolina');
    expect(resultado).toBe('Erro, a distância deve ser positiva!');
});

test('Deve retornar erro para tipo de combustível inválido', () => {
    const resultado = calcularCombustivel(10000, 'diesel');
    expect(resultado).toBe('Erro, o tipo de combustível deve ser (gasolina/etanol)');
});