
const part_form = document.getElementById("part-form");

const estudante = document.getElementById("estudanteNome");
const atividade = document.getElementById("atividadeTipo");
const funcao = document.getElementById("atividadeFuncao");
const contribuicao = document.getElementById("contribuicaoAlunoAtividade");

const part_estudante_erro = document.getElementById("part-estudante-erro");
const part_atividade_erro = document.getElementById("part-atividade-erro");
const part_funcao_erro = document.getElementById("part-funcao-erro");
const part_contribui_erro = document.getElementById("part-contribui-erro");


part_form.addEventListener("submit", function(event) {

    event.preventDefault();

    let formulario_valido = true;

    if (estudante.value === "") {
        part_estudante_erro.textContent = "Selecione uma opção!"
        estudante.classList.add("is-invalid");
        formulario_valido = false;
    }

    if (atividade.value === "") {
        part_atividade_erro.textContent = "Selecione uma opção!"
        atividade.classList.add("is-invalid");
        formulario_valido = false;
    }

    if (funcao.value === "") {
        part_funcao_erro.textContent = "Selecione uma opção!"
        funcao.classList.add("is-invalid");
        formulario_valido = false;
    }

    if (contribuicao.value.trim().length < 10) {
        part_contribui_erro.textContent = "A descrição deve ter entre 10 e 200 caracteres!"
        contribuicao.classList.add("is-invalid");
        formulario_valido = false;
    }

    if (formulario_valido) {
        part_form.submit();
    }

});


part_form.addEventListener("change", function() {

    if (estudante.value !== "") {
        part_estudante_erro.textContent = ""
        estudante.classList.remove("is-invalid");
    }

    if (atividade.value !== "") {
        part_atividade_erro.textContent = ""
        atividade.classList.remove("is-invalid");
    }

    if (funcao.value !== "") {
        part_funcao_erro.textContent = ""
        funcao.classList.remove("is-invalid");
    }

});


contribuicao.addEventListener("input", function() {

    if (contribuicao.value.trim().length >= 10) {
        part_contribui_erro.textContent = ""
        contribuicao.classList.remove("is-invalid");
    }

});
