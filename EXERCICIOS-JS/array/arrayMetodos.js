const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()  // .pop remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')  // .push adiciona um conteudo na ultima posição do array
console.log(pilotos)

pilotos.shift() // .shift remove o conteudo do primeiro indice do array, tornando o segundo indice o primeiro e assim por diante...
console.log(pilotos)

pilotos.unshift('Hamilton')  // .unshift adiciona um novo item na primeira posição do array, empurrando os itens anteriormente existentes 1 casa de indice a frente.
console.log(pilotos)

// splice pode adicionar e remover elementos ao mesmo tempo
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)  // remove 1 elemento a partir do indice informado
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)  // .slice serve para pegar os dados de um pedaço de um array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)  // o primeiro parâmetro é a partir de (pega o elemento inicial), o segundo parâmetro é até esse ponto (não pega o elemento do indice final)
console.log(algunsPilotos2)
