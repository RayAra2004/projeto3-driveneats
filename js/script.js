let prato = '';
let bebida = '';
let sobremesa = '';

function selecionarPrato(produto){
    const jaSelecionado = document.querySelector('.pratoSelecionado');
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('pratoSelecionado');
    }
    produto.classList.add('pratoSelecionado');
    prato = produto;
    podePedir();
}

function selecionarBebida(produto){
    const jaSelecionado = document.querySelector('.bebidaSelecionada');
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('bebidaSelecionada');
    }
    produto.classList.add('bebidaSelecionada');
    bebida = produto;
    podePedir();
}

function selecionarSobremesa(produto){
    const jaSelecionado = document.querySelector('.sobremesaSelecionada');
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('sobremesaSelecionada');
    }
    produto.classList.add('sobremesaSelecionada');
    sobremesa = produto;
    podePedir();
}

function podePedir(){
    const botao = document.querySelector('button');

    if(prato != '' && bebida != '' && sobremesa != ''){
        botao.disabled = false;
        botao.innerHTML = 'Fechar Pedido';
        botao.classList.add('botaoHabilitado');
    }
}

function fazerPedido(){
    let valorPrato = Number(prato.children[3].innerHTML.substring(3).replace(',', '.'));
    let valorBebida = Number(bebida.children[3].innerHTML.substring(3).replace(',', '.'));
    let valorSobremesa = Number(sobremesa.children[3].innerHTML.substring(3).replace(',', '.'));

    let valorTotal = (valorPrato + valorBebida + valorSobremesa).toFixed(2);

    let textoPedido = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato.children[1].innerHTML}\n- Bebida: ${bebida.children[1].innerHTML}\n- Sobremesa: ${sobremesa.children[1].innerHTML}\nTotal: R$ ${valorTotal}`
    let textoEncode = encodeURIComponent(textoPedido);
    console.log(textoPedido);
    console.log(textoEncode);

    window.open(`https://wa.me/5527995273201?text=${textoEncode}`);
}