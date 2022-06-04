// sum of all the numbers from 1 to 10

 let arr = [1 , 2, 3, 4, 5 , 6 ,7 ,8 , 9 , 10]

// let sum = 0
// for(let i=0 ; i<arr.length ; i++){
//      sum = sum + arr[i]
// }

// console.log(sum)


let sumOfArray = arr.reduce(function(acc , value){
       let uptadedSum = acc + value
       return uptadedSum
} , 0)


let productOfArray = arr.reduce(function(acc , value){
       let uptadedSum = acc*value
       return uptadedSum
} , 1)


console.log(sumOfArray)
console.log(productOfArray)
