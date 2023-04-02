let prato = '';
let bebida = '';
let sobremesa = '';

function selecionarPrato(produto){
    const jaSelecionado = document.querySelector('.pratoSelecionado');
    const check = document.querySelector('.pratoHabilitado');

    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('pratoSelecionado');
        check.classList.remove('pratoHabilitado');
        check.classList.add('pratoDesabilitado');
    }
    produto.classList.add('pratoSelecionado');
    produto.children[4].classList.remove('pratoDesabilitado');
    produto.children[4].classList.add('pratoHabilitado');

    prato = produto;
    podePedir();   
}

function selecionarBebida(produto){
    const jaSelecionado = document.querySelector('.bebidaSelecionada');
    const check = document.querySelector('.bebidaHabilitada');

    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('bebidaSelecionada');
        check.classList.remove('bebidaHabilitada');
        check.classList.add('bebidaDesabilitada');
    }
    produto.classList.add('bebidaSelecionada');
    produto.children[4].classList.remove('bebidaDesabilitada');
    produto.children[4].classList.add('bebidaHabilitada');

    bebida = produto;
    podePedir();
}

function selecionarSobremesa(produto){
    const jaSelecionado = document.querySelector('.sobremesaSelecionada');
    const check = document.querySelector('.sobremesaHabilitada');

    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('sobremesaSelecionada');
        check.classList.remove('sobremesaHabilitada');
        check.classList.add('sobremesaDesabilitada');
    }
    produto.classList.add('sobremesaSelecionada');
    produto.children[4].classList.remove('sobremesaDesabilitada');
    produto.children[4].classList.add('sobremesaHabilitada');

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

function confirmarPedido(){
    const telaConfirmação = document.querySelector('.escolhendo');
    const container = document.querySelector('.container');
    container.classList.add('blur');

    telaConfirmação.classList.add('confirmarPedido');

    let valorPrato = Number(prato.children[3].innerHTML.substring(3).replace(',', '.'));
    let valorBebida = Number(bebida.children[3].innerHTML.substring(3).replace(',', '.'));
    let valorSobremesa = Number(sobremesa.children[3].innerHTML.substring(3).replace(',', '.'))
    let valorTotal = (valorPrato + valorBebida + valorSobremesa).toFixed(2);

    let textoPedido = `<p>${prato.children[1].innerHTML}</p><p>${valorPrato.toFixed(2)}</p><p>${bebida.children[1].innerHTML}</p><p>${valorBebida.toFixed(2)}</p><p>${sobremesa.children[1].innerHTML}</p><p>${valorSobremesa.toFixed(2)}</p><p>Total:</p><p>R$ ${valorTotal}</p>`
    
    const itens = document.querySelector('.itens');
    itens.innerHTML = textoPedido;
}

function fazerPedido(){
    let valorPrato = Number(prato.children[3].innerHTML.substring(3).replace(',', '.'));
    let valorBebida = Number(bebida.children[3].innerHTML.substring(3).replace(',', '.'));
    let valorSobremesa = Number(sobremesa.children[3].innerHTML.substring(3).replace(',', '.'));

    let valorTotal = (valorPrato + valorBebida + valorSobremesa).toFixed(2);
    const nome = prompt('Informe seu nome:');
    const endereco = prompt('Informe seu endereço:');
    let textoPedido = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato.children[1].innerHTML}\n- Bebida: ${bebida.children[1].innerHTML}\n- Sobremesa: ${sobremesa.children[1].innerHTML}\nTotal: R$ ${valorTotal}\nNome: ${nome}\nEndereço: ${endereco}`
    let textoEncode = encodeURIComponent(textoPedido);
    console.log(textoPedido);
    console.log(textoEncode);

    window.open(`https://wa.me/5527995273201?text=${textoEncode}`);
}

function cancelar(){
    const telaConfirmação = document.querySelector('.confirmarPedido');
    const container = document.querySelector('.container');
    container.classList.remove('blur');
    telaConfirmação.classList.remove('confirmarPedido');
}