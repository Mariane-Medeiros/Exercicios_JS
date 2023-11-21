//(25) Dentro da div com o id 'resultado', escreva 20x ('Repetição'). (use o 'for' pelo amor de deus)

let palavra = '';
for(let i=1; i<=20; i++){
    palavra = palavra + 'Repetição ';
}

document.getElementById('resultado').innerHTML = palavra;