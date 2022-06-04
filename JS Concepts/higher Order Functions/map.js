// Higher order functions are functions that operate on other functions,
// either by taking them as arguments or by returning them.

// In simple words,
// A Higher-Order function is a function that receives a function as an argument
// or returns the function as output.

// Map

//Map is itslef a function.
//map takes a callback function as an arg
//map will call the callback functions as many times as the elements in the array
//map will process every value and will apply the instruction that is inside the callback function
//map returns a new array

let arr = [2, 5, 9, 10, 11];

let squaredArr = arr.map(function (n) {
  return n * 3;
});

console.log(squaredArr);

let nameArr = ["Aniket Raj", "Nayan Jha", "Prashant Pandey"];

// use map method and separted every element according to firstName and lastName
