

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
     if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado. voçe precisa digitar o nome de um filme ou palavra chave da sinopse</p>"
    return
     }
     campoPesquisa = campopesquisa.toLowerCase()

    console.log(campoPesquisa);


    let resultados = "";
    let titulo = "";
    let descricao= "";
    let tags = "";

    const fragment = document.createDocumentFragment();

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes){
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;

        }
       
    
    if (!resultado){
        resultados = "<p>Nada foi encontrado</p>"
    }
        section.innerHTML = resultados;
    }
    section.innerHTML = resultados;
}
