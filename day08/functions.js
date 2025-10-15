/*What is a Function?

A function is a block of code designed to perform a specific task.
It runs only when it is called (invoked). 

Why use Functions?

Reusability

Cleaner code

Easy to debug

Makes programs modular

*/

//  Function syntax

/*
function functionName(parameters) {
  // code to be executed
  return result; // optional
}
functionname() ------> we have call our function

important notes----->
functionName → Name of the function (should be meaningful).

parameters → Values passed into the function (optional).

return → Sends output back (optional).
 */

// Types of function
// no 1 Noemal function

/*
function greet() {
  console.log("Hello World");
}
greet();


*/

// No 2 function with parameters
/*
function multiply(x, y) {
  return x * y;
}
console.log(multiply(4, 5)); output=== 20

*/

// No 3 Function Expression (Anonymous Function)
/*
const square = function(num) {
  return num * num;
};
console.log(square(6)); // 36

*/

// NO 4 Arrow Function (ES6)
/*
const square = (num) => num * num;
console.log(square(6)); // 36

*/

//  No 5 Default Parameters
/*
function greet(name = "Guest") {
  return "Hello, " + name;
}
console.log(greet()); // Hello, Guest

*/

//   No 6= <--------Immediately Invoked Function Expression (IIFE)----------->
// Runs as soon as it’s defined.

// Used to avoid polluting the global scope.

// (function() {
//   console.log("IIFE runs immediately!");
// })();

//   No-7=  <-----------callback funcctions------------->
/*
A callback function is a function passed as an argument to another function,
 which is invoked (called back) later inside that function.

This is a fundamental concept in asynchronous programming, event handling, and functional 
programming in JavaScript.

*/
// function greet(name) {
//   console.log("Hello " + name);
// }

// function processUser(callback) {
//   let user = "Alice";
//   callback(user);
// }

// processUser(greet);


// NO-8= <--------🔁 Higher-Order Functions (HOFs) in JavaScript--------->
/*
Takes one or more functions as arguments

Returns a function as its result


High order functions accept another functions in arguments
*/
// function greet(name) {
//   return "Hello, " + name;
// }

// function processUser(name, callback) {
//   console.log(callback(name));
// }

// processUser("Alice", greet); // Output: Hello, Alice
/*
| Function    | Description                                             |
| ----------- | ------------------------------------------------------- |
| `forEach()` | Executes a function on each array element               |
| `map()`     | Creates a new array by transforming elements            |
| `filter()`  | Returns a new array with elements that pass a condition |
| `reduce()`  | Reduces array to a single value                         |
| `sort()`    | Sorts array based on a comparator function              |

*/



// <----------🔸 forEach() – Iteration--------->


// [1, 2, 3].forEach((num) => {
//   console.log(num);
// });



// <----------🔸 map() – Transformation------->

// const nums = [1, 2, 3];
// const squares = nums.map(x => x * x); // [1, 4, 9]

// <---------🔸 filter() – Filtering values------>


// const nums = [1, 2, 3, 4, 5];
// const evens = nums.filter(x => x % 2 === 0); // [2, 4]


// <----------🔸 reduce() – Accumulating values-------->

// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((total, current) => total + current, 0); // 10


