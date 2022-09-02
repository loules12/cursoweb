const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))


/*
    A função forEach tem como retorno 3 parâmetros
    1 - conteudo naquele indice
    2 - o indice daquele momento
    3 - o próprio array

    A função forEach faz um laço de repetição de for e percorre toda a extenção de um array
    
    A função decretada acima é uma função callback e o forEach passa para ela 3 parâmetros, listados
    acima

    como o indice é passado sempre como segundo parâmetro, por mais que queira usar apenas o
    indice, é necessário definir 2 parâmetros na função callBack
*/