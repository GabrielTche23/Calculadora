var continuar = true;
var opcao = 0;
var desejaContinuar = 0;
var numA = 0;
var numB = 0;
var resultadosDasOperacoes = []
var contador = 0;
while (continuar) {
    desejaContinuar = prompt("Deseja continuar? Digite 1 para Iniciar / continuar e 2 para encerrar:")
    if (desejaContinuar == 1) {
        ExecutarProgramaNovamente();
    }
    else {
        continuar = false
    }
    function ExecutarProgramaNovamente() {
        numA = parseInt(prompt("Digite um numero: "))
        numB = parseInt(prompt("Digite mais um numero: "))
    }
    opcao = prompt("Digite 1 para Adição 2 para Subtração 3 para Multiplicação 4 Divisão 5 para exibir o Historico e 6 para Encerrar o programa.")
    if (opcao == 1) {
        SomarNumeros(numA, numB);
    }
    else if (opcao == 2) {
        SubtracaodosNumeros(numA, numB);
    }
    else if (opcao == 3) {
        MultiplicarNumeros(numA, numB);
    }
    else if (opcao == 4) {
        DividirNumeros(numA, numB)
    }
    else if(opcao == 5) {
        MostrarResultados();
    }
    else if(opcao = 6){
        continuar = false;
    }
}
function SomarNumeros(numA, numB) {
    var soma = numA + numB
    console.log("O resultado da soma foi: ", soma)
    resultadosDasOperacoes[contador] = soma
    contador++
    return soma;
}
function SubtracaodosNumeros(numA, numB) {
    var subtracao = numA - numB
    console.log("O resultado da subtração foi: ",subtracao)
    resultadosDasOperacoes[contador] = subtracao
    contador++
    return subtracao;
}
function MultiplicarNumeros(numA, numB) {
    var multiplicacao = numA * numB
    console.log("O resultado da multiplicação foi: ",multiplicacao)
    resultadosDasOperacoes[contador] = multiplicacao
    contador++
    return multiplicacao
}
function DividirNumeros(numA, numB) {
    var divisao = numA / numB
    console.log("O resultado da divisão foi: ",divisao)
    resultadosDasOperacoes[contador] = divisao
    contador++
    return divisao
}
function MostrarResultados() {
    for (var index = 0; index < contador-1; index++) {
    }
    console.log("O Historico dos resultados são esse: ", resultadosDasOperacoes)
}
