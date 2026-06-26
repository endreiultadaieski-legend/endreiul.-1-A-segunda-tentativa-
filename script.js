document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".aba-botao");
    const textos = document.querySelectorAll(".texto-conteudo");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            // 1. Remove a classe 'ativa' de todos os botões
            botoes.forEach(b => b.classList.remove("ativa"));
            
            // 2. Esconde todos os blocos de texto
            textos.forEach(t => t.classList.remove("ativo"));

            // 3. Adiciona a classe 'ativa' ao botão clicado
            botao.classList.add("ativa");

            // 4. Mostra o texto correspondente baseado no atributo 'data-aba'
            const alvoId = botao.getAttribute("data-aba");
            const textoAlvo = document.getElementById(alvoId);
            if (textoAlvo) {
                textoAlvo.classList.add("ativo");
            }
        });
    });
});
