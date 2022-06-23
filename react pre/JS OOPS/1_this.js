'use strict'
//1
console.log(this)



//2 this inside a function


// function fn(){
//        console.log(this)
// }

// fn()


// this inside an object

// let obj = {
//        name : 'Adam',
//        age : 20,

//        fn : function(){
//               console.log(this)
//        }
// }

// obj.fn()



//4 function inside a function


let obj2 = {
       name : 'Adam',
       age : 20,

       fn2 : function(){
              function gn(){
                     console.log(this)
              }
              gn()
       }
}

obj2.fn2()