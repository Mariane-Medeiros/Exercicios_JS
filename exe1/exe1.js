//2 x - Campo/Input do tipo text. (id=soma1, id=soma2)
//1 x - Botão (id=btn-soma)
//1 x - Campo (id=resultado-soma)
//Caso esteja preenchido um valor númerico nos dois campos(id=soma1, id=soma2), O resultado da soma devera aparecer no campo (id=resultado-soma) ao clicar no botão (id=btn-soma).

function soma() {
    let valor1 = document.getElementById("soma1").value;
    let valor2 = document.getElementById("soma2").value;
    valor1 = parseInt(valor1, 10);
    valor2 = parseInt(valor2, 10);
    let resultado = valor1 + valor2;
    console.log(resultado);
    document.getElementById("resultado_soma").innerHTML = 'Resultado:' + resultado;

}  
