// OBJECT ENTRIES
const filmes = {
    'Nome' : 'Sociedade da Neve',
    'Des'  : 'Lorem',
    'Genêro' : 'Drama'
}

console.log(filmes)
console.log(filmes.Nome)
// keys
const filmesKey = Object.keys(filmes)
console.log(filmesKey)

// entries - retorna e listas os valores (valor)
const filmesEntries = Object.entries(filmes)
console.log(filmesEntries)

// map
const nomesFilmes = ['Ilha do medo','Bruxa de Blair',
    'Interestelar','Velozes e Furiosos']

const listFilmes = {
 'filmes' :  [

        {

        'nome' : 'Ilha do Medo',
        'Desc' : 'Lorem'
        
        },
        {

        'nome' : 'Bruxa de Blair',
        'Desc' : 'Lorem'
      
        }
    
    ],

 'jogos' :  [

        {

        'nome' : 'Roblox',
        'Desc' : 'Lorem'
        
        },
        {

        'nome' : 'The Last of Us',
        'Desc' : 'Lorem'
      
        }

    ]

}

const resultado = listas.jogos.map((elemento) => {
   document.querySelector('body').innerHTML += `
   <h3> ${elemento.nome} </h3>
   `
})