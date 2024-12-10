lista_categorias = []

class Categoria {
  constructor(titulo,img,desc,marca){
    this.titulo = titulo
    this.img = img
    this.desc = desc
    this.marca = marca
  }
}
lista_categorias.push(new Categoria('Parasita','/atividade/images/filme1.png','Os membros da família pobre passam a se infiltrar em meio à família rica, com foco nas interações entre eles e consequências deste encontro.','@Filmimis'))
lista_categorias.push(new Categoria('Corra','/atividade/images/filme3.png','Chris é um jovem fotógrafo negro que está prestes a conhecer os pais de Rose, sua namorada caucasiana. Na luxuosa propriedade dos pais dela, Chris percebe que a família esconde algo muito perturbador.',' @Filmimis'))
lista_categorias.push(new Categoria('10 coisas que eu odeio em você','/atividade/images/filme2.png','A história é centrada em Bianca, uma bonita e popular estudante que vive sob a vigilância do pai que estabelece uma regra: Bianca só pode ter um namorado quando a irmã mais velha namorar. O problema é que nenhum garoto consegue chegar perto de Kat','@Filmimis'))

 

lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${categoria.img}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${categoria.titulo}</h5>
                          <p class="card-text"> ${categoria.desc} </p>
                          <p class="card-text"><small class="text-body-secondary">${categoria.marca}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
    `
  })