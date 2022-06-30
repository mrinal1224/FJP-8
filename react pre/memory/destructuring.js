let arr = ['hi' , 'I' , 'am' , 'Mrinal']

let elem = arr[1]


//Destructuring

let [a ,b , c, d , e='bye'] = arr


console.log(a , b ,c ,d ,e)



//Objects Destructuring-


let obj ={
       name : 'Adam',
       state : 'New York',
       phone : 12345676
}


let {state , name :firstName , phone} = obj

console.log(firstName , state , phone)


let obj2 = {
       name: "Adam",
       address: {
         country: "USA",
         state: {
           stateName: "New York",
           pincode: 123456,
         },
       },
     };

let {name} = obj2


let {address : {country :cd}} = obj2


let {address :{state : {stateName}}} = obj2
console.log(cd)

console.log(stateName)





