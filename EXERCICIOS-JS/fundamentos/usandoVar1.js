{
    { 
        { 
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123  // Quando a variável é definida dentro de uma função,
    // o escopo dela é valido apelas ali dentro
    console.log(local)
}

teste()
console.log(local)  // Quando chamada fora da função onde foi definida não é reconhecida