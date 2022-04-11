const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Retorna vazio, não exibe erro, mesmo "não existindo"
console.log(escola.charCodeAt(3)) // Retorna o código em relação a tabela unit code.
console.log(escola.indexOf("3"))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // Vá do indice o até < indice 3

console.log("Escola ".concat(escola).concat("!")) // Concatena o que for determinado
console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'.split(','))
