
var inputValorHora = document.querySelector("#valor-hora")
var inputTotalHoras = document.querySelector("#horas-projeto")
var resultado = document.querySelector("#resposta")

function calcularValorHora(){
    
    var valorHora = inputValorHora.valueAsNumber
    var totalHoras = inputTotalHoras.valueAsNumber
    
   
   var valorTotal = valorHora / totalHoras


    var valorProjeto = valorHora * totalHoras

    var valorDuasCasas = valorProjeto.toFixed(2)
    
    resultado.textContent = "R$ " + valorDuasCasas
    

}



