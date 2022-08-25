var numA = parseInt(prompt("Digite um numero: "))
var numB = parseInt(prompt("Digite mais um numero: "))
SomarNumeros();
SubtracaodosNumeros();
function SomarNumeros (){
    var soma = numA + numB
    console.log("A soma dos valores são: ", numA + numB )
    return soma;
}
function SubtracaodosNumeros (){
    var subtracao = numA - numB
    console.log("A subtração dos valores são: ", subtracao)
    return subtracao;    
}