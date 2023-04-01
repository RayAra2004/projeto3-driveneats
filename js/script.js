function selecionarPrato(produto){
    const jaSelecionado = document.querySelector('.pratoSelecionado');
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('pratoSelecionado');
    }
    produto.classList.add('pratoSelecionado');
}

function selecionarBebida(produto){
    const jaSelecionado = document.querySelector('.bebidaSelecionada');
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('bebidaSelecionada');
    }
    produto.classList.add('bebidaSelecionada');
}

function selecionarSobremesa(produto){
    const jaSelecionado = document.querySelector('.sobremesaSelecionada');
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('sobremesaSelecionada');
    }
    produto.classList.add('sobremesaSelecionada');
}