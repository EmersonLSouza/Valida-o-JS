// Criando uma function para armazenar dados no Local Storage com JS

let chave = "Nome 1";
let chave2 = "Curso 1";
let chave3 = "Ano";
let i = 0;

function ArmazenarDados()
{
    localStorage.setItem(chave, document.getElementById("nome").value);
    localStorage.setItem(chave2, document.getElementById("curso").value);
    localStorage.setItem(chave3, document.getElementById("ano").value);
    LimparCampos();
}

function ConsultarDados()
{
    document.getElementById("resultado").innerHTML = localStorage.getItem(chave) + " - " +
    localStorage.getItem(chave2);
}

// Function para limpar dados após a utilização do botão

function LimparCampos()
{
    document.getElementById("nome").value = "";
    document.getElementById("curso").value = "";
    document.getElementById("ano").value = "";
}

function AtualizarDados()
{
    localStorage.setItem(chave, document.getElementById("nome").value);
    localStorage.setItem(chave2, document.getElementById("curso").value);
    localStorage.setItem(chave3, document.getElementById("ano").value);
    LimparCampos();
}

function insertData()
{   
    i = i + 1;
    localStorage.setItem("Nome " + i , document.getElementById("nome").value);
    localStorage.setItem("Curso " + i, document.getElementById("curso").value);
    localStorage.setItem("ano " + i, document.getElementById("ano").value);
    LimparCampos();
}

function ViewAllData()
{
    let resultado = "";
    for(let indice = 1; indice <= i; indice++)
    {
        resultado += localStorage.getItem("Nome " + indice) + " - " +  
        localStorage.getItem("Curso " + indice ) + " - " + localStorage.getItem("ano " + indice );
        "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function DeleteData()
{
    localStorage.removeItem("Nome " + document.getElementById("ano").value);
    localStorage.removeItem("Curso " + document.getElementById("curso").value);
    localStorage.removeItem("ano " + document.getElementById("ano").value);
    
}
