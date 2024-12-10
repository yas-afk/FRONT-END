function carregarCatalogo(){

    var Filme = [
          ["/Javascript/aula5-listas array/atividade/images/enrolados.jpg","Enrolados"],
          ["/Javascript/aula5-listas array/atividade/images/Moana2.jpg", "Moana 2"],
          ["/Javascript/aula5-listas array/atividade/images/mulan.jpg", "Mulan"],
          ["/Javascript/aula5-listas array/atividade/images/tiana.jpg","Tiana"],
          ["/Javascript/aula5-listas array/atividade/images/tinker.jpg","Tinker"]
          ["/Javascript/aula5-listas array/atividade/images/toystory.jpg","Toy Story"]
    ]

   
   Filme.forEach(cadaFilme => {
    
        console.log("oi")
       document.getElementById('catalogo').innerHTML += `
        <div class="livro">
                <img src="${cadaFilme[0]}" alt="">
           <h4>${cadaFilme[1]}</h4>
      <button>
            Adicionar
               <img src="images/plus.svg" alt="">
      </button>
       </div>

       `
    }); 
}

carregarCatalogo()