//Gives us data sometime in the future

/*let promise = new Promise(function(resolve, reject){
   setTimeout(function(){
        reject("Success!")
   }, 1500)
})

//Then, once promise is resolved do this
promise.then(function(value){
    console.log(value)
}, function(error){
    console.log(error)
})*/

//Chaining Promises

/*
function waitASecond(seconds){
    return new Promise(function(resolve, reject){
        if(seconds > 2){
            reject("Rejected")
        }
        else{
            setTimeout(function(){
                seconds++
                resolve(seconds)
            }, 1000)
        }
    })
}

waitASecond(2)
    .then(waitASecond)
    .then(function(seconds){
        console.log(seconds)
    })
    .catch(function(error){
        console.log(error)
    })

//Promise.all and Promise.race
race waits for first promise to finish, all waits for all to finsish
*/
let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("resolved!")
    }, 1000)
})

let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject('resolved')
    }, 2000)
})

Promise.all([promise1, promise2])
    .then(function(success){
        console.log(success)
    })
    .catch(function(error){
        console.log(error)
    })

