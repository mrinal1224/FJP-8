// function greet() {
//   let name = "Aman";

//   function displayName() {
//     console.log("Hi" + " " + name);
//     let age = 20;

//     function showAge() {
//       console.log(name + " " + age);
//     }

//     return showAge;
//   }

//   return displayName;
// }

// let g1 = greet();

// console.log(g1());

// let g2 = g1()

// g2()


// Questions ->


1
function createIncrement() {
       let count = 0;
       function increment() { 
         count++;
         console.log(count)
       }
       let message = `Count is ${count}`;
       function log() {
         console.log(message);
       }
       
       return [increment, log];
     }
     const [increment, log] = createIncrement();
     increment(); 
     increment(); 
     increment(); 
     log(); // What is logged?



//2


function createStack() {
       const items = []
       return {
         
         push(item) {
           items.push(item);
         },
         pop() {
           return items.pop();
         }
       };
     }
     const stack = createStack();
     stack.push(10)

     stack.push(5);
     
     console.log(stack.pop()); // => 5





  











