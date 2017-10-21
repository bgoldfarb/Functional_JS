function getAnimals(fetch, id){
    return fetch('http://api.animalfarmgame.com/animals/' + id)
    .then(response => response.json())
    .then(data => data.results[0])
}



 describe('getAnimals', () =>{
     it('works in the basic case', () => {
     })
 })