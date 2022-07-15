const fs = require('fs')


fs.readFile('f1.txt' , cb)

function cb(err , data){
    if(err){
       console.log(err)
    }
    console.log('File Data->  ' + data)
}



let readFilePromise = fs.promises.readFile('f2.txt') // pending

console.log(readFilePromise)


// Fulfilled State
readFilePromise.then(function(data){
       console.log('This is file Data-> ' + data)
})

// Rejected state
readFilePromise.catch(function(err){
       console.log(err)
})



