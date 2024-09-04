// Função para carregar os dados JSON e processá-los
async function carregarDados() {
    try {
        // Carregando o arquivo JSON
        const response = await fetch('db/dados.json');
        const dados = await response.json();

        // Filtrando os dias com faturamento maior que 0
        const diasComFaturamento = dados.filter(d => d.valor > 0);

        // Calculando o menor e o maior valor de faturamento
        const menorFaturamento = Math.min(...diasComFaturamento.map(d => d.valor));
        const maiorFaturamento = Math.max(...diasComFaturamento.map(d => d.valor));

        // Calculando a média mensal
        const mediaMensal = diasComFaturamento.reduce((acc, d) => acc + d.valor, 0) / diasComFaturamento.length;

        // Calculando o número de dias com faturamento superior à média mensal
        const diasAcimaDaMedia = diasComFaturamento.filter(d => d.valor > mediaMensal).length;

        // Exibindo os resultados no HTML
        document.getElementById('menor-faturamento').textContent = `Menor Faturamento: R$ ${menorFaturamento.toFixed(2)}`;
        document.getElementById('maior-faturamento').textContent = `Maior Faturamento: R$ ${maiorFaturamento.toFixed(2)}`;
        document.getElementById('dias-acima-media').textContent = `Dias com Faturamento Acima da Média: ${diasAcimaDaMedia} dias`;
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
}

// Chama a função ao carregar a página
carregarDados();
