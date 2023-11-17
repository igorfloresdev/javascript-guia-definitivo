// Variável é um nome simbolico para valor

var x;                  //declara uma variável chamada x

//valores podem ser atribuídos às variáveis com sinal =

x = 0;                  // Agora a variável x tem o valor 0
x;                      // => 0: Uma variável é avaliada com seu valor

// Javascript aceita vários tipos de valores

x = 1;                  //Números.
x = 0.01;               //Apenas um tipo Number para inteiros e reais.
x = "Hello World";      //String de texto entre aspas.
x = "JavaScript";       //Apóstofros também delimitam string.
x = true;               //Valores booleanos.
x = false;              //O outro valor booleano.
x = null;               //Null é um valor especial que significa "nenhum valor"
x = undefined;          //Undefined é como Null

// O tipo de dados mais importante de JavaScript é o objeto
// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores

var book = {
  topic: "JavaScript",
  fat: true
}

// Acesse as propriedades de um objetos com . ou [] :

book.topic                // => "JavaScript"
book["fat"]               // => true: outro modo de acessar valores de propriedade.
book.author = "Flanagan"; // Crie novas propriedades por meio de atribuição.
book.content = {};        // É um objeto vazio sem qualquer propriedade.

// JavaScript também aceita arrays (Listas indexadas numericamente) de valores.

var primes = [2,3,5,7];   // Um array de 4 valores, delimitados com [ e ].
primes[0]                 // => 2: O primeiro elemento no array.
primes.length - 1         // => 4: Quantidade de elementos no array.
primes[primes.length - 1] // => 7: Ultimo elemento no array.
primes[4] = 9;            // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11;           // Ou altera um elemento existente por meio de atribuição.
var empty = [];           // [] é um array vazio, sem qualquer elemento.
empty.length              // => 0

// Os arrays e objetos podem conter outros arrays e objetos:

var points = [            // Um array com 2 elementos.
  {x:0, y:0},             // Cada elemento é um objeto.
  {x:1, y:1}
];

var data = {              // Um objeto com 2 propriedades
  trial: [[1,2], [3,4]],  // O valor de cada propriedade é um array
  trial2: [[2,3], [4,5]]  // o elemento dos arrays são arrays
};

// Os operadores atuam sobre os valores (Operandos) para produzir um novo valor
// Os operadores aritméticos são os mais comuns:

3 + 2                     // => 5: Adição
3 - 2                     // => 1: Subtração
3 * 2                     // => 6: Multiplicação
3 / 2                     // => 1.5: Divisão
points[1].x = points[0].x // => 1: operandos mais complicados
"3" + "2"                 // => "32": + soma números, ou concatena strings

// JavaScript define alguns operadores aritméticos de forma abreviada

var count = 0;            // Define uma variável
count++;                  // Incrementa a variável
count--;                  // Decrementa a variável
count += 2;               // Soma 2: O mesmo que count = count + 2;
count *= 3;               // Multiplica por 3: o mesmo que count = count * 3;
count                     // => 6: nomes de variaveis também são expressões

// Os operadores de igualdade e relacionais testam se dois valores são iguais,
// desiguais, menores que, maiores que, etc. São avaliados como verdadeiro ou falso.

