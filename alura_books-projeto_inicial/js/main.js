let livros = [];
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivroDaApi()

async function getBuscarLivroDaApi(){
    const res = await fetch(endPointDaApi);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);

    exibirLivrosNaTela(livrosComDesconto);
}



