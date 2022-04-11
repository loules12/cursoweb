console.log('a =', a)
var a = 2
console.log('a =', a)

/*
    Quando uma variável é declarada por var ela sofre o efeito de hoisting, é puxada para
    cima, como se tivesse sido definida anteriormente a sua chamada, mesmo que esteja abaixo
    a sua definição.
    É um comportamento padrão de mover a declaração para o topo
*/

// console.log('b =', b)
// let b = 2
// console.log('b =', b)

/*
    Já com o let não é aplicado o mesmo efeito citado acima para var
    assim apresentando um erro (pois a linguagem não encontra o que ainda não foi definido em let)
*/