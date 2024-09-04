/*
--> Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo 
valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de 
Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


*/

function pertenceAoFibonacci(num) {
//Verifica se o número é negativo e retorna false se for o caso.
  if (num < 0) {
    return false;
  }
//Inicializa a e b com os primeiros dois números da sequência de Fibonacci
  let a = 0;
  let b = 1;

//Se o número informado for 0 ou 1, retorna true.
  if (num === a || num == b) {
    return true;
  }

//O loop for é utilizado para gerar a sequência de Fibonacci até b ser maior
  for (; b <= num; ) {
    let proximo = a + b;
    if (proximo === num) {
      return true;
    }

    a = b;
    b = proximo;
  }

  return false;
}

document
  .getElementById("form-fibonacci")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o envio do formulário e recarregamento da página

    let numero = parseInt(document.getElementById("number").value, 10);
    let resultado = pertenceAoFibonacci(numero);

    let mensagem = resultado
      ? `${numero} pertence à sequência de Fibonacci.`
      : `${numero} não pertence à sequência de Fibonacci.`;

    document.getElementById('resultado').innerHTML = mensagem;
  });
