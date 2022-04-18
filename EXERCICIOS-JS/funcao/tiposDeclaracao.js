console.log(soma(3, 4))  // Quando é declarado com function declaration pode ser chamada antes mesmo de
// ser declarada

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y){
    return x- y
}
console.log(sub(4, 5))
// A função function expression só pode ser utilizada após sua declaração, isso também serve para a function named

//named function expression
const mult = function mult(x, y) {
    return x * y
}

// A named function expression é a menos utilizada dentro do JS