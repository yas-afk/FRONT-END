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
    for (let i=0;i < 4;i++){
        document.getElementById('catalogo').innerHTML += `
         <div class="livro">
                 <img src="images/a menina.jpg" alt="">
            <h4>A menina que roubava livros</h4>
       <button>
             Adicionar
                <img src="images/plus.svg" alt="">
       </button>
        </div>

        `
    }
}
 carregarCatalogo()