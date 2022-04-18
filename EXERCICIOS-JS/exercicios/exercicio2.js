function tipoDoTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoB == ladoC) {
        console.log('É um triângulo Equilátero')
    } else if(ladoA == ladoB || ladoA == ladoC) {
        console.log('É um triângulo Isósceles')
    } else if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
        console.log('É um triângulo Escaleno')
    }
}

tipoDoTriangulo(1,1,1)