/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function mascaraTel(i) {
    const tel = i.value;
    /verifica se n�o � n�mero/
    if (isNaN(tel[tel.length - 1])) {
        i.value = tel.substring(0, tel.length - 1);
        return;
    }

    i.setAttribute("maxlength", "16");

    /inclui mascara de telefone/
    if (tel.length == 1) {
        i.value = "(" + i.value;
    }
    if (tel.length == 3) {
        i.value = i.value + ") ";
    }
    if (tel.length == 6) {
        i.value = i.value + " ";
    }
    if (tel.length == 11) {
        i.value = i.value + "-";
    }
}

function mascaraCPF(i) {
    const cpf = i.value;
    /verifica se n�o � n�mero/
    if (isNaN(cpf[cpf.length - 1])) {
        i.value = cpf.substring(0, cpf.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    
    /inclui mascara de cpf/
    if (cpf.length == 3) {
        i.value = i.value + ".";
    }
    if (cpf.length == 7) {
        i.value = i.value + ".";
    }
    if (cpf.length == 11) {
        i.value = i.value + "-";
    }
}

function mascaraCNPJ(i) {
    const cnpj = i.value;
    /verifica se n�o � n�mero/
    if (isNaN(cnpj[cnpj.length - 1])) {
        i.value = cnpj.substring(0, cnpj.length - 1);
        return;
    }

    i.setAttribute("maxlength", "18");
    
    /inclui mascara de cnpj/
    if (cnpj.length == 2) {
        i.value = i.value + ".";
    }
    if (cnpj.length == 6) {
        i.value = i.value + ".";
    }
    if (cnpj.length == 10) {
        i.value = i.value + "/";
    }
    if (cnpj.length == 15) {
        i.value = i.value + "-";
    }
}

function validar() 
{
    var nome = formUser.nome.value;
    var fone = formUser.fone.value;
    var email = formUser.email.value;
    var ende = formUser.end.value; 
    var senha = formUser.senha.value;
    var confSenha = formUser.confSenha.value;
    var cpf = formUser.cpf.value;
    var cnpj = formUser.cnpj.value
    
    if (nome == ""|| nome.length <= 3)
    {
        alert("Informe o Seu nome completo!");
        formUser.nome.focus();
        return false;
    }

    if(fone == "" || fone.length <= 15)
    {
        alert("inforne o seu Telefone Completo!")
        formUser.fone.focus();
        return false;
    }

    if (email == ""|| email.length <= 10) {
        alert("Informe o Seu email completo!");
        formUser.email.focus();
        return false;
    }

    if (ende == ""|| ende.length <= 8) {
        alert("Informe o Seu Endereço completo!");
        formUser.end.focus();
        return false;
    }

    if(cpf == "" && cnpj == "")
    {
        alert("Selecione um documento!");
        return false;
    }

    if(cpf != "" && cnpj == "") 
    {
        if(cpf.length != 14)
        {
            alert("CPF incorreto!");
            formUser.cpf.focus();
            return false;
        }
        
    }

    if(cnpj != "" && cpf == "") 
    {
        if(cnpj.length != 18)
        {
            alert("CNPJ incorreto!");
            formUser.cnpj.focus();
            return false;
        }
        
    }

    if (senha != ""|| senha.length <8)
    {
        alert("Senha não atende aos requisitos!"); 
        formUser.senha.focus(); 
        return false;
    }
    
    if (senha != confSenha) 
    { 
        alert("Senhas não conferem!"); 
        formUser.senha.focus(); 
        return false;
    }
   
}
