//Exiba a data atual pelo JavaScript no seguinte formato: dia/mês/Ano
let data = new Date()

let dia = data.getDate();

var mes = data.getMonth() + 1;

let ano = data.getFullYear();

let data_br = dia + '/' + mes + '/' + ano;
alert(data_br);
