const receitas = {
    'Salgado' :[

        {
            'nome' : 'empada',
             'receitas' : 'Para fazer a empada de frango, cozinhe o frango com temperos a gosto, desfie e reserve. Prepare um refogado com cebola, alho, tomate e azeitonas, misture o frango desfiado e adicione um pouco de caldo de galinha. Faça uma massa com farinha, manteiga, ovo, sal e água até ficar homogênea. Abra a massa e forre formas de empada, recheie com o frango e cubra com mais massa. Asse em forno preaquecido a 180°C por cerca de 30 minutos, até dourar.'
        }

    ],

    'Doce' :[
        {
        
            'nome' : 'brigadeiro',
              'receitas' : 'Uma receita simples de brigadeiro: em uma panela, coloque uma lata de leite condensado, uma colher de sopa de manteiga e 7 colheres de sopa de achocolatado em pó. Cozinhe em fogo médio, mexendo sempre, até a mistura desgrudar do fundo da panela. Deixe esfriar um pouco, enrole em bolinhas e passe no granulado. Sirva e aproveite!'
        }
    ],

    'Sucos': [
       {
        'nome' : 'Couve com Limão',
        'receitas' : 'Para fazer suco de couve com limão, coloque no liquidificador 2 folhas de couve lavadas e sem talo, o suco de 1 limão, 1 copo de água gelada e, se preferir, 1 colher de chá de mel ou adoçante a gosto. Bata bem até ficar homogêneo. Se preferir, coe e sirva gelado.'
        
    }
       
    ]

}



    const resultado = listas.receitas.map((elemento) => {
        document.querySelector('body').innerHTML += `
        <h3> ${elemento.nome} </h3>
        `

   

})
