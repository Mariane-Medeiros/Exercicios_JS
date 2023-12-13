//(37.a) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder'] 
//a. Adicione os 3 Deuses: ('Loki', 'Odin', 'Frey')
//b. Exiba a quantidade/comprimento que ele tem com a função .length  
//c. exiba um a um com alert() - De preferencia para laços de repetição


let mostrar = "";
const deuses  = ['Aegir', 'Aud', 'Balder'];
deuses.push('Loki');
deuses.push('Odin');
deuses.push('Frey');
let tamanho = deuses.length;
alert('tamanho: ' + tamanho);
for(var i = 0; i<tamanho; i++){
    mostrar = mostrar + " " + deuses[i];

}
document.getElementById('texto').innerHTML = mostrar;

