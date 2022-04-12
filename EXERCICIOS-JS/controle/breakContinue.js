const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
for (a in nums) {
    for (b in nums){
        if(a == 2 && b == 3) 
        break externo
        console.log(`Par = ${a}, ${b}`)
    }
 }

// break causa um desvio para fora do laço o 
// continue causa um desvio para a proxíma repetição do laço
// o break pode citar uma etiqueta pre definida anteriormente como visto acima.