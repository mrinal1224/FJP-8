//callback - A function that can be passed to another
//function as an argumenet so that it can be called later is known as a callback function

function printFirstName(firstName, cb) {
  console.log(firstName);
  cb("jha");
}

// function printLastName(lastName){
//        console.log(lastName)
// }

printFirstName("Neeraj", function printLastName(lastName) {
  console.log(lastName);
});

function printHello(cb) {
  console.log("Hello");
  cb()
 
}

function printBye() {
  console.log("Bye");
}

printHello(printBye);
