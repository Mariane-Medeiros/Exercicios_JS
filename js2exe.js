//(8) Crie um campo texto parar preencher um CPF <input maxlength="11" id="cpf" />, e exiba ao lado com pontuação conforme preencher
function mostrar_cpf(){
    
    let cpf = document.getElementById("cpf_sem").value;
    
    let novo_cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    console.log(novo_cpf);
}