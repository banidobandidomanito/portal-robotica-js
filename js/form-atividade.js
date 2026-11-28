const form = document.getElementById("formularioAtividade");

//titulo
const titulo = document.getElementById("atividadeTitulo");
const tituloErro = document.getElementById("tituloErro");

//tipo da atividade
const tipo = document.getElementById("atividadeTipo");
const tipoErro = document.getElementById("tipoErro");

//descrição da atividade
const descricao = document.getElementById("atividadeSobre");
const descErro = document.getElementById("descErro");

//data para o início da atividade
const dataInicio = document.getElementById("atividadeInicio");
const dataInicioErro = document.getElementById("dataInicioErro");

//data para o fim da atividade
const dataFim = document.getElementById("atividadeFim");
const dataFimErro = document.getElementById("dataFimErro");

//situacao da atividade
const situacao = document.getElementById("atividadeSituacao");
const situacaoErro = document.getElementById("situacaoErro");

//período letivo
const letivo = document.getElementById("atividadeAno");
const letivoErro = document.getElementById("atividadeAnoErro");

//semestre
const semestre = document.getElementById("atividadeSemestre");
const semestreErro = document.getElementById("atividadeSemestreErro");

//imagem
const previewImagem = document.getElementById('previewImagem')
const previewPlaceholder = document.getElementById('previewPlaceholder')
const botaoImagem = document.getElementById('botaoEnviarImagem');
const imagem = document.getElementById('envioImagem')
const imagemErro = document.getElementById('imagemErro');
const removerImagem = document.getElementById('removerImagemAtividade');

form.addEventListener("submit", (event) => {
  if (validarFormulario()) {
    console.log('Formulário validado com sucesso.')
  } else {
    console.log('Verificação do formulário inválida ou apresentou erros.')
    event.preventDefault();
  }
});

function validarFormulario(){
    let formularioValido = true;

    if(!validarTitulo()) formularioValido = false;
    if(!validarTipo()) formularioValido = false;
    if(!validarDescricao()) formularioValido = false;
    if(!validarDataInicio()) formularioValido = false;
    if(!validarDataFim()) formularioValido = false;
    if(!validarSituacao()) formularioValido = false;
    if(!validarAnoLetivo()) formularioValido = false;
    if(!validarSemestre()) formularioValido = false;
    
    return formularioValido;
}

function validarTitulo() {
  if (titulo.value.trim().length == 0) {
    titulo.classList.add("is-invalid");
    tituloErro.textContent = "Digite o título da atividade!";
    return false;
  } else if (titulo.value.trim().length < 3) {
    titulo.classList.add("is-invalid");
    tituloErro.textContent =
      "O título da atividade deve conter pelo menos 3 caracteres!";
    return false;
  } else {
    titulo.classList.remove("is-invalid");
    tituloErro.textContent = "";
    return true;
  }
}
function validarTipo(){
    if(tipo.value ==  ''){
        tipo.classList.add('is-invalid');
        tipoErro.textContent = 'Selecione o tipo da atividade!'
        return false;
    }
    else{
        tipo.classList.remove('is-invalid');
        tipoErro.textContent = '';
        return true;
    }
}
function validarDescricao(){
    if(descricao.value.trim().length < 8 || descricao.value.trim().length > 512){
        descricao.classList.add('is-invalid')
        descErro.textContent = 'A descrição da atividade deve conter entre 8 e 512 caracteres!'
        return false;
    }
    else{
        descricao.classList.remove('is-invalid');
        descErro.textContent = '';
        return true;
    }
}
function validarDataInicio(){
    if(dataInicio.value === ''){
        dataInicio.classList.add('is-invalid');
        dataInicioErro.textContent = 'Adicione a data de ínicio para a atividade!'
        return false;
    }
    // valor correspondente a 09 de Dezembro de 2008. data de fundação do IFMS, segundo o robô do google...
    else if(dataInicio.valueAsNumber < 1228780800000){
        dataInicio.classList.add('is-invalid');
        dataInicioErro.textContent = 'Adicione uma data de ínicio válida!'
        return false;
    }
    else{
        dataInicio.classList.remove('is-invalid');
        dataInicioErro.textContent = '';
        return true;
    }
}
function validarDataFim(){
    if(dataFim.value === ''){
        dataFim.classList.add('is-invalid');
        dataFimErro.textContent = 'Adicione a data prevista para o encerramento da atividade!'
        return false;
    }
    else if(dataFim.valueAsNumber < dataInicio.valueAsNumber){
        dataFim.classList.add('is-invalid');
        dataFimErro.textContent = 'Adicione uma data de encerramento válida!'
        return false;
    }
    else{
        dataFim.classList.remove('is-invalid');
        dataFimErro.textContent = '';
        return true;
    }
}
function validarSituacao(){
    if(situacao.value == ''){
        situacao.classList.add('is-invalid');
        situacaoErro.textContent = 'Selecione a situação atual da atividade!'
        return false;
    }
    else{
        situacao.classList.remove('is-invalid');
        situacaoErro.textContent = '';
        return true;
    }
}
function validarAnoLetivo(){
    if(letivo.value < 2008 || letivo.value > 2077){
        letivo.classList.add('is-invalid');
        letivoErro.textContent = 'Selecione um ano letivo válido'
        return false;
    }
    else{
        letivo.classList.remove('is-invalid');
        letivoErro.textContent = '';
        return true;
    }
}
function validarSemestre(){
    if(semestre.value == ''){
        semestre.classList.add('is-invalid');
        semestreErro.textContent = 'Informe o semestre!'
        return false;
    }
    else{
        semestre.classList.remove('is-invalid');
        semestreErro.textContent = '';
        return true;
    }
}

imagem.addEventListener('change', () =>{
    validarImagem();
    
})
function validarImagem(){
    let arquivo = imagem.files[0];
    
    if(arquivo.type != 'image/webp' && arquivo.type != 'image/jpeg' && arquivo.type != 'image/jpg' && arquivo.type != 'image/png'){
        botaoImagem.classList.add('border-danger')
        botaoImagem.classList.add('is-invalid')
        imagemErro.textContent = 'Arquivos aceitos: WEBP, PNG, JPEG & JPG!';
        imagemErro.classList.add('d-block', 'text-center');
    }

    //caso não possua uma imagem com mais de 5MB, altere os valores de 1024 para 10 ou menos.
    else if(arquivo.size > 5 * 1024 * 1024){
        botaoImagem.classList.add('border-danger')
        botaoImagem.classList.add('is-invalid')
        imagemErro.textContent = 'O arquivo não pode ter mais de 5MB!';
        imagemErro.classList.add('d-block', 'text-center');
    }
    else{
        botaoImagem.classList.remove('border-danger')
        botaoImagem.classList.remove('is-invalid')
        imagemErro.classList.remove('d-block', 'text-center');
        imagemErro.textContent = '';
        previewImagem.src = URL.createObjectURL(arquivo);
        previewImagem.classList.remove('d-none')
        previewPlaceholder.classList.add('d-none')
    }
}
removerImagem.addEventListener('click', () =>{
    previewImagem.src = '';
    previewImagem.classList.add('d-none')
    previewPlaceholder.classList.remove('d-none')
})
