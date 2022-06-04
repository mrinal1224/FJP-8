// Filter----->
// * Filter returns a new array containing array elements that matches a specified condition
// if the condition stands true it will filter out those elements and will presemt them in a new Array


let arr = [2 , 4, 5, ,7 ,8 , 10 , 13]


let evenNoArr = arr.filter(function(n){
       return n%2==0
})

console.log(evenNoArr)


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];


let depositedAmtArr = transactions.filter(function(n){
      return  n>0
})

console.log(depositedAmtArr)


