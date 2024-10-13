// Criar uma variavel que trabalhe com a listagem

const ListaSelecaoPokedev = document.querySelectorAll(".pokedev");


// Efeito de clique no elemento na listagem

ListaSelecaoPokedev.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        // remover classe aberto só do cartão que estiver aberto
        esconderCartaoPokedev();

        //apresentar o proximo cartão do pokemon selecionado
        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        // REMOVER A CLASSE ATIVA(lista)
        desativaPokedevNaListagem();

        //adicionar a classe ativo na listagem selecionada (cor)
        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
    })
})

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativaPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
