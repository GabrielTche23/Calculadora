var continuar = true;
var opcao = 0;
var desejaContinuar = 0;
var numA = 0;
var numB = 0;
var resultadosDasOperacoes = []
var contador = 0;
while(continuar){
    desejaContinuar = prompt("Deseja continuar? Digite 1 para Iniciar / continuar e 2 para encerrar:")
    if (desejaContinuar == 1){
        ExecutarProgramaNovamente();
    }
    else{
        continuar = false
    }
    function ExecutarProgramaNovamente(){
    numA = parseInt(prompt("Digite um numero: "))
    numB = parseInt(prompt("Digite mais um numero: "))
    }
    opcao = prompt("Digite 1 para Adição 2 para Subtração 3 para Multiplicação 4 Divisão e 5 para encerrar o programa.")
    if(opcao == 1){
        SomarNumeros(numA , numB);
    }
    else if(opcao == 2){
        SubtracaodosNumeros(numA , numB);
    }
    else if (opcao == 3){
        MultiplicarNumeros(numA , numB);
    }
    else if (opcao == 4){
        DividirNumeros(numA , numB)
    }
    else{
        continuar = false
    }
    
    function SomarNumeros (numA , numB){
        var soma = numA + numB
        console.log("A soma dos valores são: ", numA + numB )
        resultadosDasOperacoes [contador] = soma
        contador++
        //console.log("O resultado das operações foi: ", resultadosDasOperacoes)
        return soma; 
    }
    function SubtracaodosNumeros (numA , numB){
        var subtracao = numA - numB
        console.log("A subtração dos valores são: ", subtracao)
        resultadosDasOperacoes [contador] = subtracao
        contador++
        //console.log("O resultado das operações foi: ", resultadosDasOperacoes)
        return subtracao;    
    }
    function MultiplicarNumeros (numA , numB){
        var multiplicacao = numA * numB
        console.log("A multiplicação dos valores é: ", multiplicacao)
        resultadosDasOperacoes [contador] = multiplicacao
        contador++
        //console.log("O resultado das operações foi: ", resultadosDasOperacoes)
        return multiplicacao
    }
    function DividirNumeros (numA , numB){
        var divisao = numA / numB
        console.log("A Divisão dos valores é: ", divisao)
        resultadosDasOperacoes [contador] = divisao 
        contador++
        //console.log("O resultado das operações foi: ", resultadosDasOperacoes)
        return divisao
    }
    function MostrarResultados (){ 
        for(var atual = 0; atual < contador -5; atual++){
            for(var seguinte = 0; seguinte < atual; seguinte++){
                resultadosDasOperacoes[contador]
                contador++
            }
        }
        console.log("O Historico dos resultados são esse: ",resultadosDasOperacoes)
    }
    MostrarResultados();
}
