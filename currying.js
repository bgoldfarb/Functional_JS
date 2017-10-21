import has from 'lodash/has';
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


function volume( l, w, h ) {  
    return l * w * h;
  }
  
  var curried = curry( volume );
  
  console.log(curried( 1 )( 2 )( 3 )) // 6 
