function testes(){
     // enquanto a condicao faca
     // para de tanto ate tanto faca
     contador = 0

           //  while(contador < 3){
        //  alert(' que maneiro ' FIZ ${contador+1} vezes ') 
     //   contador++ 
  // }
//    }
for(var i = 0;1 < 3;i++){
     alert(' que maneiro ` FIZ ${i+1} vezes')
}
}

//testes()


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