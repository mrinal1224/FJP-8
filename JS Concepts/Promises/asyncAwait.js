function placeOrder(drink){
       return new Promise(function(resolve , reject){
              if(drink==='coffee'){
                     resolve('Order for coffee Placed')
              }
              else{
                     reject('Order cannot be placed')
              }
       })
}



function processOrder(order){
       return new Promise(function(resolve){
              resolve(`${order} and Served`)
       })
}



placeOrder('coffee').then(function(orderStatus){
       console.log(orderStatus)
       let orderIsProcessed = processOrder(orderStatus)
       return orderIsProcessed
}).then(function(servedOrder){
      console.log(servedOrder)
}).catch(function(orderStatus){
       console.log(orderStatus)
})