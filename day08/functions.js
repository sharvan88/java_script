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

