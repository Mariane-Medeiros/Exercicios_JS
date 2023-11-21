//Crie uma função que informa se tem os caracteres 'texto' no parâmetro informado.

let variavel = /texto/i
function procurar_texto(){
    let texto = document.getElementById('texto').value;
    let resultado =  variavel.test(texto);
    return resultado;
}