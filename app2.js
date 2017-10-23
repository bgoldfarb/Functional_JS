
import  {map, filter, reduce}  from 'lodash'

var arr1 = [1,2,3,4,5,5,4,3,2,1]

console.log(arr1)

var arr2 = []

for ( var i = 0; i < arr1.length; i++){
    arr2.push(arr1[i] * 2)
}

console.log("This is without a functional approach...looping", arr2)

function mapForEach(arr, fn){
    var newArray = []
    for ( var i = 0; i < arr.length; i++){
        newArray.push(
            fn(arr[i])
        )
    }
    return newArray;
}

var arr3 = mapForEach(arr1, function(item){
            return item * 2;
})

console.log("Now using a functional approach", arr3)

var boolArr = mapForEach(arr1, function(item){
    return item > 2;
})

console.log("Now using a functional approach with booleans", boolArr)


var checkLimitArray = function(limiter, item){
    return item > limiter;
}

var greaterThan4Array = mapForEach(arr1, checkLimitArray.bind(this, 4));
console.log(greaterThan4Array)

var checkPastLimitSimolified = function (limiter){
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter)
}



var arr5 = mapForEach(arr1, checkPastLimitSimolified(1));

console.log(arr5)




var arr6 = map(arr1, (item) => item * 2)
console.log("Using Lodash Map", arr6)

var arr7 = filter([1,2,3,2,1,2,3,4,3,2,1], (item) => item %2 === 0)
console.log(arr7)


var arr8 = reduce([1,2,1,2,3,4,3,2,1,2,3,3,3,3,2,1,], (sum, n) =>  sum + n, 0)

var arr9 = reduce({'a': 3, 'b' : 2, 'c':4 }, (result, value, key) => {
    (result[value] || (result[value] = [])).push(key)
    return result;
}, {})

console.log(arr9)

//Function for reduce recieves 4 args, accumulator, currentValue, currentIndex, array