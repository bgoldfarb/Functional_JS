//By value (primitives)

var a = 3;
var b;

b = a;
a = 2;

console.log(a)
console.log(b) 

//by reference (all object (including functions))

var  c = {greeting: 'hi'};
var d;
d = c;

c.greeting = "hello"

console.log(c)
console.log(d)

function changeGreeting(obj){
    obj.greeting = 'Hola'
}

changeGreeting(d)
console.log(c)
console.log(d)