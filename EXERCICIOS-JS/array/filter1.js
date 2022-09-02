const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(function(p) {
    return false
}))

// Produtos frageis e caros

const filtro1 = produtoFragil => produtoFragil.fragil
const filtro2 = precoProduto => precoProduto.preco >= 500

console.log(produtos.filter(filtro1).filter(filtro2))