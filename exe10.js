//(28) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com do while)

var i = 0, palavra = '';
do {
    i++;
    palavra = palavra + 'Repetição '
} while (i < 20);

document.getElementById('resultado').innerHTML = palavra;