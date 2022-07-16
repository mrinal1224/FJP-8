//1


// const promise = new Promise((resolve, reject) => {
//        reject(Error('Some Error Occurred'));
//      })
//      .catch(error => console.log(error)) // some error occured
//      .then(error => console.log(error));

// Catch implicitly return a promise and that promise in this case is empty thus it returns undefined






//2
// Promise.resolve('Success!')
//   .then(data => {
//     return data.toUpperCase()
//   })
//   .then(data => {
//     console.log(data)
//   })



 //3
  Promise.resolve('Success!')
  .then(data => {
    return data.toUpperCase()
  })
  .then(data => {
    console.log(data) // SUCCESSS!
    return data
  })
  .then(function(data){
       console.log(data)
  }) // SUCCESS!

