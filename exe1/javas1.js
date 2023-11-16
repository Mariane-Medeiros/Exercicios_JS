/*(8) Crie um campo texto parar preencher um CPF <input maxlength="11" id="cpf" />, e exiba ao lado com pontuação conforme preencher
function mostrar_cpf(){
    let cpf = document.getElementById("cpf_sem").value;
    
    let novo_cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    console.log(novo_cpf);
}

    <input id="cpf_sem" maxlength="11" type="text">
    <button  onblur="mostrar_cpf()">Nsa</button>


//2 x - Campo/Input do tipo text. (id=soma1, id=soma2)
//1 x - Botão (id=btn-soma)
//1 x - Campo (id=resultado-soma)
//Caso esteja preenchido um valor númerico nos dois campos(id=soma1, id=soma2), O resultado da soma devera aparecer no campo (id=resultado-soma) ao clicar no botão (id=btn-soma).

function somar(){
    let valor1 = document.getElementById("soma1").value;
    let valor2 = document.getElementById("soma2").value;
    valor1 = parseInt(valor1, 10);
    valor2 = parseInt(valor2, 10);
    let resultado = valor1 + valor2;
    console.log(resultado);
    document.getElementById("resultado_soma").innerHTML = 'variavel:' + resultado;

}   <input type="text" id="soma1"><br>
    <input type="text" id="soma2"><br>
    <button id="btn_soma" onclick="somar()">Soma</button><br>
    <p id="resultado_soma"></p>/
*/ 

//Crie dois botões no HTML chamados: 'Verde', ,'Vermelho'. ao clicar neles, o style="background-color: {COR-SELECIONADA}"


    function mudar_cor(cor) {
        var body = document.body;
        if (cor === 'vermelho') {
            body.style.background = "red";
        } else if (cor === 'verde') {
            body.style.background = "green";
        }
    }
