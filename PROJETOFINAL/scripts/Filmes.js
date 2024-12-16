lista_categorias = []

class Categoria {
  constructor(titulo,img,desc,marca){
    this.titulo = titulo
    this.img = img
    this.desc = desc
    this.marca = marca
  }
}
lista_categorias.push(new Categoria('Viva','images/viva 2.png','20 de junho de 2024','@Disney'))
lista_categorias.push(new Categoria('A Princesa e o Sapo','images/tiana 1.png','20 de junho de 2024','@Disney'))
lista_categorias.push(new Categoria('Tinker Bell e o Monstro da Terra do Nunca ','images/tinker 1.png','28 de novembro de 2024','@Disney'))
lista_categorias.push(new Categoria('Raya e o Dragão','images/raya 1.png','19 de dezembro de 2024','@Disney'))
lista_categorias.push(new Categoria('Pantera Negra Wakanda para Sempre','images/pantera 1.png','19 de dezembro de 2024','@Disney'))
lista_categorias.push(new Categoria('O Quebra Nozes e o Os Quatros Reinos','images/iPad Pro quebra- 1.png','19 de dezembro de 2024','@Disney'))


lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML += `
    <div class="card" style="width:550px">
      <img src="${categoria.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${categoria.titulo}</h5>
        <p class="card-text">${categoria.desc}</p>
      </div>
    </div>
    `
})
