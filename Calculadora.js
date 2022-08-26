var numA = parseInt(prompt("Digite um numero: "))
var numB = parseInt(prompt("Digite mais um numero: "))
SomarNumeros(numA , numB);
SubtracaodosNumeros(numA , numB);
MultiplicarNumeros(numA , numB);
DividirNumeros(numA , numB);
function SomarNumeros (numA , numB){
    var soma = numA + numB
    console.log("A soma dos valores são: ", numA + numB )
    return soma;
}
function SubtracaodosNumeros (numA , numB){
    var subtracao = numA - numB
    console.log("A subtração dos valores são: ", subtracao)
    return subtracao;    
}
function MultiplicarNumeros (numA , numB){
    var multiplicacao = numA * numB
    console.log("A multiplicação dos valores é: ", multiplicacao)
    return multiplicacao
}
function DividirNumeros (numA , numB){
    var divisao = numA / numB
    console.log("A Divisão dos valores é: ", divisao)
    return divisao
}