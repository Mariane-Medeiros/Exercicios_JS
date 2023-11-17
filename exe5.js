//Crie uma função que recebe 2 parâmetros e retorna a soma deles, porem caso seja passado um parâmetro vazio ela retorne zero.

var valor1;
var valor2;
function passar_valor(){
   valor1 = document.getElementById('valor1').value;
   valor2 = document.getElementById('valor2').value;
    soma();
}

function soma(){
    if(valor1 == '' || valor2 == ''){
        return 0;
    }
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    soma = valor1 + valor2;
    alert(soma);

}