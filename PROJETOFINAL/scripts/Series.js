lista_categorias = []

class Categoria {
  constructor(titulo,img,desc,marca){
    this.titulo = titulo
    this.img = img
    this.desc = desc
    this.marca = marca
  }
}
lista_categorias.push(new Categoria('Gravity Falls: Um Verão de Mistérios ','images/iPad Pro 20.png','15 de junho de 2012','@Disney'))

lista_categorias.push(new Categoria('The strain','images/iPad Pro 21.png','13 de julho de 2014','@Disney'))

lista_categorias.push(new Categoria('Herdeiros da Noite ','images/iPad Pro 22.png','25 de outubro de 2019','@Disney'))

lista_categorias.push(new Categoria('Moon knight','images/iPad Pro 23.png','30 de março de 2022','@Disney'))

lista_categorias.push(new Categoria('Agatha desde Sempre','images/iPad Pro 24.png','18 de setembro de 2024','@Disney'))

lista_categorias.push(new Categoria('Falcão e o Soldado Invernal','images/iPad Pro 25.png','19 de março de 2021','@Disney'))

lista_categorias.push(new Categoria('Em busca de Vingança','images/iPad Pro 26.png','29 de novembro de 2022','@Disney'))

lista_categorias.push(new Categoria('The Walking Dead ','images/iPad Pro 27.png','31 de outubro de 2010','@Disney'))

lista_categorias.push(new Categoria('Agente K.C','images/iPad Pro 28.png','18 de janeiro de 2015','@Disney'))

lista_categorias.push(new Categoria('Liv e Maddie','images/iPad Pro 29.png','19 de julho de 2013','@Disney'))

lista_categorias.push(new Categoria('A Guarda do Leão','images/iPad Pro 30.png','215 de janeiro de 2016','@Disney'))

lista_categorias.push(new Categoria('Princesinha Sofia','images/iPad Pro 31.png','18 de novembro de 2012','@Disney'))

lista_categorias.push(new Categoria('Doutora Brinquedos','images/iPad Pro 32.png','23 de março de 2012','@Disney'))




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
