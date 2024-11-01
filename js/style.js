// Criando uma function para armazenar dados no Local Storage com JS

let chave = "Nome 1";
let chave2 = "Curso 1";
let i = 0;

function ArmazenarDados()
{
    localStorage.setItem(chave, document.getElementById("nome").value);
    localStorage.setItem(chave2, document.getElementById("curso").value);
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
}

function AtualizarDados()
{
    localStorage.setItem(chave, document.getElementById("nome").value);
    localStorage.setItem(chave2, document.getElementById("curso").value);
    LimparCampos();
}

function insertData()
{   
    i = i + 1;
    localStorage.setItem("Nome " + i , document.getElementById("nome").value);
    localStorage.setItem("Curso " + i, document.getElementById("curso").value);
    LimparCampos();
}

function ViewAllData()
{
    let resultado = "";
    for(let indice = 1; indice <= i; indice++)
    {
        resultado += localStorage.getItem("Nome " + indice) + " - " +  
        localStorage.getItem("Curso " + indice ) + "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function DeleteData()
{
    localStorage.removeItem("Nome " + document.getElementById("ano").value);
    localStorage.removeItem("Curso " + document.getElementById("ano").value);
    document.getElementById("ano").value = "";
}
