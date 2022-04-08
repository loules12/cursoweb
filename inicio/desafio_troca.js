let a = 7;
let b = 94;
let troca;

// troca = a;
// a = b;
// b = troca;

[a, b] = [b, a]   // Uma forma mais pratica de fazer a alteração.

// depois da troca... a= 94 e b = 7
console.log("O valor da variável a é:" + a);
console.log("O valor da variável b é:" + b);