/*
--> Observe o trecho de código abaixo: 

int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);

--> Ao final do processamento, qual será o valor da variável SOMA? 

*/


// Definição do valor de INDICE
let INDICE = 13;
let SOMA = 0;

//Usando o loop for para calcular a soma
for (let K = 1; K <= INDICE; K++) {
    SOMA += K;
}

console.log(SOMA);

