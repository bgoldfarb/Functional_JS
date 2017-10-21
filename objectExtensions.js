
import curry from 'lodash/curry';
let Addres = {
    Street: 'Main',
    Number: 100,
    Apartment:{
        Floor: 3,
        Number: 301
    }
}

console.log(Addres.Apartment.Floor) 


let a = 'Hello World'
a = 2

function b(){
    console.log('Called b!')
}

b()
console.log(a)


var person = {
    firstname: "Brian",
    lastName: "Goldfarb"
}

person.profession = "Developer"
person["firstname"] = "brian"
person["lastname"] = "goldfarb"
console.log(person["firstname"])

function greet(person){
    console.log("hi "+ person.firstname + person.profession)
}
greet(person)
greet({firstname: "Colin", lastname:"Cool"})

function greet(){
    console.log('hi')
}
//Adding property to a function
greet.language = 'english'
console.log(greet.language)