
function carregarCatalogo(){

    var livros = [
          ["images/a menina.jpg","A Menina que Roubava Livros"],
          ["images/jardim secreto.jpg", "Jardim Secreto"],
          ["images/juju.webp", "Jujustu Kaisen"],
          ["images/demonslayer.jpg","Kimetsu no yaiba"],
          ["images/a voz.jpg","A voz do silêncio"]
    ]
   
   livros.forEach(cadaLivro => {
    

       document.getElementById('catalogo').innerHTML += `
        <div class="livro">
                <img src="${cadaLivro[0]}" alt="">
           <h4>${cadaLivro[1]}</h4>
      <button>
            Adicionar
               <img src="images/plus.svg" alt="">
      </button>
       </div>

       `
    }); 
}
carregarCatalogo()