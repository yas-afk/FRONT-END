// var fruta1 = 'Melancia'
// var fruta2 = 'Maracujá'
// var fruta3 = 'Manga'
// var fruta4 = 'Morango'
// var fruta5 = 'Mexerica'

fruta = ['Melancia','Maracuja','Manga','Morango','Mexerica']


teste = Array()
teste[0] = 'Olha'
teste[1] = 'que'
teste[2] = 'top'

console.log(fruta)
console.log(fruta[1])

// PUSH 'EMPURRAR' - ADICIONAR NA LISTA
fruta.push('Maçã')
console.log(fruta)

// UNSHIFT - ADICIONAR NO COMEÇO DA LISTA
fruta.unshift('Mangaba')
console.log(fruta)

// POP - REMOVER O PRIMEIRO
fruta.pop()
console.log(fruta)

// SHIFT - REMOVER O PRIMEIRO
fruta.shift()
console.log(fruta)

// SPLICE - REMOVE,ADICIONA E ATUALIZA
// ONDE?? (INDICE), QUANTOS EU VOU DELETAR?
// SE NENHUM O QUE VOU ADICIONAR
fruta.splice(2,3)
fruta.splice(2,0,'Manga')
fruta.splice(1,1,'Morango')
console.log(fruta)

 fruta.push('Mangaba')

 for(var i =0;i < fruta.lenght;i++){
     document.getElementById('resposta').
     innerHTML += `
     ${fruta[i]}
     `
 }

fruta.forEach(cadaFruta => {
    document.getElementById('resposta').innerHTML += `
    ${cadaFruta} 
    `
});