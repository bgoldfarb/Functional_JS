import curry from 'lodash/curry';


let arrayVar = ["apples", "bannanas", "oranges"]
var dog = 
    {name: "Fido",
    weight: 45,
    loves: "walks",
    bark : () => {
        console.log("Bark!")
    }
    }

console.log(dog.name)

var loseWeight = function(weight){
    weight = weight - 10
    return weight;
}

dog.weight = loseWeight(dog.weight)
console.log(dog.weight)

curry(loseWeight)

const displayLogger = (nums) => {
        console.log(...nums)
}
displayLogger(arrayVar)


let car = {
    started: false,
    start: () => {
        this.started = true;
    },
    stop: () => {
        this.started = false;
    }

}

console.log(car.started)
car.start
console.log(car.started)


var person = {
    "firstname" : "Brian",
    "lastname" : "Goldfarb",
    getFullName: function(){
        return this.firstname + " " + this.lastname
    }
}

var fullName = person.getFullName()
console.log(fullName)