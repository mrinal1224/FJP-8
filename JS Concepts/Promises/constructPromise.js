let myPromise = new Promise(function(resolve , reject){
       const a = 4
       const b = 3

       if(a===b){
              resolve('Yes Both are Equal')
       }

       else{
              reject('They are not Equal')
       }
})


myPromise.then(function(result){
       console.log(result)
})


myPromise.catch(function(result){
       console.log(result)
})