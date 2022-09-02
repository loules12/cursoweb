console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') // o .push adiciona um novo elemento no final de um array já existente
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]  // serve para excluir os dados de uma determinada posição do array, não interferindo nas posições anteriores e posteriores
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0), 'Elemento1', 'Elemento2'  // o primeiro parametro informa a partir de qual indice você quer trabalhar, o segundo elemento informa quantos indices você quer remover a partir do elemento selecionado, os elementos posteriores são para adição de elementos a partir da posição definida no primeiro elemento da função
console.log(aprovados)