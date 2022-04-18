function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Macbook', 12000))
console.log(criarProduto('Notebook', 2400))