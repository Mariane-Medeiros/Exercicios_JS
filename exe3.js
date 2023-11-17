//Crie dois botões no HTML chamados: 'Verde', ,'Vermelho'. ao clicar neles, o style="background-color: {COR-SELECIONADA}"


function mudar_cor(cor) {
    var body = document.body;
    if (cor === 'vermelho') {
        body.style.background = "red";
    } else if (cor === 'verde') {
        body.style.background = "green";
    }
}
