fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`).then((response) =>
{
  return response.json()
}).then((data) => {
    console.log(data)
    listaDrinks = data.drinks
   
    array.forEach(element => {
        
    });
    document.querySelector('#resultados').innerHTML += `
    <img src="${drinks.strDrinksThumb}"
    <h3>$(data.strDrinks)</h3>
    `
})
