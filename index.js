/*
    OBJETIVO - Quando clicarmos no botao temos que mostrar a imagem de fundo correspondente

passo 1 - dar um jeito de pegar o elemnlento html dos botoes

passo 2- dar um jeito de identificar o clique nolldo usuario no botao 

passo 3- desmarcar o botao selecionado anterior

passo 4- marcar o botao clicando como se estivesse selecionada

passo 5- esconder a imagem anterior

passo 6- fazer aparecer a imagem de fundo correspondente ao botao clicado
*/

// passo 1
const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');


//passo 2
        botoescarrossel.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
        
// passo 3
        const botaoselecionado = document.querySelector('.selecionado');
        botaoselecionado.classList.remove('selecionado');          
        
//passo 4
        botao.classList.add('selecionado');
        
//passo 5
        const imagemativa = document.querySelector('.ativa');
          imagemativa.classList.remove('ativa');
//passo 6
        imagens[indice].classList.add('ativa');
    })
})


