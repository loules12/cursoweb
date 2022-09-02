// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
// funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "salário igual a R$ X",
// em que X é o quanto o funcionário ganha por mês

function calcularSalario(horasTrabalhadas, valorDaHora) {
    return `Salário igual a R$${horasTrabalhadas * valorDaHora}`
}

console.log(calcularSalario(160, 22))