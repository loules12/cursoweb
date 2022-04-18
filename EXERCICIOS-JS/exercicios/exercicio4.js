function divisao(dividendo, divisor) {
    const resultadoDivisao = dividendo / divisor
    console.log(`O resultado da divisão entre ${dividendo} e ${divisor} é:${Math.floor(resultadoDivisao)}
    O resto da divisão é:${dividendo % divisor}`)
}

divisao(10, 3)