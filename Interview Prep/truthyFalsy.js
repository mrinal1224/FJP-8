let a = '2'

let b = '2'


console.log(a===b) // true

//lose checking - value ke liye check krta hai not for dataType

// strict checking  - it checks for both value as well as dataType


// false, 0, -0, 0n, "", null, undefined, and NaN

let c = 10

if(c){
       console.log('This is a truty value')
}




(function () {
       if ((-100 && 100 && "0") || [] === true || 0) {
   
         console.log(1);  //#
   
         if ([] || (0 && false)) {
   
           console.log(2);  //#
         }
     
         if (Infinity && NaN && "false") {
           console.log(3);
           if ("") {
             console.log(4);
           }
         } else {
           console.log(5);  //#
           if (({} || false === "") && !(null && undefined)) {
             console.log(6);  //#
           }
         }
       } 
     })();