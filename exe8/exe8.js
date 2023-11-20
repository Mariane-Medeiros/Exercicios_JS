//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
let data = new Date();
function verifica_idade() {
    let ano_nascimento = document.getElementById('ano_nascimento').value;
    ano_nascimento = parseInt(ano_nascimento);
    let ano = data.getFullYear();
    let idade = ano - ano_nascimento;
    if (idade >= 18) {
        document.getElementById('informar_idade').innerHTML = 'sua idade é ' + idade + ', você é maior de idade'
    }
    else {
        document.getElementById('informar_idade').innerHTML = 'sua idade é ' + idade + ', você é menor de idade'
    }
}
