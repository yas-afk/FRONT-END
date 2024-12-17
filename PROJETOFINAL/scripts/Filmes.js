lista_categorias = []

class Categoria {
  constructor(titulo,img,desc,marca){
    this.titulo = titulo
    this.img = img
    this.desc = desc
    this.marca = marca
  }
}
lista_categorias.push(new Categoria('Viva – A Vida é uma Festa','images/iPad Pro 18viva.png','4 de janeiro de 2018','@Disney'))

lista_categorias.push(new Categoria('A Princesa e o Sapo','images/tiana 1.png','11 de dezembro de 2009','@Disney'))

lista_categorias.push(new Categoria('Tinker Bell e o Monstro da Terra do Nunca ','images/tinker 1.png','26 de fevereiro de 2015','@Disney'))

lista_categorias.push(new Categoria('Raya e o  Último Dragão','images/iPad Pro 19raya.png','4 de março de 2021','@Disney'))

lista_categorias.push(new Categoria('Pantera Negra Wakanda para Sempre','images/pantera 1.png','10 de novembro de 2022','@Disney'))

lista_categorias.push(new Categoria('O Quebra-Nozes e o Os Quatros Reinos','images/iPad Pro quebra- 1.png','1 de novembro de 2018','@Disney'))

lista_categorias.push(new Categoria('O Estranho mundo de Jack','images/iPad Pro jack.png','24 de dezembro de 1993','@Disney'))

lista_categorias.push(new Categoria('Zootopia','images/iPad Pro 17.png','17 de março de 2016','@Disney'))

lista_categorias.push(new Categoria('Procurando Nemo','images/iPad Pro 15.png','4 de julho de 2003','@Disney'))

lista_categorias.push(new Categoria('A dama e o vagabundo','images/iPad Pro 14.png','24 de junho de 1955','@Disney'))

lista_categorias.push(new Categoria('Encanto','images/iPad Pro 13.png','25 de novembro de 2021','@Disney'))

lista_categorias.push(new Categoria('Pinoquio','images/iPad Pro 12.png','7 de setembro de 2022','@Disney'))

lista_categorias.push(new Categoria('Valente','images/iPad Pro 16.png','20 de julho de 2012','@Disney'))




lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML += `
    <div class="card" style="width:300px">
      <img src="${categoria.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${categoria.titulo}</h5>
        <p class="card-text">${categoria.desc}</p>
      </div>
    </div>
    `
})
