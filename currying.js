import has from 'lodash/has';
import curry from 'lodash/curry';

let dragon = (name, size, element) =>
    name + 'is a ' + 
    size + ' dragon that breathes '+
    element + '!'

console.log(dragon("Brian", "large", "ice"))

let arrowDragon = name =>
                    size =>
                        element =>
                            name + ' is a ' +
                            size + ' dragon that breathes ' +
                            element + '!'

console.log(arrowDragon("Brian")("small")("ice"));

var brianDragon = arrowDragon("Brian")

console.log(brianDragon("ice")("fire"))





var add = (a, b) => (a + b);

var add = (a) => (b) => (c) => a + b + c;



console.log(add(1)(2)(3))

var abc = function(a,b,c){
    return [a,b,c];
}

var curriedAbc = curry(abc);

console.log(curriedAbc(1)(2)(3))
console.log(curriedAbc(1,2,3))