// Valores de faturamento por estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calculando o Faturamento total
const faturamentoTotal = Object.values(faturamento).reduce((acc, valor) => 
acc + valor, 0);

// Calculando o percetual de cada estado
const percentualSP = (faturamento.SP / faturamentoTotal) * 100;
const percentualRJ = (faturamento.RJ / faturamentoTotal) * 100;
const percentualMG = (faturamento.MG / faturamentoTotal) * 100;
const percentualES = (faturamento.ES / faturamentoTotal) * 100;
const percentualOutros = (faturamento.Outros / faturamentoTotal) * 100;

// Exibindo os resultados no HTML
document.getElementById('sp').textContent = `SP: ${percentualSP.toFixed(2)}%`;
document.getElementById('rj').textContent = `RJ: ${percentualRJ.toFixed(2)}%`;
document.getElementById('mg').textContent = `MG: ${percentualMG.toFixed(2)}%`;
document.getElementById('es').textContent = `ES: ${percentualES.toFixed(2)}%`;
document.getElementById('outros').textContent = `Outros: ${percentualOutros.toFixed(2)}%`;