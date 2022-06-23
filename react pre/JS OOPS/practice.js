//1

// // const call = {
// //        caller: "mom", 
// //        says: function() {
// //          console.log(`Hey, ${this.caller} just called.`);
// //        }
// //      };
     
// // call.says();

//2
// function says(){
//        console.log(`Hey, ${this.caller} just called.`);
// }

// says()


//3

// const call = {
//        caller: "mom", 
//        says: function() {
//          console.log(`Hey, ${this.caller} just called.`);
//        }
//      };
     
//      let newCall = call.says;
     
//      newCall();


 // 4
//      function anotherCaller() {
//        console.log(`${this.caller} called, too!`);
//      }
     
//      const call = {
//        caller: "mom", 
//        anotherCaller: anotherCaller,
//        says: function() {
//          console.log(`Hey, ${this.caller} just called.`);
//        }
//      };
     
//      let newCall = call.anotherCaller;
     
//      newCall();

