// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 -> {...}
// pessoa = { nome: 'Ana' }

/*
    Só pode atribuir um valor para uma constante (um espaço de memória) apenas uma vez
    É interessante entender que quando se define um objeto como onstante, você não pode substituir
    aquele objeto, mas pode alterar o que se tem dentro daquele objeto.
    Ex: Se joaquim quiser passar a ser Ana, ele não vai deixar de ser Joaquim, porem pode alterar
    um atributo seu, neste caso o nome, para o que ele quiser, de forma que ele pode mudar o nome mas
    jamais mudara o que / quem ele é.
    Acho que ficou legal =D
*/ 

Object.freeze(pessoa)  // congela os dados declarados anteriormente ao objeto de forma que não dê mais para ser alterado.
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

// Note que após o freeze não é possivel alterar mais nenhum dado daquele objeto, o freeze
// tem como objetivo tornar o proprío objeto uma constante.

console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.endereco = { rua: 'Rua D', numero: 22}

console.log(pessoaConstante)