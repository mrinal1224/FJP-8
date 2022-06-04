// find: Conditon Check: To get true or false based on a condition 
//it will return true if every element satisfies the condition -
const transactions = [1000, 3000, 4000, 2000, 898, 3800,4500];


let anyDepsoit = transactions.every(function(n){
       return n>0
})

console.log(anyDepsoit)