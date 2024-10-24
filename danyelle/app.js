function criaCartao(categoria, pergunta, resposta) {
    let container = document.createElement('container')
    let cartao = document.createElement('article')
    cartao.localName = 'cartao'

    cartao.innerHTML =
        <div class="cartao_conteudo">
            <h3>${categoria}</h3>
            <div class="cartao_conteudo_pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao_conteudp_resposta">
                <p>${resposta}</p>
            </div>
        </div>


    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('clck', viraCartao)
    
    container.appendChild(cartao)
}