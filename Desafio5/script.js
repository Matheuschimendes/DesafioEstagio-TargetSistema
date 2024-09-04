function inverterString() {
    // Obter a string do input
    const input = document.getElementById('inputString').value;

    // Inveter a string manualmente
    let stringInvertida = '';
    for (let i = input.length - 1; i >= 0; i--) {
        stringInvertida += input[i];
    }

    // Exibir a string invertida no HTML
    document.getElementById('outputString').textContent = `String invertida: ${stringInvertida}`;

}