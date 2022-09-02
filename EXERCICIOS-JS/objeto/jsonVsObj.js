const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

/*
    O JSON por ser uma ferramenta de manipulação de texto, não reconhece funções, tendo como
    sua estrutura a base em algumas regras: (os atributos tem que estar dentro de aspas duplas
    assim como qualquer string.)
    JSON.parse('{ "atributo": "Conteudo do atributo", }')

    Usa-se JSON.stringify() para transformar um objeto em JSON e JSON.parse para transformar um JSON
    em objeto.

*/