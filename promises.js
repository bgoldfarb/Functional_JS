//Promise is an object representing the eventual completion or failure of an asynchronous operation
//Promise is a returned object to which you attach callbacks

let myPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("Success!")
    }, 250)
});

myPromise.then((successMessage) => {
    console.log("YAY " + successMessage)
});

