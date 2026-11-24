const est_formulario = document.getElementById("est-form");

const est_nome = document.getElementById("est-nome");
const est_email = document.getElementById("est-email");
const est_minibio = document.getElementById("est-bio");
const est_foto = document.getElementById("est-foto");


const est_nome_erro = document.getElementById("est-nome-erro");
const est_email_erro = document.getElementById("est-email-erro");
const est_minibio_erro = document.getElementById("est-bio-erro");
const est_foto_erro = document.getElementById("est-foto-erro");

const email_format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const formatos_foto = ["image/jpeg", "image/png", "image/webp"];

est_formulario.addEventListener("submit",function(event){

    event.preventDefault();

    let formulario_valido = true;

    

    if (est_nome.value.trim() === ""){
        est_nome_erro.textContent = "Digite seu nome!";
        est_nome.classList.add("is-invalid")
        formulario_valido = false;
    };

    if (!email_format.test(est_email.value.trim())){
        est_email_erro.textContent = "Digite um email valido!";
        est_email.classList.add("is-invalid")
        formulario_valido = false;
    };

    if (est_minibio.value.trim().length < 10 || est_minibio.value.trim().length > 200){
        est_minibio_erro.textContent = "A minibio deve ter entre 10 e 200 caracteres!";
        est_minibio.classList.add("is-invalid")
        formulario_valido = false;
    };

    if (!est_foto.files[0] || !formatos_foto.includes(est_foto.files[0].type)) {
    est_foto_erro.textContent = "Escolha um arquivo JPEG, PNG ou WEBP!";
    est_foto.classList.add("is-invalid");
    formulario_valido = false;
    }

    if(formulario_valido){
        est_formulario.submit();
    };

});

est_formulario.addEventListener("input",function(){

    if (est_nome.value.trim() !== ""){
      est_nome_erro.textContent = "";
      est_nome.classList.remove("is-invalid")
    };

    if (email_format.test(est_email.value.trim())){
        est_email_erro.textContent = "";
        est_email.classList.remove("is-invalid")
    };

    if (est_minibio.value.trim().length >= 10 && est_minibio.value.trim().length <= 200){
        est_minibio_erro.textContent = "";
        est_minibio.classList.remove("is-invalid")
    };

});

est_foto.addEventListener("change",function(){
    

    if (est_foto.files[0] && formatos_foto.includes(est_foto.files[0].type)){
        est_foto_erro.textContent = "";
        est_foto.classList.remove("is-invalid")
    }

});