const turma = ['Ana', 'Cecilia', 'Maria', 'Carlos', 'Mille', 'João', 'Isabely']

function sorteio (min = 0, max = (turma.length) ) {

    const sorteado = Math.random() * (max - min) + min
    return Math.floor(sorteado)
}

let numeroDoAlunoSorteado = sorteio()
console.log(numeroDoAlunoSorteado)
let alunoSorteado = turma[numeroDoAlunoSorteado]

console.log(`O aluno(a) sorteado(a) foi ${alunoSorteado}`)