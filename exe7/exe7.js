// Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro inteiro.
function impar_ou_par() {
    let numero = document.getElementById('numero').value
    numero = parseInt(numero);
    if ((numero % 2) == 0) {
        return "par";
    }
    else {
        return "impar";
    }

}
