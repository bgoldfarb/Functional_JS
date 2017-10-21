//Annonymous functions passed to avariable triple
var triple = function(x){
    return x*3;

}

var waffle = triple;
console.log(waffle(10));

var animals = [
{name: 'Caro', species: 'dog'},
{name: 'Jim', species: 'cat'},
{name: 'Lugia', species: 'dragon'},
{name: 'James', species: 'fish'},
{name: 'Doug', species: 'dog'},
{name: 'Beans', species: 'pig'}

]

//Old Way
var dogs = []
for(var i = 0; i < animals.length; i++){
    if(animals[i].species === 'dog'){
        dogs.push(animals[i])
    }
}
//Using Higher Order Functions, Filter, and Reject
var isDog = function(animal){
    return animal.species === 'dogs'
}
var dogs = animals.filter(isDog)

//Old Way
var names = []
for(var i =0; i< animals.length; i++){
    names.push(animals[i].name)
}
//console.log("Names: " + names)

//New way with arrow function!!
var names = animals.map((animalName) => animalName.name)
console.log(names)

//Reduce Higher Order Function

var orders = [
    {amount: 250},
    {amount: 321},
    {amount: 11},
    {amount: 252220}
]

var totalAmount = 0;
for(var i = 0; i < orders.length; i++){
    totalAmount += orders[i].amount
}

var totalAmount = orders.reduce(function(sum, order){
    console.log("Hello", sum, order)
    return sum + order.amount
}, 0)

//Advanced Reduce

const fs = require('fs');

var output = fs.readFileSync('data.txt', 'utf8')
.trim()
.split('\n')
.map(line => line.split('\t'))

console.log(output)