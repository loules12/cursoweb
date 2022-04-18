const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas : funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
/* 
    bind serve para associar o método a um objeto independente de onde seja usado.
    Quando usado o bind eu me refiro a aquele atributo/função está diretamente assóciado aos parâmetros
    daquilo que foi setado como parâmetro para a função bind
*/