//Exiba a tabuada do 1 até o 10

let texto= "";

for(var i=0; i<=10; i++){
    texto = texto + 'TABUADA DO ' + i  + '<br>';
    for(var j=0; j<=10; j++){
       resultado = i * j;
       texto = texto + i + " x " + j + " = " + resultado + '<br>';
    }
}
document.getElementById('tabuada').innerHTML = texto;
