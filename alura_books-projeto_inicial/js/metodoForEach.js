const elementoParaInserirLivros = document.querySelector('#livros');
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirLivrosNaTela(listaDeLivros){
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
  elementoParaInserirLivros.innerHTML = '';
    listaDeLivros.forEach(livro => {
      let livrosDisponiveis = verificarLivrosDisponiveis(livro)
        elementoParaInserirLivros.innerHTML += ` 
        <div class="livro">
        <img class="${livrosDisponiveis}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
    });
}

function verificarLivrosDisponiveis(livro){
  if(livro.quantidade > 0 ){
    return "livro__imagens "
  }else{
    return "livro__imagens indisponivel"
  }
}