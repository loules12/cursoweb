/*
    Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string.
    Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2º mês.
*/

const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const selecionarMes = (mesNumerico) => mesNumerico < 1 || mesNumerico > 12? 'Mês invalido' : mesesDoAno[mesNumerico - 1]

console.log(selecionarMes(2))