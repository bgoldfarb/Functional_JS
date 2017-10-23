import { map, filter, reduce, chain} from 'lodash'


var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro',       species: 'dog' },
    { name: 'Hamilton',   species: 'dog' },
    { name: 'Harold',     species: 'fish' },
    { name: 'Ursula',     species: 'cat' },
    { name: 'Jimmy',      species: 'fish' }
  ]

  var names = animals.map((option) => {
      return option.name
  })
  
  console.log(names)


  var numbers = [1,2,3,2,1,2,3,2,1,2, 4,6,5,4,3,8]

  var numbersCubed = map(numbers, function(el){
      return el*el*el;
  })

  console.log(numbersCubed)

  var evenNumbers = filter(numbers, (el) => {
        return el%2 === 0
  })

  console.log(evenNumbers)

  var employees = [
      {name: "Brian", salary: 90000},
      {name: "Tuck", salary: 60000},
      {name: "Mary", salary: 100000}
  ]

  var notDueForRaise = filter(employees, function(element){
        return element.salary >= 90000
  })

console.log(notDueForRaise)

//Reduce

var shoppingList = [
    {name : "Eggs", price: 4.99},
    {name: "Milk", price: 3.00},
    {name: "Beer", price : 8.99},
    {name: "Turkey", price: 4.50}
]

var totalPrice = reduce(shoppingList, function(acc, el){
    return acc + el.price
}, 0)

console.log(totalPrice)

var employees = [
    {name: "John", salary: 50000, age: 21, gender: "M"},
    {name: "Brian", salary: 45444, age: 22, gender: "M"},
    {name: "Kyle", salary: 6000, age: 24, gender: "M"},
    {name: "Sara", salary: 90000, age: 30, gender: "F"},
    {name: "Sherry", salary: 102000, age: 31, gender: "F"},
    {name: "Bob", salary: 232222, age: 24, gender: "M"},
    {name: "Jenna", salary: 50000, age: 23, gender: "F"}
]

var males = filter(employees, function(employees){
    return employees.gender === "M"
})
var maleAges = map(males, function(male){
    return male.age
})
var maleAgeTotal = reduce(maleAges, function(acc, age){

    return acc + age

})

var maleAgeAverage = maleAgeTotal/males.length
console.log(maleAgeAverage)

var femaleAgeTotal = chain(employees)
                        .filter((females) => females.gender === "F")
                        .map((females) => females.age)
                        .reduce(function(acc, age){
                            return acc + age;
                        })
                        .value()

 var females = filter(employees, (female) => female.gender === "F")
                        

var femaleAgeAverage = femaleAgeTotal/females.length;
console.log(femaleAgeAverage)