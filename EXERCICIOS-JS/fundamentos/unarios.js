let num1 = 1
let num2 = 2

num1++  // Pós-fixada executa "depois"
console.log(num1)
--num1  // Pré-fixada executa antes
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)